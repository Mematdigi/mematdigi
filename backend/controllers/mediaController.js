const fs = require("fs");
const path = require("path");
const Media = require("../models/Media");

// @route GET /api/media
const getMedia = async (req, res, next) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(60, Math.max(1, parseInt(req.query.limit) || 24));
    const { search } = req.query;

    const filter = {};
    if (search) {
      const rx = new RegExp(search.trim(), "i");
      filter.$or = [{ originalname: rx }, { alt: rx }, { filename: rx }];
    }

    const [data, total] = await Promise.all([
      Media.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),
      Media.countDocuments(filter),
    ]);

    res.json({
      success: true,
      data,
      pagination: { page, limit, total, totalPages: Math.max(1, Math.ceil(total / limit)) },
    });
  } catch (err) {
    next(err);
  }
};

// @route PATCH /api/media/:id
const updateMedia = async (req, res, next) => {
  try {
    const media = await Media.findByIdAndUpdate(
      req.params.id,
      { alt: req.body.alt || "" },
      { new: true }
    );
    if (!media) return res.status(404).json({ success: false, message: "Media not found" });
    res.json({ success: true, data: media });
  } catch (err) {
    next(err);
  }
};

// @route DELETE /api/media/:id
const deleteMedia = async (req, res, next) => {
  try {
    const media = await Media.findByIdAndDelete(req.params.id);
    if (!media) return res.status(404).json({ success: false, message: "Media not found" });

    // Best-effort remove the file from disk
    try {
      const filePath = path.join(__dirname, "../uploads", media.filename);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    } catch (e) {
      // ignore unlink errors – DB record is already removed
    }

    res.json({ success: true, message: "Media deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = { getMedia, updateMedia, deleteMedia };
