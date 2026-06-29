const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
  {
    siteName: { type: String, default: "Memat Digi" },
    siteTagline: { type: String, default: "Best Digital Marketing Company" },
    siteEmail: { type: String, default: "" },
    sitePhone: { type: String, default: "" },
    siteAddress: { type: String, default: "" },
    siteLogo: { type: String, default: "" },
    siteFavicon: { type: String, default: "" },

    // Default SEO
    defaultMetaTitle: { type: String, default: "Memat Digi - Digital Marketing Agency" },
    defaultMetaDescription: { type: String, default: "Best Digital Marketing Company" },
    defaultOgImage: { type: String, default: "" },
    googleAnalyticsId: { type: String, default: "" },
    customHeadScripts: { type: String, default: "" },

    // Social links
    socials: {
      facebook: { type: String, default: "" },
      instagram: { type: String, default: "" },
      twitter: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      youtube: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Settings", settingsSchema);
