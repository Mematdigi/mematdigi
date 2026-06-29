"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllServices, getAllBlogsAdmin, getAllComments, getEnquiries } from "@/lib/api";

const StatCard = ({ icon, label, value, color, href }) => (
  <Link href={href || "#"} style={{ textDecoration: "none" }}>
    <div style={{
      background: "#1e293b",
      border: `1px solid ${color}30`,
      borderRadius: 16,
      padding: 24,
      display: "flex",
      alignItems: "center",
      gap: 16,
      transition: "transform 0.2s, box-shadow 0.2s",
      cursor: "pointer",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 32px ${color}20`; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{ width: 52, height: 52, background: `${color}20`, borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <div style={{ color: "#94a3b8", fontSize: 13, marginBottom: 4 }}>{label}</div>
        <div style={{ color: "#f1f5f9", fontSize: 28, fontWeight: 700 }}>{value}</div>
      </div>
    </div>
  </Link>
);

export default function AdminDashboard() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [blogStats, setBlogStats] = useState({ all: 0, published: 0, draft: 0, comments: 0, enquiries: 0 });

  useEffect(() => {
    getAllServices(true).then((res) => {
      if (res.success) setServices(res.data);
      setLoading(false);
    });
    // Blog stats (counts only)
    Promise.all([
      getAllBlogsAdmin({ limit: 1 }),
      getAllComments("pending"),
      getEnquiries("new"),
    ]).then(([blogs, comments, enquiries]) => {
      setBlogStats({
        all: blogs?.statusCounts?.all || 0,
        published: blogs?.statusCounts?.published || 0,
        draft: blogs?.statusCounts?.draft || 0,
        comments: comments?.statusCounts?.pending || 0,
        enquiries: enquiries?.statusCounts?.new || 0,
      });
    }).catch(() => {});
  }, []);

  const published = services.filter((s) => s.isPublished).length;
  const drafts = services.filter((s) => !s.isPublished).length;

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ color: "#f1f5f9", fontSize: 26, fontWeight: 700, margin: 0 }}>Dashboard</h1>
        <p style={{ color: "#64748b", fontSize: 14, marginTop: 6 }}>Welcome back! Here's what's happening with your service pages.</p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 24 }}>
        <StatCard icon="📄" label="Total Pages" value={loading ? "..." : services.length} color="#6366f1" href="/admin/services" />
        <StatCard icon="✅" label="Published" value={loading ? "..." : published} color="#10b981" href="/admin/services" />
        <StatCard icon="📝" label="Drafts" value={loading ? "..." : drafts} color="#f59e0b" href="/admin/services" />
        <StatCard icon="➕" label="New Page" value="Create" color="#8b5cf6" href="/admin/services/new" />
      </div>

      {/* Blog stats */}
      <div style={{ color: "#475569", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.6px", margin: "0 0 12px 4px" }}>Blog</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 36 }}>
        <StatCard icon="📰" label="Total Posts" value={blogStats.all} color="#6366f1" href="/admin/blog" />
        <StatCard icon="🟢" label="Published Posts" value={blogStats.published} color="#10b981" href="/admin/blog" />
        <StatCard icon="💬" label="Comments Pending" value={blogStats.comments} color="#f59e0b" href="/admin/blog/comments" />
        <StatCard icon="📨" label="New Enquiries" value={blogStats.enquiries} color="#f08020" href="/admin/blog/enquiries" />
      </div>

      {/* Recent pages */}
      <div style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 16, overflow: "hidden" }}>
        <div style={{ padding: "20px 24px", borderBottom: "1px solid #334155", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h2 style={{ color: "#f1f5f9", fontSize: 17, fontWeight: 600, margin: 0 }}>Recent Service Pages</h2>
          <Link href="/admin/services/new" style={{
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff",
            padding: "8px 16px", borderRadius: 8, textDecoration: "none", fontSize: 13, fontWeight: 600,
          }}>
            + New Page
          </Link>
        </div>

        {loading ? (
          <div style={{ padding: 40, textAlign: "center", color: "#64748b" }}>Loading...</div>
        ) : services.length === 0 ? (
          <div style={{ padding: 60, textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>📄</div>
            <p style={{ color: "#64748b", fontSize: 15 }}>No service pages yet.</p>
            <Link href="/admin/services/new" style={{ color: "#6366f1", fontSize: 14 }}>Create your first service page →</Link>
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #334155" }}>
                  {["Title", "Slug", "Status", "Created", "Actions"].map((h) => (
                    <th key={h} style={{ padding: "12px 24px", textAlign: "left", color: "#64748b", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {services.slice(0, 8).map((s) => (
                  <tr key={s._id} style={{ borderBottom: "1px solid #1e293b" }}
                    onMouseEnter={e => e.currentTarget.style.background = "#0f172a"}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  >
                    <td style={{ padding: "14px 24px", color: "#e2e8f0", fontSize: 14, fontWeight: 500 }}>{s.title}</td>
                    <td style={{ padding: "14px 24px" }}>
                      <code style={{ background: "#0f172a", color: "#94a3b8", padding: "2px 8px", borderRadius: 4, fontSize: 12 }}>/{s.slug}</code>
                    </td>
                    <td style={{ padding: "14px 24px" }}>
                      <span style={{
                        background: s.isPublished ? "#10b98120" : "#f59e0b20",
                        color: s.isPublished ? "#34d399" : "#fbbf24",
                        padding: "4px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600,
                      }}>
                        {s.isPublished ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td style={{ padding: "14px 24px", color: "#64748b", fontSize: 13 }}>
                      {new Date(s.createdAt).toLocaleDateString()}
                    </td>
                    <td style={{ padding: "14px 24px" }}>
                      <div style={{ display: "flex", gap: 8 }}>
                        <Link href={`/admin/services/${s._id}`} style={{ color: "#6366f1", fontSize: 13, textDecoration: "none", padding: "4px 12px", border: "1px solid #6366f130", borderRadius: 6 }}>Edit</Link>
                        <Link href={`/MematService/${s.slug}`} target="_blank" style={{ color: "#10b981", fontSize: 13, textDecoration: "none", padding: "4px 12px", border: "1px solid #10b98130", borderRadius: 6 }}>View</Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
