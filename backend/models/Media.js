const mongoose = require("mongoose");

const mediaSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },        // e.g. /uploads/123.png
    filename: { type: String, required: true },   // stored filename on disk
    originalname: { type: String, default: "" },
    mimetype: { type: String, default: "" },
    size: { type: Number, default: 0 },           // bytes
    alt: { type: String, default: "" },
    folder: { type: String, default: "general" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Media", mediaSchema);
