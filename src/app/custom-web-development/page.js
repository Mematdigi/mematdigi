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
    eyebrow: "CUSTOM WEB DEVELOPMENT",
    titlePre: "Best Custom Web Development Company in India That",
    titleHighlight: "Builds Scalable Digital Solutions",
    titlePost: "",
    desc: (
        <>
            As a trusted custom web development company in India, we deliver custom web development services that build secure, scalable, and high-performance digital solutions. From custom web applications and ecommerce platforms to PHP, WordPress, and CMS development, we create tailored solutions that support long-term business growth.
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
    title: "Why Generic Web Solutions Limit Business Growth",
    desc: "",
    banner: "/images/choose/h8-choose-bnner.webp",
    boxes: [
        {
            icon: "tji-innovative",
            title: "Limited Scalability",
            desc: "Template websites and off-the-shelf software often struggle as your business grows. Limited customization, performance issues, and rigid functionality prevent your digital platform from supporting long-term business expansion.",
        },
        {
            icon: "tji-award",
            title: "Poor Business Integration",
            desc: "Generic solutions rarely integrate smoothly with CRMs, ERPs, payment gateways, or internal workflows, forcing businesses to rely on manual processes and costly workarounds that reduce efficiency.",
        },
        {
            icon: "tji-support",
            title: "Lack of Flexibility",
            desc: "Every business has unique requirements, but template-based platforms offer limited customization. Without custom web development, businesses often compromise on features, user experience, and future scalability.",
        },
    ],
};

const servicesData = {
    subTitle: "WHAT WE OFFER",
    subIcon: "tji-box",
    title: "Our Custom Web Development Services for Businesses Across India",
    desc: "From custom web applications and ecommerce platforms to PHP, WordPress, and CMS solutions - everything your business needs built exactly the way you need it.",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Custom Web Application Development",
            desc: "We build fully custom web applications from the ground up - scalable architecture, clean code, and intuitive interfaces designed around your specific business logic, workflows, and user requirements.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Custom Ecommerce Website Development",
            desc: "We build high-performance custom ecommerce websites that go beyond what any template platform can offer - custom checkout flows, product configurators, inventory systems, and conversion optimization built for your specific business model.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Custom PHP Development",
            desc: "We build robust, scalable web solutions using PHP - from custom portals and dashboards to complex backend systems that handle high traffic, sensitive data, and business-critical operations reliably.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Custom WordPress Development",
            desc: "Beyond themes and plugins - we build fully custom WordPress websites and applications with bespoke functionality, custom post types, and purpose-built features that make WordPress work exactly the way your business needs it to.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Custom CMS Development",
            desc: "We build custom content management systems tailored to how your team actually works - intuitive admin interfaces, custom content types, and workflow tools that make managing your digital presence genuinely effortless.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Custom UI/UX Design",
            desc: "Every custom web development project we deliver starts with design that puts the user first - intuitive navigation, conversion-focused layouts, and interfaces that make complex functionality feel simple and natural to use.",
            url: "/services",
        },
    ],
};

const solutionsData = {
    subTitle: "WHO WE SERVE",
    title: "Custom Web Development Solutions for Every Business Type",
    moreText: "More Services",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Startups & Small Businesses",
            url: "/services",
            desc: "Starting with custom web development gives your business a foundation that scales with you - no hitting platform limits at 10,000 users, no expensive migrations when you outgrow a template. Our custom web development company in India works with startups to build lean, focused solutions that do exactly what your business needs now and are architected to handle what it will need next.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "D2C & Ecommerce Brands",
            url: "/services",
            desc: "Custom ecommerce web development gives D2C brands capabilities that no template platform can match - custom product configurators, loyalty systems, subscription models, and checkout flows built around how your customers actually buy. We build the custom ecommerce website development in India that gives your brand a genuine competitive advantage over competitors running generic Shopify or WooCommerce stores.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "B2B & Enterprise Companies",
            url: "/services",
            desc: "Enterprise requirements - complex integrations, role-based access, multi-tenant architecture, and compliance-aware data handling - demand a custom web application development company with genuine technical depth. We build B2B web applications and enterprise platforms that integrate with your existing tech stack and scale with your organization without breaking under real business load.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        // Aur solutions add karne ho to yahan object push kar do ⬇️
    ],
};

