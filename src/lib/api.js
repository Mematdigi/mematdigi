const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://mematdigi.com/api";

// Helper: get token from localStorage
const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("memat_admin_token");
  }
  return null;
};

// Helper: build headers
const authHeaders = () => ({
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
});

const publicHeaders = () => ({
  "Content-Type": "application/json",
});

// ── AUTH ────────────────────────────────────────────────────────────────────

export const loginAdmin = async (email, password) => {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: publicHeaders(),
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

export const seedAdmin = async () => {
  const res = await fetch(`${API_BASE}/auth/seed`, { method: "POST" });
  return res.json();
};

export const getAdminMe = async () => {
  const res = await fetch(`${API_BASE}/auth/me`, { headers: authHeaders() });
  return res.json();
};

// ── SERVICES ────────────────────────────────────────────────────────────────

export const getAllServices = async (all = false) => {
  const res = await fetch(`${API_BASE}/services${all ? "?all=true" : ""}`, {
    cache: "no-store",
  });
  return res.json();
};

export const getServiceBySlug = async (slug) => {
  const res = await fetch(`${API_BASE}/services/slug/${slug}`, {
    cache: "no-store",
  });
  return res.json();
};

export const getServiceById = async (id) => {
  const res = await fetch(`${API_BASE}/services/id/${id}`, {
    headers: authHeaders(),
  });
  return res.json();
};

export const createService = async (data) => {
  const res = await fetch(`${API_BASE}/services`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateService = async (id, data) => {
  const res = await fetch(`${API_BASE}/services/${id}`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteService = async (id) => {
  const res = await fetch(`${API_BASE}/services/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  return res.json();
};

export const togglePublish = async (id) => {
  const res = await fetch(`${API_BASE}/services/${id}/toggle-publish`, {
    method: "PATCH",
    headers: authHeaders(),
  });
  return res.json();
};

// ── UPLOAD ──────────────────────────────────────────────────────────────────

export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);
  const res = await fetch(`${API_BASE}/upload`, {
    method: "POST",
    headers: { Authorization: `Bearer ${getToken()}` },
    body: formData,
  });
  return res.json();
};

// ── SETTINGS ────────────────────────────────────────────────────────────────

export const getSettings = async () => {
  const res = await fetch(`${API_BASE}/settings`, { cache: "no-store" });
  return res.json();
};

export const updateSettings = async (data) => {
  const res = await fetch(`${API_BASE}/settings`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(data),
  });
  return res.json();
};

// ── BLOG: posts ──────────────────────────────────────────────────────────────

// Public
export const getBlogs = async (params = {}) => {
  const qs = new URLSearchParams(
    Object.entries(params).filter(([, v]) => v !== undefined && v !== null && v !== "")
  ).toString();
  const res = await fetch(`${API_BASE}/blogs${qs ? `?${qs}` : ""}`, { cache: "no-store" });
  return res.json();
};

export const getBlogBySlug = async (slug, token = null) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  const res = await fetch(`${API_BASE}/blogs/slug/${slug}`, { cache: "no-store", headers });
  return res.json();
};

export const incrementBlogViews = async (slug) => {
  try {
    await fetch(`${API_BASE}/blogs/slug/${slug}/view`, { method: "POST" });
  } catch (e) {
    /* non-critical */
  }
};

export const getBlogSidebar = async () => {
  const res = await fetch(`${API_BASE}/blogs/meta/sidebar`, { cache: "no-store" });
  return res.json();
};

// Admin
export const getAllBlogsAdmin = async (params = {}) => {
  const qs = new URLSearchParams(
    Object.entries(params).filter(([, v]) => v !== undefined && v !== null && v !== "")
  ).toString();
  const res = await fetch(`${API_BASE}/blogs/admin/all${qs ? `?${qs}` : ""}`, {
    headers: authHeaders(),
    cache: "no-store",
  });
  return res.json();
};

export const getBlogByIdAdmin = async (id) => {
  const res = await fetch(`${API_BASE}/blogs/admin/${id}`, { headers: authHeaders() });
  return res.json();
};

export const createBlog = async (data) => {
  const res = await fetch(`${API_BASE}/blogs`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateBlog = async (id, data) => {
  const res = await fetch(`${API_BASE}/blogs/${id}`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteBlog = async (id) => {
  const res = await fetch(`${API_BASE}/blogs/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  return res.json();
};

export const toggleBlogPublish = async (id) => {
  const res = await fetch(`${API_BASE}/blogs/${id}/toggle-publish`, {
    method: "PATCH",
    headers: authHeaders(),
  });
  return res.json();
};

export const toggleBlogFeatured = async (id) => {
  const res = await fetch(`${API_BASE}/blogs/${id}/toggle-featured`, {
    method: "PATCH",
    headers: authHeaders(),
  });
  return res.json();
};

export const bulkBlogAction = async (ids, action) => {
  const res = await fetch(`${API_BASE}/blogs/bulk`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({ ids, action }),
  });
  return res.json();
};

// ── BLOG: categories ─────────────────────────────────────────────────────────
export const getBlogCategories = async () => {
  const res = await fetch(`${API_BASE}/blog-categories`, { cache: "no-store" });
  return res.json();
};
export const createBlogCategory = async (data) => {
  const res = await fetch(`${API_BASE}/blog-categories`, {
    method: "POST", headers: authHeaders(), body: JSON.stringify(data),
  });
  return res.json();
};
export const updateBlogCategory = async (id, data) => {
  const res = await fetch(`${API_BASE}/blog-categories/${id}`, {
    method: "PUT", headers: authHeaders(), body: JSON.stringify(data),
  });
  return res.json();
};
export const deleteBlogCategory = async (id) => {
  const res = await fetch(`${API_BASE}/blog-categories/${id}`, {
    method: "DELETE", headers: authHeaders(),
  });
  return res.json();
};

// ── BLOG: authors ────────────────────────────────────────────────────────────
export const getBlogAuthors = async () => {
  const res = await fetch(`${API_BASE}/blog-authors`, { cache: "no-store" });
  return res.json();
};
export const createBlogAuthor = async (data) => {
  const res = await fetch(`${API_BASE}/blog-authors`, {
    method: "POST", headers: authHeaders(), body: JSON.stringify(data),
  });
  return res.json();
};
export const updateBlogAuthor = async (id, data) => {
  const res = await fetch(`${API_BASE}/blog-authors/${id}`, {
    method: "PUT", headers: authHeaders(), body: JSON.stringify(data),
  });
  return res.json();
};
export const deleteBlogAuthor = async (id) => {
  const res = await fetch(`${API_BASE}/blog-authors/${id}`, {
    method: "DELETE", headers: authHeaders(),
  });
  return res.json();
};

// ── BLOG: comments ───────────────────────────────────────────────────────────
export const submitComment = async (data) => {
  const res = await fetch(`${API_BASE}/comments`, {
    method: "POST", headers: publicHeaders(), body: JSON.stringify(data),
  });
  return res.json();
};
export const getCommentsByBlog = async (slug) => {
  const res = await fetch(`${API_BASE}/comments/blog/${slug}`, { cache: "no-store" });
  return res.json();
};
export const getAllComments = async (status = "all") => {
  const res = await fetch(`${API_BASE}/comments?status=${status}`, { headers: authHeaders(), cache: "no-store" });
  return res.json();
};
export const updateCommentStatus = async (id, status) => {
  const res = await fetch(`${API_BASE}/comments/${id}/status`, {
    method: "PATCH", headers: authHeaders(), body: JSON.stringify({ status }),
  });
  return res.json();
};
export const deleteComment = async (id) => {
  const res = await fetch(`${API_BASE}/comments/${id}`, { method: "DELETE", headers: authHeaders() });
  return res.json();
};

// ── ENQUIRIES ────────────────────────────────────────────────────────────────
export const submitEnquiry = async (data) => {
  const res = await fetch(`${API_BASE}/enquiries`, {
    method: "POST", headers: publicHeaders(), body: JSON.stringify(data),
  });
  return res.json();
};
export const getEnquiries = async (status = "all") => {
  const res = await fetch(`${API_BASE}/enquiries?status=${status}`, { headers: authHeaders(), cache: "no-store" });
  return res.json();
};
export const updateEnquiryStatus = async (id, status) => {
  const res = await fetch(`${API_BASE}/enquiries/${id}/status`, {
    method: "PATCH", headers: authHeaders(), body: JSON.stringify({ status }),
  });
  return res.json();
};
export const deleteEnquiry = async (id) => {
  const res = await fetch(`${API_BASE}/enquiries/${id}`, { method: "DELETE", headers: authHeaders() });
  return res.json();
};

// ── MEDIA LIBRARY ────────────────────────────────────────────────────────────
export const getMedia = async (params = {}) => {
  const qs = new URLSearchParams(
    Object.entries(params).filter(([, v]) => v !== undefined && v !== null && v !== "")
  ).toString();
  const res = await fetch(`${API_BASE}/media${qs ? `?${qs}` : ""}`, { headers: authHeaders(), cache: "no-store" });
  return res.json();
};
export const updateMedia = async (id, alt) => {
  const res = await fetch(`${API_BASE}/media/${id}`, {
    method: "PATCH", headers: authHeaders(), body: JSON.stringify({ alt }),
  });
  return res.json();
};
export const deleteMedia = async (id) => {
  const res = await fetch(`${API_BASE}/media/${id}`, { method: "DELETE", headers: authHeaders() });
  return res.json();
};

export const uploadMultipleImages = async (files) => {
  const formData = new FormData();
  [...files].forEach((f) => formData.append("images", f));
  const res = await fetch(`${API_BASE}/upload/multiple`, {
    method: "POST",
    headers: { Authorization: `Bearer ${getToken()}` },
    body: formData,
  });
  return res.json();
};
