'use client';
import { useState } from "react";
import Link from "next/link";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";

import Footer5 from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

const heroData = {
    bgImage: "/images/hero/h9-hero-bg.webp",
    eyebrow: "CONTENT MARKETING",
    titlePre: "Content Marketing Agency in India That Turns Content Into",
    titleHighlight: "Business Growth",
    titlePost: "",
    desc: (
        <>
            As a trusted content marketing agency in India, we deliver strategic content marketing services that increase organic traffic, build brand authority, and generate qualified leads. From SEO content writing and blogging to website copywriting and B2B content marketing, we create content that drives sustainable business growth.
        </>
    ),
    stats: [
        { number: "100", suffix: "+", label: "Happy Clients" },
        { number: "99", suffix: "%", label: "Client Satisfaction" },
        { number: "15", suffix: "+", label: "Industries Served" },
        { number: "135", suffix: "+", label: "Projects Delivered" },
    ],
    primaryCta: { text: "Get Content Strategy Call", url: "/contact-us" },
    form: {
        tag: "GET IN TOUCH",
        title: "Request A Quote",
        subtitle: "Fill out the form and our team will reach out within 24 hours.",
        // Content Marketing form fields = Name, Email, Phone, Business Type, Message.
        serviceOptions: [
            { value: "", label: "Business Type *" },
            { value: "startup", label: "Startup / Small Business" },
            { value: "d2c", label: "D2C / Ecommerce Brand" },
            { value: "b2b", label: "B2B / Enterprise" },
            { value: "other", label: "Other" },
        ],
    },
};

const chooseData = {
    subTitle: "COMMON CONTENT MARKETING CHALLENGES",
    subIcon: "tji-box",
    title: "Why Your Content Is Not Driving Traffic or Leads",
    desc: "",
    banner: "/images/choose/h8-choose-bnner.webp",
    boxes: [
        {
            icon: "tji-innovative",
            title: "No Content Strategy",
            desc: "Publishing content without a clear strategy leads to inconsistent results. Without keyword research, search intent analysis, and topic planning, your content struggles to attract the right audience.",
        },
        {
            icon: "tji-award",
            title: "Low Search Visibility",
            desc: "Well-written content alone won't rank. Poor SEO optimization, weak internal linking, and content that doesn't match user intent prevent your website from gaining organic visibility and qualified traffic.",
        },
        {
            icon: "tji-support",
            title: "Poor Lead Generation",
            desc: "Content should support business growth, not just fill your blog. Without compelling messaging, conversion-focused copy, and a clear content funnel, your content fails to generate qualified leads and measurable results.",
        },
    ],
};

const servicesData = {
    subTitle: "WHAT WE OFFER",
    subIcon: "tji-box",
    title: "Our Content Marketing Services for Businesses Across India",
    desc: "From content strategy and SEO writing to B2B content and performance analysis - everything your business needs to turn content into a consistent growth engine.",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Content Strategy & Planning",
            desc: "We build data-driven content strategies around your audience, your keywords, and your competitors - creating a roadmap that tells you exactly what to publish, when to publish it, and why it will work.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Blogging & Article Writing",
            desc: "Our blog writing services produce well-researched, SEO-optimized articles that rank on Google, build topical authority, and drive the kind of organic traffic that converts into real leads for your business.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Website Copywriting",
            desc: "Your website copy is your most important sales asset. Our website content writing services produce clear, conversion-focused copy that communicates your value instantly and guides visitors naturally toward the action you want them to take.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "SEO Content Writing",
            desc: "Every piece of content we produce as your content marketing agency in India is optimized for search - keyword research, search intent alignment, on-page SEO, and internal linking - so your content ranks and keeps ranking long after it is published.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Social Media Content",
            desc: "Platform-specific content that stops the scroll and drives engagement - written and designed around what your specific audience responds to on Instagram, LinkedIn, Facebook, and Twitter, backed by performance data not guesswork.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Email Content Marketing",
            desc: "Strategically written email campaigns that nurture leads, retain customers, and drive repeat revenue - from welcome sequences and drip campaigns to newsletters and promotional emails that people actually open and act on.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "B2B Content Marketing",
            desc: "B2B content marketing services built for long sales cycles and complex buying decisions - whitepapers, case studies, thought leadership articles, and LinkedIn content that builds authority with the decision-makers who control the budget.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Content Distribution & Promotion",
            desc: "Great content that nobody sees is wasted content. We distribute and promote every piece across the right channels - organic search, social media, email, and syndication - so your content reaches the audience it was built for.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Content Performance Analysis",
            desc: "We track what matters - organic traffic, keyword rankings, engagement rate, leads generated, and content ROI - and deliver clear monthly reports that show exactly how our content marketing services are growing your business.",
            url: "/services",
        },
    ],
};