const featuresData = {
    subTitle: "INDUSTRIES WE SERVE",
    subIcon: "tji-box",
    title: "Industries We Serve With Our Custom Web Development Services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Healthcare",
            desc: "Custom patient portals, appointment systems, and healthcare management platforms built with security and compliance requirements at the core",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Real Estate",
            desc: "Custom property listing platforms, CRM integrations, and agent portals that handle complex inventory and lead management for real estate businesses",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Education",
            desc: "Custom learning management systems, student portals, and edtech platforms that deliver personalized educational experiences at scale",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Ecommerce",
            desc: "Custom ecommerce website development india solutions for online stores that need capabilities beyond what any off-the-shelf platform can offer",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Finance & Fintech",
            desc: "Secure, compliant custom web applications for financial services - payment platforms, portfolio tools, and client portals built to regulatory standards",
        },
        {
            id: 6,
            icon: "tji-support",
            title: "SaaS & Technology",
            desc: "Custom web application development for technology companies building SaaS products, internal tools, and customer-facing platforms that need to scale",
        },
    ],
};

const scalableHighlightData = {
    eye: 'BUSINESS CHALLENGES',
    title: "Custom Web Development Challenges Every Business Faces -",
    titleSpan: "And How We Fix Them",
    paragraphs: [
        "Most businesses that come to us for custom web development have already been through at least one failed attempt - either a template solution that could not scale, a development agency that disappeared after delivery, or a custom build that was never properly documented and cannot be maintained without the original developer. As a trusted custom web development company in India working with 100+ businesses, we have solved every version of these problems and we build every project specifically to avoid them.",
    ],
    features: [
        "Scalability limits hitting at the worst moment - generic platforms that collapse under real traffic or transaction volume when growth arrives",
        "Integration failures with existing systems - off-the-shelf solutions that cannot connect to your CRM, ERP, or payment infrastructure without expensive custom workarounds",
        "Vendor lock-in preventing growth - platforms that hold your data and your functionality hostage behind monthly fees and proprietary systems",
        "Poor performance damaging user experience - slow load times and unreliable uptime from shared infrastructure that was never built for your specific load",
        "Security vulnerabilities in generic code - template-based solutions with publicly known exploits that make your business a target for attacks",
        "No post-launch support from the development team - code delivered and abandoned with no documentation, no handover, and no one to call when something breaks",
    ],
};

const servicesData9 = {
    subTitle: "OUR PROCESS",
    title: "How We Deliver Your Custom Web Development Project",
    moreText: "More services",
    moreUrl: "/services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Discovery & Requirement Analysis",
            desc: "We start by understanding your business completely - your users, your workflows, your integrations, and your growth goals. Every technical decision made from this point is grounded in what your custom web development project actually needs to succeed, not what is easiest to build.",
            url: "/services",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "UI/UX Design & Prototyping",
            desc: "Before a single line of code is written, we design and prototype every user interface and workflow. You see exactly how your solution will look and function - approving every screen and interaction before development begins so there are no surprises in the final product.",
            url: "/services",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Custom Development & Testing",
            desc: "Our custom web application development team builds your solution with clean, documented, scalable code - tested continuously throughout development across real devices, real browsers, and real usage scenarios so quality issues are caught during build, not after launch.",
            url: "/services",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Launch & Deployment",
            desc: "We manage the complete deployment process - server configuration, security hardening, performance optimization, and final testing in the production environment before go-live. Your custom web development project launches clean, secure, and fully operational from day one.",
            url: "/services",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Post-Launch Support & Optimization",
            desc: "We stay involved after launch - monitoring performance, fixing issues fast, releasing feature updates, and providing the ongoing technical support that keeps your custom web solution performing at its best as your business grows and your requirements evolve.",
            url: "/services",
        },
    ],
};

