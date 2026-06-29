"use client";
import { useState } from "react";
import { uploadImage } from "@/lib/api";

// ── Helpers ──────────────────────────────────────────────────────────────────

const generateSlug = (title) =>
  title.toLowerCase().trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

const Input = ({ label, name, value, onChange, placeholder, type = "text", required }) => (
  <div style={{ marginBottom: 16 }}>
    {label && <label style={{ display: "block", color: "#94a3b8", fontSize: 13, fontWeight: 500, marginBottom: 6 }}>{label}{required && <span style={{ color: "#f87171" }}> *</span>}</label>}
    <input
      type={type} name={name} value={value || ""} onChange={onChange}
      placeholder={placeholder} required={required}
      style={{ width: "100%", padding: "10px 14px", background: "#0f172a", border: "1px solid #334155", borderRadius: 8, color: "#f1f5f9", fontSize: 14, outline: "none", boxSizing: "border-box" }}
      onFocus={e => e.target.style.borderColor = "#6366f1"}
      onBlur={e => e.target.style.borderColor = "#334155"}
    />
  </div>
);

const Textarea = ({ label, name, value, onChange, placeholder, rows = 3 }) => (
  <div style={{ marginBottom: 16 }}>
    {label && <label style={{ display: "block", color: "#94a3b8", fontSize: 13, fontWeight: 500, marginBottom: 6 }}>{label}</label>}
    <textarea
      name={name} value={value || ""} onChange={onChange}
      placeholder={placeholder} rows={rows}
      style={{ width: "100%", padding: "10px 14px", background: "#0f172a", border: "1px solid #334155", borderRadius: 8, color: "#f1f5f9", fontSize: 14, outline: "none", boxSizing: "border-box", resize: "vertical" }}
      onFocus={e => e.target.style.borderColor = "#6366f1"}
      onBlur={e => e.target.style.borderColor = "#334155"}
    />
  </div>
);

const SectionCard = ({ title, icon, children }) => (
  <div style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: 14, marginBottom: 20, overflow: "hidden" }}>
    <div style={{ padding: "16px 20px", borderBottom: "1px solid #334155", display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ fontSize: 18 }}>{icon}</span>
      <h3 style={{ color: "#e2e8f0", fontSize: 15, fontWeight: 600, margin: 0 }}>{title}</h3>
    </div>
    <div style={{ padding: 20 }}>{children}</div>
  </div>
);

const Grid2 = ({ children }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>{children}</div>
);

// ── Image upload field ──────────────────────────────────────────────────────

const ImageUpload = ({ label, value, onChange, apiBase }) => {
  const [uploading, setUploading] = useState(false);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const res = await uploadImage(file);
    if (res.success) {
      const fullUrl = `${apiBase || "http://localhost:5000"}${res.url}`;
      onChange(fullUrl);
    } else {
      alert("Upload failed: " + res.message);
    }
    setUploading(false);
  };

  return (
    <div style={{ marginBottom: 16 }}>
      {label && <label style={{ display: "block", color: "#94a3b8", fontSize: 13, fontWeight: 500, marginBottom: 6 }}>{label}</label>}
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <input
          type="text" value={value || ""} onChange={(e) => onChange(e.target.value)}
          placeholder="Image URL or upload below"
          style={{ flex: 1, padding: "10px 14px", background: "#0f172a", border: "1px solid #334155", borderRadius: 8, color: "#f1f5f9", fontSize: 13, outline: "none" }}
        />
        <label style={{ background: "#334155", color: "#94a3b8", padding: "10px 14px", borderRadius: 8, cursor: uploading ? "not-allowed" : "pointer", fontSize: 13, whiteSpace: "nowrap" }}>
          {uploading ? "Uploading..." : "📁 Upload"}
          <input type="file" accept="image/*" onChange={handleFile} style={{ display: "none" }} disabled={uploading} />
        </label>
      </div>
      {value && (
        <img src={value} alt="preview" style={{ marginTop: 8, height: 80, borderRadius: 6, border: "1px solid #334155", objectFit: "cover" }} onError={e => e.target.style.display = "none"} />
      )}
    </div>
  );
};