const solutionsData = {
    subTitle: "WHO WE SERVE",
    title: "Content Marketing Solutions for Every Business Type",
    moreText: "More Services",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Startups & Small Businesses",
            url: "/services",
            desc: "Building organic authority from zero takes time - but the right content strategy from day one makes all the difference. Our content marketing agency in India works with startups to identify low-competition, high-intent topics that drive qualified traffic fast, building a content foundation that compounds into long-term organic growth without burning budget on paid channels.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "D2C & Ecommerce Brands",
            url: "/services",
            desc: "Product pages alone do not build brands. Our SEO content marketing services for D2C brands combine buying guide content, product comparison articles, and social media content that builds brand awareness, drives organic discovery, and keeps customers coming back - turning one-time buyers into loyal repeat customers through strategic content at every stage of the funnel.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "B2B & Enterprise Companies",
            url: "/services",
            desc: "B2B buyers research extensively before they ever speak to a salesperson. Our B2B content marketing services build the kind of authoritative, trust-building content - case studies, whitepapers, thought leadership, and industry guides - that positions your brand as the obvious choice long before the first conversation happens.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        // Aur solutions add karne ho to yahan object push kar do ⬇️
    ],
};

const featuresData = {
    subTitle: "INDUSTRIES WE SERVE",
    subIcon: "tji-box",
    title: "Industries We Serve With Our Content Marketing Services in India",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Healthcare",
            desc: "Patient education content, doctor authority building, and health brand storytelling that builds trust and drives appointment enquiries organically",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Real Estate",
            desc: "Property guides, neighborhood content, investment analysis articles, and local SEO content that attracts serious buyers and generates consistent inbound leads",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Education",
            desc: "Course guides, career content, institutional thought leadership, and student-focused articles that drive admissions and build long-term brand authority",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Ecommerce",
            desc: "Product content, buying guides, category SEO, and brand storytelling that drives organic discovery and converts content readers into paying customers",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Finance & Fintech",
            desc: "Compliant, trust-building financial content that educates audiences, builds brand credibility, and generates qualified organic leads from high-intent search traffic",
        },
        {
            id: 6,
            icon: "tji-support",
            title: "SaaS & Technology",
            desc: "Technical content marketing, product-led content, comparison articles, and thought leadership that attracts decision-makers and drives trial signups and demos",
        },
    ],
};

const scalableHighlightData = {
    eye: 'BUSINESS CHALLENGES',
    title: "Content Marketing Challenges Every Business in India Faces -",
    titleSpan: "And How We Fix Them",
    paragraphs: [
        "Most businesses that come to us have been creating content for months - sometimes years - and have very little to show for it. Blogs that rank for nothing. Social posts that get no engagement. Website copy that fails to convert. The problem is almost never the effort. It is the absence of a real content strategy services framework connecting what gets created to what the audience actually searches for and what the business actually needs to grow. As a trusted content marketing agency in India working with 100+ businesses, we have seen every version of broken content marketing - and we know exactly how to fix it.",
    ],
    features: [
        "Content that ranks for nothing - because keyword research and search intent were never part of the process",
        "High bounce rates on content pages - because the content answers the wrong question for the wrong audience",
        "No leads from content - because there is no conversion strategy connecting content consumption to business action",
        "Inconsistent publishing - because there is no content calendar, no strategy, and no system behind the effort",
        "Content that duplicates existing pages - causing keyword cannibalization that hurts rankings across the whole website",
        "No performance tracking - meaning there is no way to know what is working or where the strategy needs to change",
    ],
};

