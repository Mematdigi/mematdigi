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
    eyebrow: "ECOMMERCE MARKETING",
    titlePre: "Ecommerce Marketing Agency in India That",
    titleHighlight: "Grows Your Online Store Revenue",
    titlePost: "",
    desc: (
        <>
            As a trusted ecommerce marketing agency in India, we deliver result-driven ecommerce marketing services that increase conversions, maximize online store revenue, and improve customer retention. From SEO and performance marketing to email automation, social media, and marketplace growth, we build strategies that drive sustainable ecommerce success.
        </>
    ),
    stats: [
        { number: "100", suffix: "+", label: "Happy Clients" },
        { number: "99", suffix: "%", label: "Client Satisfaction" },
        { number: "15", suffix: "+", label: "Industries Served" },
        { number: "135", suffix: "+", label: "Projects Delivered" },
    ],
    primaryCta: { text: "Get Ecommerce Audit", url: "/contact-us" },
    form: {
        tag: "GET IN TOUCH",
        title: "Get Your Free Ecommerce Audit",
        subtitle: "Fill out the form and our team will reach out within 24 hours.",
        // Mobile form fields = Name, Email, Phone, Store URL, Message.
    },
};

const chooseData = {
    subTitle: "COMMON CHALLENGES",
    subIcon: "tji-box",
    title: "Why Most Ecommerce Stores Get Traffic But No Sales",
    desc: "",
    banner: "/images/choose/h8-choose-bnner.webp",
    boxes: [
        {
            icon: "tji-innovative",
            title: "Low Conversion Rates",
            desc: "Driving visitors to your online store is only the first step. Poor product pages, weak trust signals, and complicated checkout experiences prevent customers from completing their purchases.",
        },
        {
            icon: "tji-award",
            title: "High Customer Acquisition Costs",
            desc: "Running paid campaigns without the right targeting, creative strategy, or conversion optimization increases advertising costs while reducing your return on ad spend and overall profitability.",
        },
        {
            icon: "tji-support",
            title: "Weak Customer Retention",
            desc: "Acquiring new customers is expensive. Without email automation, loyalty campaigns, and post-purchase engagement, businesses lose repeat sales and long-term customer value to competitors.",
        },
    ],
};

const servicesData = {
    subTitle: "WHAT WE OFFER",
    subIcon: "tji-box",
    title: "Our Ecommerce Marketing Services for Online Businesses Across India",
    desc: "From SEO and performance marketing to email retention and marketplace growth - complete ecommerce marketing services built to grow your online store revenue at every stage.",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Ecommerce SEO",
            desc: "We optimize your product pages, category pages, and site architecture for organic search - building sustainable ecommerce traffic that converts without the cost of paid acquisition, compounding month after month.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Ecommerce Performance Marketing",
            desc: "Data-driven paid campaigns across Google, Meta, and beyond - built specifically for ecommerce conversion. Our ecommerce performance marketing agency approach focuses on ROAS and revenue, not click volume and impressions.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Ecommerce Social Media Marketing",
            desc: "Platform-specific social strategies that build brand awareness, drive product discovery, and generate sales - our ecommerce social media marketing agency team manages content, ads, and community across every channel your audience uses.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Ecommerce Email Marketing",
            desc: "Your most profitable retention channel - managed end to end. Our ecommerce email marketing service covers welcome flows, abandoned cart recovery, post-purchase sequences, and loyalty campaigns that increase repeat purchase rate and customer lifetime value.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Ecommerce Content Marketing",
            desc: "Buying guides, product comparisons, category content, and brand storytelling - content built to rank, educate, and convert at every stage of the ecommerce buying journey.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Marketplace Marketing",
            desc: "Amazon, Flipkart, Meesho, and beyond - we optimize your marketplace listings, manage sponsored ads, and build the review profiles that drive marketplace visibility and sales consistently.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Conversion Rate Optimization",
            desc: "Traffic that does not convert is wasted. We audit your product pages, checkout flow, and user experience - identifying and fixing the specific friction points that are stopping your visitors from buying.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Ecommerce PPC & Google Shopping",
            desc: "High-intent paid search and shopping campaigns built for ecommerce - smart bidding, optimized product feeds, and continuous campaign refinement that drives qualified buyers directly to your product pages.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Retention & Loyalty Marketing",
            desc: "Acquiring a new customer costs five times more than retaining an existing one. We build loyalty programs, re-engagement campaigns, and retention strategies that keep your customers buying from you - not your competitors.",
            url: "/services",
        },
    ],
};

