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
    eyebrow: "VIDEO OPTIMIZATION SERVICES",
    titlePre: "Best Video Optimization Services in India to Increase Visibility, Engagement and",
    titleHighlight: "Rankings",
    titlePost: "",
    desc: (
        <>
            As a trusted provider of video optimization services in India, we help businesses improve YouTube rankings, increase video visibility, and drive higher engagement through data-driven optimization. From YouTube SEO and keyword research to metadata optimization and performance tracking, we turn every video into a powerful growth asset.
        </>
    ),
    stats: [
        { number: "100", suffix: "+", label: "Happy Clients" },
        { number: "99", suffix: "%", label: "Client Satisfaction" },
        { number: "15", suffix: "+", label: "Industries Served" },
        { number: "135", suffix: "+", label: "Projects Delivered" },
    ],
    primaryCta: { text: "Get Free Consultation", url: "/contact-us" },
    form: {
        tag: "GET IN TOUCH",
        title: "Request A Quote",
        subtitle: "Fill out the form and our team will reach out within 24 hours.",
        serviceOptions: [
            { value: "", label: "Select Services *" },
            { value: "youtube-seo", label: "YouTube SEO Services" },
            { value: "keyword-research", label: "Video Keyword Research" },
            { value: "metadata", label: "Video Metadata Optimization" },
            { value: "thumbnails", label: "YouTube Thumbnail Optimization" },
            { value: "performance", label: "Video Performance Optimization" },
            { value: "analytics", label: "Video Analytics & Reporting" },
            { value: "other", label: "Other" },
        ],
    },
};

const chooseData = {
    subTitle: "COMMON CHALLENGES",
    subIcon: "tji-box",
    title: "Why Your Videos Are Not Reaching the Right Audience",
    desc: "",
    banner: "/images/choose/h8-choose-bnner.webp",
    boxes: [
        {
            icon: "tji-innovative",
            title: "Poor Search Visibility",
            desc: "Without proper YouTube SEO, keyword research, and metadata optimization, even high-quality videos struggle to appear in search results, limiting their reach and reducing opportunities to attract the right audience.",
        },
        {
            icon: "tji-award",
            title: "Low Engagement & Click-Through Rates",
            desc: "Weak titles, unoptimized thumbnails, and poor audience retention signals make it difficult to earn clicks and keep viewers watching, preventing videos from achieving their full performance potential.",
        },
        {
            icon: "tji-support",
            title: "No Optimization Strategy",
            desc: "Publishing videos consistently is not enough. Without performance tracking, competitor analysis, and continuous optimization, businesses miss valuable opportunities to improve rankings, increase watch time, and generate measurable business results.",
        },
    ],
};

const servicesData = {
    subTitle: "WHAT WE OFFER",
    subIcon: "tji-box",
    title: "Our Video Optimization Services for Businesses Across India",
    desc: "From YouTube SEO and keyword research to thumbnail optimization and performance tracking - complete video optimization services built to improve your rankings, increase engagement, and grow your video channel organically.",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "YouTube SEO Services",
            desc: "We optimize your YouTube channel and videos for search - keyword-optimized titles, descriptions, tags, and closed captions - so your content ranks higher in YouTube search results, gets recommended more often, and reaches the right audience consistently.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Video Keyword Research",
            desc: "We identify the exact keywords your target audience is searching for on YouTube and Google - balancing search volume, competition, and intent to build a keyword strategy that drives qualified views and sustainable video channel growth.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Video Metadata Optimization",
            desc: "We optimize every metadata element of your videos - titles, descriptions, tags, categories, chapters, and end screens - ensuring search engines and YouTube's algorithm understand exactly what your content is about and rank it accordingly.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "YouTube Thumbnail Optimization",
            desc: "Your thumbnail is the first decision point between your video and every competitor in the results. We design and optimize thumbnails that earn clicks - tested for CTR performance and designed to communicate your video's value in a single image.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Video Performance Optimization",
            desc: "We audit and improve the technical and strategic elements that drive video performance - watch time, audience retention, engagement rate, and CTR - identifying and fixing the specific factors that are preventing your videos from performing at their potential.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Video Analytics & Reporting",
            desc: "We track every metric that matters - views, watch time, subscriber growth, CTR, audience retention, and revenue - delivering clear monthly reports that show exactly how our video optimization services in India are improving your channel performance.",
            url: "/services",
        },
    ],
};

