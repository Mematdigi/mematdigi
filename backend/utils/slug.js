// Simple, dependency-free slugify + unique-slug helper.

const slugify = (text = "") =>
  String(text)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

/**
 * Ensure a slug is unique within a collection.
 * @param {mongoose.Model} Model  The model to check against
 * @param {string} base           Desired slug (will be slugified)
 * @param {string|null} excludeId  Document id to exclude (when updating)
 */
const uniqueSlug = async (Model, base, excludeId = null) => {
  let slug = slugify(base) || "item";
  let candidate = slug;
  let i = 2;
  // Loop until we find a slug not used by another document
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const query = { slug: candidate };
    if (excludeId) query._id = { $ne: excludeId };
    const exists = await Model.exists(query);
    if (!exists) break;
    candidate = `${slug}-${i++}`;
  }
  return candidate;
};

module.exports = { slugify, uniqueSlug };
