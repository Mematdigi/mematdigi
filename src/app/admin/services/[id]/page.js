"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import ServicePageForm from "@/components/admin/ServicePageForm";
import { getServiceById, updateService } from "@/lib/api";

export default function EditServicePage() {
  const router = useRouter();
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (!id) return;
    getServiceById(id).then((res) => {
      if (res.success) {
        setInitialData(res.data);
      } else {
        setError("Could not load service page data.");
      }
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
      const res = await updateService(id, formData);
      if (res.success) {
        setSuccess("✅ Service page updated successfully!");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setError(res.message || "Failed to update service page.");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err) {
      setError("Could not connect to backend.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 300 }}>
        <div style={{ textAlign: "center", color: "#64748b" }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
          <p>Loading service page...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href="/admin/services" style={{ color: "#64748b", textDecoration: "none", fontSize: 20 }}>←</Link>
          <div>
            <h1 style={{ color: "#f1f5f9", fontSize: 22, fontWeight: 700, margin: 0 }}>
              Edit: {initialData?.title}
            </h1>
            <p style={{ color: "#64748b", fontSize: 13, marginTop: 4 }}>
              URL: <code style={{ color: "#a5b4fc" }}>/MematService/{initialData?.slug}</code>
            </p>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <Link href={`/MematService/${initialData?.slug}`} target="_blank"
            style={{ color: "#10b981", padding: "8px 16px", border: "1px solid #10b98140", borderRadius: 8, textDecoration: "none", fontSize: 13 }}>
            🔗 View Page
          </Link>
        </div>
      </div>

      {/* Messages */}
      {error && (
        <div style={{ background: "#ef444415", border: "1px solid #ef444440", borderRadius: 10, padding: "14px 18px", color: "#fca5a5", fontSize: 14, marginBottom: 20 }}>
          ⚠️ {error}
        </div>
      )}
      {success && (
        <div style={{ background: "#10b98115", border: "1px solid #10b98140", borderRadius: 10, padding: "14px 18px", color: "#34d399", fontSize: 14, marginBottom: 20 }}>
          {success}
        </div>
      )}

      {initialData && (
        <ServicePageForm initialData={initialData} onSubmit={handleSubmit} submitting={submitting} />
      )}
    </div>
  );
}
