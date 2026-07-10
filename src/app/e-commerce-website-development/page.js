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
    eyebrow: "ECOMMERCE WEBSITE DEVELOPMENT",
    titlePre: "Best Ecommerce Website Development Company in India That",
    titleHighlight: "Turns Visitors Into Customers",
    titlePost: "",
    desc: (
        <>
            As a trusted ecommerce website development company in India, we build secure, scalable, and conversion-focused online stores that help businesses grow faster. From custom ecommerce website development and marketplace solutions to payment gateway integration and mobile commerce, we create shopping experiences designed to increase sales and long-term business success.
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
        title: "Get Your Free Consultation",
        subtitle: "Fill out the form and our team will reach out within 24 hours.",
        // Mobile form fields = Name, Email, Phone, Business Type, Message.
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
    subTitle: "COMMON CHALLENGES",
    subIcon: "tji-box",
    title: "Why Most Ecommerce Stores Struggle to Turn Visitors Into Customers",
    desc: "",
    banner: "/images/choose/h8-choose-bnner.webp",
    boxes: [
        {
            icon: "tji-innovative",
            title: "Poor Shopping Experience",
            desc: "Slow-loading pages, confusing navigation, and lengthy checkout processes frustrate customers, increase cart abandonment, and prevent your online store from converting visitors into paying customers.",
        },
        {
            icon: "tji-award",
            title: "Limited Ecommerce Capabilities",
            desc: "Many ecommerce platforms lack the flexibility to support custom features, seamless integrations, and business-specific functionality, making it difficult to scale and deliver exceptional customer experiences.",
        },
        {
            icon: "tji-support",
            title: "Low Conversion Performance",
            desc: "Traffic alone does not generate revenue. Without conversion-focused design, optimized product pages, trust signals, and streamlined checkout experiences, even high-traffic ecommerce websites struggle to achieve consistent sales growth.",
        },
    ],
};

const servicesData = {
    subTitle: "WHAT WE OFFER",
    subIcon: "tji-box",
    title: "Our Ecommerce Website Development Services for Businesses Across India",
    desc: "From custom ecommerce stores and marketplace platforms to mobile apps, payment integrations, and ongoing support - everything your ecommerce business needs to launch, scale, and grow is built under one roof.",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Custom Ecommerce Website Development",
            desc: "We build fully custom ecommerce websites tailored to your products, your customers, and your business model - scalable architecture, conversion-focused design, and complete flexibility that no off-the-shelf platform can match.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Shopping Cart Development",
            desc: "We create secure, user-friendly shopping cart systems with streamlined checkout experiences designed to reduce friction, build buyer confidence, and improve conversion rates at the most critical stage of the purchase journey.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Payment Gateway Integration",
            desc: "We integrate trusted payment gateways - Razorpay, PayU, Stripe, CCAvenue, and more - with multiple payment options that deliver fast, secure, and reliable online transactions for every customer and every order.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Multi-Vendor Marketplace Development",
            desc: "We develop scalable marketplace platforms with vendor management, commission systems, order tracking, dispute resolution, and advanced administration features - built for businesses that want to become the platform, not just sell on one.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Ecommerce Mobile App Development",
            desc: "We build Android, iOS, and cross-platform ecommerce applications that deliver seamless shopping experiences across every device - push notifications, one-tap checkout, and app-exclusive features that drive mobile revenue.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Product & Catalog Management Solutions",
            desc: "We build advanced catalog management systems that handle large product inventories with smart filtering, search functionality, variant management, and category optimization - making it easy to manage thousands of SKUs without losing control.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Order & Inventory Management Systems",
            desc: "We automate order processing, inventory tracking, shipping management, and returns handling - reducing manual work, preventing stockouts, and giving your operations team real-time visibility into every order at every stage.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Ecommerce Migration Services",
            desc: "We migrate your online store from any existing platform - Magento, WooCommerce, Shopify, or custom - securely and without losing data, order history, customer records, or the SEO performance your store has already built.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "API & Third-Party Integrations",
            desc: "We connect your ecommerce website with CRM, ERP, shipping providers, accounting software, marketing tools, and any other business application your operations depend on - eliminating manual data transfer and building a connected commerce ecosystem.",
            url: "/services",
        },
    ],
};

const solutionsData = {
    subTitle: "WHO WE SERVE",
    title: "Ecommerce Website Development Solutions for Every Business",
    moreText: "More Services",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Startups & Small Businesses",
            url: "/services",
            desc: "Launching an online store as a new business means every rupee of development budget needs to work hard. Our ecommerce website development company in India works with startups to build scalable, conversion-focused online stores that grow alongside the business - without the overhead of enterprise development costs or the limitations of generic template platforms that become problems the moment you start to grow.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "D2C & Retail Brands",
            url: "/services",
            desc: "D2C ecommerce success depends on owning the customer relationship from discovery to repeat purchase. Our custom ecommerce development services build the shopping experiences that improve first-order conversion, encourage repeat buying, and give your brand complete control over how customers experience your products - without the constraints of marketplace dependency or platform limitations.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "Manufacturers & Wholesale Businesses",
            url: "/services",
            desc: "B2B ecommerce has completely different requirements - bulk ordering, customer-specific pricing, distributor portals, and credit management systems that no standard ecommerce platform handles out of the box. Our ecommerce development services for manufacturers and wholesalers build the custom functionality your B2B operations actually need to sell efficiently at scale.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        // Aur solutions add karne ho to yahan object push kar do ⬇️
    ],
};

