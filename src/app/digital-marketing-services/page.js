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
    eyebrow: "DIGITAL MARKETING SERVICES",
    titlePre: "Best Digital Marketing Services in India That Drive Real Business Growth",
    desc: (
        <>
            Best digital marketing services in India powered by SEO, PPC, social media, and performance marketing - designed to generate leads, increase visibility, and drive measurable business growth.
        </>
    ),
    stats: [
        { number: "100", suffix: "+", label: "Happy Clients" },
        { number: "99", suffix: "%", label: "Client Satisfaction" },
        { number: "15", suffix: "+", label: "Industries Served" },
        { number: "135", suffix: "+", label: "Projects Delivered" },
    ],
    primaryCta: { text: "Get Free Proposal", url: "/contact-us" },
    form: {
        tag: "GET IN TOUCH",
        title: "Request A Quote",
        subtitle: "Fill out the form and our team will reach out within 24 hours.",
        serviceOptions: [
            { value: "", label: "Select Services *" },
            { value: "seo", label: "SEO" },
            { value: "ppc", label: "PPC / Google Ads" },
            { value: "smm", label: "Social Media Marketing" },
            { value: "web", label: "Web Development" },
            { value: "content", label: "Content Marketing" },
            { value: "other", label: "Other" },
        ],
    },
};

const chooseData = {
    subTitle: "COMMON PROBLEMS",
    subIcon: "tji-box",
    title: "Why Most Businesses Fail at Digital Marketing",
    desc: "",
    banner: "/images/choose/h8-choose-bnner.webp",
    boxes: [
        {
            icon: "tji-innovative",
            title: "Wrong Strategy",
            desc: "Many businesses invest in digital marketing without a clear roadmap. Poor targeting, ineffective channels, and disconnected campaigns often lead to wasted budgets and disappointing results.",
        },
        {
            icon: "tji-award",
            title: "Traffic Without Leads",
            desc: "Getting website visitors is not enough. Businesses frequently struggle to convert traffic into qualified leads, inquiries, and customers that drive actual revenue growth.",
        },
        {
            icon: "tji-support",
            title: "No Clear ROI",
            desc: "Many agencies focus on vanity metrics instead of business outcomes. Without transparent reporting and performance tracking, it becomes difficult to understand what is truly working.",
        },
    ],
};

const servicesData = {
    subTitle: "WHAT WE OFFER",
    subIcon: "tji-box",
    title: "Our Digital Marketing Services for Businesses Across India",
    desc: 'We help your business rank higher on Google through technical SEO, on-page optimization, and strategic link building that drives consistent organic traffic and qualified leads.',
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Social Media Marketing ",
            desc: "From content creation to paid campaigns - our social media marketing services build brand visibility, audience engagement, and measurable business results across all major platforms.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "SEO Services ",
            desc: "We help your business rank higher on Google through technical SEO, on-page optimization, and strategic link building that drives consistent organic traffic and qualified leads.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Content Marketing",
            desc: "Strategic, SEO-optimized content that attracts the right audience, builds topical authority, and converts readers into customers - blogs, website copy, B2B content, and more.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Performance Marketing",
            desc: "Data-driven performance campaigns across Google, Meta, and beyond - built to maximize ROI, minimize wasted spend, and deliver leads that actually convert into revenue.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Email Marketing",
            desc: "Result-oriented email campaigns that nurture leads, retain customers, and drive repeat revenue - from strategy and copywriting to automation and performance tracking.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "WhatsApp Marketing",
            desc: "Reach your audience directly on their most-used platform. Our WhatsApp marketing services deliver high open rates, instant engagement, and real conversions for your business",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Online Reputation Management",
            desc: "Protect and strengthen your brand's online image - review management, negative suppression, crisis control, and reputation building that builds lasting customer trust.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Ecommerce Marketing services",
            desc: "Full-funnel ecommerce marketing services that drive traffic, reduce cart abandonment, and grow online store revenue through SEO, performance ads, and retention strategies.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "CRO - Conversion Rate Optimization",
            desc: "Turn your existing traffic into more leads and sales. We optimize landing pages, CTAs, user journeys, and checkout flows to extract maximum value from every visitor.",
            url: "/services",
        },
    ],
};

