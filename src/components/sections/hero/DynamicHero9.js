"use client";
import { useState } from "react";
import Link from "next/link";

// DynamicHero9 — same layout as Hero9 but driven by DB data
const DynamicHero9 = ({ data = {} }) => {
  const {
    eyebrow = "Digital Marketing Agency",
    title = "Best Digital Marketing Company",
    highlight = "India",
    description = "Boost your business with results-driven digital marketing services.",
    bgImage = "/images/hero/h9-hero-bg.webp",
    ctaText = "Get Started",
    ctaUrl = "/contact-us",
    stat1Number = "15+", stat1Label = "Years of experience",
    stat2Number = "8k+", stat2Label = "Happy clients",
    stat3Number = "25k+", stat3Label = "Projects delivered",
    stat4Number = "25+", stat4Label = "Industries served",
  } = data;

  const [formData, setFormData] = useState({ fullName: "", phone: "", email: "", service: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
      alert("Thanks! We'll be in touch shortly.");
      setFormData({ fullName: "", phone: "", email: "", service: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const stats = [
    { number: stat1Number, label: stat1Label },
    { number: stat2Number, label: stat2Label },
    { number: stat3Number, label: stat3Label },
    { number: stat4Number, label: stat4Label },
  ].filter(s => s.number);

  return (
    <section className="h9-hero">
      <div className="h9-hero-inner">
        <div className="h9-hero-bg-image" style={{ backgroundImage: `url('${bgImage}')` }}></div>
        <div className="h9-hero-overlay"></div>
        <div className="h9-hero-glow" aria-hidden="true"></div>

        <div className="h9-hero-item-wrapper">
          <div className="h9-hero-content">
            <div className="h9-hero-row">
              {/* LEFT */}
              <div className="h9-hero-left">
                <span className="h9-hero-eyebrow wow fadeInUp" data-wow-delay="0.1s">
                  <span className="dot"></span> {eyebrow}
                </span>

                <h1 className="h9-hero-title wow fadeInUp" data-wow-delay="0.2s">
                  {title}{highlight ? <> <span className="highlight">{highlight}</span></> : ""}
                </h1>

                <p className="h9-hero-desc wow fadeInUp" data-wow-delay="0.3s">{description}</p>

                <div className="h9-hero-stats wow fadeInUp" data-wow-delay="0.4s">
                  {stats.map((s, i) => (
                    <div key={i} style={{ display: "contents" }}>
                      {i > 0 && <div className="stat-divider" aria-hidden="true"></div>}
                      <div className="stat-item">
                        <h3 className="stat-number">{s.number}</h3>
                        <p className="stat-label">{s.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="h9-hero-cta wow fadeInUp" data-wow-delay="0.5s">
                  <Link href={ctaUrl} className="h9-hero-btn">
                    <span>{ctaText}</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link href="/about-us" className="h9-hero-btn-secondary">Learn more</Link>
                </div>
              </div>

              {/* RIGHT: Form */}
              <div className="h9-hero-right wow fadeInRight" data-wow-delay="0.4s">
                <div className="h9-hero-form-card">
                  <span className="form-tag"><i className="fa-solid fa-arrow-right"></i> GET IN TOUCH</span>
                  <h2 className="form-title">Request A Quote</h2>
                  <p className="form-subtitle">Fill out the form and our team will reach out within 24 hours.</p>
                  <form className="h9-hero-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <input type="text" name="fullName" placeholder="Full Name*" value={formData.fullName} onChange={handleChange} required />
                      </div>
                      <div className="form-group">
                        <input type="tel" name="phone" placeholder="Phone No.*" value={formData.phone} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <select name="service" value={formData.service} onChange={handleChange} required>
                        <option value="">Select Services *</option>
                        <option value="seo">SEO</option>
                        <option value="ppc">PPC / Google Ads</option>
                        <option value="smm">Social Media Marketing</option>
                        <option value="web">Web Development</option>
                        <option value="content">Content Marketing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <textarea name="message" placeholder="Tell us about your project..." rows="3" value={formData.message} onChange={handleChange}></textarea>
                    </div>
                    <button type="submit" className="form-submit-btn" disabled={isSubmitting}>
                      <i className="fa-regular fa-envelope"></i>
                      {isSubmitting ? "Sending..." : "Get Quote"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h7-hero-shape h9-hero-shape-1 wow fadeInUpBig" data-wow-delay="1s">
        <img className="tj-anim-move-var-big" src="/images/shape/h7-hero-blur-1.png" alt="" />
      </div>
      <div className="h7-hero-shape h9-hero-shape-2 wow fadeInDownBig" data-wow-delay="1.2s">
        <img className="tj-anim-move-var-big-reverse" src="/images/shape/h7-hero-blur-2.png" alt="" />
      </div> */}
    </section>
  );
};

export default DynamicHero9;
