const express = require("express");
const router = express.Router();
const {
  createComment,
  getCommentsByBlog,
  getAllComments,
  updateCommentStatus,
  deleteComment,
} = require("../controllers/blogCommentController");
const { protect } = require("../middleware/auth");

// Public
router.post("/", createComment);
router.get("/blog/:slug", getCommentsByBlog);

// Admin
router.get("/", protect, getAllComments);
router.patch("/:id/status", protect, updateCommentStatus);
router.delete("/:id", protect, deleteComment);

module.exports = router;