const featuresData = {
    subTitle: "INDUSTRIES WE SERVE",
    subIcon: "tji-box",
    title: "Industries We Serve With Ecommerce Website Development",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Fashion & Apparel",
            desc: "Size guide integration, lookbook features, collection launches, and high-volume seasonal sale infrastructure for fashion ecommerce brands",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Electronics & Gadgets",
            desc: "Comparison tools, detailed specification pages, warranty management, and high-trust checkout experiences for big-ticket electronics purchases",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Healthcare & Pharmacy",
            desc: "Prescription management, regulated product compliance, secure patient data handling, and trust-building design for healthcare ecommerce",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Beauty & Cosmetics",
            desc: "Shade finder tools, bundle builders, subscription models, and influencer integration for beauty brands selling direct to consumer",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Furniture & Home Decor",
            desc: "Room visualization features, custom order management, delivery scheduling, and high-value product presentation for home ecommerce",
        },
        {
            id: 6,
            icon: "tji-support",
            title: "Food & Grocery",
            desc: "Subscription ordering, delivery slot management, perishable inventory systems, and fast checkout for food and grocery ecommerce businesses",
        },
    ],
};

const scalableHighlightData = {
    eye: 'BUSINESS CHALLENGES',
    title: "Your Ecommerce Website Should Generate Sales -",
    titleSpan: "Not Just Traffic",
    paragraphs: [
        "Most ecommerce businesses that come to us have already invested in a website that is not performing the way it should. They are getting sessions but not sales, running ads that drive traffic to pages that do not convert, and working with platforms that cannot be customized to fix the specific problems hurting their revenue. Having delivered ecommerce solutions for 100+ businesses, we have diagnosed and fixed every version of an underperforming ecommerce store - and we know exactly what it takes to build one that genuinely sells.",
    ],
    features: [
        "Low conversion rates despite healthy traffic - because product pages, checkout flow, and trust signals were never optimized for the buying decision",
        "High cart abandonment with no recovery strategy - losing revenue at the final stage with no automated system to bring shoppers back",
        "Slow website performance destroying user experience - pages that take more than three seconds to load losing over half their potential buyers before the content appears",
        "Poor mobile shopping experience - a checkout flow designed for desktop that is unusable on the smartphones where most Indian shoppers actually browse and buy",
        "Payment integration failures creating friction - limited payment options and unreliable gateway performance causing drop-offs at the moment of highest intent",
        "Inventory and order management chaos - manual processes that cannot scale, causing overselling, delayed fulfillment, and customer experience failures at volume",
    ],
};

const servicesData9 = {
    subTitle: "OUR PROCESS",
    title: "How We Build High-Performance Ecommerce Websites",
    moreText: "More services",
    moreUrl: "/services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Business Discovery",
            desc: "We start by understanding your products, your customers, your competitors, and your business goals in detail - so every decision made throughout the project is grounded in what your ecommerce website actually needs to succeed, not what is easiest or fastest to build.",
            url: "/services",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Ecommerce Planning",
            desc: "We create the complete store architecture - customer journey mapping, feature prioritization, technology stack selection, and integration planning - giving you a clear picture of exactly what will be built, how it will work, and why every decision was made before development begins.",
            url: "/services",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Design & Development",
            desc: "Our ecommerce website development services team builds your store with conversion-focused design and clean, scalable code - every product page, checkout flow, and admin feature built and tested continuously throughout development to ensure quality before launch.",
            url: "/services",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Testing & Launch",
            desc: "We test every element before go-live - payment processing, performance under load, mobile responsiveness, security, and cross-browser compatibility. Your ecommerce website launches with everything working correctly from the very first customer visit.",
            url: "/services",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Continuous Support",
            desc: "We stay involved after launch - monitoring performance, fixing issues fast, releasing feature updates, and providing the ongoing technical support that keeps your online store performing and growing as your business scales.",
            url: "/services",
        },
    ],
};