const servicesData9 = {
    subTitle: "OUR PROCESS",
    title: "How We Deliver Our Content Marketing Services",
    moreText: "More services",
    moreUrl: "/services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Content Audit & Competitor Analysis",
            desc: "We start by auditing your existing content - identifying what is working, what is wasting effort, and where your biggest growth opportunities are. We benchmark against your top competitors to find the content gaps your strategy needs to fill first.",
            url: "/services",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Content Strategy & Topic Planning",
            desc: "We build a custom content strategy around your audience, your keywords, and your business goals - with a detailed content calendar that maps every piece of content to a specific search intent, funnel stage, and measurable business outcome.",
            url: "/services",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Content Creation & Optimization",
            desc: "Our content creation services team produces every piece of content to the highest standard - fully researched, SEO-optimized, and written for the human reading it as much as the algorithm ranking it. Every piece is reviewed before it goes anywhere near your website.",
            url: "/services",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Content Distribution & Promotion",
            desc: "We distribute every piece of content across the channels where your audience actually is - organic search, social media, email newsletters, and content syndication partners - maximizing reach and ensuring the content investment delivers the widest possible return.",
            url: "/services",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Performance Tracking & Reporting",
            desc: "Monthly performance reports covering keyword rankings, organic traffic growth, engagement metrics, leads generated, and content ROI. Clear, plain-language reporting that shows exactly how our content marketing services in India are contributing to your business growth.",
            url: "/services",
        },
    ],
};

const scalableHighlightData2 = {
    eye: 'WHY CHOOSE US',
    title: "Why Choose Mematdigi as Your ",
    titleSpan: "Content Marketing Agency in India",
    paragraphs: [
        "At Mematdigi, we built our reputation as a leading content marketing agency in India by treating content as a business growth channel - not a box to tick. We are not the content marketing services agency that produces articles to fill a quota. We are the strategic content partner that builds every piece of content around a specific search intent, a specific audience need, and a specific business outcome. As a full-service content marketing company in India, we cover every content format and every distribution channel - from SEO content writing services and blog writing services to B2B content marketing services and email campaigns - all connected by a single, coherent strategy built around your growth goals.",
        "Whether you are a startup looking for affordable content development services to build organic authority or an enterprise that needs a full-scale content marketing company in India to manage every channel - Mematdigi delivers content marketing services in India that drive real traffic, real leads, and real business growth. Stop publishing content that nobody reads and start building content that actually works for your business.",
    ],
    features: [
        "Content marketing agency in India with proven results - 100+ businesses grown through strategic, data-driven content",
        "Content marketing services agency covering every format - blogs, website copy, social media, email, B2B content, and more",
        "SEO content writing services built to rank - every piece optimized for search intent, keywords, and long-term organic growth",
        "Blog writing services that build authority - well-researched, professionally written articles that earn rankings and keep them",
        "B2B content marketing services for complex sales - thought leadership, case studies, and whitepapers that convert decision-makers",
        "Content creation services with complete transparency - clear strategy, consistent delivery, and monthly performance reporting",
    ],
};

