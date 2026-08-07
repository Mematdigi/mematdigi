import { notFound } from "next/navigation";
import Footer5 from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import Contact2 from "@/components/sections/contacts/Contact2";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import DynamicHero9 from "@/components/sections/hero/DynamicHero9";
import DynamicChoose from "@/components/sections/choose/DynamicChoose";
import DynamicServices8 from "@/components/sections/services/DynamicServices8";
import DynamicServices2 from "@/components/sections/services/DynamicServices2";
import DynamicFeatures2 from "@/components/sections/features/DynamicFeatures2";
import DynamicScrollableServices from "@/components/sections/MematScrolableContent/DynamicScrollableServices";
import DynamicFaq4 from "@/components/sections/faq/DynamicFaq4";
import DynamicServices9 from "@/components/sections/services/DynamicServices9";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://mematdigi.com/api";

// Fetch service data server-side
async function getService(slug) {
  try {
    const res = await fetch(`${API_BASE}/services/slug/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.success ? data.data : null;
  } catch (err) {
    console.error("Failed to fetch service:", err);
    return null;
  }
}

// Dynamic metadata from DB
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const meta = service.meta || {};
  const title = meta.metaTitle || service.title;
  const description = meta.metaDescription || service.subtitle || "";

  return {
    title,
    description,
    keywords: meta.metaKeywords || "",
    robots: meta.robots || "index, follow",
    ...(meta.canonicalUrl && {
      alternates: { canonical: meta.canonicalUrl },
    }),
    openGraph: {
      title: meta.ogTitle || title,
      description: meta.ogDescription || description,
      ...(meta.ogImage && { images: [{ url: meta.ogImage }] }),
    },
    twitter: {
      card: meta.twitterCard || "summary_large_image",
      title: meta.twitterTitle || title,
      description: meta.twitterDescription || description,
    },
  };
}

export default async function DynamicMematServicePage({ params }) {
  const { slug } = await params;
  const service = await getService(slug);

  if (!service) {
    notFound();
  }

  // Show 404 if not published (unless preview mode)
  if (!service.isPublished) {
    notFound();
  }

  const {
    hero = {},
    chooseSection = {},
    services8 = [],
    services2 = [],
    services9 = [],
    scrollableContent1 = {},
    scrollableContent2 = {},
    features = [],
    faqs = [],
    meta = {},
  } = service;

  return (
    <>
      {/* Inject custom head scripts if any */}
      {meta.customHead && (
        <div dangerouslySetInnerHTML={{ __html: meta.customHead }} />
      )}

      <div>
        <BackToTop />
        <Header headerType={9} />
        <Header headerType={9} isStickyHeader={true} />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <div className="top-space-15"></div>

              {/* Hero — dynamic data */}
              <DynamicHero9 data={hero} />

              {/* Choose — dynamic */}
              <DynamicChoose data={chooseSection} />

              {/* Services 8 — top grid */}
              {services8?.length > 0 && <DynamicServices8 data={services8} />}
              
              {/* Services 2 — sticky sidebar list */}
              {services2?.length > 0 && <DynamicServices2 data={services2} />}


              {/* Features */}
              <DynamicFeatures2 data={features} />

              {/* Scrollable Content 1 */}
              <DynamicScrollableServices data={scrollableContent1} />

              {/* Services 9 — sticky sidebar list */}
              {services9?.length > 0 && <DynamicServices9 data={services9} />}
              
              {/* Scrollable Content 2 */}
              {scrollableContent2?.heading && (
                <DynamicScrollableServices data={scrollableContent2} />
              )}

              {/* FAQ */}
              <DynamicFaq4 data={faqs} />

              {/* Contact */}
              <Contact2 />
            </main>
            <Footer5 />
          </div>
        </div>
        <ClientWrapper />
      </div>
    </>
  );
}
