const express = require("express");
const router = express.Router();
const { getMedia, updateMedia, deleteMedia } = require("../controllers/mediaController");
const { protect } = require("../middleware/auth");

router.get("/", protect, getMedia);
router.patch("/:id", protect, updateMedia);
router.delete("/:id", protect, deleteMedia);

module.exports = router;