const scalableHighlightData2 = {
    eye: 'WHY CHOOSE US',
    title: "Why Choose Mematdigi as Your ",
    titleSpan: "Ecommerce Website Development Company in India",
    paragraphs: [
        "At Mematdigi, we built our reputation as the trusted ecommerce website development company in India by focusing on what actually matters - building online stores that sell. We are not the ecommerce development company that builds to a brief and invoices on delivery. We are the ecommerce website development partner that stays invested in your results - optimizing, improving, and supporting your store as your business grows and your requirements evolve. As a full-service ecommerce website development company in India, our custom ecommerce development capabilities cover every platform, every integration, and every business model - from D2C and marketplace to B2B and wholesale.",
        "Whether you are a startup that needs an ecommerce website development company in india to build your first online store right or an enterprise that needs a specialist ecommerce development company india to rebuild a failing platform - Mematdigi delivers the ecommerce website development services that turn your online store into your most reliable sales channel. Custom ecommerce website development india built for performance, conversion, and the kind of long-term scalability your business growth demands.",
    ],
    features: [
        "Ecommerce website development company in india with 135+ stores built across fashion, electronics, healthcare, food, and more",
        "Custom ecommerce development - every store built from scratch around your specific products, customers, and business model",
        "Ecommerce development services covering the complete build - design, development, integration, testing, launch, and ongoing support",
        "Hire ecommerce developer - dedicated developers assigned to your project who stay accountable from brief through post-launch",
        "Ecommerce app development services - mobile commerce solutions that extend your store to every device your customers shop on",
        "Ecommerce website developer in india with full-stack capabilities - frontend, backend, integrations, and performance optimization under one roof",
    ],
};

const faqData = {
    subTitle: "FAQs",
    subIcon: "tji-box",
    title: "Frequently Asked Questions About Ecommerce Website Development",
    phone: { display: "1-888-452-1505", tel: "18884521505" },
    items: [
        {
            title: "How long does it take to build an ecommerce website? ",
            desc: "A standard ecommerce website development project typically takes 6–12 weeks depending on complexity, number of products, and custom features required. A custom ecommerce development project with marketplace functionality, complex integrations, or large catalog management may take 3–6 months. Our ecommerce website development company in india provides a detailed timeline at the start of every project.",
            initActive: true,
        },
        {
            title: "Which ecommerce platform is best for my business? ",
            desc: "The right platform depends entirely on your business model, product catalog, and growth ambitions. For businesses with specific requirements that generic platforms cannot meet, custom ecommerce website development india gives you complete flexibility. For simpler requirements, WooCommerce or Shopify may work. Our ecommerce website developer in india will recommend the right approach after understanding your specific needs.",
            initActive: false,
        },
        {
            title: "Can you migrate my existing online store? ",
            desc: "Yes - our ecommerce migration services handle complete store migrations from any platform securely, preserving all product data, customer records, order history, and existing SEO performance. We have migrated stores from Magento, WooCommerce, Shopify, and custom platforms without downtime or data loss.",
            initActive: false,
        },
        {
            title: "Will my ecommerce website be mobile-friendly? ",
            desc: "Yes - every ecommerce website we build is fully responsive and mobile-optimized by default. With the majority of Indian ecommerce traffic coming from mobile devices, our ecommerce development services prioritize mobile shopping experience, fast mobile load times, and touch-optimized checkout flows that convert mobile shoppers at the same rate as desktop.",
            initActive: false,
        },
        {
            title: "Can you integrate payment gateways and shipping providers? ",
            desc: "Yes. We integrate all major Indian and international payment gateways - Razorpay, PayU, CCAvenue, Stripe, and more - alongside leading shipping providers and logistics platforms. Our API and third-party integration capabilities connect your ecommerce website with every tool your business operations depend on.",
            initActive: false,
        },
        {
            title: "Do you provide post-launch maintenance and support?",
            desc: "Yes - always. Every ecommerce website development company in India project we deliver includes structured post-launch support covering performance monitoring, security updates, bug fixes, and feature additions. We stay involved as your long-term ecommerce development partner - not just the team that built the initial version.",
            initActive: false,
        },
    ],
};

const contactData = {
    left: {
        subTitle: "CONTACT US NOW",
        title: "Ready to Build a High-Performing Ecommerce Website for Your Business?",
        desc: "Ready to partner with a trusted ecommerce website development company in India? Mematdigi delivers custom ecommerce website development services that build secure, scalable, and conversion-focused online stores. From startups to enterprise businesses, we create ecommerce solutions designed to increase sales, improve customer experiences, and support long-term business growth.",
    },
    form: {
        subTitle: "Get a Call Now",
        subIcon: "tji-box",
        title: "Drop Us a",
        titleSpan: "Line.",
        selectOptions: [
            { value: "0", optionName: "Choose an option" },
            { value: "1", optionName: "Custom Ecommerce Website Development" },
            { value: "2", optionName: "Shopping Cart Development" },
            { value: "3", optionName: "Payment Gateway Integration" },
            { value: "4", optionName: "Multi-Vendor Marketplace Development" },
            { value: "5", optionName: "Ecommerce Mobile App Development" },
            { value: "6", optionName: "Ecommerce Migration Services" },
            { value: "7", optionName: "API & Third-Party Integrations" },
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

                                        {/* Mobile form me Business Type dropdown (Website URL input hata diya) */}
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

export default function EcommerceWebsiteDevelopmentServices() {
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