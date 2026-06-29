const BlogComment = require("../models/BlogComment");
const Blog = require("../models/Blog");

// ── PUBLIC: submit a comment (created as "pending") ─────────────────────────
// @route POST /api/comments
const createComment = async (req, res, next) => {
  try {
    const { blogSlug, name, email, content, website, parent } = req.body;

    if (!blogSlug || !name || !email || !content) {
      return res
        .status(400)
        .json({ success: false, message: "Name, email and comment are required." });
    }

    const blog = await Blog.findOne({ slug: blogSlug }).select("_id title slug allowComments");
    if (!blog) return res.status(404).json({ success: false, message: "Blog post not found" });
    if (!blog.allowComments) {
      return res.status(403).json({ success: false, message: "Comments are closed for this post." });
    }

    const comment = await BlogComment.create({
      blog: blog._id,
      blogSlug: blog.slug,
      blogTitle: blog.title,
      name,
      email,
      website: website || "",
      content,
      parent: parent || null,
      status: "pending",
      ipAddress: req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "",
      userAgent: req.headers["user-agent"] || "",
    });

    res.status(201).json({
      success: true,
      message: "Thank you! Your comment has been submitted and is awaiting moderation.",
      data: { id: comment._id },
    });
  } catch (err) {
    next(err);
  }
};

// ── PUBLIC: approved comments for a post, nested as a thread ─────────────────
// @route GET /api/comments/blog/:slug
const getCommentsByBlog = async (req, res, next) => {
  try {
    const comments = await BlogComment.find({
      blogSlug: req.params.slug,
      status: "approved",
    })
      .select("name website content parent createdAt")
      .sort({ createdAt: 1 })
      .lean();

    // Build a simple two-level thread (top-level + replies)
    const byId = Object.fromEntries(comments.map((c) => [String(c._id), { ...c, replies: [] }]));
    const roots = [];
    comments.forEach((c) => {
      const node = byId[String(c._id)];
      if (c.parent && byId[String(c.parent)]) {
        byId[String(c.parent)].replies.push(node);
      } else {
        roots.push(node);
      }
    });

    res.json({ success: true, data: roots, count: comments.length });
  } catch (err) {
    next(err);
  }
};

// ── ADMIN: list all comments with status filter + counts ────────────────────
// @route GET /api/comments
const getAllComments = async (req, res, next) => {
  try {
    const { status } = req.query;
    const filter = {};
    if (status && status !== "all") filter.status = status;

    const [data, counts] = await Promise.all([
      BlogComment.find(filter).sort({ createdAt: -1 }).limit(300).lean(),
      BlogComment.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }]),
    ]);

    const statusCounts = { all: 0, pending: 0, approved: 0, spam: 0 };
    counts.forEach((c) => {
      statusCounts[c._id] = c.count;
      statusCounts.all += c.count;
    });

    res.json({ success: true, data, statusCounts });
  } catch (err) {
    next(err);
  }
};

// ── ADMIN: change status (approve / spam / pending) ─────────────────────────
// @route PATCH /api/comments/:id/status
const updateCommentStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    if (!["pending", "approved", "spam"].includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status" });
    }
    const comment = await BlogComment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!comment) return res.status(404).json({ success: false, message: "Comment not found" });
    res.json({ success: true, data: comment });
  } catch (err) {
    next(err);
  }
};

// ── ADMIN: delete ───────────────────────────────────────────────────────────
// @route DELETE /api/comments/:id
const deleteComment = async (req, res, next) => {
  try {
    const comment = await BlogComment.findByIdAndDelete(req.params.id);
    if (!comment) return res.status(404).json({ success: false, message: "Comment not found" });
    // Also remove its direct replies
    await BlogComment.deleteMany({ parent: comment._id });
    res.json({ success: true, message: "Comment deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createComment,
  getCommentsByBlog,
  getAllComments,
  updateCommentStatus,
  deleteComment,
};