const solutionsData = {
    subTitle: "WHO WE SERVE",
    title: "Ecommerce Marketing Solutions for Every Online Business Type",
    moreText: "More Services",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "D2C & Direct-to-Consumer Brands",
            url: "/services",
            desc: "D2C ecommerce lives and dies on customer acquisition cost, average order value, and repeat purchase rate. Our ecommerce marketing agency India works with D2C brands to build full-funnel marketing strategies that drive profitable new customer acquisition, maximize revenue per visitor, and build the retention engine that turns first-time buyers into loyal brand advocates.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "Marketplace Sellers (Amazon, Flipkart)",
            url: "/services",
            desc: "Marketplace success requires a completely different approach - listing optimization, sponsored ad management, review generation, and competitive positioning that gets your products seen by the right buyers at the right moment. As an ecommerce marketing firm that understands marketplace dynamics, we build and manage everything your marketplace business needs to grow profitably.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "B2B Ecommerce Businesses",
            url: "/services",
            desc: "B2B ecommerce has unique challenges - longer consideration cycles, bulk ordering dynamics, and buyers who need more information before committing. Our ecommerce performance marketing agency builds the content, paid campaigns, and email nurture sequences that convert B2B buyers at the volume and order size your business needs.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        // Aur solutions add karne ho to yahan object push kar do ⬇️
    ],
};

const featuresData = {
    subTitle: "INDUSTRIES WE SERVE",
    subIcon: "tji-box",
    title: "Ecommerce Industries We Serve Across India",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Fashion & Apparel",
            desc: "Collection launches, seasonal campaigns, and influencer-driven ecommerce marketing that builds brand identity and drives consistent clothing sales",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Beauty & Skincare",
            desc: "Trust-building content, social proof campaigns, and retention marketing for beauty brands where repeat purchase is everything",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Electronics",
            desc: "High-consideration purchase marketing - comparison content, Google Shopping, and review management that converts research-heavy electronics buyers",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Home & Furniture",
            desc: "Visual storytelling, room visualization content, and targeted campaigns for high-ticket home products with longer purchase decision cycles",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Food & Grocery",
            desc: "Subscription model marketing, repeat purchase optimization, and marketplace strategies for food brands competing in India's fastest-growing ecommerce category",
        },
        {
            id: 6,
            icon: "tji-support",
            title: "Health & Wellness",
            desc: "Education-first content marketing, trust-building campaigns, and retention strategies for health brands where customer confidence drives purchase decisions",
        },
    ],
};

const scalableHighlightData = {
    eye: 'BUSINESS CHALLENGES',
    title: "Ecommerce Marketing Challenges Every Online Store in India Faces -",
    titleSpan: "And How We Fix Them",
    paragraphs: [
        "Most ecommerce businesses that come to us are dealing with the same fundamental problem - their marketing is generating traffic but not revenue. They have tried multiple agencies, tested multiple channels, and still cannot identify what is actually stopping their store from converting at the rate it should. As an ecommerce marketing agency india businesses have trusted for years, we have diagnosed and fixed every version of this problem across fashion, beauty, electronics, food, and more.",
    ],
    features: [
        "High traffic, low conversion rate - because product pages, pricing presentation, and trust signals were never optimized for conversion",
        "Cart abandonment above industry average - because no abandoned cart email sequence exists to recover the revenue being left behind",
        "Paid campaigns with declining ROAS - because audience targeting, creative, and landing page alignment were never optimized together",
        "No repeat purchase strategy - losing customers after the first order to competitors who have better retention marketing in place",
        "No unified ecommerce marketing strategy - running isolated campaigns on different channels with no coherent message connecting them",
        "Marketplace listings underperforming - losing category visibility and buy box position to competitors with better optimized listings and review profiles",
    ],
};

