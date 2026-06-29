const express = require("express");
const router = express.Router();
const {
  getAllServices,
  getServiceBySlug,
  getServiceById,
  createService,
  updateService,
  deleteService,
  togglePublish,
} = require("../controllers/serviceController");
const { protect } = require("../middleware/auth");

// Public routes
router.get("/", getAllServices);
router.get("/slug/:slug", getServiceBySlug);

// Admin only routes
router.get("/id/:id", protect, getServiceById);
router.post("/", protect, createService);
router.put("/:id", protect, updateService);
router.delete("/:id", protect, deleteService);
router.patch("/:id/toggle-publish", protect, togglePublish);

module.exports = router;
