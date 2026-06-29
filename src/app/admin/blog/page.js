"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import {
  getAllBlogsAdmin, deleteBlog, toggleBlogPublish, toggleBlogFeatured, bulkBlogAction, getBlogCategories,
} from "@/lib/api";
import { T, Spinner, EmptyState, Badge } from "@/components/admin/ui";
import { resolveImg, formatDate } from "@/lib/media";

const statusColor = (s) =>
  s === "published" ? T.green : s === "scheduled" ? "#38bdf8" : T.amber;

export default function AdminBlogList() {
  const [posts, setPosts] = useState([]);
  const [counts, setCounts] = useState({ all: 0, published: 0, draft: 0, scheduled: 0 });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("all");
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ totalPages: 1 });
  const [selected, setSelected] = useState([]);
  const [busy, setBusy] = useState(null);

  const fetchPosts = useCallback(() => {
    setLoading(true);
    getAllBlogsAdmin({ status, category, search, page, limit: 12 }).then((res) => {
      if (res.success) {
        setPosts(res.data);
        setCounts(res.statusCounts);
        setPagination(res.pagination);
      }
      setLoading(false);
    });
  }, [status, category, search, page]);

  useEffect(() => { fetchPosts(); }, [fetchPosts]);
  useEffect(() => { getBlogCategories().then((r) => r.success && setCategories(r.data)); }, []);
  useEffect(() => { setPage(1); }, [status, category, search]);

  const handleDelete = async (id, title) => {
    if (!confirm(`Delete "${title}"? This also removes its comments and cannot be undone.`)) return;
    setBusy(id);
    const res = await deleteBlog(id);
    if (res.success) setPosts((p) => p.filter((x) => x._id !== id));
    setBusy(null);
  };

  const handlePublish = async (id) => {
    setBusy(id);
    const res = await toggleBlogPublish(id);
    if (res.success) setPosts((p) => p.map((x) => (x._id === id ? { ...x, status: res.status } : x)));
    setBusy(null);
  };

  const handleFeatured = async (id) => {
    const res = await toggleBlogFeatured(id);
    if (res.success) setPosts((p) => p.map((x) => (x._id === id ? { ...x, isFeatured: res.isFeatured } : x)));
  };

  const toggleSelect = (id) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  const allSelected = posts.length > 0 && selected.length === posts.length;
  const toggleSelectAll = () => setSelected(allSelected ? [] : posts.map((p) => p._id));

  const runBulk = async (action) => {
    if (selected.length === 0) return;
    if (action === "delete" && !confirm(`Delete ${selected.length} selected post(s)?`)) return;
    const res = await bulkBlogAction(selected, action);
    if (res.success) { setSelected([]); fetchPosts(); }
  };

  const STATUS_TABS = [
    { id: "all", label: "All" },
    { id: "published", label: "Published" },
    { id: "draft", label: "Drafts" },
    { id: "scheduled", label: "Scheduled" },
  ];

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={{ color: T.text, fontSize: 24, fontWeight: 700, margin: 0 }}>Blog Posts</h1>
          <p style={{ color: T.muted, fontSize: 14, marginTop: 4 }}>Create, edit and manage all your articles.</p>
        </div>
        <Link href="/admin/blog/new" style={{ background: T.gradient, color: "#fff", padding: "10px 20px", borderRadius: 10, textDecoration: "none", fontSize: 14, fontWeight: 600, boxShadow: "0 4px 16px #6366f140" }}>
          + New Post
        </Link>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", gap: 10, marginBottom: 18, flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 4, background: T.panel, border: `1px solid ${T.border}`, borderRadius: 10, padding: 4 }}>
          {STATUS_TABS.map((s) => (
            <button key={s.id} onClick={() => setStatus(s.id)}
              style={{
                padding: "7px 14px", borderRadius: 7, border: "none", cursor: "pointer", fontSize: 13,
                fontWeight: status === s.id ? 600 : 400,
                background: status === s.id ? "#6366f120" : "transparent",
                color: status === s.id ? "#a5b4fc" : T.muted,
              }}>
              {s.label} <span style={{ opacity: 0.7 }}>({counts[s.id] ?? 0})</span>
            </button>
          ))}
        </div>

        <select value={category} onChange={(e) => setCategory(e.target.value)}
          style={{ padding: "9px 12px", background: T.panel, border: `1px solid ${T.border}`, borderRadius: 10, color: T.textDim, fontSize: 13, outline: "none" }}>
          <option value="all">All categories</option>
          {categories.map((c) => <option key={c._id} value={c.slug}>{c.name} ({c.postCount})</option>)}
        </select>

        <div style={{ flex: 1, minWidth: 200, position: "relative" }}>
          <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="🔍 Search posts…"
            style={{ width: "100%", padding: "9px 14px", background: T.panel, border: `1px solid ${T.border}`, borderRadius: 10, color: T.text, fontSize: 13, outline: "none", boxSizing: "border-box" }} />
        </div>
      </div>

      {/* Bulk bar */}
      {selected.length > 0 && (
        <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#6366f115", border: "1px solid #6366f140", borderRadius: 10, padding: "10px 16px", marginBottom: 14 }}>
          <span style={{ color: "#a5b4fc", fontSize: 13, fontWeight: 600 }}>{selected.length} selected</span>
          <button onClick={() => runBulk("publish")} style={btn(T.green)}>Publish</button>
          <button onClick={() => runBulk("draft")} style={btn(T.amber)}>Move to Draft</button>
          <button onClick={() => runBulk("delete")} style={btn(T.red)}>Delete</button>
          <button onClick={() => setSelected([])} style={{ marginLeft: "auto", background: "none", border: "none", color: T.muted, cursor: "pointer", fontSize: 13 }}>Clear</button>
        </div>
      )}

      {/* Table */}
      <div style={{ background: T.panel, border: `1px solid ${T.border}`, borderRadius: 16, overflow: "hidden" }}>
        {loading ? (
          <Spinner label="Loading posts…" />
        ) : posts.length === 0 ? (
          <EmptyState icon="📝" title="No posts found" desc="Try adjusting filters, or create your first post."
            action={<Link href="/admin/blog/new" style={{ background: T.gradient, color: "#fff", padding: "12px 24px", borderRadius: 10, textDecoration: "none", fontWeight: 600 }}>Create First Post</Link>} />
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 820 }}>
              <thead>
                <tr style={{ background: T.bg, borderBottom: `1px solid ${T.border}` }}>
                  <th style={{ padding: "12px 16px", width: 40 }}>
                    <input type="checkbox" checked={allSelected} onChange={toggleSelectAll} style={{ width: 16, height: 16, accentColor: T.primary, cursor: "pointer" }} />
                  </th>
                  {["Post", "Category", "Author", "Status", "Date", "Views", ""].map((h) => (
                    <th key={h} style={{ padding: "12px 16px", textAlign: "left", color: T.muted, fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {posts.map((p) => (
                  <tr key={p._id} style={{ borderBottom: `1px solid ${T.border}` }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#0f172a80")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}>
                    <td style={{ padding: "12px 16px" }}>
                      <input type="checkbox" checked={selected.includes(p._id)} onChange={() => toggleSelect(p._id)} style={{ width: 16, height: 16, accentColor: T.primary, cursor: "pointer" }} />
                    </td>
                    <td style={{ padding: "12px 16px" }}>
                      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                        <div style={{ width: 54, height: 40, borderRadius: 6, overflow: "hidden", background: T.bg, flexShrink: 0, border: `1px solid ${T.border}` }}>
                          {p.featuredImage
                            ? <img src={resolveImg(p.featuredImage)} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => (e.target.style.display = "none")} />
                            : <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", fontSize: 16 }}>📄</div>}
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <button onClick={() => handleFeatured(p._id)} title="Toggle featured"
                              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 14, color: p.isFeatured ? T.orange : T.muted }}>
                              {p.isFeatured ? "★" : "☆"}
                            </button>
                            <Link href={`/admin/blog/${p._id}`} style={{ color: "#e2e8f0", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>{p.title}</Link>
                          </div>
                          <div style={{ color: T.muted, fontSize: 12, marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 320 }}>/{p.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: "12px 16px" }}><Badge color="#38bdf8">{p.category}</Badge></td>
                    <td style={{ padding: "12px 16px", color: T.textDim, fontSize: 13 }}>{p.author?.name || "—"}</td>
                    <td style={{ padding: "12px 16px" }}>
                      <button onClick={() => handlePublish(p._id)} disabled={busy === p._id}
                        style={{ background: `${statusColor(p.status)}20`, color: statusColor(p.status), border: `1px solid ${statusColor(p.status)}40`, padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: "pointer", textTransform: "capitalize" }}>
                        {busy === p._id ? "…" : p.status}
                      </button>
                    </td>
                    <td style={{ padding: "12px 16px", color: T.muted, fontSize: 13, whiteSpace: "nowrap" }}>{formatDate(p.publishedAt || p.createdAt)}</td>
                    <td style={{ padding: "12px 16px", color: T.textDim, fontSize: 13 }}>👁 {p.views || 0}</td>
                    <td style={{ padding: "12px 16px" }}>
                      <div style={{ display: "flex", gap: 6 }}>
                        <Link href={`/admin/blog/${p._id}`} style={{ color: T.primary, fontSize: 13, textDecoration: "none", padding: "5px 10px", border: "1px solid #6366f140", borderRadius: 7 }}>Edit</Link>
                        <Link href={`/blogs/${p.slug}`} target="_blank" style={{ color: T.green, fontSize: 13, textDecoration: "none", padding: "5px 10px", border: "1px solid #10b98140", borderRadius: 7 }}>View</Link>
                        <button onClick={() => handleDelete(p._id, p.title)} disabled={busy === p._id}
                          style={{ color: "#f87171", fontSize: 13, padding: "5px 10px", border: "1px solid #ef444440", borderRadius: 7, background: "transparent", cursor: "pointer" }}>Del</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Pagination */}
      {pagination.totalPages > 1 && (
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 20 }}>
          {Array.from({ length: pagination.totalPages }).map((_, i) => (
            <button key={i} onClick={() => setPage(i + 1)}
              style={{
                width: 36, height: 36, borderRadius: 8, border: `1px solid ${page === i + 1 ? T.primary : T.border}`,
                background: page === i + 1 ? "#6366f120" : T.panel, color: page === i + 1 ? "#a5b4fc" : T.muted, cursor: "pointer", fontSize: 13,
              }}>
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const btn = (color) => ({
  background: `${color}20`, color, border: `1px solid ${color}40`,
  padding: "6px 14px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer",
});
