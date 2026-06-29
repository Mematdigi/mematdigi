"use client";
import { useEffect, useState, useCallback } from "react";
import { getEnquiries, updateEnquiryStatus, deleteEnquiry } from "@/lib/api";
import { T, Spinner, EmptyState, Badge } from "@/components/admin/ui";
import { formatDate } from "@/lib/media";

const TABS = [
  { id: "new", label: "New", color: T.green },
  { id: "read", label: "Read", color: "#38bdf8" },
  { id: "replied", label: "Replied", color: T.primary },
  { id: "archived", label: "Archived", color: T.muted },
  { id: "all", label: "All", color: T.primary2 },
];

const statusColor = (s) => ({ new: T.green, read: "#38bdf8", replied: T.primary, archived: T.muted }[s] || T.muted);

export default function AdminEnquiries() {
  const [items, setItems] = useState([]);
  const [counts, setCounts] = useState({ all: 0, new: 0, read: 0, replied: 0, archived: 0 });
  const [status, setStatus] = useState("new");
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(null);
  const [busy, setBusy] = useState(null);

  const load = useCallback(() => {
    setLoading(true);
    getEnquiries(status).then((r) => {
      if (r.success) { setItems(r.data); setCounts(r.statusCounts); }
      setLoading(false);
    });
  }, [status]);
  useEffect(load, [load]);

  const changeStatus = async (id, newStatus) => {
    setBusy(id);
    const res = await updateEnquiryStatus(id, newStatus);
    if (res.success) load();
    setBusy(null);
  };
  const remove = async (id) => {
    if (!confirm("Delete this enquiry?")) return;
    setBusy(id);
    const res = await deleteEnquiry(id);
    if (res.success) setItems((x) => x.filter((e) => e._id !== id));
    setBusy(null);
  };
  const openItem = (e) => {
    setExpanded(expanded === e._id ? null : e._id);
    if (e.status === "new") changeStatus(e._id, "read");
  };

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ color: T.text, fontSize: 24, fontWeight: 700, margin: 0 }}>Enquiries</h1>
        <p style={{ color: T.muted, fontSize: 14, marginTop: 4 }}>Messages submitted through your contact & blog forms.</p>
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
        : items.length === 0 ? (
          <div style={{ background: T.panel, border: `1px solid ${T.border}`, borderRadius: 16 }}>
            <EmptyState icon="📨" title="No enquiries" desc="New messages from your forms will land here." />
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {items.map((e) => (
              <div key={e._id} style={{ background: T.panel, border: `1px solid ${e.status === "new" ? "#10b98140" : T.border}`, borderRadius: 14, overflow: "hidden" }}>
                <div onClick={() => openItem(e)} style={{ padding: "16px 18px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: T.gradient, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, flexShrink: 0 }}>{e.name?.[0]?.toUpperCase()}</div>
                    <div style={{ minWidth: 0 }}>
                      <div style={{ color: "#e2e8f0", fontWeight: 600, fontSize: 14 }}>{e.name} {e.status === "new" && <span style={{ color: T.green, fontSize: 11 }}>● new</span>}</div>
                      <div style={{ color: T.muted, fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: 420 }}>{e.subject || e.message}</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Badge color={statusColor(e.status)}>{e.status}</Badge>
                    <span style={{ color: T.muted, fontSize: 12, whiteSpace: "nowrap" }}>{formatDate(e.createdAt)}</span>
                  </div>
                </div>

                {expanded === e._id && (
                  <div style={{ padding: "0 18px 18px", borderTop: `1px solid ${T.border}` }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 10, padding: "14px 0" }}>
                      <Field label="Email" value={<a href={`mailto:${e.email}`} style={{ color: "#a5b4fc" }}>{e.email}</a>} />
                      {e.phone && <Field label="Phone" value={e.phone} />}
                      {e.source && <Field label="Source" value={e.source} />}
                    </div>
                    <div style={{ color: T.muted, fontSize: 12, marginBottom: 6 }}>Message</div>
                    <p style={{ color: T.textDim, fontSize: 14, lineHeight: 1.6, background: T.bg, padding: 14, borderRadius: 10, margin: "0 0 14px" }}>{e.message}</p>
                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                      <a href={`mailto:${e.email}?subject=Re: ${encodeURIComponent(e.subject || "Your enquiry")}`} onClick={() => changeStatus(e._id, "replied")} style={modBtn(T.primary)}>✉ Reply</a>
                      {e.status !== "replied" && <button onClick={() => changeStatus(e._id, "replied")} style={modBtn(T.green)}>✓ Mark Replied</button>}
                      {e.status !== "archived" && <button onClick={() => changeStatus(e._id, "archived")} style={modBtn(T.muted)}>📦 Archive</button>}
                      <button onClick={() => remove(e._id)} style={modBtn(T.red)}>🗑 Delete</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
    </div>
  );
}

const Field = ({ label, value }) => (
  <div>
    <div style={{ color: T.muted, fontSize: 11, textTransform: "uppercase", marginBottom: 3 }}>{label}</div>
    <div style={{ color: "#e2e8f0", fontSize: 13 }}>{value}</div>
  </div>
);

const modBtn = (color) => ({
  background: `${color}15`, color, border: `1px solid ${color}40`,
  padding: "6px 14px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", textDecoration: "none", display: "inline-block",
});
