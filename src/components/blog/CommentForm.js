"use client";
import { useState } from "react";
import { submitComment } from "@/lib/api";

const CommentForm = ({ blogSlug, parent = null, onSuccess, compact }) => {
  const [form, setForm] = useState({ name: "", email: "", website: "", content: "" });
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [submitting, setSubmitting] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.content) {
      setStatus({ type: "error", msg: "Please fill in your name, email and comment." });
      return;
    }
    setSubmitting(true);
    setStatus({ type: "", msg: "" });
    try {
      const res = await submitComment({ ...form, blogSlug, parent });
      if (res.success) {
        setStatus({ type: "success", msg: res.message });
        setForm({ name: "", email: "", website: "", content: "" });
        onSuccess && onSuccess();
      } else {
        setStatus({ type: "error", msg: res.message || "Something went wrong." });
      }
    } catch {
      setStatus({ type: "error", msg: "Could not submit. Please try again later." });
    }
    setSubmitting(false);
  };

  return (
    <div className="comment-form-wrap">
      {!compact && <h3 className="comment-title">Leave a Comment</h3>}
      {status.msg && (
        <div style={{
          padding: "12px 16px", borderRadius: 8, marginBottom: 18, fontSize: 14,
          background: status.type === "success" ? "#10b98115" : "#ef444415",
          color: status.type === "success" ? "#0f9d58" : "#dc2626",
          border: `1px solid ${status.type === "success" ? "#10b98140" : "#ef444440"}`,
        }}>
          {status.type === "success" ? "✓ " : "⚠ "}{status.msg}
        </div>
      )}
      <form onSubmit={handleSubmit} className="comment-form">
        <div className="row">
          <div className="col-md-6">
            <div className="form-grp">
              <input type="text" placeholder="Your Name *" value={form.name} onChange={set("name")} required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input type="email" placeholder="Your Email *" value={form.email} onChange={set("email")} required />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-grp">
              <input type="text" placeholder="Website (optional)" value={form.website} onChange={set("website")} />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-grp">
              <textarea placeholder="Write your comment *" rows={5} value={form.content} onChange={set("content")} required />
            </div>
          </div>
          <div className="col-md-12">
            <button type="submit" className="tj-primary-btn" disabled={submitting}>
              <span className="btn-text">{submitting ? "Submitting…" : parent ? "Post Reply" : "Post Comment"}</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