const scalableHighlightData2 = {
    eye: 'WHY CHOOSE US',
    title: "Why Choose Mematdigi as Your ",
    titleSpan: "Custom Web Development Company in India",
    paragraphs: [
        "At Mematdigi, we have built our reputation as the trusted custom web development company in India businesses choose when they need more than a template can offer. We are not the agency that builds custom web development projects and disappears after delivery. We are the custom web application development company that takes full ownership - from the first requirement discussion to ongoing post-launch support - treating every project with the same care we would give our own product. Our custom web development services cover every technology, every industry, and every scale - from startup MVPs built with custom web application development services to enterprise platforms requiring the depth of a dedicated custom web software development team.",
        "Whether you are a startup that needs a custom web application development company to build your first product right or an enterprise that needs a specialist custom web development company in India to replace a failing legacy system - Mematdigi delivers the custom web development that your business cannot afford to get wrong. Clean code, scalable architecture, complete documentation, and a development partner that stays accountable long after the project is delivered.",
    ],
    features: [
        "Custom web development company in India with 135+ projects delivered across 15+ industries",
        "Custom web application development - scalable, secure, fully documented code built to perform under real business load",
        "Custom web app development services - from concept and design through development, launch, and ongoing support",
        "Custom website development - tailored digital presence built around your brand, your users, and your conversion goals",
        "Custom ecommerce website development India - beyond template limitations, built for your specific business model and customer journey",
        "Custom web development services with complete transparency - clear timelines, fixed pricing, and no scope creep surprises",
    ],
};

const faqData = {
    subTitle: "FAQs",
    subIcon: "tji-box",
    title: "Frequently Asked Questions About Custom Web Development in India",
    phone: { display: "1-888-452-1505", tel: "18884521505" },
    items: [
        {
            title: "What is custom web development and why does my business need it? ",
            desc: "Custom web development means building a website or web application from scratch - designed specifically around your business requirements rather than adapted from a template. Businesses need custom web development when their workflows, integrations, or growth requirements exceed what any off-the-shelf solution can handle. Our custom web development company in India builds solutions that fit your business exactly.",
            initActive: true,
        },
        {
            title: "How much does custom web application development cost in India? ",
            desc: "Custom web application development costs in India typically range from ₹2,00,000 to ₹20,00,000+ depending on complexity, features, and integrations required. At Mematdigi, our custom web development services are priced transparently - you receive a detailed breakdown before any work begins, with no hidden costs and no scope creep surprises after the project starts.",
            initActive: false,
        },
        {
            title: "Do you offer custom ecommerce website development in India? ",
            desc: "Yes - custom ecommerce website development india is one of our most in-demand services. We build fully custom online stores with bespoke checkout flows, product configurators, loyalty systems, and backend integrations that no template ecommerce platform can replicate. Our custom ecommerce web development is built around your specific business model and customer journey.",
            initActive: false,
        },
        {
            title: "Do you build custom PHP and WordPress websites? ",
            desc: "Yes. Our custom php website development service builds robust, scalable backend systems and web applications using PHP - ideal for businesses that need high performance and complete control. Our custom wordpress website development goes far beyond themes - building bespoke functionality, custom post types, and purpose-built features for businesses that need WordPress to do more.",
            initActive: false,
        },
        {
            title: "How long does custom web development take? ",
            desc: "Timelines depend on project scope. A focused custom website development project typically takes 4–8 weeks. A complex custom web application development project may take 3–6 months. As a trusted custom web development company in India, we provide a detailed project timeline at the start of every engagement so you always know exactly when to expect each milestone and final delivery.",
            initActive: false,
        },
        {
            title: "Do you offer post-launch support for custom web projects?",
            desc: "Yes - always. Our custom web software development projects include structured post-launch support covering bug fixes, performance monitoring, security updates, and feature additions. Unlike agencies that deliver and disappear, our custom web app development services include ongoing technical support that keeps your solution performing as your business grows and your requirements evolve.",
            initActive: false,
        },
    ],
};

const contactData = {
    left: {
        subTitle: "CONTACT US NOW",
        title: "Ready to Build Your Custom Web Solution With India's Top Web Development Company?",
        desc: "Ready to partner with a trusted custom web development company in India? Mematdigi delivers custom web development services that build secure, scalable, and high-performance digital solutions. From custom web applications to enterprise platforms, we create technology that supports business growth, operational efficiency, and long-term success.",
    },
    form: {
        subTitle: "Get a Call Now",
        subIcon: "tji-box",
        title: "Drop Us a",
        titleSpan: "Line.",
        selectOptions: [
            { value: "0", optionName: "Choose an option" },
            { value: "1", optionName: "Custom Web Application Development" },
            { value: "2", optionName: "Custom Ecommerce Website Development" },
            { value: "3", optionName: "Custom PHP Development" },
            { value: "4", optionName: "Custom WordPress Development" },
            { value: "5", optionName: "Custom CMS Development" },
            { value: "6", optionName: "Custom UI/UX Design" },
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

export default function CustomWebDevelopmentServices() {
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