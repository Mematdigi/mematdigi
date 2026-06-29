"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import BlogPostForm from "@/components/admin/BlogPostForm";
import { getBlogByIdAdmin, updateBlog } from "@/lib/api";
import { T, Spinner } from "@/components/admin/ui";

export default function EditBlogPostPage() {
  const router = useRouter();
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!id) return;
    getBlogByIdAdmin(id).then((res) => {
      if (res.success) setInitialData(res.data);
      else setError("Could not load this post.");
      setLoading(false);
    });
  }, [id]);

  const handleSubmit = async (formData) => {
    if (!formData.title || !formData.slug) {
      setError("Title and slug are required.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setSubmitting(true);
    setError("");
    setSuccess("");
    try {
      const res = await updateBlog(id, formData);
      if (res.success) {
        setSuccess("✅ Post updated successfully!");
        setInitialData(res.data);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setError(res.message || "Failed to update post.");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch {
      setError("Could not connect to backend.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <Spinner label="Loading post…" />;

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href="/admin/blog" style={{ color: T.muted, textDecoration: "none", fontSize: 20 }}>←</Link>
          <div>
            <h1 style={{ color: T.text, fontSize: 22, fontWeight: 700, margin: 0 }}>Edit: {initialData?.title}</h1>
            <p style={{ color: T.muted, fontSize: 13, marginTop: 4 }}>
              URL: <code style={{ color: "#a5b4fc" }}>/blogs/{initialData?.slug}</code> · 👁 {initialData?.views || 0} views
            </p>
          </div>
        </div>
        {initialData?.slug && (
          <Link href={`/blogs/${initialData.slug}`} target="_blank"
            style={{ color: T.green, padding: "8px 16px", border: `1px solid ${T.green}40`, borderRadius: 8, textDecoration: "none", fontSize: 13 }}>
            🔗 View Post
          </Link>
        )}
      </div>

      {error && <div style={{ background: "#ef444415", border: "1px solid #ef444440", borderRadius: 10, padding: "14px 18px", color: "#fca5a5", fontSize: 14, marginBottom: 20 }}>⚠️ {error}</div>}
      {success && <div style={{ background: "#10b98115", border: "1px solid #10b98140", borderRadius: 10, padding: "14px 18px", color: "#34d399", fontSize: 14, marginBottom: 20 }}>{success}</div>}

      {initialData && <BlogPostForm initialData={initialData} onSubmit={handleSubmit} submitting={submitting} mode="edit" />}
    </div>
  );
}
