const BlogAuthor = require("../models/BlogAuthor");
const Blog = require("../models/Blog");
const { uniqueSlug } = require("../utils/slug");

// @route GET /api/blog-authors
const getAuthors = async (req, res, next) => {
  try {
    const authors = await BlogAuthor.find().sort({ name: 1 }).lean();
    const counts = await Blog.aggregate([
      { $group: { _id: "$author.slug", count: { $sum: 1 } } },
    ]);
    const countMap = Object.fromEntries(counts.map((c) => [c._id, c.count]));
    const data = authors.map((a) => ({ ...a, postCount: countMap[a.slug] || 0 }));
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

// @route POST /api/blog-authors
const createAuthor = async (req, res, next) => {
  try {
    const body = { ...req.body };
    body.slug = await uniqueSlug(BlogAuthor, body.slug || body.name);
    const author = await BlogAuthor.create(body);
    res.status(201).json({ success: true, data: author });
  } catch (err) {
    next(err);
  }
};

// @route PUT /api/blog-authors/:id
const updateAuthor = async (req, res, next) => {
  try {
    const author = await BlogAuthor.findById(req.params.id);
    if (!author) return res.status(404).json({ success: false, message: "Author not found" });

    const body = { ...req.body };
    if (body.slug && body.slug !== author.slug) {
      body.slug = await uniqueSlug(BlogAuthor, body.slug, author._id);
    }
    Object.assign(author, body);
    await author.save();

    // Keep post author snapshots in sync
    await Blog.updateMany(
      { "author.ref": author._id },
      {
        $set: {
          "author.name": author.name,
          "author.slug": author.slug,
          "author.role": author.role,
          "author.avatar": author.avatar,
          "author.bio": author.bio,
        },
      }
    );

    res.json({ success: true, data: author });
  } catch (err) {
    next(err);
  }
};

// @route DELETE /api/blog-authors/:id
const deleteAuthor = async (req, res, next) => {
  try {
    const author = await BlogAuthor.findByIdAndDelete(req.params.id);
    if (!author) return res.status(404).json({ success: false, message: "Author not found" });
    res.json({ success: true, message: "Author deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAuthors, createAuthor, updateAuthor, deleteAuthor };
