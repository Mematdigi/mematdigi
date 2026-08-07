const express = require("express");
const router = express.Router();
const {
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
} = require("../controllers/blogController");
const { protect, attachAdminIfPresent } = require("../middleware/auth");

// ── Public ──────────────────────────────────────────────────────────────────
router.get("/", getBlogs);
router.get("/meta/sidebar", getSidebarMeta);
router.get("/slug/:slug", attachAdminIfPresent, getBlogBySlug); // admins can preview drafts
router.post("/slug/:slug/view", incrementViews);

// ── Admin ───────────────────────────────────────────────────────────────────
router.get("/admin/all", protect, getAllBlogsAdmin);
router.get("/admin/:id", protect, getBlogByIdAdmin);
router.post("/", protect, createBlog);
router.post("/bulk", protect, bulkAction);
router.put("/:id", protect, updateBlog);
router.delete("/:id", protect, deleteBlog);
router.patch("/:id/toggle-publish", protect, togglePublish);
router.patch("/:id/toggle-featured", protect, toggleFeatured);

module.exports = router;