const faqData = {
    subTitle: "FAQs",
    subIcon: "tji-box",
    title: "Frequently Asked Questions About Content Marketing Services in India",
    phone: { display: "1-888-452-1505", tel: "18884521505" },
    items: [
        {
            title: "What does a content marketing agency in India do? ",
            desc: "A content marketing agency in India builds and executes strategies that use content - blogs, website copy, social media, email, and video - to attract the right audience, build brand authority, and generate leads and sales. At Mematdigi, our content marketing services agency goes beyond production - we tie every piece of content to a measurable business outcome.",
            initActive: true,
        },
        {
            title: "How is content marketing different from SEO? ",
            desc: "SEO focuses on technical optimization and link building to improve rankings. Content marketing creates the valuable, keyword-optimized content that gives SEO something to work with. Our SEO content writing services combine both - producing content that is strategically written for search engines and genuinely useful for the humans reading it, driving rankings and engagement simultaneously.",
            initActive: false,
        },
        {
            title: "How long does content marketing take to show results? ",
            desc: "Content marketing is a compounding strategy - results build over time. Most businesses working with a content marketing agency see measurable organic traffic improvements within 3-6 months. Content development services focused on low-competition, high-intent keywords can show results faster. The businesses that commit for 12+ months see the most dramatic, sustainable growth from content.",
            initActive: false,
        },
        {
            title: "Do you offer content marketing services for B2B businesses? ",
            desc: "Yes - B2B content marketing services are a core part of what we do. B2B content requires a completely different approach - longer formats, more technical depth, and content designed for decision-makers at specific stages of a long buying cycle. Our content strategy services for B2B businesses include whitepapers, case studies, thought leadership articles, and LinkedIn content built to convert complex buyers.",
            initActive: false,
        },
        {
            title: "What types of content do you create? ",
            desc: "Our content creation services cover every format - SEO blog articles, website copywriting, landing page copy, social media content, email newsletters, whitepapers, case studies, product descriptions, and video scripts. Our blog writing services and website content writing services are among our most popular - producing content that ranks, converts, and builds long-term brand authority.",
            initActive: false,
        },
        {
            title: "How do you measure the success of content marketing?",
            desc: "We track what actually matters for your business - organic traffic growth, keyword rankings, time on page, leads generated from content, and content-influenced revenue. As a data-driven content marketing company in India, we deliver monthly performance reports that show exactly how our content marketing services in India are contributing to your growth - in plain language, without vanity metrics.",
            initActive: false,
        },
    ],
};

const contactData = {
    left: {
        subTitle: "CONTACT US NOW",
        title: "Ready to Grow Your Business With India's Best Content Marketing Agency?",
        desc: "Ready to partner with a trusted content marketing agency in India? Mematdigi delivers strategic content marketing services that increase organic traffic, strengthen brand authority, and generate qualified leads. From startups to enterprise businesses, we create content designed to drive sustainable growth and measurable business results. ",
    },
    form: {
        subTitle: "Get a Call Now",
        subIcon: "tji-box",
        title: "Drop Us a",
        titleSpan: "Line.",
        selectOptions: [
            { value: "0", optionName: "Choose an option" },
            { value: "1", optionName: "Content Strategy & Planning" },
            { value: "2", optionName: "Blogging & Article Writing" },
            { value: "3", optionName: "Website Copywriting" },
            { value: "4", optionName: "SEO Content Writing" },
            { value: "5", optionName: "Email Content Marketing" },
            { value: "6", optionName: "B2B Content Marketing" },
            { value: "7", optionName: "Content Performance Analysis" },
        ],
    },
};

/* ============================================================
 *  SECTIONS
 * ========================================================== */

