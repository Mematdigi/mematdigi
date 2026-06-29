const mongoose = require("mongoose");

// ── Reusable SEO meta sub-schema (mirrors Service meta for consistency) ──────
const metaSchema = new mongoose.Schema(
  {
    metaTitle: { type: String, default: "" },
    metaDescription: { type: String, default: "" },
    metaKeywords: { type: String, default: "" },
    ogTitle: { type: String, default: "" },
    ogDescription: { type: String, default: "" },
    ogImage: { type: String, default: "" },
    twitterCard: {
      type: String,
      default: "summary_large_image",
      enum: ["summary", "summary_large_image", "app", "player"],
    },
    twitterTitle: { type: String, default: "" },
    twitterDescription: { type: String, default: "" },
    canonicalUrl: { type: String, default: "" },
    robots: { type: String, default: "index, follow" },
    customHead: { type: String, default: "" },
  },
  { _id: false }
);

// ── Author snapshot embedded on the post (denormalized for fast reads) ───────
const authorSnapshotSchema = new mongoose.Schema(
  {
    ref: { type: mongoose.Schema.Types.ObjectId, ref: "BlogAuthor", default: null },
    name: { type: String, default: "Memat Digi" },
    slug: { type: String, default: "" },
    role: { type: String, default: "Author" },
    avatar: { type: String, default: "" },
    bio: { type: String, default: "" },
  },
  { _id: false }
);

const blogSchema = new mongoose.Schema(
  {
    // Core
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true, index: true },
    excerpt: { type: String, default: "" }, // short description shown in listings
    content: { type: String, default: "" }, // rich HTML from the WYSIWYG editor

    // Media
    featuredImage: { type: String, default: "" },
    featuredImageAlt: { type: String, default: "" },
    gallery: { type: [String], default: [] },

    // Taxonomy
    category: { type: String, default: "Uncategorized", trim: true },
    categorySlug: { type: String, default: "uncategorized", trim: true, index: true },
    tags: { type: [String], default: [], index: true },

    // Author
    author: { type: authorSnapshotSchema, default: () => ({}) },

    // Publishing
    status: {
      type: String,
      enum: ["draft", "published", "scheduled"],
      default: "draft",
      index: true,
    },
    visibility: { type: String, enum: ["public", "private"], default: "public" },
    isFeatured: { type: Boolean, default: false, index: true },
    allowComments: { type: Boolean, default: true },
    publishedAt: { type: Date, default: null },

    // Stats / helpers
    views: { type: Number, default: 0 },
    readingTime: { type: Number, default: 1 }, // minutes
    order: { type: Number, default: 0 },

    // SEO
    meta: { type: metaSchema, default: () => ({}) },
  },
  { timestamps: true }
);

// Helpful compound index for the public listing query
blogSchema.index({ status: 1, visibility: 1, publishedAt: -1 });

// Estimate reading time from the HTML content (strip tags → count words)
function estimateReadingTime(html = "") {
  const text = String(html).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  const words = text ? text.split(" ").length : 0;
  return Math.max(1, Math.round(words / 200)); // ~200 wpm
}

blogSchema.pre("save", function (next) {
  // Auto reading time
  if (this.isModified("content")) {
    this.readingTime = estimateReadingTime(this.content);
  }
  // Set publishedAt the first time it goes live
  if (this.status === "published" && !this.publishedAt) {
    this.publishedAt = new Date();
  }
  next();
});

blogSchema.statics.estimateReadingTime = estimateReadingTime;

module.exports = mongoose.model("Blog", blogSchema);
