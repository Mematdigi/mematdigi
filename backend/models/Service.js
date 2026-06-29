const mongoose = require("mongoose");

// Sub-schema for scrollable content features
const featureSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

// Sub-schema for FAQ items
const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

// Sub-schema for service cards shown on the page
const serviceCardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, default: "" },
  icon: { type: String, default: "tji-service-1" },
  image: { type: String, default: "" },
});

// Sub-schema for Choose section boxes
const chooseBoxSchema = new mongoose.Schema({
  icon: { type: String, default: "tji-innovative" },
  title: { type: String, required: true },
  desc: { type: String, default: "" },
});

// Sub-schema for Features section
const featureCardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  icon: { type: String, default: "tji-innovative" },
  desc: { type: String, default: "" },
});

// SEO meta schema
const metaSchema = new mongoose.Schema({
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
});

// Hero section schema
const heroSchema = new mongoose.Schema({
  eyebrow: { type: String, default: "Digital Marketing Agency" },
  title: { type: String, default: "Best Digital Marketing Company" },
  highlight: { type: String, default: "" },
  description: { type: String, default: "" },
  bgImage: { type: String, default: "/images/hero/h9-hero-bg.webp" },
  ctaText: { type: String, default: "Get Started" },
  ctaUrl: { type: String, default: "/contact-us" },
  stat1Number: { type: String, default: "200+" },
  stat1Label: { type: String, default: "Clients" },
  stat2Number: { type: String, default: "10+" },
  stat2Label: { type: String, default: "Years Experience" },
  stat3Number: { type: String, default: "50+" },
  stat3Label: { type: String, default: "Projects" },
});

// Scrollable content section schema
const scrollableContentSchema = new mongoose.Schema({
  heading: { type: String, default: "Transforming Customer: Tailored Solutions for Experiences." },
  description1: {
    type: String,
    default:
      "Recognize that exceptional customer experiences are at the heart of every successful business.",
  },
  description2: {
    type: String,
    default:
      "Our approach to customer experience is comprehensive and data-driven.",
  },
  featuresLeft: [featureSchema],
  featuresRight: [featureSchema],
  image: { type: String, default: "" },
});

// Choose section schema
const chooseSectionSchema = new mongoose.Schema({
  subTitle: { type: String, default: "Choose the Best" },
  title: { type: String, default: "Empowering Business with Expertise." },
  image: { type: String, default: "/images/choose/h8-choose-bnner.webp" },
  boxes: [chooseBoxSchema],
});

// Main Service Page Schema
const servicePageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    shortTitle: { type: String, default: "" },
    subtitle: { type: String, default: "" },

    // Hero Section
    hero: { type: heroSchema, default: () => ({}) },

    // Choose Section
    chooseSection: { type: chooseSectionSchema, default: () => ({}) },

    // Services Cards (shown in Services8 + Services9 style)
    services8: [serviceCardSchema],
    services2: [serviceCardSchema],
    services9: [serviceCardSchema],

    // Scrollable Content Section (was hardcoded before)
    scrollableContent1: { type: scrollableContentSchema, default: () => ({}) },
    scrollableContent2: { type: scrollableContentSchema, default: () => ({}) },

    // Features Section (Features2)
    features: [featureCardSchema],

    // FAQ Section
    faqs: [faqSchema],

    // SEO Meta
    meta: { type: metaSchema, default: () => ({}) },

    // Page status
    isPublished: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Auto-generate slug from title if not provided
servicePageSchema.pre("save", function (next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
  next();
});

module.exports = mongoose.model("ServicePage", servicePageSchema);
