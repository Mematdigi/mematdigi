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
    eyebrow: "VR DEVELOPMENT COMPANY",
    titlePre: "Best VR Development Company in India That Builds",
    titleHighlight: "Immersive Virtual Reality",
    titlePost: "Experiences",
    desc: (
        <>
            As a trusted VR development company in India, we build immersive virtual reality solutions that help businesses improve training, customer engagement, product visualization, and operational efficiency. From custom VR app development and interactive simulations to consulting and enterprise VR solutions, we create innovative experiences that deliver measurable business outcomes.
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
    title: "Why Most Businesses Are Missing the VR Opportunity",
    desc: "",
    banner: "/images/choose/h8-choose-bnner.webp",
    boxes: [
        {
            icon: "tji-innovative",
            title: "Unclear VR Strategy",
            desc: "Many businesses want to adopt virtual reality but lack a clear roadmap. Without identifying the right use cases, technology, and implementation strategy, VR investments often fail to deliver meaningful business outcomes.",
        },
        {
            icon: "tji-award",
            title: "Limited Development Expertise",
            desc: "Working with generic software developers instead of an experienced VR development company in India often results in poor user experiences, limited scalability, and virtual reality solutions that fail to solve real business challenges.",
        },
        {
            icon: "tji-support",
            title: "High Development Costs & Complexity",
            desc: "Businesses frequently assume VR development is too expensive or technically complex. Without the right development partner, projects become difficult to manage, exceed budgets, and fail to provide long-term value or measurable ROI.",
        },
    ],
};

const servicesData = {
    subTitle: "WHAT WE OFFER",
    subIcon: "tji-box",
    title: "Our VR Development Services for Businesses Across India",
    desc: "From VR app development and custom immersive experiences to VR consulting and manufacturing solutions - complete virtual reality development services built to solve real business problems.",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "VR App Development",
            desc: "We build high-performance VR applications for business - training simulations, product demonstrations, virtual showrooms, and customer experience tools - developed by a specialist vr app development company team that understands how to make VR work for your specific use case.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "VR Content Development",
            desc: "Immersive VR experiences are only as powerful as the content inside them. Our vr content development service creates the 3D environments, interactive scenarios, and narrative experiences that make your VR application genuinely engaging and effective for your audience.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Custom VR Development",
            desc: "No two businesses have the same VR requirements. Our custom vr development service builds fully bespoke virtual reality solutions from the ground up - designed around your specific industry, your specific users, and the specific business outcome you are trying to achieve.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "VR Consulting Services",
            desc: "Not sure where to start with VR or whether it is right for your business? Our vr consulting services help you define the right VR strategy - identifying the highest-impact use cases, the right technology approach, and the realistic investment required to achieve your business goals through virtual reality.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "VR for Manufacturing",
            desc: "Training, safety simulation, equipment operation, and quality control - vr for manufacturing applications reduce training time, improve safety outcomes, and cut the cost of physical training infrastructure for manufacturers across India.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "VR Architecture & Real Estate Visualization",
            desc: "Let clients and investors experience a building before it is built. Our VR architecture and real estate visualization solutions create immersive property walkthroughs that help developers sell faster, architects communicate design intent clearly, and buyers commit with confidence.",
            url: "/services",
        },
    ],
};

const solutionsData = {
    subTitle: "WHO WE SERVE",
    title: "VR Development Solutions for Every Business Type",
    moreText: "More Services",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Startups & Small Businesses",
            url: "/services",
            desc: "VR is no longer exclusively for enterprise budgets. As a vr development company in india that works with businesses at every stage, we help startups build focused, high-impact VR experiences that create genuine competitive differentiation - whether that is a virtual product demonstration, an immersive brand experience, or a training tool that makes your small team perform like a much larger one.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "D2C & Ecommerce Brands",
            url: "/services",
            desc: "Virtual try-on experiences, 3D product visualization, and immersive brand experiences are reshaping how D2C customers discover and evaluate products. Our vr app development services help ecommerce brands create the kind of immersive shopping experiences that reduce purchase hesitation, cut return rates, and build the brand loyalty that repeat purchase depends on.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "B2B & Enterprise Companies",
            url: "/services",
            desc: "Enterprise VR applications - employee training, safety simulation, remote collaboration, and client presentation tools - deliver measurable ROI at scale. As one of the leading VR companies in India for enterprise clients, we build the complex, integrated VR solutions that large organizations need to transform how they train, sell, and operate across multiple locations and teams.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
    ],
};

