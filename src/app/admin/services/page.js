"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllServices, deleteService, togglePublish } from "@/lib/api";

export default function AdminServicesList() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionId, setActionId] = useState(null);

  const fetchServices = () => {
    setLoading(true);
    getAllServices(true).then((res) => {
      if (res.success) setServices(res.data);
      setLoading(false);
    });
  };

  useEffect(() => { fetchServices(); }, []);

  const handleToggle = async (id) => {
    setActionId(id);
    const res = await togglePublish(id);
    if (res.success) {
      setServices((prev) => prev.map((s) => s._id === id ? { ...s, isPublished: res.isPublished } : s));
    }
    setActionId(null);
  };

  const handleDelete = async (id, title) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    setActionId(id);
    const res = await deleteService(id);
    if (res.success) {
      setServices((prev) => prev.filter((s) => s._id !== id));
    }
    setActionId(null);
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
        <div>
          <h1 style={{ color: "#f1f5f9", fontSize: 24, fontWeight: 700, margin: 0 }}>Service Pages</h1>
          <p style={{ color: "#64748b", fontSize: 14, marginTop: 4 }}>Manage all dynamic service pages</p>
        </div>
        <Link href="/admin/services/new" style={{
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "#fff", padding: "10px 20px", borderRadius: 10,
          textDecoration: "none", fontSize: 14, fontWeight: 600,
          boxShadow: "0 4px 16px #6366f140",
        }}>
          + New Service Page
        </Link>
      </div>

      {/* Table */}
      <div style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 16, overflow: "hidden" }}>
        {loading ? (
          <div style={{ padding: 60, textAlign: "center", color: "#64748b" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
            Loading service pages...
          </div>
        ) : services.length === 0 ? (
          <div style={{ padding: 80, textAlign: "center" }}>
            <div style={{ fontSize: 52, marginBottom: 16 }}>📄</div>
            <h3 style={{ color: "#e2e8f0", marginBottom: 8 }}>No service pages yet</h3>
            <p style={{ color: "#64748b", marginBottom: 24 }}>Create your first dynamic service page to get started.</p>
            <Link href="/admin/services/new" style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)", color: "#fff", padding: "12px 24px", borderRadius: 10, textDecoration: "none", fontWeight: 600 }}>
              Create First Page
            </Link>
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#0f172a", borderBottom: "1px solid #334155" }}>
                  {["Title", "Slug", "Status", "Created", "Actions"].map((h) => (
                    <th key={h} style={{ padding: "14px 20px", textAlign: "left", color: "#64748b", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {services.map((s) => (
                  <tr key={s._id}
                    style={{ borderBottom: "1px solid #334155", transition: "background 0.1s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "#0f172a80"}
                    onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                  >
                    <td style={{ padding: "16px 20px" }}>
                      <div style={{ color: "#e2e8f0", fontSize: 14, fontWeight: 600 }}>{s.title}</div>
                      {s.shortTitle && <div style={{ color: "#64748b", fontSize: 12, marginTop: 2 }}>{s.shortTitle}</div>}
                    </td>
                    <td style={{ padding: "16px 20px" }}>
                      <code style={{ background: "#0f172a", color: "#a5b4fc", padding: "3px 10px", borderRadius: 6, fontSize: 12 }}>
                        /MematService/{s.slug}
                      </code>
                    </td>
                    <td style={{ padding: "16px 20px" }}>
                      <button
                        onClick={() => handleToggle(s._id)}
                        disabled={actionId === s._id}
                        style={{
                          background: s.isPublished ? "#10b98120" : "#f59e0b20",
                          color: s.isPublished ? "#34d399" : "#fbbf24",
                          border: `1px solid ${s.isPublished ? "#10b98140" : "#f59e0b40"}`,
                          padding: "5px 14px", borderRadius: 20, fontSize: 12,
                          fontWeight: 600, cursor: "pointer",
                        }}
                      >
                        {actionId === s._id ? "..." : s.isPublished ? "✅ Published" : "📝 Draft"}
                      </button>
                    </td>
                    <td style={{ padding: "16px 20px", color: "#64748b", fontSize: 13 }}>
                      {new Date(s.createdAt).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                    </td>
                    <td style={{ padding: "16px 20px" }}>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        <Link href={`/admin/services/${s._id}`}
                          style={{ color: "#6366f1", fontSize: 13, textDecoration: "none", padding: "6px 14px", border: "1px solid #6366f140", borderRadius: 8, fontWeight: 500 }}>
                          ✏️ Edit
                        </Link>
                        <Link href={`/MematService/${s.slug}`} target="_blank"
                          style={{ color: "#10b981", fontSize: 13, textDecoration: "none", padding: "6px 14px", border: "1px solid #10b98140", borderRadius: 8, fontWeight: 500 }}>
                          🔗 View
                        </Link>
                        <button onClick={() => handleDelete(s._id, s.title)} disabled={actionId === s._id}
                          style={{ color: "#f87171", fontSize: 13, padding: "6px 14px", border: "1px solid #ef444440", borderRadius: 8, background: "transparent", cursor: "pointer", fontWeight: 500 }}>
                          🗑️ Delete
                        </button>
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
