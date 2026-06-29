const ServicePage = require("../models/Service");

// @desc    Get all service pages (public - only published)
// @route   GET /api/services
// @access  Public
const getAllServices = async (req, res, next) => {
  try {
    const { all } = req.query; // admin can pass ?all=true to get drafts too
    const filter = all === "true" ? {} : { isPublished: true };

    const services = await ServicePage.find(filter)
      .select("title slug shortTitle subtitle isPublished createdAt order")
      .sort({ order: 1, createdAt: -1 });

    res.json({ success: true, count: services.length, data: services });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single service page by slug
// @route   GET /api/services/:slug
// @access  Public
const getServiceBySlug = async (req, res, next) => {
  try {
    const service = await ServicePage.findOne({ slug: req.params.slug });

    if (!service) {
      return res.status(404).json({ success: false, message: "Service page not found" });
    }

    res.json({ success: true, data: service });
  } catch (err) {
    next(err);
  }
};

// @desc    Get single service page by ID (admin)
// @route   GET /api/services/id/:id
// @access  Private
const getServiceById = async (req, res, next) => {
  try {
    const service = await ServicePage.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ success: false, message: "Service page not found" });
    }

    res.json({ success: true, data: service });
  } catch (err) {
    next(err);
  }
};

// @desc    Create new service page
// @route   POST /api/services
// @access  Private (Admin)
const createService = async (req, res, next) => {
  try {
    // Auto-generate slug from title if not provided
    if (!req.body.slug && req.body.title) {
      req.body.slug = req.body.title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s_-]+/g, "-")
        .replace(/^-+|-+$/g, "");
    }

    const service = await ServicePage.create(req.body);

    res.status(201).json({ success: true, data: service });
  } catch (err) {
    next(err);
  }
};

// @desc    Update service page
// @route   PUT /api/services/:id
// @access  Private (Admin)
const updateService = async (req, res, next) => {
  try {
    const service = await ServicePage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!service) {
      return res.status(404).json({ success: false, message: "Service page not found" });
    }

    res.json({ success: true, data: service });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete service page
// @route   DELETE /api/services/:id
// @access  Private (Admin)
const deleteService = async (req, res, next) => {
  try {
    const service = await ServicePage.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({ success: false, message: "Service page not found" });
    }

    res.json({ success: true, message: "Service page deleted" });
  } catch (err) {
    next(err);
  }
};

// @desc    Toggle publish status
// @route   PATCH /api/services/:id/toggle-publish
// @access  Private (Admin)
const togglePublish = async (req, res, next) => {
  try {
    const service = await ServicePage.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ success: false, message: "Service page not found" });
    }

    service.isPublished = !service.isPublished;
    await service.save();

    res.json({
      success: true,
      message: `Service ${service.isPublished ? "published" : "unpublished"} successfully`,
      isPublished: service.isPublished,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllServices,
  getServiceBySlug,
  getServiceById,
  createService,
  updateService,
  deleteService,
  togglePublish,
};