const featuresData = {
    subTitle: "INDUSTRIES WE SERVE",
    subIcon: "tji-box",
    title: "Industries We Serve With Our VR Development Services in India",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Healthcare",
            desc: "Medical training simulations, surgical procedure visualization, patient education experiences, and therapy applications that improve clinical outcomes and training efficiency",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Real Estate",
            desc: "Immersive property walkthrough experiences, interior visualization tools, and virtual site visit applications that help developers sell projects before construction completes",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Education",
            desc: "Immersive learning environments, virtual laboratory simulations, historical experience recreations, and interactive educational content that makes complex subjects genuinely engaging",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Manufacturing",
            desc: "Equipment training simulations, safety procedure walkthroughs, quality control tools, and assembly process training that reduce errors and improve workforce competency",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Retail & Ecommerce",
            desc: "Virtual showrooms, product visualization experiences, and immersive brand environments that improve purchase confidence and reduce return rates for online retailers",
        },
        {
            id: 6,
            icon: "tji-support",
            title: "Architecture & Construction",
            desc: "Design visualization tools, client presentation experiences, and construction planning simulations that improve communication and reduce costly design change requests",
        },
    ],
};

const scalableHighlightData = {
    eye: 'BUSINESS CHALLENGES',
    title: "VR Development Challenges Every Business Faces -",
    titleSpan: "And How We Fix Them",
    paragraphs: [
        "Most businesses that come to us for virtual reality development services have already spent time researching VR and walked away confused - by conflicting information about cost, by developers who could not explain how VR would solve their specific business problem, or by early VR experiences that were technically impressive but delivered no real business value. As a trusted vr development company in India working with businesses across healthcare, education, real estate, and manufacturing, we have helped every type of business navigate these exact challenges.",
    ],
    features: [
        "Assuming VR development cost is out of reach - without ever getting a realistic quote from a vr solutions company that understands lean, focused VR builds",
        "Cannot find vr companies in india with real business application expertise - working with generic developers who build technically but cannot connect VR to business outcomes",
        "Poor quality VR builds that users abandon quickly - experiences built without UX expertise, resulting in discomfort, confusion, and zero adoption",
        "No post-launch support from the development team - VR applications that cannot be updated, improved, or maintained after the initial delivery",
        "No clear VR strategy before development begins - investing in VR without a clear use case, target user, or success metric in place",
        "Integration challenges with existing business systems - VR applications that cannot connect to LMS platforms, CRM systems, or operational tools already in use",
    ],
};

const servicesData9 = {
    subTitle: "OUR PROCESS",
    title: "How We Deliver Your VR Development Project",
    moreText: "More services",
    moreUrl: "/services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Discovery & VR Strategy Planning",
            desc: "We start by understanding your business goals, your target users, and the specific problem your VR application needs to solve. Our vr consulting services approach ensures every technical decision is grounded in business value - not just technical possibility - before a single line of development begins.",
            url: "/services",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Concept Design & Storyboarding",
            desc: "We design the complete VR experience - environment layout, user interaction flows, narrative structure, and content requirements - and present a detailed storyboard for your approval before development begins. You see exactly what will be built before any development investment is committed.",
            url: "/services",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "VR Development & Build",
            desc: "Our vr app development company team builds your VR application with the technical precision and creative quality your experience demands - optimized for the target platform, tested for comfort and usability throughout development, and built to the performance standards that make VR genuinely enjoyable to use.",
            url: "/services",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Testing & Quality Assurance",
            desc: "We test every element of your VR application - performance, comfort, interaction accuracy, content quality, and hardware compatibility - across real devices in real conditions. Issues are caught and fixed during development, not discovered by users after launch.",
            url: "/services",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Launch & Post-Launch Support",
            desc: "We manage the complete deployment of your virtual reality development services project and stay involved after launch - providing updates, content additions, performance optimization, and technical support that keeps your VR application effective as your business needs evolve.",
            url: "/services",
        },
    ],
};

