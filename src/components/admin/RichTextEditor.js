"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import { uploadImage } from "@/lib/api";
import { T } from "./ui";

const API_BASE = process.env.NEXT_PUBLIC_API_URL?.replace("/api", "") || "https://mematdigi.com/";

// One toolbar button
const TBtn = ({ onClick, title, children, active }) => (
  <button
    type="button"
    title={title}
    onMouseDown={(e) => e.preventDefault()} // keep editor selection
    onClick={onClick}
    style={{
      minWidth: 32, height: 30, padding: "0 8px", background: active ? "#6366f130" : "transparent",
      border: `1px solid ${active ? "#6366f160" : T.border}`, borderRadius: 6, color: active ? "#a5b4fc" : T.textDim,
      cursor: "pointer", fontSize: 13, fontWeight: 600, display: "inline-flex", alignItems: "center", justifyContent: "center",
    }}
  >
    {children}
  </button>
);

const Divider = () => <div style={{ width: 1, height: 22, background: T.border, margin: "0 4px" }} />;

export default function RichTextEditor({ value = "", onChange }) {
  const ref = useRef(null);
  const [showSource, setShowSource] = useState(false);
  const [source, setSource] = useState(value);
  const [uploading, setUploading] = useState(false);
  const initialized = useRef(false);

  // Initialize editor HTML once (and whenever value is loaded async the first time)
  useEffect(() => {
    if (ref.current && !initialized.current) {
      ref.current.innerHTML = value || "";
      initialized.current = true;
    }
  }, [value]);

  // If parent loads data asynchronously (edit page), sync once content arrives
  useEffect(() => {
    if (ref.current && initialized.current && value && ref.current.innerHTML === "") {
      ref.current.innerHTML = value;
    }
  }, [value]);

  const emit = useCallback(() => {
    if (ref.current) onChange(ref.current.innerHTML);
  }, [onChange]);

  const exec = (command, arg = null) => {
    ref.current?.focus();
    document.execCommand(command, false, arg);
    emit();
  };

  const formatBlock = (tag) => exec("formatBlock", tag);

  const addLink = () => {
    const url = prompt("Enter the link URL:", "https://");
    if (url) exec("createLink", url);
  };

  const addCodeBlock = () => {
    ref.current?.focus();
    document.execCommand(
      "insertHTML",
      false,
      '<pre style="background:#0d1117;color:#e2e8f0;padding:14px;border-radius:8px;overflow:auto;"><code>// code</code></pre><p><br/></p>'
    );
    emit();
  };

  const handleImage = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    try {
      const res = await uploadImage(file);
      if (res.success) {
        const url = `${API_BASE}${res.url}`;
        ref.current?.focus();
        document.execCommand(
          "insertHTML",
          false,
          `<img src="${url}" alt="" style="max-width:100%;height:auto;border-radius:8px;margin:12px 0;" /><p><br/></p>`
        );
        emit();
      } else {
        alert("Image upload failed: " + res.message);
      }
    } catch {
      alert("Image upload failed. Is the backend running?");
    }
    setUploading(false);
    e.target.value = "";
  };

  const toggleSource = () => {
    if (!showSource) {
      // entering source view → read current HTML
      setSource(ref.current?.innerHTML || "");
      setShowSource(true);
    } else {
      // leaving source view → write back to editor
      if (ref.current) ref.current.innerHTML = source;
      onChange(source);
      setShowSource(false);
    }
  };

  return (
    <div style={{ border: `1px solid ${T.border}`, borderRadius: 10, overflow: "hidden", background: T.panel }}>
      {/* Toolbar */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, alignItems: "center", padding: 8, background: T.bg, borderBottom: `1px solid ${T.border}` }}>
        <select
          onMouseDown={(e) => e.stopPropagation()}
          onChange={(e) => { formatBlock(e.target.value); e.target.selectedIndex = 0; }}
          defaultValue=""
          style={{ height: 30, background: "transparent", border: `1px solid ${T.border}`, borderRadius: 6, color: T.textDim, fontSize: 12, padding: "0 6px", cursor: "pointer" }}
        >
          <option value="" disabled>Format</option>
          <option value="p">Paragraph</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
          <option value="h4">Heading 4</option>
        </select>
        <Divider />
        <TBtn title="Bold" onClick={() => exec("bold")}><b>B</b></TBtn>
        <TBtn title="Italic" onClick={() => exec("italic")}><i>I</i></TBtn>
        <TBtn title="Underline" onClick={() => exec("underline")}><u>U</u></TBtn>
        <TBtn title="Strikethrough" onClick={() => exec("strikeThrough")}><s>S</s></TBtn>
        <Divider />
        <TBtn title="Bullet list" onClick={() => exec("insertUnorderedList")}>•≣</TBtn>
        <TBtn title="Numbered list" onClick={() => exec("insertOrderedList")}>1.</TBtn>
        <TBtn title="Quote" onClick={() => formatBlock("blockquote")}>❝</TBtn>
        <TBtn title="Code block" onClick={addCodeBlock}>{"</>"}</TBtn>
        <Divider />
        <TBtn title="Align left" onClick={() => exec("justifyLeft")}>⬅</TBtn>
        <TBtn title="Align center" onClick={() => exec("justifyCenter")}>↔</TBtn>
        <TBtn title="Align right" onClick={() => exec("justifyRight")}>➡</TBtn>
        <Divider />
        <TBtn title="Insert link" onClick={addLink}>🔗</TBtn>
        <TBtn title="Remove link" onClick={() => exec("unlink")}>⛓✕</TBtn>
        <label title="Insert image" style={{ minWidth: 32, height: 30, padding: "0 8px", border: `1px solid ${T.border}`, borderRadius: 6, color: T.textDim, cursor: uploading ? "wait" : "pointer", fontSize: 13, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
          {uploading ? "…" : "🖼"}
          <input type="file" accept="image/*" onChange={handleImage} style={{ display: "none" }} disabled={uploading} />
        </label>
        <Divider />
        <TBtn title="Clear formatting" onClick={() => exec("removeFormat")}>⌫</TBtn>
        <TBtn title="Undo" onClick={() => exec("undo")}>↶</TBtn>
        <TBtn title="Redo" onClick={() => exec("redo")}>↷</TBtn>
        <div style={{ marginLeft: "auto" }}>
          <TBtn title="Toggle HTML source" onClick={toggleSource} active={showSource}>{showSource ? "✓ HTML" : "HTML"}</TBtn>
        </div>
      </div>

      {/* Editor / Source */}
      {showSource ? (
        <textarea
          value={source}
          onChange={(e) => setSource(e.target.value)}
          rows={18}
          style={{ width: "100%", padding: 16, background: T.panel, border: "none", color: "#a5b4fc", fontSize: 13, fontFamily: "monospace", outline: "none", boxSizing: "border-box", resize: "vertical", minHeight: 360 }}
        />
      ) : (
        <div
          ref={ref}
          contentEditable
          suppressContentEditableWarning
          onInput={emit}
          onBlur={emit}
          data-placeholder="Start writing your post…"
          className="memat-rte"
          style={{ minHeight: 360, padding: 18, color: "#e2e8f0", fontSize: 15, lineHeight: 1.7, outline: "none" }}
        />
      )}

      <style>{`
        .memat-rte:empty:before { content: attr(data-placeholder); color: ${T.muted}; }
        .memat-rte h2 { font-size: 24px; font-weight: 700; margin: 18px 0 10px; color: #f1f5f9; }
        .memat-rte h3 { font-size: 20px; font-weight: 700; margin: 16px 0 8px; color: #f1f5f9; }
        .memat-rte h4 { font-size: 17px; font-weight: 600; margin: 14px 0 8px; color: #f1f5f9; }
        .memat-rte p { margin: 0 0 12px; }
        .memat-rte ul, .memat-rte ol { margin: 0 0 12px; padding-left: 24px; }
        .memat-rte li { margin-bottom: 6px; }
        .memat-rte a { color: #818cf8; text-decoration: underline; }
        .memat-rte blockquote { border-left: 3px solid ${T.primary}; margin: 14px 0; padding: 6px 16px; color: #cbd5e1; font-style: italic; background: #0f172a; border-radius: 0 8px 8px 0; }
        .memat-rte img { max-width: 100%; height: auto; border-radius: 8px; }
        .memat-rte pre { background: #0d1117; padding: 14px; border-radius: 8px; overflow: auto; }
      `}</style>
    </div>
  );
}
