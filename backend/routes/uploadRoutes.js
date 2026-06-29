const express = require("express");
const router = express.Router();
const { uploadImage, uploadMultiple } = require("../controllers/uploadController");
const { protect } = require("../middleware/auth");

router.post("/", protect, uploadImage);
router.post("/multiple", protect, uploadMultiple);

module.exports = router;
