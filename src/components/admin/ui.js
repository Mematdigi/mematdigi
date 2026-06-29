"use client";
import { useState } from "react";
import { uploadImage } from "@/lib/api";

// Shared admin theme tokens
export const T = {
  bg: "#0f172a",
  panel: "#1e293b",
  border: "#334155",
  text: "#f1f5f9",
  textDim: "#94a3b8",
  muted: "#64748b",
  primary: "#6366f1",
  primary2: "#8b5cf6",
  gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  green: "#10b981",
  amber: "#f59e0b",
  red: "#ef4444",
  orange: "#f08020",
};

export const Input = ({ label, name, value, onChange, placeholder, type = "text", required, hint }) => (
  <div style={{ marginBottom: 16 }}>
    {label && (
      <label style={{ display: "block", color: T.textDim, fontSize: 13, fontWeight: 500, marginBottom: 6 }}>
        {label}
        {required && <span style={{ color: "#f87171" }}> *</span>}
      </label>
    )}
    <input
      type={type}
      name={name}
      value={value ?? ""}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      style={{
        width: "100%", padding: "10px 14px", background: T.bg, border: `1px solid ${T.border}`,
        borderRadius: 8, color: T.text, fontSize: 14, outline: "none", boxSizing: "border-box",
      }}
      onFocus={(e) => (e.target.style.borderColor = T.primary)}
      onBlur={(e) => (e.target.style.borderColor = T.border)}
    />
    {hint && <p style={{ color: T.muted, fontSize: 12, margin: "6px 0 0" }}>{hint}</p>}
  </div>
);

export const Textarea = ({ label, name, value, onChange, placeholder, rows = 3, hint }) => (
  <div style={{ marginBottom: 16 }}>
    {label && (
      <label style={{ display: "block", color: T.textDim, fontSize: 13, fontWeight: 500, marginBottom: 6 }}>
        {label}
      </label>
    )}
    <textarea
      name={name}
      value={value ?? ""}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      style={{
        width: "100%", padding: "10px 14px", background: T.bg, border: `1px solid ${T.border}`,
        borderRadius: 8, color: T.text, fontSize: 14, outline: "none", boxSizing: "border-box", resize: "vertical",
      }}
      onFocus={(e) => (e.target.style.borderColor = T.primary)}
      onBlur={(e) => (e.target.style.borderColor = T.border)}
    />
    {hint && <p style={{ color: T.muted, fontSize: 12, margin: "6px 0 0" }}>{hint}</p>}
  </div>
);

export const Select = ({ label, value, onChange, options = [], hint }) => (
  <div style={{ marginBottom: 16 }}>
    {label && (
      <label style={{ display: "block", color: T.textDim, fontSize: 13, fontWeight: 500, marginBottom: 6 }}>
        {label}
      </label>
    )}
    <select
      value={value ?? ""}
      onChange={onChange}
      style={{
        width: "100%", padding: "10px 14px", background: T.bg, border: `1px solid ${T.border}`,
        borderRadius: 8, color: T.text, fontSize: 14, outline: "none",
      }}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
    {hint && <p style={{ color: T.muted, fontSize: 12, margin: "6px 0 0" }}>{hint}</p>}
  </div>
);

