"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ServicePageForm from "@/components/admin/ServicePageForm";
import { createService } from "@/lib/api";

export default function NewServicePage() {
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
      const res = await createService(formData);
      if (res.success) {
        router.push("/admin/services");
      } else {
        setError(res.message || "Failed to create service page.");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err) {
      setError("Could not connect to backend. Make sure the backend server is running.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href="/admin/services" style={{ color: "#64748b", textDecoration: "none", fontSize: 20 }}>←</Link>
          <div>
            <h1 style={{ color: "#f1f5f9", fontSize: 22, fontWeight: 700, margin: 0 }}>Create New Service Page</h1>
            <p style={{ color: "#64748b", fontSize: 13, marginTop: 4 }}>Fill in the sections below to create a new dynamic service page.</p>
          </div>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div style={{ background: "#ef444415", border: "1px solid #ef444440", borderRadius: 10, padding: "14px 18px", color: "#fca5a5", fontSize: 14, marginBottom: 20 }}>
          ⚠️ {error}
        </div>
      )}

      <ServicePageForm onSubmit={handleSubmit} submitting={submitting} />
    </div>
  );
}
