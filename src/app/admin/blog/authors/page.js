"use client";
import { useEffect, useState } from "react";
import { getBlogAuthors, createBlogAuthor, updateBlogAuthor, deleteBlogAuthor } from "@/lib/api";
import { T, Spinner, EmptyState, Modal, Input, Textarea, ImageUpload, Grid2, Button, Badge } from "@/components/admin/ui";

const EMPTY = {
  name: "", slug: "", role: "Author", email: "", bio: "", avatar: "",
  socials: { facebook: "", twitter: "", linkedin: "", instagram: "", website: "" },
};

export default function AdminAuthors() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);

  const load = () => {
    setLoading(true);
    getBlogAuthors().then((r) => { if (r.success) setAuthors(r.data); setLoading(false); });
  };
  useEffect(load, []);

  const openNew = () => { setEditing(null); setForm(EMPTY); setModalOpen(true); };
  const openEdit = (a) => {
    setEditing(a);
    setForm({ ...EMPTY, ...a, socials: { ...EMPTY.socials, ...(a.socials || {}) } });
    setModalOpen(true);
  };

  const setSocial = (k, v) => setForm((f) => ({ ...f, socials: { ...f.socials, [k]: v } }));

  const save = async () => {
    if (!form.name.trim()) return alert("Author name is required.");
    setSaving(true);
    const res = editing ? await updateBlogAuthor(editing._id, form) : await createBlogAuthor(form);
    setSaving(false);
    if (res.success) { setModalOpen(false); load(); }
    else alert(res.message || "Save failed");
  };

  const remove = async (a) => {
    if (!confirm(`Delete author "${a.name}"?`)) return;
    const res = await deleteBlogAuthor(a._id);
    if (res.success) load();
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={{ color: T.text, fontSize: 24, fontWeight: 700, margin: 0 }}>Authors</h1>
          <p style={{ color: T.muted, fontSize: 14, marginTop: 4 }}>Manage the people who write your posts.</p>
        </div>
        <Button onClick={openNew}>+ New Author</Button>
      </div>

      {loading ? <Spinner />
        : authors.length === 0 ? (
          <div style={{ background: T.panel, border: `1px solid ${T.border}`, borderRadius: 16 }}>
            <EmptyState icon="👤" title="No authors yet" desc="Add an author to attribute your posts." action={<Button onClick={openNew}>+ New Author</Button>} />
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {authors.map((a) => (
              <div key={a._id} style={{ background: T.panel, border: `1px solid ${T.border}`, borderRadius: 14, padding: 20 }}>
                <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 14 }}>
                  {a.avatar
                    ? <img src={a.avatar} alt="" style={{ width: 56, height: 56, borderRadius: "50%", objectFit: "cover" }} onError={(e) => (e.target.style.display = "none")} />
                    : <div style={{ width: 56, height: 56, borderRadius: "50%", background: T.gradient, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 22, fontWeight: 700 }}>{a.name[0]}</div>}
                  <div>
                    <div style={{ color: "#e2e8f0", fontWeight: 600, fontSize: 16 }}>{a.name}</div>
                    <div style={{ color: T.muted, fontSize: 13 }}>{a.role}</div>
                    <div style={{ marginTop: 4 }}><Badge>{a.postCount} posts</Badge></div>
                  </div>
                </div>
                {a.bio && <p style={{ color: T.textDim, fontSize: 13, lineHeight: 1.5, marginBottom: 14 }}>{a.bio}</p>}
                <div style={{ display: "flex", gap: 8 }}>
                  <button onClick={() => openEdit(a)} style={{ flex: 1, color: T.primary, fontSize: 13, padding: "7px", border: "1px solid #6366f140", borderRadius: 8, background: "transparent", cursor: "pointer" }}>Edit</button>
                  <button onClick={() => remove(a)} style={{ color: "#f87171", fontSize: 13, padding: "7px 14px", border: "1px solid #ef444440", borderRadius: 8, background: "transparent", cursor: "pointer" }}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? "Edit Author" : "New Author"} width={580}>
        <Grid2>
          <Input label="Name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} required />
          <Input label="Role / Title" value={form.role} onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))} placeholder="e.g. Lead Strategist" />
        </Grid2>
        <Input label="Email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} placeholder="author@mematdigi.com" />
        <ImageUpload label="Avatar" value={form.avatar} onChange={(v) => setForm((f) => ({ ...f, avatar: v }))} />
        <Textarea label="Bio" value={form.bio} onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))} rows={2} />
        <div style={{ color: T.textDim, fontSize: 13, fontWeight: 600, margin: "8px 0 12px", borderTop: `1px solid ${T.border}`, paddingTop: 14 }}>Social Links</div>
        <Grid2>
          <Input label="LinkedIn" value={form.socials.linkedin} onChange={(e) => setSocial("linkedin", e.target.value)} />
          <Input label="Twitter / X" value={form.socials.twitter} onChange={(e) => setSocial("twitter", e.target.value)} />
          <Input label="Facebook" value={form.socials.facebook} onChange={(e) => setSocial("facebook", e.target.value)} />
          <Input label="Instagram" value={form.socials.instagram} onChange={(e) => setSocial("instagram", e.target.value)} />
        </Grid2>
        <Input label="Website" value={form.socials.website} onChange={(e) => setSocial("website", e.target.value)} />
        <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
          <Button onClick={save} disabled={saving}>{saving ? "Saving…" : editing ? "Update" : "Create"}</Button>
          <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
        </div>
      </Modal>
    </div>
  );
}