const solutionsData = {
    subTitle: "WHO WE SERVE",
    title: "Digital Marketing Services for Every Business Type",
    moreText: "More Services",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Startups & Small Businesses",
            url: "/services",
            desc: "Limited budget, big growth targets - we understand. Our affordable digital marketing services for small businesses are built to deliver maximum ROI from day one, focusing on channels that generate the fastest, most measurable results without burning your runway.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "D2C & Ecommerce Brands",
            url: "/services",
            desc: "Getting traffic is only half the battle. Our digital marketing services for ecommerce brands focus on the full funnel - from awareness and acquisition to retention and repeat revenue - so every rupee you spend works harder.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "B2B & Enterprise Companies",
            url: "/services",
            desc: "Long sales cycles need smarter strategies. We deliver account-based marketing, content authority building, and lead generation campaigns that put your brand in front of the right decision-makers at the right time.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        // Aur solutions add karne ho to yahan object push kar do ⬇️
    ],
};

const featuresData = {
    subTitle: "INDUSTRIES WE SERVE",
    subIcon: "tji-box",
    title: "Industries We Serve With Our Digital Marketing Services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Healthcare ",
            desc: "Patient acquisition and trust-building digital marketing services for clinics, hospitals, and health brands",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Real Estate",
            desc: " Lead generation and brand visibility strategies for property developers and real estate agencies",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Education ",
            desc: "OStudent acquisition and institutional authority campaigns for schools, colleges, and edtech brands",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Ecommerce ",
            desc: "Full-funnel performance marketing that turns browsers into buyers for online stores",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Finance & Fintech",
            desc: "Compliant, ROI-focused digital marketing services for financial brands and fintech startups",
        },
        {
            id: 6,
            icon: "tji-support",
            title: "SaaS & Technology",
            desc: "Demand generation and product-led growth marketing for tech companies and SaaS businesses",
        },
    ],
};

const scalableHighlightData = {
    eye:'BUSINESS CHALLENGES',
    title: "Digital Marketing Isn't Failing -",
    titleSpan: "The Strategy Is",
    paragraphs: [
        "Every year, thousands of Indian businesses pour money into digital marketing and see nothing in return. Wrong channels, vague strategies, agencies that promise the moon and deliver reports full of numbers that don't mean anything - this is the reality for most. You're getting traffic but no leads. You're running ads but no conversions. You're paying for the best digital marketing services but your competitors are still ahead. The problem is rarely the budget. It's the strategy. At Mematdigi, we fix that. Our digital marketing services in India are built around one thing - results you can measure, track, and grow from.",
    ],
    features: [
        "Low website traffic and poor search engine visibility",
        "High advertising costs with little or no measurable ROI",
        "Website visitors who fail to convert into leads or customers",
        "Inconsistent lead generation and unpredictable sales growth",
        "Poor audience targeting that attracts unqualified prospects",
        "Lack of transparency in reporting, performance, and marketing results",
    ],
};

const servicesData9 = {
    subTitle: "OUR PROCESS",
    title: "How We Deliver Our Digital Marketing Services",
    moreText: "More services",
    moreUrl: "/services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Business & Competitor Audit",
            desc: "We start by understanding your business, your market, and your competition - identifying gaps, opportunities, and the fastest path to measurable growth.",
            url: "/services",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Custom Strategy Building",
            desc: "No templates. No copy-paste plans. Every digital marketing strategy we build is custom - designed around your goals, your audience, and your budget.",
            url: "/services",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Campaign Execution",
            desc: "Our team executes across every channel with precision - SEO, paid ads, content, social media, and email - all working together toward one goal: your growth.",
            url: "/services",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Performance Tracking & Reporting",
            desc: "You get transparent, plain-language reports that show exactly what's working, what's not, and where every rupee of your budget is going - every single month.",
            url: "/services",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Continuous Optimization",
            desc: "Digital marketing is never set and forgotten. We continuously test, refine, and optimize every campaign to improve performance and compound your results over time.",
            url: "/services",
        },
    ],
};