// ── Dynamic list: FAQ / Features / Service Cards ───────────────────────────

const DynamicList = ({ label, items, onChange, fields }) => {
  const add = () => {
    const blank = {};
    fields.forEach(f => blank[f.name] = "");
    onChange([...items, blank]);
  };
  const remove = (i) => onChange(items.filter((_, idx) => idx !== i));
  const update = (i, key, val) => {
    const copy = [...items];
    copy[i] = { ...copy[i], [key]: val };
    onChange(copy);
  };

  return (
    <div style={{ marginBottom: 16 }}>
      {label && <div style={{ color: "#94a3b8", fontSize: 13, fontWeight: 500, marginBottom: 10 }}>{label}</div>}
      {items.map((item, i) => (
        <div key={i} style={{ background: "#0f172a", border: "1px solid #334155", borderRadius: 8, padding: 14, marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <span style={{ color: "#64748b", fontSize: 12 }}>Item #{i + 1}</span>
            <button onClick={() => remove(i)} style={{ background: "none", border: "none", color: "#f87171", cursor: "pointer", fontSize: 18 }}>✕</button>
          </div>
          {fields.length === 1 ? (
            <input
              type="text" value={item[fields[0].name] || ""} placeholder={fields[0].placeholder || fields[0].label}
              onChange={e => update(i, fields[0].name, e.target.value)}
              style={{ width: "100%", padding: "8px 12px", background: "#1e293b", border: "1px solid #334155", borderRadius: 6, color: "#f1f5f9", fontSize: 13, outline: "none", boxSizing: "border-box" }}
            />
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: fields.length === 2 ? "1fr 1fr" : "1fr", gap: 10 }}>
              {fields.map(f => (
                <div key={f.name}>
                  <div style={{ color: "#64748b", fontSize: 11, marginBottom: 4 }}>{f.label}</div>
                  {f.type === "textarea" ? (
                    <textarea
                      value={item[f.name] || ""} placeholder={f.placeholder || f.label}
                      onChange={e => update(i, f.name, e.target.value)} rows={2}
                      style={{ width: "100%", padding: "8px 12px", background: "#1e293b", border: "1px solid #334155", borderRadius: 6, color: "#f1f5f9", fontSize: 13, outline: "none", resize: "vertical", boxSizing: "border-box" }}
                    />
                  ) : (
                    <input
                      type="text" value={item[f.name] || ""} placeholder={f.placeholder || f.label}
                      onChange={e => update(i, f.name, e.target.value)}
                      style={{ width: "100%", padding: "8px 12px", background: "#1e293b", border: "1px solid #334155", borderRadius: 6, color: "#f1f5f9", fontSize: 13, outline: "none", boxSizing: "border-box" }}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
      <button onClick={add} style={{ background: "#6366f115", border: "1px dashed #6366f150", color: "#a5b4fc", padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontSize: 13, width: "100%" }}>
        + Add {label?.replace("s", "") || "Item"}
      </button>
    </div>
  );
};

// ── Tabs ──────────────────────────────────────────────────────────────────

const TABS = [
  { id: "basic", label: "📋 Basic Info" },
  { id: "hero", label: "🦸 Hero" },
  { id: "choose", label: "✅ Choose" },
  { id: "services", label: "⚙️ Services" },
  { id: "scrollable", label: "📜 Scrollable" },
  { id: "features", label: "⭐ Features" },
  { id: "faq", label: "❓ FAQ" },
  { id: "seo", label: "🔍 SEO" },
];

// ── Main Form Component ───────────────────────────────────────────────────

export default function ServicePageForm({ initialData = {}, onSubmit, submitting }) {
  const API_BASE = process.env.NEXT_PUBLIC_API_URL?.replace("/api", "") || "http://localhost:5000";
  const [activeTab, setActiveTab] = useState("basic");

  const [form, setForm] = useState({
    title: "",
    slug: "",
    shortTitle: "",
    subtitle: "",
    isPublished: false,
    hero: {
      eyebrow: "Digital Marketing Agency",
      title: "Best Digital Marketing Company",
      highlight: "India",
      description: "Boost your business with results-driven digital marketing services.",
      bgImage: "/images/hero/h9-hero-bg.webp",
      ctaText: "Get Started",
      ctaUrl: "/contact-us",
      stat1Number: "15+", stat1Label: "Years of experience",
      stat2Number: "8k+", stat2Label: "Happy clients",
      stat3Number: "25k+", stat3Label: "Projects delivered",
      stat4Number: "25+", stat4Label: "Industries served",
    },
    chooseSection: {
      subTitle: "Choose the Best",
      title: "Empowering Business with Expertise.",
      image: "/images/choose/h8-choose-bnner.webp",
      boxes: [
        { icon: "tji-innovative", title: "Innovative Solutions", desc: "We stay ahead leveraging cutting-edge technologies." },
        { icon: "tji-award", title: "Winning Expertise", desc: "Recognized by industry leaders for excellence." },
        { icon: "tji-support", title: "Dedicated Support", desc: "Always available to address your concerns." },
      ],
    },
    services8: [
      { title: "Business Strategy", desc: "Data-driven business strategy consulting.", icon: "tji-service-1", image: "" },
      { title: "Customer Experience", desc: "Transform every customer interaction.", icon: "tji-service-2", image: "" },
      { title: "Digital Marketing", desc: "Full-suite digital marketing solutions.", icon: "tji-service-3", image: "" },
    ],
    services2: [],
    services9: [],
    scrollableContent1: {
      heading: "Transforming Customer: Tailored Solutions for Experiences.",
      description1: "Recognize that exceptional customer experiences are at the heart of every successful business.",
      description2: "Our approach to customer experience is comprehensive and data-driven.",
      featuresLeft: [
        { text: "Personalization at Scale" },
        { text: "Improved Customer Retention" },
        { text: "Data-Driven Insights" },
        { text: "Omni-channel Integration" },
      ],
      featuresRight: [
        { text: "Customer Retention" },
        { text: "Support Optimization" },
        { text: "Proactive Engagement" },
      ],
      image: "",
    },
    scrollableContent2: {
      heading: "Advanced Strategies for Business Growth.",
      description1: "We deliver proven strategies that drive measurable results for your business.",
      description2: "From strategy to execution, we are your end-to-end growth partner.",
      featuresLeft: [{ text: "Market Research" }, { text: "Competitive Analysis" }],
      featuresRight: [{ text: "Growth Strategy" }, { text: "Performance Tracking" }],
      image: "",
    },
    features: [
      { title: "Innovative Solutions", icon: "tji-innovative", desc: "We stay ahead of the curve leveraging cutting-edge technologies." },
      { title: "Award-Winning", icon: "tji-award", desc: "Recognized by industry leaders, our team has a proven record." },
      { title: "Expert Team", icon: "tji-team", desc: "Always available to address your concerns." },
      { title: "Dedicated Support", icon: "tji-support", desc: "Providing quick and effective solutions for any business." },
    ],
    faqs: [
      { question: "What services does your agency offer?", answer: "We offer comprehensive digital marketing services including SEO, PPC, SMM, web development, and content marketing." },
      { question: "How do I get started?", answer: "Simply reach out through our contact form and we'll schedule a consultation within 24 hours." },
      { question: "How long does it take to see results?", answer: "Results vary by service. SEO typically shows progress in 3-6 months, while PPC can generate leads immediately." },
    ],
    meta: {
      metaTitle: "",
      metaDescription: "",
      metaKeywords: "",
      ogTitle: "",
      ogDescription: "",
      ogImage: "",
      twitterCard: "summary_large_image",
      twitterTitle: "",
      twitterDescription: "",
      canonicalUrl: "",
      robots: "index, follow",
      customHead: "",
    },
    ...initialData,
  });

  const set = (key, value) => setForm(f => ({ ...f, [key]: value }));
  const setNested = (section, key, value) => setForm(f => ({ ...f, [section]: { ...f[section], [key]: value } }));

  const handleBasicChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "title" && !initialData.slug) {
      setForm(f => ({ ...f, title: value, slug: generateSlug(value) }));
    } else {
      set(name, type === "checkbox" ? checked : value);
    }
  };

  const handleSubmit = () => onSubmit(form);

  return (
    <div>
      {/* Tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 24, overflowX: "auto", paddingBottom: 4 }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setActiveTab(t.id)}
            style={{
              padding: "8px 16px", borderRadius: 8, border: "1px solid",
              borderColor: activeTab === t.id ? "#6366f1" : "#334155",
              background: activeTab === t.id ? "#6366f120" : "transparent",
              color: activeTab === t.id ? "#a5b4fc" : "#64748b",
              cursor: "pointer", fontSize: 13, fontWeight: activeTab === t.id ? 600 : 400,
              whiteSpace: "nowrap",
            }}>
            {t.label}
          </button>
        ))}
      </div>

      {/* ── Basic Info ── */}
      {activeTab === "basic" && (
        <SectionCard title="Basic Information" icon="📋">
          <Input label="Page Title" name="title" value={form.title} onChange={handleBasicChange} placeholder="e.g. SEO Services" required />
          <Input label="URL Slug" name="slug" value={form.slug} onChange={handleBasicChange} placeholder="e.g. seo-services" required />
          <p style={{ color: "#64748b", fontSize: 12, marginTop: -10, marginBottom: 16 }}>
            Page will be at: <code style={{ color: "#a5b4fc" }}>/MematService/{form.slug || "your-slug"}</code>
          </p>
          <Grid2>
            <Input label="Short Title" name="shortTitle" value={form.shortTitle} onChange={handleBasicChange} placeholder="e.g. SEO" />
            <Input label="Subtitle" name="subtitle" value={form.subtitle} onChange={handleBasicChange} placeholder="Page subtitle" />
          </Grid2>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8, padding: "14px 16px", background: "#0f172a", borderRadius: 8, border: "1px solid #334155" }}>
            <input
              type="checkbox" id="isPublished" name="isPublished"
              checked={form.isPublished} onChange={handleBasicChange}
              style={{ width: 18, height: 18, cursor: "pointer", accentColor: "#6366f1" }}
            />
            <label htmlFor="isPublished" style={{ color: "#e2e8f0", fontSize: 14, cursor: "pointer" }}>
              <strong>Publish this page</strong>
              <span style={{ color: "#64748b", fontSize: 12, display: "block" }}>Published pages are visible to visitors</span>
            </label>
          </div>
        </SectionCard>
      )}

      {/* ── Hero ── */}
      {activeTab === "hero" && (
        <SectionCard title="Hero Section" icon="🦸">
          <Grid2>
            <Input label="Eyebrow Text" name="eyebrow" value={form.hero.eyebrow} onChange={e => setNested("hero", "eyebrow", e.target.value)} placeholder="Digital Marketing Agency" />
            <Input label="CTA Button Text" name="ctaText" value={form.hero.ctaText} onChange={e => setNested("hero", "ctaText", e.target.value)} placeholder="Get Started" />
          </Grid2>
          <Input label="Main Title" name="title" value={form.hero.title} onChange={e => setNested("hero", "title", e.target.value)} placeholder="Best Digital Marketing Company in" />
          <Input label="Highlight Word (shown in color)" name="highlight" value={form.hero.highlight} onChange={e => setNested("hero", "highlight", e.target.value)} placeholder="India" />
          <Textarea label="Description" name="description" value={form.hero.description} onChange={e => setNested("hero", "description", e.target.value)} placeholder="Boost your business with..." />
          <Input label="CTA URL" name="ctaUrl" value={form.hero.ctaUrl} onChange={e => setNested("hero", "ctaUrl", e.target.value)} placeholder="/contact-us" />
          <ImageUpload label="Background Image" value={form.hero.bgImage} onChange={v => setNested("hero", "bgImage", v)} apiBase={API_BASE} />
          <div style={{ color: "#94a3b8", fontSize: 13, fontWeight: 500, marginBottom: 10, marginTop: 8 }}>Stats</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12 }}>
            {[1, 2, 3, 4].map(n => (
              <div key={n} style={{ background: "#0f172a", borderRadius: 8, padding: 12, border: "1px solid #334155" }}>
                <div style={{ color: "#64748b", fontSize: 11, marginBottom: 6 }}>Stat {n}</div>
                <input value={form.hero[`stat${n}Number`] || ""} onChange={e => setNested("hero", `stat${n}Number`, e.target.value)}
                  placeholder="15+" style={{ width: "100%", padding: "6px 10px", background: "#1e293b", border: "1px solid #334155", borderRadius: 6, color: "#f1f5f9", fontSize: 13, outline: "none", boxSizing: "border-box", marginBottom: 6 }} />
                <input value={form.hero[`stat${n}Label`] || ""} onChange={e => setNested("hero", `stat${n}Label`, e.target.value)}
                  placeholder="Years" style={{ width: "100%", padding: "6px 10px", background: "#1e293b", border: "1px solid #334155", borderRadius: 6, color: "#94a3b8", fontSize: 12, outline: "none", boxSizing: "border-box" }} />
              </div>
            ))}
          </div>
        </SectionCard>
      )}

      {/* ── Choose Section ── */}
      {activeTab === "choose" && (
        <SectionCard title="Choose Section" icon="✅">
          <Grid2>
            <Input label="Sub Title" value={form.chooseSection.subTitle} onChange={e => setNested("chooseSection", "subTitle", e.target.value)} placeholder="Choose the Best" />
            <Input label="Main Title" value={form.chooseSection.title} onChange={e => setNested("chooseSection", "title", e.target.value)} placeholder="Empowering Business..." />
          </Grid2>
          <ImageUpload label="Section Image" value={form.chooseSection.image} onChange={v => setNested("chooseSection", "image", v)} apiBase={API_BASE} />
          <DynamicList
            label="Choose Boxes"
            items={form.chooseSection.boxes}
            onChange={v => setNested("chooseSection", "boxes", v)}
            fields={[
              { name: "icon", label: "Icon Class", placeholder: "tji-innovative" },
              { name: "title", label: "Title", placeholder: "Box title" },
              { name: "desc", label: "Description", placeholder: "Box description", type: "textarea" },
            ]}
          />
        </SectionCard>
      )}

      {/* ── Services ── */}
      {activeTab === "services" && (
        <>
          <SectionCard title="Services Grid (Top Section — 3 cards)" icon="⚙️">
            <DynamicList
              label="Service Cards"
              items={form.services8}
              onChange={v => set("services8", v)}
              fields={[
                { name: "title", label: "Title", placeholder: "Service name" },
                { name: "desc", label: "Description", placeholder: "Short description", type: "textarea" },
                { name: "icon", label: "Icon Class", placeholder: "tji-service-1" },
              ]}
            />
          </SectionCard>
          <SectionCard title="Services List (Middle Section — sticky sidebar)" icon="📋">
            <DynamicList
              label="Service Items"
              items={form.services2}
              onChange={v => set("services2", v)}
              fields={[
                { name: "title", label: "Title", placeholder: "Service name" },
                { name: "desc", label: "Description", placeholder: "Short description", type: "textarea" },
                { name: "icon", label: "Icon Class", placeholder: "tji-service-1" },
              ]}
            />
          </SectionCard>
          <SectionCard title="Services Scroll (Bottom Section — progress scroll)" icon="📜">
            <DynamicList
              label="Service Items"
              items={form.services9}
              onChange={v => set("services9", v)}
              fields={[
                { name: "title", label: "Title", placeholder: "Service name" },
                { name: "desc", label: "Description", placeholder: "Short description", type: "textarea" },
                { name: "icon", label: "Icon Class", placeholder: "tji-service-1" },
              ]}
            />
          </SectionCard>
        </>
      )}

      {/* ── Scrollable Content ── */}
      {activeTab === "scrollable" && (
        <>
          {[
            { key: "scrollableContent1", label: "Scrollable Content Block 1" },
            { key: "scrollableContent2", label: "Scrollable Content Block 2" },
          ].map(({ key, label }) => (
            <SectionCard key={key} title={label} icon="📜">
              <Input label="Heading" value={form[key].heading} onChange={e => setNested(key, "heading", e.target.value)} placeholder="Section heading" />
              <Textarea label="Description Paragraph 1" value={form[key].description1} onChange={e => setNested(key, "description1", e.target.value)} />
              <Textarea label="Description Paragraph 2" value={form[key].description2} onChange={e => setNested(key, "description2", e.target.value)} />
              <Grid2>
                <DynamicList
                  label="Left Column Features"
                  items={form[key].featuresLeft}
                  onChange={v => setNested(key, "featuresLeft", v)}
                  fields={[{ name: "text", label: "Feature", placeholder: "Feature text" }]}
                />
                <DynamicList
                  label="Right Column Features"
                  items={form[key].featuresRight}
                  onChange={v => setNested(key, "featuresRight", v)}
                  fields={[{ name: "text", label: "Feature", placeholder: "Feature text" }]}
                />
              </Grid2>
            </SectionCard>
          ))}
        </>
      )}

      {/* ── Features ── */}
      {activeTab === "features" && (
        <SectionCard title="Features Section (4 cards)" icon="⭐">
          <DynamicList
            label="Feature Cards"
            items={form.features}
            onChange={v => set("features", v)}
            fields={[
              { name: "title", label: "Title", placeholder: "Feature title" },
              { name: "icon", label: "Icon Class", placeholder: "tji-innovative" },
              { name: "desc", label: "Description", placeholder: "Feature description", type: "textarea" },
            ]}
          />
        </SectionCard>
      )}

      {/* ── FAQ ── */}
      {activeTab === "faq" && (
        <SectionCard title="FAQ Section" icon="❓">
          <DynamicList
            label="FAQ Items"
            items={form.faqs}
            onChange={v => set("faqs", v)}
            fields={[
              { name: "question", label: "Question", placeholder: "Enter question" },
              { name: "answer", label: "Answer", placeholder: "Enter answer", type: "textarea" },
            ]}
          />
        </SectionCard>
      )}

      {/* ── SEO ── */}
      {activeTab === "seo" && (
        <SectionCard title="SEO & Meta Tags" icon="🔍">
          <div style={{ background: "#6366f115", border: "1px solid #6366f130", borderRadius: 8, padding: "12px 16px", marginBottom: 20, color: "#a5b4fc", fontSize: 13 }}>
            💡 These meta tags control how your page appears in search engines and social media previews.
          </div>
          <Grid2>
            <Input label="Meta Title" value={form.meta.metaTitle} onChange={e => setNested("meta", "metaTitle", e.target.value)} placeholder="SEO page title (50-60 chars)" />
            <Input label="Meta Keywords" value={form.meta.metaKeywords} onChange={e => setNested("meta", "metaKeywords", e.target.value)} placeholder="seo, digital marketing, india" />
          </Grid2>
          <Textarea label="Meta Description" value={form.meta.metaDescription} onChange={e => setNested("meta", "metaDescription", e.target.value)} placeholder="Page description shown in search results (150-160 chars)" rows={2} />

          <div style={{ borderTop: "1px solid #334155", margin: "20px 0", paddingTop: 20 }}>
            <div style={{ color: "#94a3b8", fontSize: 13, fontWeight: 600, marginBottom: 14 }}>Open Graph (Facebook / LinkedIn)</div>
            <Grid2>
              <Input label="OG Title" value={form.meta.ogTitle} onChange={e => setNested("meta", "ogTitle", e.target.value)} placeholder="Same as Meta Title" />
              <ImageUpload label="OG Image (1200×630)" value={form.meta.ogImage} onChange={v => setNested("meta", "ogImage", v)} apiBase={API_BASE} />
            </Grid2>
            <Textarea label="OG Description" value={form.meta.ogDescription} onChange={e => setNested("meta", "ogDescription", e.target.value)} rows={2} />
          </div>

          <div style={{ borderTop: "1px solid #334155", margin: "20px 0", paddingTop: 20 }}>
            <div style={{ color: "#94a3b8", fontSize: 13, fontWeight: 600, marginBottom: 14 }}>Twitter Card</div>
            <Grid2>
              <Input label="Twitter Title" value={form.meta.twitterTitle} onChange={e => setNested("meta", "twitterTitle", e.target.value)} />
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", color: "#94a3b8", fontSize: 13, fontWeight: 500, marginBottom: 6 }}>Card Type</label>
                <select value={form.meta.twitterCard} onChange={e => setNested("meta", "twitterCard", e.target.value)}
                  style={{ width: "100%", padding: "10px 14px", background: "#0f172a", border: "1px solid #334155", borderRadius: 8, color: "#f1f5f9", fontSize: 14, outline: "none" }}>
                  <option value="summary_large_image">Summary Large Image</option>
                  <option value="summary">Summary</option>
                </select>
              </div>
            </Grid2>
            <Textarea label="Twitter Description" value={form.meta.twitterDescription} onChange={e => setNested("meta", "twitterDescription", e.target.value)} rows={2} />
          </div>

          <div style={{ borderTop: "1px solid #334155", margin: "20px 0", paddingTop: 20 }}>
            <div style={{ color: "#94a3b8", fontSize: 13, fontWeight: 600, marginBottom: 14 }}>Advanced</div>
            <Grid2>
              <Input label="Canonical URL" value={form.meta.canonicalUrl} onChange={e => setNested("meta", "canonicalUrl", e.target.value)} placeholder="https://yourdomain.com/page" />
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", color: "#94a3b8", fontSize: 13, fontWeight: 500, marginBottom: 6 }}>Robots</label>
                <select value={form.meta.robots} onChange={e => setNested("meta", "robots", e.target.value)}
                  style={{ width: "100%", padding: "10px 14px", background: "#0f172a", border: "1px solid #334155", borderRadius: 8, color: "#f1f5f9", fontSize: 14, outline: "none" }}>
                  <option value="index, follow">index, follow</option>
                  <option value="noindex, follow">noindex, follow</option>
                  <option value="index, nofollow">index, nofollow</option>
                  <option value="noindex, nofollow">noindex, nofollow</option>
                </select>
              </div>
            </Grid2>
            <Textarea label="Custom <head> HTML (scripts, tags)" value={form.meta.customHead} onChange={e => setNested("meta", "customHead", e.target.value)} placeholder='<script>...</script>' rows={4} />
          </div>
        </SectionCard>
      )}

      {/* Submit */}
      <div style={{ display: "flex", gap: 12, marginTop: 24, padding: "20px 0", borderTop: "1px solid #334155" }}>
        <button onClick={handleSubmit} disabled={submitting}
          style={{
            padding: "12px 32px",
            background: submitting ? "#4338ca80" : "linear-gradient(135deg, #6366f1, #8b5cf6)",
            border: "none", borderRadius: 10, color: "#fff",
            fontSize: 15, fontWeight: 600, cursor: submitting ? "not-allowed" : "pointer",
            boxShadow: "0 4px 16px #6366f140",
          }}>
          {submitting ? "Saving..." : "💾 Save Service Page"}
        </button>
        <button onClick={() => setActiveTab(TABS[(TABS.findIndex(t => t.id === activeTab) + 1) % TABS.length].id)}
          style={{ padding: "12px 20px", background: "transparent", border: "1px solid #334155", borderRadius: 10, color: "#94a3b8", fontSize: 14, cursor: "pointer" }}>
          Next Tab →
        </button>
      </div>
    </div>
  );
}
