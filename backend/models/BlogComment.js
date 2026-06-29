const mongoose = require("mongoose");

const blogCommentSchema = new mongoose.Schema(
  {
    blog: { type: mongoose.Schema.Types.ObjectId, ref: "Blog", required: true, index: true },
    blogSlug: { type: String, default: "", index: true },
    blogTitle: { type: String, default: "" },

    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    website: { type: String, default: "" },
    content: { type: String, required: true },

    // Threaded replies
    parent: { type: mongoose.Schema.Types.ObjectId, ref: "BlogComment", default: null },

    status: {
      type: String,
      enum: ["pending", "approved", "spam"],
      default: "pending",
      index: true,
    },

    ipAddress: { type: String, default: "" },
    userAgent: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlogComment", blogCommentSchema);