const scalableHighlightData2 = {
    eye:'WHY CHOOSE US',
    title: "Empowering Business With ",
    titleSpan: "Digital Expertise",
    paragraphs: [
        "Every year, thousands of Indian businesses pour money into digital marketing and see nothing in return. Wrong channels, vague strategies, agencies that promise the moon and deliver reports full of numbers that don't mean anything - this is the reality for most. You're getting traffic but no leads. You're running ads but no conversions. You're paying for the best digital marketing services but your competitors are still ahead. The problem is rarely the budget. It's the strategy. At Mematdigi, we fix that. Our digital marketing services in India are built around one thing - results you can measure, track, and grow from.",
    ],
    features: [
        "Low website traffic and poor search engine visibility",
        "High advertising costs with little or no measurable ROI",
        "Website visitors who fail to convert into leads or customers",
        "Inconsistent lead generation and unpredictable sales growth",
        "Poor audience targeting that attracts unqualified prospects",
        "Lack of transparency in reporting, performance, and marketing results",
    ],
};

const faqData = {
    subTitle: "FAQs",
    subIcon: "tji-box",
    title: "Frequently Asked Questions About Digital Marketing Services ",
    phone: { display: "1-888-452-1505", tel: "18884521505" },
    items: [
        {
            title: "How do I choose the right digital marketing agency in India? ",
            desc: "Look for three things: do they start with an audit or a sales pitch, do they report in plain language, and can they show real results from businesses like yours. A good agency ties every activity to revenue - not just traffic numbers.",
            initActive: true,
        },
        {
            title: "Do you offer customized digital marketing plans or only fixed packages?",
            desc: "We don't do fixed packages. Every plan is built around your business - your industry, your competition, your budget, and where you actually want to grow. We start with a free audit, then recommend what makes sense for your specific situation.",
            initActive: false,
        },
        {
            title: "How long does it take to see results from digital marketing? ",
            desc: "PPC and paid ads can start generating leads within 1-2 weeks. SEO takes 3-6 months to show consistent results. Social media and content marketing build over 3-9 months. We set clear timelines at the start so you always know what to expect and when.",
            initActive: false,
        },
        {
            title: "How do you measure the success of a digital marketing campaign? ",
            desc: "We track what actually matters - leads generated, cost per lead, conversion rate, and revenue influenced. Not just impressions or follower counts. Every month you get a plain-language report showing exactly where your budget went and what it returned.",
            initActive: false,
        },
        {
            title: "Do you work with small businesses and startups?",
            desc: "Yes. We have strategies built specifically for lean budgets - starting with channels that give the fastest, most measurable returns. The goal is to prove ROI at a small scale first, then scale up what's working.",
            initActive: false,
        },
        {
            title: "Can you handle digital marketing for a business in a specific niche or industry? ",
            desc: "Yes. We've worked across SaaS, healthcare, education, real estate, finance, and ecommerce. Before starting anything, we research your industry, your competitors, and your audience - so the strategy is built for your market, not borrowed from someone else's.",
            initActive: false,
        },
    ],
};

const contactData = {
    left: {
        subTitle: "CONTACT US NOW",
        title: "Ready to Get Started With India's Best Digital Marketing Services?",
        desc: "Ready to accelerate your business growth? Partner with Memat Digi for data-driven digital marketing services designed to increase visibility, generate qualified leads, improve conversions, and deliver measurable results. Whether you're a startup, small business, or established brand, our strategies are built to help you grow faster and stay ahead of the competition. ",
    },
    form: {
        subTitle: "Get a Call Now",
        subIcon: "tji-box",
        title: "Drop Us a",
        titleSpan: "Line.",
        selectOptions: [
            { value: "0", optionName: "Choose an option" },
            { value: "1", optionName: "Business Strategy" },
            { value: "2", optionName: "Customer Experience" },
            { value: "3", optionName: "Sustainability and ESG" },
            { value: "4", optionName: "Training and Development" },
            { value: "5", optionName: "IT Support & Maintenance" },
            { value: "6", optionName: "Marketing Strategy" },
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

/* Reusable — pehle ye 2 baar copy-paste hua tha (ScoralableServicesSection
 * aur ScoralableServicesSection2 bilkul same the). Ab ek hi component hai. */
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
                            <h2 className="sec-title text-anim">{faqData.title}</h2>
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
                                <h2 className="sec-title title-anim">{contactData.left.title}</h2>
                                <p>{contactData.left.desc}</p>
                            </div>
                                    <div className="submit-btn">
                                        <ButtonPrimary text={"Send Message"} url={'/services'}/>
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

export default function DigitalMarketingServices() {
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
                        {/* NOTE: pehle yahan duplicate (same content) section tha.
                            Agar do alag highlight chahiye to ek aur data object bana ke
                            <ScalableHighlightSection data={...} /> render karo,
                            warna isko hata do. */}
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