const servicesData9 = {
    subTitle: "OUR PROCESS",
    title: "How We Deliver Our Ecommerce Marketing Services",
    moreText: "More services",
    moreUrl: "/services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Store Audit & Competitor Analysis",
            desc: "We start with a comprehensive audit of your store - traffic quality, conversion rate, product page performance, cart abandonment rate, email capture, and competitor positioning. We find exactly where your revenue is being lost before we build a single campaign.",
            url: "/services",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Ecommerce Marketing Strategy Development",
            desc: "We build a custom ecommerce marketing strategy connecting every channel - SEO, paid, email, social, and content - around a unified revenue goal. Every campaign decision is made in the context of your full customer lifecycle, not just the channel being optimized.",
            url: "/services",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Campaign Execution Across Channels",
            desc: "Our ecommerce marketing agency india team executes across every relevant channel simultaneously - SEO and content building long-term organic growth while paid and social campaigns drive immediate revenue. Every channel is managed by specialists, coordinated by a single account manager.",
            url: "/services",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Conversion & Revenue Optimization",
            desc: "We continuously optimize product pages, ad creatives, email sequences, and checkout flows - testing, learning, and improving every element that stands between your traffic and your revenue targets.",
            url: "/services",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Reporting & Continuous Scaling",
            desc: "Monthly reports covering revenue generated, ROAS, customer acquisition cost, repeat purchase rate, and channel-specific performance - all in plain language. We identify what is scaling and put more behind it, and fix what is not before it wastes more budget.",
            url: "/services",
        },
    ],
};

const scalableHighlightData2 = {
    eye: 'WHY CHOOSE US',
    title: "Why Choose Mematdigi as Your ",
    titleSpan: "Ecommerce Marketing Agency in India",
    paragraphs: [
        "At Mematdigi, we built our reputation as the ecommerce marketing agency India online brands trust by measuring everything that matters to a business - revenue, customer acquisition cost, repeat purchase rate, and ROAS - and nothing that does not. We are not the ecommerce marketing company that sends traffic reports and calls it growth. We are the ecommerce marketing firm that builds the full-funnel strategies, the retention systems, and the conversion infrastructure that turns an underperforming online store into a consistently growing revenue channel. As a full-service ecommerce marketing agency, we handle every channel - paid, organic, email, social, and marketplace - under one coordinated strategy, executed by a team that genuinely understands ecommerce.",
        "Whether you are a D2C brand that needs an ecommerce marketing agency india to build a profitable customer acquisition engine, a marketplace seller that needs a specialist ecommerce marketing firm to grow your Amazon and Flipkart presence, or an established store that needs a full-service ecommerce marketing agency to fix conversion and build retention - Mematdigi delivers the ecommerce marketing services that grow revenue, reduce churn, and build the kind of loyal customer base that makes your business genuinely scalable.",
    ],
    features: [
        "Ecommerce marketing agency india with proven revenue growth across 15+ ecommerce categories",
        "Ecommerce performance marketing agency - ROAS-focused campaigns that optimize for revenue, not traffic volume",
        "Ecommerce email marketing - full lifecycle email programs that recover abandoned carts and drive repeat purchases",
        "Ecommerce social media marketing agency - platform-specific social strategies that build brand and drive direct sales",
        "Ecommerce marketing company with full-funnel capabilities - acquisition, conversion, and retention managed together",
        "Ecommerce marketing strategy built around your business model - D2C, marketplace, or B2B ecommerce, each approached differently",
    ],
};

