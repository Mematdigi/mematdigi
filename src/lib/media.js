// Resolve an image path that may be:
//  - a full URL (http...)           → used as-is
//  - a backend upload path (/uploads/..) → prefixed with the API origin
//  - a frontend public asset (/images/..) → used as-is
const API_ORIGIN = (process.env.NEXT_PUBLIC_API_URL || "https://mematdigi.com/api").replace(
  /\/api\/?$/,
  ""
);

export const resolveImg = (src, fallback = "/images/blog/blog-1.webp") => {
  if (!src) return fallback;
  // Rewrite legacy/dev absolute URLs pointing at localhost to the real API origin
  if (/^https?:\/\/localhost(:\d+)?\/uploads/i.test(src)) {
    return src.replace(/^https?:\/\/localhost(:\d+)?/i, API_ORIGIN);
  }
  if (/^https?:\/\//i.test(src)) return src;
  if (src.startsWith("/uploads")) return `${API_ORIGIN}${src}`;
  return src;
};

// "12 Jun 2026"
export const formatDate = (date) => {
  if (!date) return "";
  try {
    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  } catch {
    return "";
  }
};

// { day: "12", month: "JUN" } for the date badge
export const dateBadge = (date) => {
  if (!date) return { day: "", month: "" };
  const d = new Date(date);
  return {
    day: String(d.getDate()).padStart(2, "0"),
    month: d.toLocaleString("en-GB", { month: "short" }).toUpperCase(),
  };
};