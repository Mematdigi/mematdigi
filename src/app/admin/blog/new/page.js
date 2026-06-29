"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BlogPostForm from "@/components/admin/BlogPostForm";
import { createBlog } from "@/lib/api";
import { T } from "@/components/admin/ui";

export default function NewBlogPostPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (formData) => {
    if (!formData.title || !formData.slug) {
      setError("Title and slug are required.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      const res = await createBlog(formData);
      if (res.success) {
        router.push("/admin/blog");
      } else {
        setError(res.message || "Failed to create post.");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch {
      setError("Could not connect to backend. Make sure the server is running.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <Link href="/admin/blog" style={{ color: T.muted, textDecoration: "none", fontSize: 20 }}>←</Link>
        <div>
          <h1 style={{ color: T.text, fontSize: 22, fontWeight: 700, margin: 0 }}>New Blog Post</h1>
          <p style={{ color: T.muted, fontSize: 13, marginTop: 4 }}>Write, format, and publish a new article.</p>
        </div>
      </div>

      {error && (
        <div style={{ background: "#ef444415", border: "1px solid #ef444440", borderRadius: 10, padding: "14px 18px", color: "#fca5a5", fontSize: 14, marginBottom: 20 }}>
          ⚠️ {error}
        </div>
      )}

      <BlogPostForm onSubmit={handleSubmit} submitting={submitting} mode="new" />
    </div>
  );
}
