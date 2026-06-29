const Blog = require("../models/Blog");
const BlogComment = require("../models/BlogComment");
const { slugify, uniqueSlug } = require("../utils/slug");

// Fields returned for list views (omit heavy `content`)
const LIST_FIELDS =
  "title slug excerpt featuredImage featuredImageAlt category categorySlug tags author status visibility isFeatured publishedAt views readingTime createdAt updatedAt";

// Build the "is this post live right now" filter for public requests
const publicFilter = () => ({
  status: "published",
  visibility: "public",
  $or: [{ publishedAt: { $lte: new Date() } }, { publishedAt: null }],
});

// ── PUBLIC: list published posts (paginated + filterable) ───────────────────
// @route GET /api/blogs
const getBlogs = async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query.limit) || 6));
    const { category, tag, search, featured, author } = req.query;

    const filter = publicFilter();
    if (category) filter.categorySlug = slugify(category);
    if (tag) filter.tags = { $in: [tag, slugify(tag)] };
    if (author) filter["author.slug"] = slugify(author);
    if (featured === "true") filter.isFeatured = true;
    if (search) {
      const rx = new RegExp(search.trim(), "i");
      filter.$and = [{ $or: [{ title: rx }, { excerpt: rx }, { tags: rx }, { category: rx }] }];
    }

    const [items, total] = await Promise.all([
      Blog.find(filter)
        .select(LIST_FIELDS)
        .sort({ isFeatured: -1, publishedAt: -1, createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      Blog.countDocuments(filter),
    ]);

    res.json({
      success: true,
      data: items,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / limit)),
        hasMore: page * limit < total,
      },
    });
  } catch (err) {
    next(err);
  }
};

// ── PUBLIC: single post by slug (+ related + prev/next + comment count) ──────
// @route GET /api/blogs/slug/:slug
const getBlogBySlug = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug }).lean();
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog post not found" });
    }

    // Only expose drafts/private to admins (preview=true with a valid token handled in route)
    const isAdmin = req.admin;
    const isLive =
      blog.status === "published" &&
      blog.visibility === "public" &&
      (!blog.publishedAt || new Date(blog.publishedAt) <= new Date());

    if (!isLive && !isAdmin) {
      return res.status(404).json({ success: false, message: "Blog post not found" });
    }

    // Related posts (same category, excluding current)
    const related = await Blog.find({
      ...publicFilter(),
      _id: { $ne: blog._id },
      categorySlug: blog.categorySlug,
    })
      .select(LIST_FIELDS)
      .sort({ publishedAt: -1 })
      .limit(3)
      .lean();

    // Previous / next by publish date
    const [prev, next] = await Promise.all([
      Blog.findOne({ ...publicFilter(), publishedAt: { $lt: blog.publishedAt || blog.createdAt } })
        .select("title slug")
        .sort({ publishedAt: -1 })
        .lean(),
      Blog.findOne({ ...publicFilter(), publishedAt: { $gt: blog.publishedAt || blog.createdAt } })
        .select("title slug")
        .sort({ publishedAt: 1 })
        .lean(),
    ]);

    const commentCount = await BlogComment.countDocuments({
      blog: blog._id,
      status: "approved",
    });

    res.json({ success: true, data: blog, related, prev, next, commentCount });
  } catch (err) {
    next(err);
  }
};

// ── PUBLIC: increment view count (separate so SSR metadata doesn't inflate) ──
// @route POST /api/blogs/slug/:slug/view
const incrementViews = async (req, res, next) => {
  try {
    await Blog.updateOne({ slug: req.params.slug }, { $inc: { views: 1 } });
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};

// ── PUBLIC: sidebar data (categories w/ counts, popular tags, recent posts) ──
// @route GET /api/blogs/meta/sidebar
const getSidebarMeta = async (req, res, next) => {
  try {
    const base = publicFilter();

    const [categories, tagsAgg, recent, featured] = await Promise.all([
      Blog.aggregate([
        { $match: base },
        {
          $group: {
            _id: "$categorySlug",
            name: { $first: "$category" },
            count: { $sum: 1 },
          },
        },
        { $sort: { count: -1 } },
        { $project: { _id: 0, slug: "$_id", name: 1, count: 1 } },
      ]),
      Blog.aggregate([
        { $match: base },
        { $unwind: "$tags" },
        { $group: { _id: "$tags", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 20 },
        { $project: { _id: 0, name: "$_id", count: 1 } },
      ]),
      Blog.find(base)
        .select("title slug featuredImage publishedAt readingTime")
        .sort({ publishedAt: -1 })
        .limit(4)
        .lean(),
      Blog.find({ ...base, isFeatured: true })
        .select("title slug featuredImage publishedAt")
        .sort({ publishedAt: -1 })
        .limit(3)
        .lean(),
    ]);

    res.json({ success: true, categories, tags: tagsAgg, recent, featured });
  } catch (err) {
    next(err);
  }
};

// ── ADMIN: list all posts (any status) with search/filter/pagination ────────
// @route GET /api/blogs/admin/all
const getAllBlogsAdmin = async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit) || 12));
    const { status, category, search } = req.query;

    const filter = {};
    if (status && status !== "all") filter.status = status;
    if (category && category !== "all") filter.categorySlug = slugify(category);
    if (search) {
      const rx = new RegExp(search.trim(), "i");
      filter.$or = [{ title: rx }, { excerpt: rx }, { "author.name": rx }, { category: rx }];
    }

    const [items, total, counts] = await Promise.all([
      Blog.find(filter)
        .select(LIST_FIELDS)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      Blog.countDocuments(filter),
      Blog.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }]),
    ]);

    const statusCounts = { all: 0, published: 0, draft: 0, scheduled: 0 };
    counts.forEach((c) => {
      statusCounts[c._id] = c.count;
      statusCounts.all += c.count;
    });

    res.json({
      success: true,
      data: items,
      statusCounts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.max(1, Math.ceil(total / limit)),
      },
    });
  } catch (err) {
    next(err);
  }
};