const HeroSection = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        service: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            console.log("Form submitted:", formData);
            await new Promise((r) => setTimeout(r, 600));
            alert("Thanks! We'll be in touch shortly.");
            setFormData({ fullName: "", phone: "", email: "", service: "", message: "" });
        } catch (err) {
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="h9-hero">
            <div className="h9-hero-inner">
                <div
                    className="h9-hero-bg-image"
                    style={{ backgroundImage: `url('${heroData.bgImage}')` }}
                ></div>
                <div className="h9-hero-overlay"></div>
                <div className="h9-hero-glow" aria-hidden="true"></div>

                <div className="h9-hero-item-wrapper">
                    <div className="h9-hero-content">
                        <div className="h9-hero-row">
                            <div className="h9-hero-left">
                                <span className="h9-hero-eyebrow wow fadeInUp" data-wow-delay="0.1s">
                                    <span className="dot"></span> {heroData.eyebrow}
                                </span>

                                <h1 className="h9-hero-title wow fadeInUp" data-wow-delay="0.2s">
                                    {heroData.titlePre}{" "}
                                    <span className="highlight">{heroData.titleHighlight}</span>{" "}
                                    {heroData.titlePost}
                                </h1>

                                <p className="h9-hero-desc wow fadeInUp" data-wow-delay="0.3s">
                                    {heroData.desc}
                                </p>

                                <div className="h9-hero-stats wow fadeInUp" data-wow-delay="0.4s">
                                    {heroData.stats.map((stat, idx) => (
                                        <div key={idx} style={{ display: "contents" }}>
                                            {idx > 0 && (
                                                <div className="stat-divider" aria-hidden="true"></div>
                                            )}
                                            <div className="stat-item">
                                                <h3 className="stat-number">
                                                    {stat.number}
                                                    <span>{stat.suffix}</span>
                                                </h3>
                                                <p className="stat-label">{stat.label}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="h9-hero-cta wow fadeInUp" data-wow-delay="0.5s">
                                    <Link href={heroData.primaryCta.url} className="h9-hero-btn">
                                        <span>{heroData.primaryCta.text}</span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>

                            <div className="h9-hero-right wow fadeInRight" data-wow-delay="0.4s">
                                <div className="h9-hero-form-card">
                                    <span className="form-tag">
                                        <i className="fa-solid fa-arrow-right"></i> {heroData.form.tag}
                                    </span>
                                    <h2 className="form-title">{heroData.form.title}</h2>
                                    <p className="form-subtitle">{heroData.form.subtitle}</p>

                                    <form className="h9-hero-form" onSubmit={handleSubmit}>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    placeholder="Full Name*"
                                                    value={formData.fullName}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="Phone No.*"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email*"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                required
                                            >
                                                {heroData.form.serviceOptions.map((opt) => (
                                                    <option key={opt.value} value={opt.value}>
                                                        {opt.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <textarea
                                                name="message"
                                                placeholder="Tell us about your project..."
                                                rows="3"
                                                value={formData.message}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            className="form-submit-btn"
                                            disabled={isSubmitting}
                                        >
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
        </section>
    );
};

const ChooseSection = () => {
    return (
        <section id="choose" className="tj-choose-section h8-choose section-gap-x">
            <div className="container-fluid gap-0">
                <div className="row align-items-center flex-column-reverse flex-lg-row">
                    <div className="col-12 col-lg-6">
                        <div className="h8-choose-content-wrapper">
                            <div className="sec-heading style-3">
                                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                    <i className={chooseData.subIcon}></i>
                                    {chooseData.subTitle}
                                </span>
                                <h2 className="sec-title title-anim">{chooseData.title}</h2>
                                <p className="desc wow fadeInUp" data-wow-delay=".4s">
                                    {chooseData.desc}
                                </p>
                            </div>
                            <div className="h8-choose-box-wrapper">
                                {chooseData.boxes.map((box, idx) => (
                                    <div
                                        key={idx}
                                        className="choose-box h6-choose-box h8-choose-box wow fadeInUp"
                                        data-wow-delay={`${0.3 + idx * 0.1}s`}
                                    >
                                        <div className="choose-content">
                                            <div className="choose-icon">
                                                <i className={box.icon}></i>
                                            </div>
                                            <div>
                                                <h3 className="title" style={{ fontSize: "25px" }}>
                                                    {box.title}
                                                </h3>
                                                <p className="desc">{box.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 align-self-stretch">
                        <div className="h8-choose-banner">
                            <img
                                data-speed=".8"
                                className="wow fadeInLeftBig"
                                data-wow-delay=".3s"
                                src={chooseData.banner}
                                alt={chooseData.title}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-shape-2">
                <img src="/images/shape/pattern-3.svg" alt="" />
            </div>
        </section>
    );
};

const ServicesSection = () => {
    return (
        <section className="h8-service overflow-hidden section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading style-3 sec-heading-centered">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                <i className={servicesData.subIcon}></i>
                                {servicesData.subTitle}
                            </span>
                            <h2 className="sec-title title-anim">{servicesData.title}</h2>
                            <p className="desc wow fadeInUp" data-wow-delay=".4s">{servicesData.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container gap-30">
                <div className="row">
                    <div className="col-12">
                        <div
                            className="service-wrapper h8-service-wrapper wow bounceInLeft"
                            data-wow-delay=".3s"
                        >
                            <div className="row gy-4">
                                {servicesData.items.map((item, idx) => (
                                    <div key={idx} className="col-12 col-md-6 col-xl-4">
                                        <div className="service-item h8-service-item">
                                            <div className="service-icon">
                                                <i className={item.icon}></i>
                                            </div>
                                            <h3 className="title" style={{ fontSize: "25px" }}>{item.title}</h3>
                                            <div className="service-content">
                                                <p className="desc">{item.desc}</p>
                                            </div>
                                            <ButtonPrimary text={"Visit Now"} url={item.url} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServicesSection2 = () => {
    return (
        <section className="tj-service-section service-2 section-gap section-gap-x slidebar-stickiy-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="content-wrap slidebar-stickiy">
                            <div className="sec-heading style-2">
                                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                    {solutionsData.subTitle}
                                </span>
                                <h2 className="sec-title text-white text-anim">
                                    {solutionsData.title}
                                </h2>
                            </div>
                            <div className="wow fadeInUp" data-wow-delay=".6s">
                                <ButtonPrimary
                                    text={solutionsData.moreText}
                                    url={solutionsData.moreUrl}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="service-wrapper-2">
                            {solutionsData.items.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="service-item-wrapper tj-fadein-right-on-scroll"
                                >
                                    <div className="service-item style-2">
                                        <div className="title-area">
                                            <div className="service-icon">
                                                <i className={item.icon}></i>
                                            </div>
                                            <h4 className="title">
                                                <Link href={item.url}>{item.title}</Link>
                                            </h4>
                                        </div>
                                        <div className="service-content">
                                            <p className="desc">{item.desc}</p>
                                            {/* <ul className="list-items">
                                                {item.list.map((li, i) => (
                                                    <li key={i}>
                                                        <i className="tji-list"></i>
                                                        {li}
                                                    </li>
                                                ))}
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-shape-1">
                <img src="/images/shape/pattern-2.svg" alt="" />
            </div>
            <div className="bg-shape-2">
                <img src="/images/shape/pattern-3.svg" alt="" />
            </div>
            <div className="bg-shape-3">
                <img src="/images/shape/shape-blur.svg" alt="" />
            </div>
        </section>
    );
};

const FeaturesSection = () => {
    return (
        <section id="features" className="tj-choose-section section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec-heading style-3 text-center">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                <i className={featuresData.subIcon}></i>
                                {featuresData.subTitle}
                            </span>
                            <h2 className="sec-title title-anim">{featuresData.title}</h2>
                        </div>
                    </div>
                </div>
                <div className="row row-gap-4 rightSwipeWrap">
                    {featuresData.items.map((feature) => (
                        <div key={feature.id} className="col-xl-4 col-md-6">
                            <div className="choose-box style-2 right-swipe">
                                <div className="choose-content">
                                    <div className="choose-icon">
                                        <i className={feature.icon}></i>
                                    </div>
                                    <h4 className="title">{feature.title}</h4>
                                    <p className="desc">{feature.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* Reusable — pehle ye 2 baar copy-paste hua tha (dono highlight section
 * bilkul same the). Ab ek hi component hai, data prop ke through render hota hai. */
const ScalableHighlightSection = ({ data }) => {
    return (
        <section className="services-section p-3 m-5 mb-5 border rounded-3 box-shadow">
            {/* SCSS me defined decorative glows */}
            <span className="ss-glow ss-glow--orange" />
            <span className="ss-glow ss-glow--blue" />

            <div className="container">
                <div className="services-content">
                    <div className="services-header">
                        <div className="sec-heading style-3 text-center">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                <i className={data.subIcon}></i>
                                {data.eye}
                            </span>
                            <h2 className="main-title mt-4" style={{fontSize:'40px'}}>
                                {data.title} <span>{data.titleSpan}</span>
                            </h2>
                        </div>
                    </div>

                    <div className="services-description">
                        {data.paragraphs.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>

                    <div className="features-grid">
                        {data.features.map((text, idx) => (
                            <div key={idx} className="feature-item">
                                <div className="feature-icon">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16.6667 5L7.5 14.1667L3.33333 10"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                {/* text ab icon ke BAHAR, uska sibling */}
                                <span className="feature-text">{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServicesSection9 = () => {
    return (
        <section className="h9-service section-gap section-gap-x tj-sticky-panel-container-2 tj-progress-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className="sec-heading style-8 tj-sticky-panel-2">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                {servicesData9.subTitle}
                            </span>
                            <h2 className="sec-title title-anim">{servicesData9.title}</h2>
                            <div className="h9-service-more wow fadeInUp" data-wow-delay=".3s">
                                <ButtonPrimary
                                    text={servicesData9.moreText}
                                    url={servicesData9.moreUrl}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="h9-service-scroll-progress tj-scroll-progress tj-sticky-panel-2">
                            {servicesData9.items.map((_, idx) => (
                                <div
                                    key={idx}
                                    className={`tj-scroll-progress-item ${idx === 0 ? "active" : ""}`}
                                >
                                    <h5 className="tj-scroll-progress-sln">
                                        {String(idx + 1).padStart(2, "0")}.
                                    </h5>
                                    <div className="tj-scroll-progress-ind">
                                        <div className="tj-scroll-progress-ind-inner"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="service-wrapper h9-service-wrapper">
                            {servicesData9.items.map((service, idx) => (
                                <div className="service-item style-5 tj-progress-item" key={idx}>
                                    <div className="service-content-area">
                                        <div className="service-icon">
                                            <i className={service.icon}></i>
                                        </div>
                                        <div className="service-content">
                                            <h4 className="title">
                                                <Link href={service.url}>{service.title}</Link>
                                            </h4>
                                            <p className="desc">{service.desc}</p>
                                        </div>
                                        <Link href={service.url} className="h9-service-nav">
                                            <i className="tji-arrow-right-long"></i>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-shape-1">
                <img src="/images/shape/pattern-2.svg" alt="" />
            </div>
            <div className="bg-shape-2">
                <img src="/images/shape/pattern-3.svg" alt="" />
            </div>
            <div className="bg-shape-3">
                <img src="/images/shape/h7-testimonial-shape-blur.svg" alt="" />
            </div>
        </section>
    );
};

const FaqSection = () => {
    return (
        <section className="h7-faq section-gap slidebar-stickiy-container">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-12 col-lg-4">
                        <div className="sec-heading style-2 style-7 slidebar-stickiy">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                                <i className={faqData.subIcon}></i> {faqData.subTitle}
                            </span>
                            <h4 className="h2 sec-title text-anim">{faqData.title}</h4>
                            <Link className="number" href={`tel:${faqData.phone.tel}`}>
                                <span className="call-icon">
                                    <i className="tji-phone"></i>
                                </span>
                                <span>{faqData.phone.display}</span>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <BootstrapWrapper>
                            <div className="accordion tj-faq style-2 h7-faq-wrapper" id="faqTwo">
                                {faqData.items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="accordion-item active wow fadeInUp"
                                        data-wow-delay=".3s"
                                    >
                                        <button
                                            className={`faq-title ${item.initActive ? "" : "collapsed"}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#faq-1-${idx + 1}`}
                                            aria-expanded={item.initActive}
                                        >
                                            {item.title}
                                        </button>
                                        <div
                                            id={`faq-1-${idx + 1}`}
                                            className={`collapse ${item.initActive ? "show" : ""}`}
                                            data-bs-parent="#faqTwo"
                                        >
                                            <div className="accordion-body faq-text">
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </BootstrapWrapper>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContactSection = () => {
    return (
        <section className="tj-contact-section section-gap">
            {/* Scoped CSS to fix dark theme text visibility */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                .tj-contact-section .contact-left-content {
                    margin-bottom: 40px;
                }
                .tj-contact-section .contact-left-content .sub-title {
                    color: #fd5d14;
                    font-weight: 600;
                    margin-bottom: 12px;
                    display: inline-block;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .tj-contact-section .contact-left-content .sec-title {
                    color: #ffffff !important;
                    font-size: 42px;
                    line-height: 1.3;
                    font-weight: 700;
                    margin-bottom: 20px;
                }
                .tj-contact-section .contact-left-content p {
                    color: #d1d5db;
                    font-size: 18px;
                    line-height: 1.6;
                }
                @media (max-width: 991px) {
                    .tj-contact-section .contact-left-content .sec-title {
                        font-size: 32px;
                    }
                }
            `,
                }}
            />

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-left-content wow fadeInUp" data-wow-delay=".2s">
                            <div className="sec-heading">
                                <span className="sub-title">{contactData.left.subTitle}</span>
                                <h4 className="sec-title title-anim">{contactData.left.title}</h4>
                                <p>{contactData.left.desc}</p>
                            </div>
                                    <div className="submit-btn">
                                        <ButtonPrimary text={"Get a Call Now"} url={'/services'}/>
                                    </div>
                        </div>

                        <div className="global-map wow fadeInUp" data-wow-delay=".3s">
                            <div className="global-map-img"></div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="contact-form style-2 wow fadeInUp" data-wow-delay=".4s">
                            <div className="sec-heading">
                                <span className="sub-title text-white">
                                    <i className={contactData.form.subIcon}></i>
                                    {contactData.form.subTitle}
                                </span>
                                <h2 className="sec-title title-anim">
                                    {contactData.form.title} <span>{contactData.form.titleSpan}</span>
                                </h2>
                            </div>
                            <form id="contact-form-2">
                                <div className="row wow fadeInUp" data-wow-delay=".5s">
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <input
                                                type="text"
                                                name="cfName2"
                                                placeholder="Full Name *"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <input
                                                type="email"
                                                name="cfEmail2"
                                                placeholder="Email Address *"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <input
                                                type="tel"
                                                name="cfPhone2"
                                                placeholder="Phone number *"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <div className="tj-nice-select-box">
                                                <div className="tj-select">
                                                    <ReactNiceSelect
                                                        selectedIndex={0}
                                                        options={contactData.form.selectOptions}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-input message-input">
                                            <textarea
                                                name="cfMessage2"
                                                id="message"
                                                placeholder="Type message *"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="submit-btn">
                                        <ButtonPrimary text={"Send Message"} type={"submit"} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-shape-1">
                <img src="/images/shape/pattern-2.svg" alt="" />
            </div>
            <div className="bg-shape-2">
                <img src="/images/shape/pattern-3.svg" alt="" />
            </div>
        </section>
    );
};

export default function ContentMarketingServices() {
    return (
        <div>
            <BackToTop />
            <Header headerType={9} />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <div className="top-space-15"></div>
                        <HeroSection />
                        <ChooseSection />
                        <ServicesSection />
                        <ServicesSection2 />
                        <FeaturesSection />
                        <ScalableHighlightSection data={scalableHighlightData} />
                        <ServicesSection9 />
                        <ScalableHighlightSection data={scalableHighlightData2} />
                        <FaqSection />
                        <ContactSection />
                    </main>
                    <Footer5 />
                </div>
            </div>
            <ClientWrapper />
        </div>
    );
}