"use client";
import Link from "next/link";
import { resolveImg, dateBadge } from "@/lib/media";

const DynamicBlogCard = ({ blog, idx = 0 }) => {
  const { slug, title, excerpt, featuredImage, featuredImageAlt, category, categorySlug, author, publishedAt, createdAt } = blog || {};
  const { day, month } = dateBadge(publishedAt || createdAt);

  return (
    <article className="blog-item wow fadeInUp" data-wow-delay={`${0.1 * (idx % 3)}s`}>
      <div className="blog-thumb">
        <Link href={`/blogs/${slug}`}>
          <img src={resolveImg(featuredImage)} alt={featuredImageAlt || title} width={870} height={450} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
        </Link>
        <div className="blog-date">
          <span className="date">{day}</span>
          <span className="month">{month}</span>
        </div>
      </div>
      <div className="blog-content">
        <div className="blog-meta">
          <span className="categories">
            <Link href={`/blogs?category=${categorySlug || ""}`}>{category}</Link>
          </span>
          <span>
            By <Link href={`/blogs?author=${author?.slug || ""}`}>{author?.name || "Memat Digi"}</Link>
          </span>
        </div>
        <h3 className="title">
          <Link href={`/blogs/${slug}`}>{title}</Link>
        </h3>
        <p className="desc">{excerpt || ""}</p>
        <Link href={`/blogs/${slug}`} className="tj-btn-text">
          Read More <i className="tji-arrow-right-long"></i>
        </Link>
      </div>
    </article>
  );
};

export default DynamicBlogCard;
