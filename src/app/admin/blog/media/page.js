"use client";
import { useEffect, useState, useCallback } from "react";
import { getMedia, updateMedia, deleteMedia, uploadMultipleImages } from "@/lib/api";
import { T, Spinner, EmptyState, Modal, Input, Button } from "@/components/admin/ui";
import { resolveImg, formatDate } from "@/lib/media";

export default function AdminMedia() {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState({ totalPages: 1 });
  const [editItem, setEditItem] = useState(null);
  const [altText, setAltText] = useState("");
  const [copied, setCopied] = useState(null);

  const API_BASE = process.env.NEXT_PUBLIC_API_URL?.replace("/api", "") || "http://localhost:5000";

  const load = useCallback(() => {
    setLoading(true);
    getMedia({ search, page, limit: 24 }).then((r) => {
      if (r.success) { setMedia(r.data); setPagination(r.pagination); }
      setLoading(false);
    });
  }, [search, page]);
  useEffect(load, [load]);

  const handleUpload = async (e) => {
    const files = e.target.files;
    if (!files?.length) return;
    setUploading(true);
    const res = await uploadMultipleImages(files);
    setUploading(false);
    e.target.value = "";
    if (res.success) { setPage(1); load(); }
    else alert(res.message || "Upload failed");
  };

  const saveAlt = async () => {
    const res = await updateMedia(editItem._id, altText);
    if (res.success) { setMedia((m) => m.map((x) => (x._id === editItem._id ? { ...x, alt: altText } : x))); setEditItem(null); }
  };

  const remove = async (item) => {
    if (!confirm("Delete this media file? This removes it from disk.")) return;
    const res = await deleteMedia(item._id);
    if (res.success) setMedia((m) => m.filter((x) => x._id !== item._id));
  };

  const copyUrl = (item) => {
    const url = resolveImg(item.url);
    navigator.clipboard?.writeText(url);
    setCopied(item._id);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={{ color: T.text, fontSize: 24, fontWeight: 700, margin: 0 }}>Media Library</h1>
          <p style={{ color: T.muted, fontSize: 14, marginTop: 4 }}>All uploaded images in one place.</p>
        </div>
        <label style={{ background: T.gradient, color: "#fff", padding: "10px 20px", borderRadius: 10, cursor: uploading ? "wait" : "pointer", fontSize: 14, fontWeight: 600, boxShadow: "0 4px 16px #6366f140" }}>
          {uploading ? "Uploading…" : "+ Upload Images"}
          <input type="file" accept="image/*" multiple onChange={handleUpload} style={{ display: "none" }} disabled={uploading} />
        </label>
      </div>

      <input value={search} onChange={(e) => { setPage(1); setSearch(e.target.value); }} placeholder="🔍 Search by filename or alt text…"
        style={{ width: "100%", maxWidth: 360, padding: "10px 14px", background: T.panel, border: `1px solid ${T.border}`, borderRadius: 10, color: T.text, fontSize: 13, outline: "none", marginBottom: 20, boxSizing: "border-box" }} />

      {loading ? <Spinner />
        : media.length === 0 ? (
          <div style={{ background: T.panel, border: `1px solid ${T.border}`, borderRadius: 16 }}>
            <EmptyState icon="🖼" title="No media yet" desc="Upload images to build your library." />
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 16 }}>
            {media.map((item) => (
              <div key={item._id} style={{ background: T.panel, border: `1px solid ${T.border}`, borderRadius: 12, overflow: "hidden" }}>
                <div style={{ height: 130, background: T.bg, position: "relative" }}>
                  <img src={resolveImg(item.url)} alt={item.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => (e.target.style.opacity = 0.2)} />
                </div>
                <div style={{ padding: 10 }}>
                  <div style={{ color: "#e2e8f0", fontSize: 12, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }} title={item.originalname}>{item.originalname || item.filename}</div>
                  <div style={{ color: T.muted, fontSize: 11, marginTop: 2 }}>{item.size ? `${(item.size / 1024).toFixed(0)} KB` : ""} · {formatDate(item.createdAt)}</div>
                  <div style={{ display: "flex", gap: 5, marginTop: 8 }}>
                    <button onClick={() => copyUrl(item)} style={tinyBtn(copied === item._id ? T.green : T.primary)}>{copied === item._id ? "✓ Copied" : "Copy URL"}</button>
                    <button onClick={() => { setEditItem(item); setAltText(item.alt || ""); }} style={tinyBtn(T.muted)}>Alt</button>
                    <button onClick={() => remove(item)} style={tinyBtn(T.red)}>🗑</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      {pagination.totalPages > 1 && (
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 24 }}>
          {Array.from({ length: pagination.totalPages }).map((_, i) => (
            <button key={i} onClick={() => setPage(i + 1)}
              style={{ width: 36, height: 36, borderRadius: 8, border: `1px solid ${page === i + 1 ? T.primary : T.border}`, background: page === i + 1 ? "#6366f120" : T.panel, color: page === i + 1 ? "#a5b4fc" : T.muted, cursor: "pointer", fontSize: 13 }}>
              {i + 1}
            </button>
          ))}
        </div>
      )}

      <Modal open={!!editItem} onClose={() => setEditItem(null)} title="Edit Alt Text">
        {editItem && (
          <>
            <img src={resolveImg(editItem.url)} alt="" style={{ width: "100%", borderRadius: 10, marginBottom: 16, maxHeight: 240, objectFit: "contain", background: T.bg }} />
            <Input label="Alt Text" value={altText} onChange={(e) => setAltText(e.target.value)} placeholder="Describe this image for SEO & accessibility" />
            <div style={{ background: T.bg, padding: "8px 12px", borderRadius: 8, color: "#a5b4fc", fontSize: 12, marginBottom: 16, wordBreak: "break-all" }}>{resolveImg(editItem.url)}</div>
            <div style={{ display: "flex", gap: 10 }}>
              <Button onClick={saveAlt}>Save</Button>
              <Button variant="ghost" onClick={() => setEditItem(null)}>Cancel</Button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}

const tinyBtn = (color) => ({
  flex: 1, background: `${color}15`, color, border: `1px solid ${color}30`,
  padding: "5px 6px", borderRadius: 6, fontSize: 11, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap",
});
