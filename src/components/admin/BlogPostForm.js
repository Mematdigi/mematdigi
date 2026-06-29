"use client";
import { useState, useEffect } from "react";
import RichTextEditor from "./RichTextEditor";
import {
  T, Input, Textarea, Select, SectionCard, Grid2, Toggle, ImageUpload, TagInput, DynamicList, Button,
} from "./ui";
import { getBlogCategories, getBlogAuthors, createBlogCategory } from "@/lib/api";

const slugify = (s = "") =>
  s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");

const TABS = [
  { id: "content", label: "📝 Content" },
  { id: "media", label: "🖼 Media" },
  { id: "taxonomy", label: "🏷 Categories & Tags" },
  { id: "author", label: "👤 Author" },
  { id: "seo", label: "🔍 SEO" },
  { id: "settings", label: "⚙️ Settings" },
];

const DEFAULTS = {
  title: "", slug: "", excerpt: "", content: "",
  featuredImage: "", featuredImageAlt: "", gallery: [],
  category: "Uncategorized", categorySlug: "uncategorized", tags: [],
  author: { ref: null, name: "Memat Editorial", slug: "", role: "Author", avatar: "", bio: "" },
  status: "draft", visibility: "public", isFeatured: false, allowComments: true,
  publishedAt: "", order: 0,
  meta: {
    metaTitle: "", metaDescription: "", metaKeywords: "",
    ogTitle: "", ogDescription: "", ogImage: "",
    twitterCard: "summary_large_image", twitterTitle: "", twitterDescription: "",
    canonicalUrl: "", robots: "index, follow", customHead: "",
  },
};