// ── ADMIN: single post by id (full, any status) ─────────────────────────────
// @route GET /api/blogs/admin/:id
const getBlogByIdAdmin = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog post not found" });
    res.json({ success: true, data: blog });
  } catch (err) {
    next(err);
  }
};

// ── ADMIN: create ───────────────────────────────────────────────────────────
// @route POST /api/blogs
const createBlog = async (req, res, next) => {
  try {
    const body = { ...req.body };
    body.slug = await uniqueSlug(Blog, body.slug || body.title);
    if (body.category && !body.categorySlug) body.categorySlug = slugify(body.category);
    if (body.author && body.author.name && !body.author.slug) {
      body.author.slug = slugify(body.author.name);
    }
    const blog = await Blog.create(body);
    res.status(201).json({ success: true, data: blog });
  } catch (err) {
    next(err);
  }
};

// ── ADMIN: update ───────────────────────────────────────────────────────────
// @route PUT /api/blogs/:id
const updateBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog post not found" });

    const body = { ...req.body };
    if (body.slug && body.slug !== blog.slug) {
      body.slug = await uniqueSlug(Blog, body.slug, blog._id);
    }
    if (body.category) body.categorySlug = slugify(body.category);
    if (body.author && body.author.name && !body.author.slug) {
      body.author.slug = slugify(body.author.name);
    }

    Object.assign(blog, body);
    await blog.save(); // runs pre-save hooks (reading time, publishedAt)

    res.json({ success: true, data: blog });
  } catch (err) {
    next(err);
  }
};

// ── ADMIN: delete (also removes its comments) ───────────────────────────────
// @route DELETE /api/blogs/:id
const deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog post not found" });
    await BlogComment.deleteMany({ blog: blog._id });
    res.json({ success: true, message: "Blog post deleted" });
  } catch (err) {
    next(err);
  }
};

// ── ADMIN: toggle publish / featured ────────────────────────────────────────
// @route PATCH /api/blogs/:id/toggle-publish
const togglePublish = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog post not found" });
    blog.status = blog.status === "published" ? "draft" : "published";
    await blog.save();
    res.json({ success: true, status: blog.status });
  } catch (err) {
    next(err);
  }
};

// @route PATCH /api/blogs/:id/toggle-featured
const toggleFeatured = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog post not found" });
    blog.isFeatured = !blog.isFeatured;
    await blog.save();
    res.json({ success: true, isFeatured: blog.isFeatured });
  } catch (err) {
    next(err);
  }
};

// ── ADMIN: bulk action (delete / publish / draft) ───────────────────────────
// @route POST /api/blogs/bulk
const bulkAction = async (req, res, next) => {
  try {
    const { ids = [], action } = req.body;
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ success: false, message: "No posts selected" });
    }
    if (action === "delete") {
      await Blog.deleteMany({ _id: { $in: ids } });
      await BlogComment.deleteMany({ blog: { $in: ids } });
    } else if (action === "publish") {
      await Blog.updateMany(
        { _id: { $in: ids } },
        { $set: { status: "published" }, $max: { publishedAt: new Date() } }
      );
      // Ensure publishedAt is set when previously null
      await Blog.updateMany(
        { _id: { $in: ids }, publishedAt: null },
        { $set: { publishedAt: new Date() } }
      );
    } else if (action === "draft") {
      await Blog.updateMany({ _id: { $in: ids } }, { $set: { status: "draft" } });
    } else {
      return res.status(400).json({ success: false, message: "Unknown action" });
    }
    res.json({ success: true, message: `Bulk ${action} applied to ${ids.length} post(s)` });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getBlogs,
  getBlogBySlug,
  incrementViews,
  getSidebarMeta,
  getAllBlogsAdmin,
  getBlogByIdAdmin,
  createBlog,
  updateBlog,
  deleteBlog,
  togglePublish,
  toggleFeatured,
  bulkAction,
};
