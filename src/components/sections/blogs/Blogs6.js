"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getBlogs } from "@/lib/api";
import { resolveImg, dateBadge } from "@/lib/media";

const Blogs6 = () => {
  const [blogs, setBlogs] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getBlogs({ limit: 3, page: 1 })
      .then((r) => {
        if (r.success && r.data) setBlogs(r.data);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  // Hide the whole section gracefully if there are no posts yet
  if (loaded && blogs.length === 0) return null;

  return (
    <section className="tj-blog-section h6-blog section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading style-2 style-6 text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>News & Blogs
              </span>
              <h2 className="sec-title title-anim">
                Latest Insights on Digital Marketing & Technology in India
              </h2>
            </div>
          </div>
        </div>
        <div className="row row-gap-4 h6-blog-wrapper">
          {blogs.map((blog, idx) => {
            const { day, month } = dateBadge(blog.publishedAt || blog.createdAt);
            return (
              <div key={blog._id} className="col-xl-4 col-md-6">
                <div className="blog-item wow fadeInUp" data-wow-delay=".3s">
                  <div className="blog-thumb">
                    <Link href={`/blogs/${blog.slug}`}>
                      <img src={resolveImg(blog.featuredImage)} alt={blog.featuredImageAlt || blog.title} width={870} height={450} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                    </Link>
                    <div className="blog-date">
                      <span className="date">{day}</span>
                      <span className="month">{month}</span>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <span className="categories">
                        <Link href={`/blogs?category=${blog.categorySlug || ""}`}>{blog.category}</Link>
                      </span>
                      <span>
                        By <Link href={`/blogs?author=${blog.author?.slug || ""}`}>{blog.author?.name || "Memat Digi"}</Link>
                      </span>
                    </div>
                    <h4 className="title">
                      <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
                    </h4>
                    <Link className="text-btn" href={`/blogs/${blog.slug}`}>
                      <span className="btn-text"><span>Read More</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs6;