const faqData = {
    subTitle: "FAQs",
    subIcon: "tji-box",
    title: "Frequently Asked Questions About Ecommerce Marketing Services in India",
    phone: { display: "1-888-452-1505", tel: "18884521505" },
    items: [
        {
            title: "What does an ecommerce marketing agency in India do? ",
            desc: "An ecommerce marketing agency India builds and executes the full-stack marketing strategy your online store needs to grow - paid acquisition, SEO, email retention, social media, marketplace optimization, and conversion rate improvement. At Mematdigi, our ecommerce marketing services are built around one goal - growing your revenue, not just your traffic.",
            initActive: true,
        },
        {
            title: "How is ecommerce marketing different from regular digital marketing? ",
            desc: "Ecommerce marketing is built around the specific dynamics of online retail - product page optimization, cart abandonment recovery, ROAS management, and customer lifetime value. A general ecommerce marketing company applies channel tactics. A specialist ecommerce marketing strategy connects every channel to the revenue outcomes that actually grow an online store.",
            initActive: false,
        },
        {
            title: "Do you offer performance marketing for ecommerce stores? ",
            desc: "Yes - our ecommerce performance marketing agency service is one of our core offerings. We build and manage paid campaigns across Google Shopping, Meta, and YouTube specifically optimized for ecommerce ROAS - with product feed management, dynamic retargeting, and audience strategies built around your specific ecommerce marketing firm goals.",
            initActive: false,
        },
        {
            title: "Do you run email marketing campaigns for ecommerce brands? ",
            desc: "Yes. Our ecommerce email marketing service covers every stage of the customer lifecycle - welcome sequences, abandoned cart flows, post-purchase automation, win-back campaigns, and loyalty programs. Email is your highest-ROI retention channel as an ecommerce marketing agency we always prioritize building it properly from the start.",
            initActive: false,
        },
        {
            title: "Do you manage social media marketing for ecommerce brands? ",
            desc: "Yes. Our ecommerce social media marketing agency team manages organic content, paid social campaigns, influencer partnerships, and community management - building both brand awareness and direct sales through every social platform where your audience shops and discovers new products.",
            initActive: false,
        },
        {
            title: "How long does it take to see results from ecommerce marketing?",
            desc: "Paid campaigns managed by our ecommerce marketing agency india team can show revenue impact within the first 2–4 weeks. SEO and content build over 3–6 months. Email retention typically shows measurable lift within 30–60 days. Our ecommerce marketing strategy is sequenced to deliver quick wins first while building the long-term channels simultaneously.",
            initActive: false,
        },
    ],
};

const contactData = {
    left: {
        subTitle: "CONTACT US NOW",
        title: "Ready to Scale Your Ecommerce Store With India's Best Ecommerce Marketing Agency?",
        desc: "Ready to partner with a trusted ecommerce marketing agency in India? Mematdigi delivers result-driven ecommerce marketing services that increase conversions, maximize online store revenue, and build long-term customer loyalty. From startups to established ecommerce brands, we create customized growth strategies designed to deliver measurable business success.",
    },
    form: {
        subTitle: "Get a Call Now",
        subIcon: "tji-box",
        title: "Drop Us a",
        titleSpan: "Line.",
        selectOptions: [
            { value: "0", optionName: "Choose an option" },
            { value: "1", optionName: "Ecommerce SEO" },
            { value: "2", optionName: "Ecommerce Performance Marketing" },
            { value: "3", optionName: "Ecommerce Social Media Marketing" },
            { value: "4", optionName: "Ecommerce Email Marketing" },
            { value: "5", optionName: "Marketplace Marketing" },
            { value: "6", optionName: "Conversion Rate Optimization" },
            { value: "7", optionName: "Ecommerce PPC & Google Shopping" },
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
        storeUrl: "",
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
            setFormData({ fullName: "", phone: "", email: "", storeUrl: "", message: "" });
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

                                        {/* Mobile form me Store URL input (Business Type dropdown ki jagah) */}
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                name="storeUrl"
                                                placeholder="Store URL*"
                                                value={formData.storeUrl}
                                                onChange={handleChange}
                                                required
                                            />
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

export default function EcommerceMarketingServices() {
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