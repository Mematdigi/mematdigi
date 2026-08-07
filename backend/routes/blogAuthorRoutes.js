const express = require("express");
const router = express.Router();
const {
  getAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/blogAuthorController");
const { protect } = require("../middleware/auth");

router.get("/", getAuthors);
router.post("/", protect, createAuthor);
router.put("/:id", protect, updateAuthor);
router.delete("/:id", protect, deleteAuthor);

module.exports = router;
