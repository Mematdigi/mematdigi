const mongoose = require("mongoose");

const blogAuthorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true, index: true },
    role: { type: String, default: "Author" },
    email: { type: String, default: "" },
    bio: { type: String, default: "" },
    avatar: { type: String, default: "" },
    socials: {
      facebook: { type: String, default: "" },
      twitter: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      instagram: { type: String, default: "" },
      website: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BlogAuthor", blogAuthorSchema);