export default function BlogPostForm({ initialData = {}, onSubmit, submitting, mode = "new" }) {
  const [activeTab, setActiveTab] = useState("content");
  const [categories, setCategories] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [newCat, setNewCat] = useState("");
  const [slugTouched, setSlugTouched] = useState(!!initialData.slug);

  const [form, setForm] = useState({
    ...DEFAULTS,
    ...initialData,
    author: { ...DEFAULTS.author, ...(initialData.author || {}) },
    meta: { ...DEFAULTS.meta, ...(initialData.meta || {}) },
    gallery: initialData.gallery || [],
    tags: initialData.tags || [],
    publishedAt: initialData.publishedAt ? new Date(initialData.publishedAt).toISOString().slice(0, 16) : "",
  });

  useEffect(() => {
    getBlogCategories().then((r) => r.success && setCategories(r.data));
    getBlogAuthors().then((r) => r.success && setAuthors(r.data));
  }, []);

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));
  const setMeta = (key, val) => setForm((f) => ({ ...f, meta: { ...f.meta, [key]: val } }));
  const setAuthor = (key, val) => setForm((f) => ({ ...f, author: { ...f.author, [key]: val } }));

  const onTitle = (e) => {
    const title = e.target.value;
    setForm((f) => ({ ...f, title, slug: slugTouched ? f.slug : slugify(title) }));
  };

  const onCategory = (e) => {
    const name = e.target.value;
    const found = categories.find((c) => c.name === name);
    setForm((f) => ({ ...f, category: name, categorySlug: found ? found.slug : slugify(name) }));
  };

  const onAuthorSelect = (e) => {
    const id = e.target.value;
    if (id === "manual") {
      setAuthor("ref", null);
      return;
    }
    const a = authors.find((x) => x._id === id);
    if (a) setForm((f) => ({ ...f, author: { ref: a._id, name: a.name, slug: a.slug, role: a.role, avatar: a.avatar, bio: a.bio } }));
  };

  const handleAddCategory = async () => {
    if (!newCat.trim()) return;
    const res = await createBlogCategory({ name: newCat.trim() });
    if (res.success) {
      setCategories((c) => [...c, { ...res.data, postCount: 0 }]);
      setForm((f) => ({ ...f, category: res.data.name, categorySlug: res.data.slug }));
      setNewCat("");
    } else {
      alert(res.message || "Could not create category");
    }
  };

  const submit = (statusOverride) => {
    const payload = {
      ...form,
      ...(statusOverride ? { status: statusOverride } : {}),
      publishedAt: form.publishedAt ? new Date(form.publishedAt).toISOString() : null,
      order: Number(form.order) || 0,
    };
    onSubmit(payload);
  };

  return (
    <div>
      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 20, overflowX: "auto", paddingBottom: 4 }}>
        {TABS.map((t) => (
          <button key={t.id} onClick={() => setActiveTab(t.id)}
            style={{
              padding: "8px 16px", borderRadius: 8, border: "1px solid",
              borderColor: activeTab === t.id ? T.primary : T.border,
              background: activeTab === t.id ? "#6366f120" : "transparent",
              color: activeTab === t.id ? "#a5b4fc" : T.muted,
              cursor: "pointer", fontSize: 13, fontWeight: activeTab === t.id ? 600 : 400, whiteSpace: "nowrap",
            }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      {activeTab === "content" && (
        <SectionCard title="Post Content" icon="📝">
          <Input label="Post Title" name="title" value={form.title} onChange={onTitle} placeholder="e.g. 10 SEO Strategies for 2026" required />
          <Input
            label="URL Slug" name="slug" value={form.slug}
            onChange={(e) => { setSlugTouched(true); set("slug", slugify(e.target.value)); }}
            placeholder="10-seo-strategies-2026" required
            hint={<>Public URL: <code style={{ color: "#a5b4fc" }}>/blogs/{form.slug || "your-slug"}</code></>}
          />
          <Textarea label="Excerpt / Short Description" value={form.excerpt} onChange={(e) => set("excerpt", e.target.value)}
            placeholder="A short summary shown in blog listings and meta description fallback." rows={2}
            hint={`${(form.excerpt || "").length} characters — aim for 120–160`} />
          <div style={{ marginBottom: 6, color: T.textDim, fontSize: 13, fontWeight: 500 }}>Content</div>
          <RichTextEditor value={form.content} onChange={(html) => set("content", html)} />
        </SectionCard>
      )}

      {/* MEDIA */}
      {activeTab === "media" && (
        <SectionCard title="Featured Image & Gallery" icon="🖼">
          <ImageUpload label="Featured Image" value={form.featuredImage} onChange={(v) => set("featuredImage", v)}
            hint="Shown as the hero/thumbnail. Recommended 1200×675 (16:9)." />
          <Input label="Featured Image Alt Text" value={form.featuredImageAlt} onChange={(e) => set("featuredImageAlt", e.target.value)}
            placeholder="Describe the image for accessibility & SEO" />
          <div style={{ borderTop: `1px solid ${T.border}`, margin: "8px 0 16px" }} />
          <DynamicList label="Gallery Images (optional)" items={form.gallery.map((url) => ({ url }))}
            onChange={(items) => set("gallery", items.map((i) => i.url).filter(Boolean))}
            fields={[{ name: "url", label: "Image URL", placeholder: "/uploads/... or full URL" }]} addLabel="Add Gallery Image" />
        </SectionCard>
      )}

      {/* TAXONOMY */}
      {activeTab === "taxonomy" && (
        <SectionCard title="Category & Tags" icon="🏷">
          <Select label="Category" value={form.category} onChange={onCategory}
            options={[
              ...(categories.length ? [] : [{ value: "Uncategorized", label: "Uncategorized" }]),
              ...categories.map((c) => ({ value: c.name, label: `${c.name} (${c.postCount})` })),
            ]} />
          <div style={{ display: "flex", gap: 10, marginBottom: 20, marginTop: -6 }}>
            <input value={newCat} onChange={(e) => setNewCat(e.target.value)} placeholder="Create a new category…"
              onKeyDown={(e) => e.key === "Enter" && handleAddCategory()}
              style={{ flex: 1, padding: "10px 14px", background: T.bg, border: `1px solid ${T.border}`, borderRadius: 8, color: T.text, fontSize: 13, outline: "none" }} />
            <Button variant="ghost" onClick={handleAddCategory} style={{ padding: "8px 16px" }}>+ Add</Button>
          </div>
          <TagInput label="Tags" tags={form.tags} onChange={(t) => set("tags", t)} />
        </SectionCard>
      )}

      {/* AUTHOR */}
      {activeTab === "author" && (
        <SectionCard title="Author" icon="👤">
          <Select label="Select Author" value={form.author.ref || "manual"} onChange={onAuthorSelect}
            options={[
              { value: "manual", label: "✍️ Manual entry" },
              ...authors.map((a) => ({ value: a._id, label: `${a.name} — ${a.role}` })),
            ]} />
          <Grid2>
            <Input label="Author Name" value={form.author.name} onChange={(e) => setAuthor("name", e.target.value)} placeholder="Author full name" />
            <Input label="Role / Title" value={form.author.role} onChange={(e) => setAuthor("role", e.target.value)} placeholder="e.g. Lead Strategist" />
          </Grid2>
          <ImageUpload label="Author Avatar" value={form.author.avatar} onChange={(v) => setAuthor("avatar", v)} />
          <Textarea label="Author Bio" value={form.author.bio} onChange={(e) => setAuthor("bio", e.target.value)} rows={2} />
        </SectionCard>
      )}

      {/* SEO */}
      {activeTab === "seo" && (
        <SectionCard title="SEO & Social Meta" icon="🔍">
          <div style={{ background: "#6366f115", border: "1px solid #6366f130", borderRadius: 8, padding: "12px 16px", marginBottom: 20, color: "#a5b4fc", fontSize: 13 }}>
            💡 Leave blank to auto-fall-back to the post title & excerpt. These tags render server-side for full SEO.
          </div>

          {/* Google preview */}
          <div style={{ background: "#fff", borderRadius: 8, padding: "14px 16px", marginBottom: 20 }}>
            <div style={{ color: "#1a0dab", fontSize: 18, lineHeight: 1.3, marginBottom: 2, fontFamily: "arial" }}>
              {form.meta.metaTitle || form.title || "Post title preview"}
            </div>
            <div style={{ color: "#006621", fontSize: 13, fontFamily: "arial" }}>mematdigi.com › blogs › {form.slug || "your-slug"}</div>
            <div style={{ color: "#545454", fontSize: 13, fontFamily: "arial", lineHeight: 1.4 }}>
              {form.meta.metaDescription || form.excerpt || "Meta description preview appears here…"}
            </div>
          </div>

          <Grid2>
            <Input label="Meta Title" value={form.meta.metaTitle} onChange={(e) => setMeta("metaTitle", e.target.value)} placeholder={form.title} hint={`${(form.meta.metaTitle || "").length}/60`} />
            <Input label="Meta Keywords" value={form.meta.metaKeywords} onChange={(e) => setMeta("metaKeywords", e.target.value)} placeholder="seo, marketing, india" />
          </Grid2>
          <Textarea label="Meta Description" value={form.meta.metaDescription} onChange={(e) => setMeta("metaDescription", e.target.value)} rows={2} placeholder={form.excerpt} hint={`${(form.meta.metaDescription || "").length}/160`} />

          <div style={{ borderTop: `1px solid ${T.border}`, margin: "20px 0", paddingTop: 16 }}>
            <div style={{ color: T.textDim, fontSize: 13, fontWeight: 600, marginBottom: 14 }}>Open Graph (Facebook / LinkedIn)</div>
            <Grid2>
              <Input label="OG Title" value={form.meta.ogTitle} onChange={(e) => setMeta("ogTitle", e.target.value)} />
              <ImageUpload label="OG Image (1200×630)" value={form.meta.ogImage} onChange={(v) => setMeta("ogImage", v)} />
            </Grid2>
            <Textarea label="OG Description" value={form.meta.ogDescription} onChange={(e) => setMeta("ogDescription", e.target.value)} rows={2} />
          </div>

          <div style={{ borderTop: `1px solid ${T.border}`, margin: "20px 0", paddingTop: 16 }}>
            <div style={{ color: T.textDim, fontSize: 13, fontWeight: 600, marginBottom: 14 }}>Twitter / X Card</div>
            <Grid2>
              <Input label="Twitter Title" value={form.meta.twitterTitle} onChange={(e) => setMeta("twitterTitle", e.target.value)} />
              <Select label="Card Type" value={form.meta.twitterCard} onChange={(e) => setMeta("twitterCard", e.target.value)}
                options={[{ value: "summary_large_image", label: "Summary Large Image" }, { value: "summary", label: "Summary" }]} />
            </Grid2>
            <Textarea label="Twitter Description" value={form.meta.twitterDescription} onChange={(e) => setMeta("twitterDescription", e.target.value)} rows={2} />
          </div>

          <div style={{ borderTop: `1px solid ${T.border}`, margin: "20px 0", paddingTop: 16 }}>
            <div style={{ color: T.textDim, fontSize: 13, fontWeight: 600, marginBottom: 14 }}>Advanced</div>
            <Grid2>
              <Input label="Canonical URL" value={form.meta.canonicalUrl} onChange={(e) => setMeta("canonicalUrl", e.target.value)} placeholder="https://mematdigi.com/blogs/..." />
              <Select label="Robots" value={form.meta.robots} onChange={(e) => setMeta("robots", e.target.value)}
                options={[
                  { value: "index, follow", label: "index, follow" },
                  { value: "noindex, follow", label: "noindex, follow" },
                  { value: "index, nofollow", label: "index, nofollow" },
                  { value: "noindex, nofollow", label: "noindex, nofollow" },
                ]} />
            </Grid2>
            <Textarea label="Custom <head> HTML (schema, scripts)" value={form.meta.customHead} onChange={(e) => setMeta("customHead", e.target.value)} rows={3} placeholder="<script type=&quot;application/ld+json&quot;>…</script>" />
          </div>
        </SectionCard>
      )}

      {/* SETTINGS */}
      {activeTab === "settings" && (
        <SectionCard title="Publishing Settings" icon="⚙️">
          <Grid2>
            <Select label="Status" value={form.status} onChange={(e) => set("status", e.target.value)}
              options={[
                { value: "draft", label: "📝 Draft" },
                { value: "published", label: "✅ Published" },
                { value: "scheduled", label: "⏰ Scheduled" },
              ]} />
            <Select label="Visibility" value={form.visibility} onChange={(e) => set("visibility", e.target.value)}
              options={[{ value: "public", label: "🌐 Public" }, { value: "private", label: "🔒 Private" }]} />
          </Grid2>
          <Grid2>
            <Input label="Publish Date & Time" type="datetime-local" value={form.publishedAt} onChange={(e) => set("publishedAt", e.target.value)}
              hint="Used for ordering & scheduling. Leave blank to set automatically on publish." />
            <Input label="Display Order" type="number" value={form.order} onChange={(e) => set("order", e.target.value)} hint="Lower numbers can be prioritised." />
          </Grid2>
          <div style={{ borderTop: `1px solid ${T.border}`, margin: "8px 0 16px" }} />
          <Toggle checked={form.isFeatured} onChange={(v) => set("isFeatured", v)} label="Featured Post" desc="Highlighted on listings and homepage." />
          <Toggle checked={form.allowComments} onChange={(v) => set("allowComments", v)} label="Allow Comments" desc="Let visitors submit comments (held for moderation)." />
        </SectionCard>
      )}

      {/* Sticky action bar */}
      <div style={{
        position: "sticky", bottom: 0, marginTop: 24, padding: "16px 0",
        background: "linear-gradient(to top, #0f172a, #0f172af0 70%, transparent)",
        display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", borderTop: `1px solid ${T.border}`,
      }}>
        <Button onClick={() => submit("published")} disabled={submitting}>
          {submitting ? "Saving…" : mode === "edit" ? "💾 Update & Publish" : "🚀 Publish"}
        </Button>
        <Button variant="ghost" onClick={() => submit("draft")} disabled={submitting} style={{ padding: "10px 20px" }}>
          💾 Save Draft
        </Button>
        <span style={{ color: T.muted, fontSize: 13, marginLeft: "auto" }}>
          {form.status === "published" ? "🟢 Will be live" : form.status === "scheduled" ? "🟡 Scheduled" : "⚪ Draft"}
          {" · "}{form.tags.length} tag{form.tags.length !== 1 ? "s" : ""}
        </span>
      </div>
    </div>
  );
}