const solutionsData = {
    subTitle: "WHO WE SERVE",
    title: "Video Optimization Solutions for Every Business Type",
    moreText: "More Services",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Startups & Small Businesses",
            url: "/services",
            desc: "Video is one of the most powerful organic growth channels available to a business with a limited marketing budget - but only when it is optimized correctly from the start. Our video optimization services in India help startups build YouTube presence strategically, targeting low-competition keywords that drive qualified viewers and converting video traffic into leads without the cost of paid advertising.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "Ecommerce & D2C Brands",
            url: "/services",
            desc: "Product videos, unboxing content, and tutorial videos are among the highest-converting content formats in ecommerce - when they are visible. Our YouTube SEO services help ecommerce brands optimize product and review videos for search, improve click-through rates with better thumbnails, and build the kind of video presence that drives both YouTube traffic and Google Shopping visibility.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "B2B & Enterprise Companies",
            url: "/services",
            desc: "Corporate videos, case studies, webinar recordings, and thought leadership content represent a significant investment for B2B businesses. Our video marketing services help enterprises maximize the return on that investment - optimizing every video for discoverability, improving watch time and engagement, and building YouTube channel authority that strengthens brand credibility with decision-makers.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
    ],
};

const featuresData = {
    subTitle: "INDUSTRIES WE SERVE",
    subIcon: "tji-box",
    title: "Industries We Help Grow With Video Optimization Services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Healthcare",
            desc: "Patient education videos, doctor authority content, and health brand channels optimized for the searches patients make when researching symptoms and treatments",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Real Estate",
            desc: "Property walkthrough videos, neighborhood guides, and agent authority content optimized to attract buyers and investors actively searching on YouTube",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Education",
            desc: "Course preview videos, tutorial content, and institutional authority channels optimized to drive student discovery and enrollment through YouTube search",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Ecommerce",
            desc: "Product demonstration videos, unboxing content, and buying guide videos optimized to appear in YouTube and Google searches at the moment of purchase intent",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Finance & Fintech",
            desc: "Financial education content, product explainer videos, and trust-building brand channels optimized to reach audiences researching financial decisions",
        },
        {
            id: 6,
            icon: "tji-support",
            title: "SaaS & Technology",
            desc: "Product demo videos, tutorial content, and thought leadership channels optimized to drive trial signups and brand awareness among technical decision-makers",
        },
    ],
};

const scalableHighlightData = {
    eye: 'BUSINESS CHALLENGES',
    title: "Common Video Optimization Challenges Businesses Face -",
    titleSpan: "And How We Solve Them",
    paragraphs: [
        "Most businesses that come to us for video optimization services have been uploading videos for months without seeing meaningful growth in views, subscribers, or leads. They know their content is good. They cannot understand why it is not performing. The answer is almost always the same - the optimization layer that makes videos discoverable, clickable, and watchable was never properly built. As a trusted provider of video optimization services in India working with businesses across industries, we have diagnosed and fixed every version of this problem.",
    ],
    features: [
        "Low video visibility in YouTube search - because keyword targeting, title structure, and description optimization were never applied correctly from the start",
        "Poor YouTube rankings despite consistent uploading - because upload frequency without optimization does not signal relevance to the algorithm",
        "Weak click-through rates on well-ranked videos - because thumbnails and titles are not compelling enough to earn the click when competing content appears alongside yours",
        "Low audience retention killing distribution - because YouTube suppresses videos that viewers abandon early, regardless of how well they rank initially",
        "Ineffective metadata optimization - missing tags, categories, chapters, and closed captions that help the algorithm understand and distribute your content",
        "No performance tracking or reporting - making it impossible to identify what is working, what needs improvement, and where the next growth opportunity lies",
    ],
};

const servicesData9 = {
    subTitle: "OUR PROCESS",
    title: "Our Video Optimization Process for Better Rankings and Engagement",
    moreText: "More services",
    moreUrl: "/services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Video Performance Audit",
            desc: "We start with a comprehensive audit of your existing YouTube channel and video library - analyzing current rankings, watch time, CTR, audience retention, and metadata quality to identify exactly what is holding your video performance back.",
            url: "/services",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Keyword Research & Competitor Analysis",
            desc: "We conduct in-depth YouTube keyword research - identifying the exact search terms your audience uses, analyzing competitor channels, and building a keyword strategy that targets the right searches with the right content at the right level of competition.",
            url: "/services",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Metadata & Thumbnail Optimization",
            desc: "We optimize every metadata element - titles, descriptions, tags, chapters, and closed captions - and create or improve thumbnails for maximum CTR. Every change is made with both the algorithm and the human viewer in mind.",
            url: "/services",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Video SEO Implementation",
            desc: "We implement the complete video SEO strategy - publishing schedule optimization, playlist structure, end screen and card strategy, community tab engagement, and channel-level optimization that improves overall authority and distribution.",
            url: "/services",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Analytics, Reporting & Continuous Optimization",
            desc: "Monthly performance reports covering view growth, watch time improvement, subscriber trends, CTR changes, and audience retention data - all connected to specific optimizations made that month and the plan for the next cycle.",
            url: "/services",
        },
    ],
};

