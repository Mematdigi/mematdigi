"use client";
import { useEffect, useState, useCallback } from "react";
import { getAllComments, updateCommentStatus, deleteComment } from "@/lib/api";
import { T, Spinner, EmptyState, Badge } from "@/components/admin/ui";
import { formatDate } from "@/lib/media";

const TABS = [
  { id: "pending", label: "Pending", color: T.amber },
  { id: "approved", label: "Approved", color: T.green },
  { id: "spam", label: "Spam", color: T.red },
  { id: "all", label: "All", color: T.primary },
];

export default function AdminComments() {
  const [comments, setComments] = useState([]);
  const [counts, setCounts] = useState({ all: 0, pending: 0, approved: 0, spam: 0 });
  const [status, setStatus] = useState("pending");
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(null);

  const load = useCallback(() => {
    setLoading(true);
    getAllComments(status).then((r) => {
      if (r.success) { setComments(r.data); setCounts(r.statusCounts); }
      setLoading(false);
    });
  }, [status]);
  useEffect(load, [load]);

  const setStatusFor = async (id, newStatus) => {
    setBusy(id);
    const res = await updateCommentStatus(id, newStatus);
    if (res.success) load();
    setBusy(null);
  };
  const remove = async (id) => {
    if (!confirm("Delete this comment permanently?")) return;
    setBusy(id);
    const res = await deleteComment(id);
    if (res.success) setComments((c) => c.filter((x) => x._id !== id));
    setBusy(null);
  };

  const statusBadge = (s) => {
    const map = { pending: T.amber, approved: T.green, spam: T.red };
    return <Badge color={map[s]}>{s}</Badge>;
  };

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ color: T.text, fontSize: 24, fontWeight: 700, margin: 0 }}>Comments</h1>
        <p style={{ color: T.muted, fontSize: 14, marginTop: 4 }}>Moderate reader comments before they appear publicly.</p>
      </div>

      <div style={{ display: "flex", gap: 4, background: T.panel, border: `1px solid ${T.border}`, borderRadius: 10, padding: 4, marginBottom: 18, width: "fit-content", flexWrap: "wrap" }}>
        {TABS.map((t) => (
          <button key={t.id} onClick={() => setStatus(t.id)}
            style={{
              padding: "7px 16px", borderRadius: 7, border: "none", cursor: "pointer", fontSize: 13,
              fontWeight: status === t.id ? 600 : 400,
              background: status === t.id ? `${t.color}20` : "transparent",
              color: status === t.id ? t.color : T.muted,
            }}>
            {t.label} ({counts[t.id] ?? 0})
          </button>
        ))}
      </div>

      {loading ? <Spinner />
        : comments.length === 0 ? (
          <div style={{ background: T.panel, border: `1px solid ${T.border}`, borderRadius: 16 }}>
            <EmptyState icon="💬" title="No comments here" desc={status === "pending" ? "No comments awaiting moderation. 🎉" : "Nothing to show in this filter."} />
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {comments.map((c) => (
              <div key={c._id} style={{ background: T.panel, border: `1px solid ${T.border}`, borderRadius: 14, padding: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: T.gradient, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>{c.name?.[0]?.toUpperCase() || "?"}</div>
                    <div>
                      <div style={{ color: "#e2e8f0", fontWeight: 600, fontSize: 14 }}>{c.name} {statusBadge(c.status)}</div>
                      <div style={{ color: T.muted, fontSize: 12 }}>{c.email} · {formatDate(c.createdAt)}</div>
                    </div>
                  </div>
                  {c.parent && <Badge color="#38bdf8">↳ reply</Badge>}
                </div>

                <p style={{ color: T.textDim, fontSize: 14, lineHeight: 1.6, margin: "0 0 12px", paddingLeft: 50 }}>{c.content}</p>

                <div style={{ paddingLeft: 50, fontSize: 12, color: T.muted, marginBottom: 12 }}>
                  on <strong style={{ color: "#a5b4fc" }}>{c.blogTitle || c.blogSlug}</strong>
                </div>

                <div style={{ display: "flex", gap: 8, paddingLeft: 50, flexWrap: "wrap" }}>
                  {c.status !== "approved" && <button onClick={() => setStatusFor(c._id, "approved")} disabled={busy === c._id} style={modBtn(T.green)}>✓ Approve</button>}
                  {c.status !== "spam" && <button onClick={() => setStatusFor(c._id, "spam")} disabled={busy === c._id} style={modBtn(T.amber)}>⚠ Spam</button>}
                  {c.status !== "pending" && <button onClick={() => setStatusFor(c._id, "pending")} disabled={busy === c._id} style={modBtn(T.muted)}>↺ Pending</button>}
                  <button onClick={() => remove(c._id)} disabled={busy === c._id} style={modBtn(T.red)}>🗑 Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
    </div>
  );
}

const modBtn = (color) => ({
  background: `${color}15`, color, border: `1px solid ${color}40`,
  padding: "6px 14px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer",
});
