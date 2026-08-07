const express = require("express");
const router = express.Router();
const {
  createEnquiry,
  getEnquiries,
  updateEnquiryStatus,
  deleteEnquiry,
} = require("../controllers/enquiryController");
const { protect } = require("../middleware/auth");

// Public
router.post("/", createEnquiry);

// Admin
router.get("/", protect, getEnquiries);
router.patch("/:id/status", protect, updateEnquiryStatus);
router.delete("/:id", protect, deleteEnquiry);

module.exports = router;
