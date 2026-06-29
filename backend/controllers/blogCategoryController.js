const BlogCategory = require("../models/BlogCategory");
const Blog = require("../models/Blog");
const { slugify, uniqueSlug } = require("../utils/slug");

// @route GET /api/blog-categories
const getCategories = async (req, res, next) => {
  try {
    const categories = await BlogCategory.find().sort({ order: 1, name: 1 }).lean();

    // Attach live post counts per category slug
    const counts = await Blog.aggregate([
      { $group: { _id: "$categorySlug", count: { $sum: 1 } } },
    ]);
    const countMap = Object.fromEntries(counts.map((c) => [c._id, c.count]));

    const data = categories.map((c) => ({ ...c, postCount: countMap[c.slug] || 0 }));
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

// @route POST /api/blog-categories
const createCategory = async (req, res, next) => {
  try {
    const body = { ...req.body };
    body.slug = await uniqueSlug(BlogCategory, body.slug || body.name);
    const category = await BlogCategory.create(body);
    res.status(201).json({ success: true, data: category });
  } catch (err) {
    next(err);
  }
};

// @route PUT /api/blog-categories/:id
const updateCategory = async (req, res, next) => {
  try {
    const cat = await BlogCategory.findById(req.params.id);
    if (!cat) return res.status(404).json({ success: false, message: "Category not found" });

    const body = { ...req.body };
    if (body.slug && body.slug !== cat.slug) {
      body.slug = await uniqueSlug(BlogCategory, body.slug, cat._id);
    }
    Object.assign(cat, body);
    await cat.save();

    // Keep posts in sync if name/slug changed
    await Blog.updateMany(
      { categorySlug: cat.slug },
      { $set: { category: cat.name, categorySlug: cat.slug } }
    );

    res.json({ success: true, data: cat });
  } catch (err) {
    next(err);
  }
};

// @route DELETE /api/blog-categories/:id
const deleteCategory = async (req, res, next) => {
  try {
    const cat = await BlogCategory.findByIdAndDelete(req.params.id);
    if (!cat) return res.status(404).json({ success: false, message: "Category not found" });
    // Move orphaned posts to "Uncategorized" (do not delete posts)
    await Blog.updateMany(
      { categorySlug: cat.slug },
      { $set: { category: "Uncategorized", categorySlug: "uncategorized" } }
    );
    res.json({ success: true, message: "Category deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = { getCategories, createCategory, updateCategory, deleteCategory };