const scalableHighlightData2 = {
    eye: 'WHY CHOOSE US',
    title: "Why Choose Mematdigi for ",
    titleSpan: "Video Optimization Services in India",
    paragraphs: [
        "At Mematdigi, we have built our expertise in video optimization services in India by treating YouTube as what it actually is - the world's second-largest search engine, with its own ranking signals, its own algorithm, and its own optimization requirements that are completely different from web SEO. We are not the agency that uploads your videos with a few keyword-stuffed tags and calls it optimization. We are the video marketing services partner that builds a complete YouTube SEO strategy - from keyword research and metadata optimization to thumbnail testing, performance tracking, and continuous improvement that compounds your channel's growth month over month.",
        "Whether you are a startup building your first YouTube presence or an enterprise that needs a specialist provider of video optimization services in india to improve the performance of an established channel - Mematdigi delivers the YouTube SEO services and video content optimization that turn video investment into measurable, compounding business growth."
    ],
    features: [
        "Video optimization services in india - proven channel growth across healthcare, education, ecommerce, finance, and SaaS verticals",
        "YouTube SEO services - complete channel and video optimization that improves search rankings and drives organic view growth",
        "Video performance optimization - watch time, retention, and CTR improvements that signal quality to the algorithm and accelerate distribution",
        "Video metadata optimization - titles, descriptions, tags, chapters, and closed captions optimized for both algorithm and viewer",
        "Video SEO services - search engine optimization applied specifically to video content across YouTube and Google video search",
        "Video marketing services - strategic channel growth planning that connects video performance to real business outcomes",
    ],
};

const faqData = {
    subTitle: "FAQs",
    subIcon: "tji-box",
    title: "Frequently Asked Questions About Video Optimization Services in India",
    phone: { display: "1-888-452-1505", tel: "18884521505" },
    items: [
        {
            title: "What are video optimization services and why does my business need them?",
            desc: "Video optimization services in India involve improving every element that affects how your videos rank, get discovered, and perform - keyword targeting, metadata, thumbnails, watch time, and audience retention. Without optimization, even well-produced videos remain invisible. Our video optimization services ensure your content reaches the right audience and delivers measurable business results.",
            initActive: true,
        },
        {
            title: "How do YouTube SEO services improve video rankings?",
            desc: "YouTube SEO services improve rankings by optimizing the signals YouTube's algorithm uses to evaluate relevance and quality - keyword-optimized titles and descriptions, properly structured tags, closed captions, engagement signals, and watch time. Our YouTube SEO approach treats every video as a search-optimized asset that earns rankings over time, not just at upload.",
            initActive: false,
        },
        {
            title: "What is included in your video optimization service?",
            desc: "Our video optimization services cover keyword research, metadata optimization, thumbnail improvement, channel structure optimization, playlist strategy, end screen and card setup, and performance tracking. For existing channels, we also conduct a full video SEO audit identifying every optimization opportunity across your current library of published content.",
            initActive: false,
        },
        {
            title: "Do you optimize existing videos or only new videos?",
            desc: "Both. Our video content optimization service covers existing videos - updating titles, descriptions, tags, and thumbnails to improve their performance - as well as new videos, where we apply optimization from the start. Optimizing existing videos often delivers the fastest results because the content is already indexed and partially ranked.",
            initActive: false,
        },
        {
            title: "Can video optimization help increase views and engagement?",
            desc: "Yes - significantly. Proper video optimization improves discoverability in search, increases CTR through better thumbnails and titles, and improves watch time through better content structure and audience retention strategies. Businesses that implement professional video optimization services consistently see meaningful improvements in views, watch time, subscriber growth, and engagement within 60–90 days.",
            initActive: false,
        },
        {
            title: "Do you provide performance reports after optimization?",
            desc: "Yes. Every client receives monthly video analytics and performance reports covering view growth, watch time improvement, CTR changes, subscriber trends, and audience retention data. Our video performance optimization reporting is written in plain language - no jargon, no vanity metrics, just clear data showing exactly how your channel is growing.",
            initActive: false,
        },
    ],
};

const contactData = {
    left: {
        subTitle: "CONTACT US NOW",
        title: "Ready to Grow Your Business With Professional Video Optimization Services in India?",
        desc: "Partner with Mematdigi for video optimization services in India that improve YouTube rankings, increase video visibility, and drive meaningful audience engagement. From YouTube SEO and metadata optimization to performance tracking, we help your videos generate measurable business growth.",
    },
    form: {
        subTitle: "Get a Call Now",
        subIcon: "tji-box",
        title: "Drop Us a",
        titleSpan: "Line.",
        selectOptions: [
            { value: "0", optionName: "Choose a service" },
            { value: "1", optionName: "YouTube SEO Services" },
            { value: "2", optionName: "Video Keyword Research" },
            { value: "3", optionName: "Video Metadata Optimization" },
            { value: "4", optionName: "YouTube Thumbnail Optimization" },
            { value: "5", optionName: "Video Performance Optimization" },
            { value: "6", optionName: "Video Analytics & Reporting" },
        ],
    },
};

/* ============================================================
 * SECTIONS
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

const ScalableHighlightSection = ({ data }) => {
    return (
        <section className="services-section p-3 m-5 mb-5 border rounded-3 box-shadow">
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

export default function VideoOptimizationServices() {
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