const scalableHighlightData2 = {
    eye: 'WHY CHOOSE US',
    title: "Why Choose Mematdigi as Your ",
    titleSpan: "VR Development Company in India",
    paragraphs: [
        "At Mematdigi, we have built our reputation as a trusted VR development company in India by doing what most VR developers do not - treating virtual reality as a business tool first and a technology showcase second. We are not the vr app development company that builds technically impressive experiences that no one uses. We are the virtual reality development company that starts with your business objective, designs the experience around your users, and measures success by whether the VR application actually delivers the outcome it was built for. As one of the leading VR companies in India working with businesses across industries, our custom vr development capabilities cover every platform, every use case, and every scale - from focused startup VR builds to complex enterprise virtual reality development services.",
        "Whether you are a startup that needs a VR solutions company to build your first VR experience cost-effectively or an enterprise that needs a specialist virtual reality development company to deliver complex, integrated VR training or sales tools at scale - Mematdigi delivers the virtual reality development services that create real business impact. Not just impressive demos - working VR solutions that solve real problems and deliver measurable results for businesses across India.",
    ],
    features: [
        "VR development company in India trusted by businesses across healthcare, real estate, education, and manufacturing",
        "VR companies in India with genuine business application expertise - not just technical developers who build without business context",
        "VR app development company with full in-house capabilities - design, development, content, testing, and post-launch support",
        "Custom vr development built around your specific use case - no generic templates, no one-size-fits-all VR experiences",
        "Hire vr developers from Mematdigi - dedicated specialists assigned to your project from discovery through delivery and beyond",
        "VR consulting services before development begins - helping you define the right strategy, the right use case, and the right investment",
    ],
};

const faqData = {
    subTitle: "FAQs",
    subIcon: "tji-box",
    title: "Frequently Asked Questions About VR Development Services in India",
    phone: { display: "1-888-452-1505", tel: "18884521505" },
    items: [
        {
            title: "What does a VR development company in India do?",
            desc: "A VR development company in India builds virtual reality applications for business use cases - training simulations, product visualization, architectural walkthroughs, educational experiences, and immersive brand tools. At Mematdigi, our virtual reality development company approach starts with your business goal, not the technology - ensuring every VR experience we build delivers real, measurable business value.",
            initActive: true,
        },
        {
            title: "How much does VR development cost in India?",
            desc: "VR development cost in India depends entirely on the complexity of the experience, the platform, and the level of interactivity required. A focused VR training module might cost ₹2–5 lakhs. A complex multi-environment custom vr development project could range from ₹10–30 lakhs or more. We provide transparent, detailed quotes based on your specific brief - no vague estimates, no surprises after you commit.",
            initActive: false,
        },
        {
            title: "Do you offer custom VR development for specific business needs?",
            desc: "Yes - custom vr development is our core offering. We build every VR experience from scratch around your specific industry, your specific users, and your specific business goal. As a trusted VR solutions company, we do not use generic VR templates - every element of the experience is designed and built to solve the exact problem your business needs VR to address.",
            initActive: false,
        },
        {
            title: "Can I hire dedicated VR developers from Mematdigi?",
            desc: "Yes. When you hire vr developers from Mematdigi, you get dedicated specialists assigned exclusively to your project - communicating directly with your team, working within your preferred processes, and staying accountable throughout the entire development lifecycle. Our vr app development company model ensures you get senior VR talent without the overhead of full-time employment.",
            initActive: false,
        },
        {
            title: "What industries do you serve with VR development services?",
            desc: "We deliver virtual reality development services across healthcare, real estate, education, manufacturing, retail, and architecture. Our vr for manufacturing solutions are particularly in demand - covering equipment training, safety simulations, and quality control applications that reduce training costs and improve workforce performance for manufacturers across India.",
            initActive: false,
        },
        {
            title: "Do you offer VR consulting services before development begins?",
            desc: "Yes - always. Our vr consulting services help businesses define the right VR strategy before any development investment is made. We identify your highest-impact VR use case, recommend the right technology approach, provide realistic cost estimates, and help you build the business case for VR investment - so when development begins, every decision is aligned to a clear outcome.",
            initActive: false,
        },
    ],
};

const contactData = {
    left: {
        subTitle: "CONTACT US NOW",
        title: "Ready to Build Your VR Solution With India's Leading VR Development Company?",
        desc: "Partner with Mematdigi, a trusted VR development company in India, to build custom virtual reality solutions that improve training, engagement, visualization, and business performance. From concept to deployment, we create immersive VR experiences designed to deliver measurable results and long-term growth.",
    },
    form: {
        subTitle: "Get Free Consultation",
        subIcon: "tji-box",
        title: "Drop Us a",
        titleSpan: "Line.",
        selectOptions: [
            { value: "0", optionName: "Choose an option" },
            { value: "1", optionName: "VR App Development" },
            { value: "2", optionName: "VR Content Development" },
            { value: "3", optionName: "Custom VR Development" },
            { value: "4", optionName: "VR Consulting Services" },
            { value: "5", optionName: "VR for Manufacturing" },
            { value: "6", optionName: "VR Architecture & Real Estate" },
            { value: "7", optionName: "Other VR Solution" },
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
                                        <ButtonPrimary text={"Get Free Consultation"} url={'/contact-us'}/>
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

export default function VrDevelopmentServices() {
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