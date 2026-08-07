import { notFound } from "next/navigation";
import Footer5 from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import HeroInner from "@/components/sections/hero/HeroInner";
import DynamicBlogDetails from "@/components/blog/DynamicBlogDetails";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://mematdigi.com/api";
const API_ORIGIN = API_BASE.replace(/\/api\/?$/, "");

const resolveImg = (src) => {
  if (!src) return "";
  if (/^https?:\/\//i.test(src)) return src;
  if (src.startsWith("/uploads")) return `${API_ORIGIN}${src}`;
  return src;
};

// Fetch a single post by slug (does NOT increment views)
async function getBlog(slug) {
  try {
    const res = await fetch(`${API_BASE}/blogs/slug/${slug}`, { cache: "no-store" });
    if (!res.ok) return null;
    const json = await res.json();
    return json.success ? json : null;
  } catch {
    return null;
  }
}

// ── Dynamic SEO metadata ────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const result = await getBlog(slug);
  if (!result?.data) {
    return { title: "Post Not Found | Memat Digi" };
  }
  const blog = result.data;
  const m = blog.meta || {};
  const title = m.metaTitle || blog.title;
  const description = m.metaDescription || blog.excerpt || `${blog.title} — Memat Digi blog.`;
  const ogImage = resolveImg(m.ogImage || blog.featuredImage);

  return {
    title: `${title} | Memat Digi`,
    description,
    keywords: m.metaKeywords || (blog.tags || []).join(", "),
    alternates: m.canonicalUrl ? { canonical: m.canonicalUrl } : undefined,
    robots: m.robots || "index, follow",
    openGraph: {
      title: m.ogTitle || title,
      description: m.ogDescription || description,
      type: "article",
      publishedTime: blog.publishedAt,
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: {
      card: m.twitterCard || "summary_large_image",
      title: m.twitterTitle || title,
      description: m.twitterDescription || description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const result = await getBlog(slug);

  if (!result?.data) {
    notFound();
  }

  const { data: blog, related, prev, next, commentCount } = result;

  return (
    <div>
      <BackToTop />
      <Header />
      <Header isStickyHeader={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeaderSpace />
            <HeroInner
              title={blog.title}
              text={blog.title}
              breadcrums={[{ name: "Blog", path: "/blogs" }]}
              bgImage={resolveImg(blog.featuredImage)}
            />
            <DynamicBlogDetails
              blog={blog}
              related={related || []}
              prev={prev}
              next={next}
              commentCount={commentCount || 0}
            />
          </main>
          <Footer5 />
        </div>
      </div>
      <ClientWrapper />
    </div>
  );
}
