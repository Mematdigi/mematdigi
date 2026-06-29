const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Media = require("../models/Media");

// Storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "../uploads");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  },
});

// File filter - images only
const fileFilter = (req, file, cb) => {
  const allowed = /jpeg|jpg|png|gif|webp|svg/;
  const extname = allowed.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowed.test(file.mimetype);
  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed (jpeg, jpg, png, gif, webp, svg)"));
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB max
});

// Record an uploaded file in the Media library (best-effort)
const saveMediaRecord = async (file) => {
  try {
    await Media.create({
      url: `/uploads/${file.filename}`,
      filename: file.filename,
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      folder: "blog",
    });
  } catch (e) {
    // Non-fatal: upload still succeeds even if Media record fails
  }
};

// @desc    Upload single image
// @route   POST /api/upload
// @access  Private (Admin)
const uploadImage = (req, res, next) => {
  const singleUpload = upload.single("image");

  singleUpload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Please upload an image file" });
    }

    await saveMediaRecord(req.file);
    const fileUrl = `/uploads/${req.file.filename}`;

    res.json({
      success: true,
      url: fileUrl,
      filename: req.file.filename,
      originalname: req.file.originalname,
      size: req.file.size,
    });
  });
};

// @desc    Upload multiple images (for galleries / media library)
// @route   POST /api/upload/multiple
// @access  Private (Admin)
const uploadMultiple = (req, res, next) => {
  const multiUpload = upload.array("images", 10);

  multiUpload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ success: false, message: err.message });
    }
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ success: false, message: "Please upload at least one image" });
    }

    await Promise.all(req.files.map(saveMediaRecord));
    const urls = req.files.map((f) => ({
      url: `/uploads/${f.filename}`,
      filename: f.filename,
      originalname: f.originalname,
      size: f.size,
    }));

    res.json({ success: true, files: urls });
  });
};

module.exports = { uploadImage, uploadMultiple };
