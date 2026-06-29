"use client";
import { useEffect, useState } from "react";
import {
  getBlogCategories, createBlogCategory, updateBlogCategory, deleteBlogCategory,
} from "@/lib/api";
import { T, Spinner, EmptyState, Modal, Input, Textarea, ImageUpload, Button, Badge } from "@/components/admin/ui";

export default function AdminCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", slug: "", description: "", image: "" });
  const [saving, setSaving] = useState(false);

  const load = () => {
    setLoading(true);
    getBlogCategories().then((r) => { if (r.success) setCategories(r.data); setLoading(false); });
  };
  useEffect(load, []);

  const openNew = () => { setEditing(null); setForm({ name: "", slug: "", description: "", image: "" }); setModalOpen(true); };
  const openEdit = (c) => { setEditing(c); setForm({ name: c.name, slug: c.slug, description: c.description || "", image: c.image || "" }); setModalOpen(true); };

  const save = async () => {
    if (!form.name.trim()) return alert("Category name is required.");
    setSaving(true);
    const res = editing ? await updateBlogCategory(editing._id, form) : await createBlogCategory(form);
    setSaving(false);
    if (res.success) { setModalOpen(false); load(); }
    else alert(res.message || "Save failed");
  };

  const remove = async (c) => {
    if (!confirm(`Delete category "${c.name}"? Posts will move to "Uncategorized".`)) return;
    const res = await deleteBlogCategory(c._id);
    if (res.success) load();
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h1 style={{ color: T.text, fontSize: 24, fontWeight: 700, margin: 0 }}>Categories</h1>
          <p style={{ color: T.muted, fontSize: 14, marginTop: 4 }}>Organize your posts into topics.</p>
        </div>
        <Button onClick={openNew}>+ New Category</Button>
      </div>

      <div style={{ background: T.panel, border: `1px solid ${T.border}`, borderRadius: 16, overflow: "hidden" }}>
        {loading ? <Spinner />
          : categories.length === 0 ? <EmptyState icon="🏷" title="No categories yet" desc="Create your first category to organize posts." action={<Button onClick={openNew}>+ New Category</Button>} />
          : (
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: T.bg, borderBottom: `1px solid ${T.border}` }}>
                  {["Category", "Slug", "Posts", ""].map((h) => (
                    <th key={h} style={{ padding: "12px 16px", textAlign: "left", color: T.muted, fontSize: 12, fontWeight: 600, textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {categories.map((c) => (
                  <tr key={c._id} style={{ borderBottom: `1px solid ${T.border}` }}>
                    <td style={{ padding: "12px 16px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        {c.image
                          ? <img src={c.image} alt="" style={{ width: 38, height: 38, borderRadius: 8, objectFit: "cover" }} onError={(e) => (e.target.style.display = "none")} />
                          : <div style={{ width: 38, height: 38, borderRadius: 8, background: "#6366f120", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🏷</div>}
                        <div>
                          <div style={{ color: "#e2e8f0", fontWeight: 600, fontSize: 14 }}>{c.name}</div>
                          {c.description && <div style={{ color: T.muted, fontSize: 12, maxWidth: 360, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c.description}</div>}
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: "12px 16px", color: T.textDim, fontSize: 13 }}><code style={{ color: "#a5b4fc" }}>{c.slug}</code></td>
                    <td style={{ padding: "12px 16px" }}><Badge>{c.postCount} posts</Badge></td>
                    <td style={{ padding: "12px 16px" }}>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button onClick={() => openEdit(c)} style={actionBtn(T.primary)}>Edit</button>
                        <button onClick={() => remove(c)} style={actionBtn(T.red)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editing ? "Edit Category" : "New Category"}>
        <Input label="Name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} placeholder="e.g. Digital Marketing" required />
        <Input label="Slug (optional)" value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))} placeholder="auto-generated from name" hint="Leave blank to auto-generate." />
        <Textarea label="Description" value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} rows={2} />
        <ImageUpload label="Category Image (optional)" value={form.image} onChange={(v) => setForm((f) => ({ ...f, image: v }))} />
        <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
          <Button onClick={save} disabled={saving}>{saving ? "Saving…" : editing ? "Update" : "Create"}</Button>
          <Button variant="ghost" onClick={() => setModalOpen(false)}>Cancel</Button>
        </div>
      </Modal>
    </div>
  );
}

const actionBtn = (color) => ({
  color, fontSize: 13, padding: "5px 12px", border: `1px solid ${color}40`, borderRadius: 7, background: "transparent", cursor: "pointer",
});