export const SectionCard = ({ title, icon, children, action }) => (
  <div style={{ background: T.panel, border: `1px solid ${T.border}`, borderRadius: 14, marginBottom: 20, overflow: "hidden" }}>
    <div style={{ padding: "16px 20px", borderBottom: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        {icon && <span style={{ fontSize: 18 }}>{icon}</span>}
        <h3 style={{ color: "#e2e8f0", fontSize: 15, fontWeight: 600, margin: 0 }}>{title}</h3>
      </div>
      {action}
    </div>
    <div style={{ padding: 20 }}>{children}</div>
  </div>
);

export const Grid2 = ({ children }) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>{children}</div>
);

export const Toggle = ({ checked, onChange, label, desc }) => (
  <div
    onClick={() => onChange(!checked)}
    style={{
      display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", background: T.bg,
      borderRadius: 8, border: `1px solid ${T.border}`, cursor: "pointer", marginBottom: 12,
    }}
  >
    <div
      style={{
        width: 40, height: 22, borderRadius: 20, background: checked ? T.primary : "#475569",
        position: "relative", transition: "background 0.2s", flexShrink: 0,
      }}
    >
      <div
        style={{
          width: 16, height: 16, borderRadius: "50%", background: "#fff", position: "absolute",
          top: 3, left: checked ? 21 : 3, transition: "left 0.2s",
        }}
      />
    </div>
    <div>
      <div style={{ color: "#e2e8f0", fontSize: 14, fontWeight: 500 }}>{label}</div>
      {desc && <div style={{ color: T.muted, fontSize: 12 }}>{desc}</div>}
    </div>
  </div>
);

export const Badge = ({ children, color = T.primary }) => (
  <span style={{ background: `${color}20`, color, border: `1px solid ${color}40`, padding: "3px 10px", borderRadius: 20, fontSize: 12, fontWeight: 600, whiteSpace: "nowrap" }}>
    {children}
  </span>
);

export const Spinner = ({ label = "Loading..." }) => (
  <div style={{ padding: 60, textAlign: "center", color: T.muted }}>
    <div style={{ width: 40, height: 40, border: `3px solid ${T.border}`, borderTop: `3px solid ${T.primary}`, borderRadius: "50%", animation: "adminspin 0.8s linear infinite", margin: "0 auto 14px" }} />
    {label}
    <style>{`@keyframes adminspin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

export const EmptyState = ({ icon = "📭", title, desc, action }) => (
  <div style={{ padding: 70, textAlign: "center" }}>
    <div style={{ fontSize: 50, marginBottom: 14 }}>{icon}</div>
    <h3 style={{ color: "#e2e8f0", marginBottom: 8 }}>{title}</h3>
    {desc && <p style={{ color: T.muted, marginBottom: 20 }}>{desc}</p>}
    {action}
  </div>
);

// Primary / secondary buttons
export const Button = ({ children, onClick, disabled, variant = "primary", style = {}, type = "button" }) => {
  const base = {
    padding: "10px 20px", borderRadius: 10, fontSize: 14, fontWeight: 600,
    cursor: disabled ? "not-allowed" : "pointer", border: "none", ...style,
  };
  const variants = {
    primary: { background: disabled ? "#4338ca80" : T.gradient, color: "#fff", boxShadow: "0 4px 16px #6366f140" },
    ghost: { background: "transparent", border: `1px solid ${T.border}`, color: T.textDim },
    danger: { background: "transparent", border: `1px solid ${T.red}40`, color: "#f87171" },
    green: { background: `${T.green}20`, border: `1px solid ${T.green}40`, color: "#34d399" },
  };
  return (
    <button type={type} onClick={onClick} disabled={disabled} style={{ ...base, ...variants[variant] }}>
      {children}
    </button>
  );
};

// ── Single image upload with preview ───────────────────────────────────────
export const ImageUpload = ({ label, value, onChange, hint }) => {
  const [uploading, setUploading] = useState(false);
  const API_BASE = process.env.NEXT_PUBLIC_API_URL?.replace("/api", "") || "http://localhost:5000";

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    try {
      const res = await uploadImage(file);
      if (res.success) onChange(`${API_BASE}${res.url}`);
      else alert("Upload failed: " + res.message);
    } catch {
      alert("Upload failed. Is the backend running?");
    }
    setUploading(false);
  };

  return (
    <div style={{ marginBottom: 16 }}>
      {label && <label style={{ display: "block", color: T.textDim, fontSize: 13, fontWeight: 500, marginBottom: 6 }}>{label}</label>}
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <input
          type="text" value={value || ""} onChange={(e) => onChange(e.target.value)}
          placeholder="Image URL or upload →"
          style={{ flex: 1, padding: "10px 14px", background: T.bg, border: `1px solid ${T.border}`, borderRadius: 8, color: T.text, fontSize: 13, outline: "none" }}
        />
        <label style={{ background: T.border, color: T.textDim, padding: "10px 14px", borderRadius: 8, cursor: uploading ? "not-allowed" : "pointer", fontSize: 13, whiteSpace: "nowrap" }}>
          {uploading ? "Uploading…" : "📁 Upload"}
          <input type="file" accept="image/*" onChange={handleFile} style={{ display: "none" }} disabled={uploading} />
        </label>
      </div>
      {hint && <p style={{ color: T.muted, fontSize: 12, margin: "6px 0 0" }}>{hint}</p>}
      {value && (
        <img src={value.startsWith("/uploads") ? `${API_BASE}${value}` : value} alt="preview"
          style={{ marginTop: 10, height: 100, borderRadius: 8, border: `1px solid ${T.border}`, objectFit: "cover" }}
          onError={(e) => (e.target.style.display = "none")} />
      )}
    </div>
  );
};

// ── Tag input (chips) ──────────────────────────────────────────────────────
export const TagInput = ({ label, tags = [], onChange, placeholder = "Type a tag and press Enter" }) => {
  const [input, setInput] = useState("");
  const add = (val) => {
    const t = val.trim();
    if (t && !tags.includes(t)) onChange([...tags, t]);
    setInput("");
  };
  const remove = (i) => onChange(tags.filter((_, idx) => idx !== i));
  return (
    <div style={{ marginBottom: 16 }}>
      {label && <label style={{ display: "block", color: T.textDim, fontSize: 13, fontWeight: 500, marginBottom: 6 }}>{label}</label>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, padding: 8, background: T.bg, border: `1px solid ${T.border}`, borderRadius: 8, minHeight: 44 }}>
        {tags.map((t, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: `${T.primary}20`, color: "#a5b4fc", padding: "4px 10px", borderRadius: 6, fontSize: 13 }}>
            {t}
            <span onClick={() => remove(i)} style={{ cursor: "pointer", color: "#f87171", fontWeight: 700 }}>×</span>
          </span>
        ))}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === ",") { e.preventDefault(); add(input); }
            else if (e.key === "Backspace" && !input && tags.length) remove(tags.length - 1);
          }}
          placeholder={tags.length ? "" : placeholder}
          style={{ flex: 1, minWidth: 140, background: "transparent", border: "none", color: T.text, fontSize: 13, outline: "none" }}
        />
      </div>
    </div>
  );
};

// ── Dynamic repeater list (for gallery / generic key-value rows) ───────────
export const DynamicList = ({ label, items = [], onChange, fields, addLabel }) => {
  const add = () => {
    const blank = {};
    fields.forEach((f) => (blank[f.name] = ""));
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
      {label && <div style={{ color: T.textDim, fontSize: 13, fontWeight: 500, marginBottom: 10 }}>{label}</div>}
      {items.map((item, i) => (
        <div key={i} style={{ background: T.bg, border: `1px solid ${T.border}`, borderRadius: 8, padding: 14, marginBottom: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
            <span style={{ color: T.muted, fontSize: 12 }}>#{i + 1}</span>
            <button onClick={() => remove(i)} style={{ background: "none", border: "none", color: "#f87171", cursor: "pointer", fontSize: 18 }}>✕</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: fields.length === 2 ? "1fr 1fr" : "1fr", gap: 10 }}>
            {fields.map((f) => (
              <div key={f.name}>
                <div style={{ color: T.muted, fontSize: 11, marginBottom: 4 }}>{f.label}</div>
                <input
                  type="text" value={item[f.name] || ""} placeholder={f.placeholder || f.label}
                  onChange={(e) => update(i, f.name, e.target.value)}
                  style={{ width: "100%", padding: "8px 12px", background: T.panel, border: `1px solid ${T.border}`, borderRadius: 6, color: T.text, fontSize: 13, outline: "none", boxSizing: "border-box" }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <button onClick={add} style={{ background: "#6366f115", border: "1px dashed #6366f150", color: "#a5b4fc", padding: "8px 16px", borderRadius: 8, cursor: "pointer", fontSize: 13, width: "100%" }}>
        + {addLabel || "Add Item"}
      </button>
    </div>
  );
};

// ── Modal ──────────────────────────────────────────────────────────────────
export const Modal = ({ open, onClose, title, children, width = 520 }) => {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "#00000090", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 20 }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ background: T.panel, border: `1px solid ${T.border}`, borderRadius: 16, width: "100%", maxWidth: width, maxHeight: "90vh", overflow: "auto", boxShadow: "0 24px 64px #00000080" }}
      >
        <div style={{ padding: "18px 22px", borderBottom: `1px solid ${T.border}`, display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, background: T.panel, zIndex: 2 }}>
          <h3 style={{ color: T.text, fontSize: 17, fontWeight: 600, margin: 0 }}>{title}</h3>
          <button onClick={onClose} style={{ background: "none", border: "none", color: T.muted, fontSize: 24, cursor: "pointer", lineHeight: 1 }}>×</button>
        </div>
        <div style={{ padding: 22 }}>{children}</div>
      </div>
    </div>
  );
};
