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
    eyebrow: "3D ANIMATION",
    titlePre: "Best 3D Animation Company in India That",
    titleHighlight: "Brings Your Vision to Life",
    titlePost: "",
    desc: (
        <>
            As a trusted 3D animation company in India, we deliver professional 3D animation services that transform ideas into visually engaging experiences. From product animations and architectural walkthroughs to medical and industrial animation, we create high-quality visuals that strengthen brand communication and drive business growth.
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
    subTitle: "COMMON ANIMATION CHALLENGES",
    subIcon: "tji-box",
    title: "Why Most Businesses Struggle to Communicate Their Product or Vision Effectively",
    desc: "",
    banner: "/images/choose/h8-choose-bnner.webp",
    boxes: [
        {
            icon: "tji-innovative",
            title: "Complex Ideas Are Hard to Explain",
            desc: "Static images and lengthy descriptions often fail to communicate product features, architectural designs, or technical processes, making it difficult for customers to fully understand your offering.",
        },
        {
            icon: "tji-award",
            title: "Low Visual Engagement",
            desc: "Poor-quality visuals and generic presentations struggle to capture attention, reduce audience engagement, and weaken your brand's ability to stand out in a competitive market.",
        },
        {
            icon: "tji-support",
            title: "Limited Business Impact",
            desc: "Without professional 3D animation services, businesses miss opportunities to simplify complex concepts, build customer confidence, and improve marketing, sales, and project presentations.",
        },
    ],
};

const servicesData = {
    subTitle: "WHAT WE OFFER",
    subIcon: "tji-box",
    title: "Our 3D Animation Services for Businesses Across India",
    desc: "From product animation and architectural walkthroughs to medical visualization and photorealistic CGI - complete 3D animation services built to communicate your vision with clarity and impact.",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "3D Product Animation",
            desc: "We bring your products to life with high-quality 3D product animation services - showcasing features, demonstrating functionality, and creating the kind of visual impact that static photography simply cannot achieve for your marketing and sales materials.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Architectural Walkthrough Animation",
            desc: "Let clients and investors experience a space before it is built. Our 3D walkthrough animation services create immersive, photorealistic architectural animations that communicate design intent, sell projects faster, and reduce costly misunderstandings before construction begins.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Industrial 3D Animation",
            desc: "Explain complex machinery, manufacturing processes, and engineering systems with clarity. Our industrial 3D animation services translate technical complexity into visually compelling animations that communicate process, scale, and function to any audience.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Medical 3D Animation",
            desc: "From surgical procedures and drug mechanisms to anatomical education and medical device demonstrations - our medical 3D animation services create accurate, visually compelling animations for healthcare brands, medical educators, and life sciences companies.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "CGI Animation",
            desc: "Photorealistic CGI animation services in India for brands that need visual content beyond what photography can capture - product launches, brand films, concept visualization, and high-end commercial content that makes an unforgettable impression.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "3D Explainer Videos",
            desc: "Turn complex ideas into simple, engaging visual stories. Our 3D explainer videos combine clear scripting with high-quality animation to communicate your product, service, or process in a format that audiences understand and remember.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Photorealistic 3D Rendering",
            desc: "Still images with the visual quality of photography - without the limitations of a camera. Our photorealistic 3D rendering service produces marketing-ready product visuals, architectural renders, and brand imagery that looks real and performs better than real photography.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "3D Modeling & Animation",
            desc: "The foundation of everything we produce. Our 3D modeling and animation team creates highly detailed, accurate 3D models of products, spaces, and concepts - built to the precision your project demands and optimized for the output format you need.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "3D Animation for Real Estate",
            desc: "We help real estate developers sell projects before they are complete. From site walkthrough animations and interior visualization to amenity showcases and master plan fly-throughs - our 3D animation for real estate projects converts prospects into buyers.",
            url: "/services",
        },
    ],
};

const solutionsData = {
    subTitle: "WHO WE SERVE",
    title: "3D Animation Services for Every Business Type",
    moreText: "More Services",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Product & Ecommerce Brands",
            url: "/services",
            desc: "When your product has features that photographs cannot show and words cannot fully explain, 3D product animation services become your most powerful marketing asset. We help product brands and ecommerce businesses create animation content that demonstrates value, answers objections, and converts browsers into buyers at a level static content simply cannot reach.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "Real Estate & Architecture Firms",
            url: "/services",
            desc: "Selling or approving a project before ground is broken requires the ability to help people see something that does not yet exist. Our 3D animation services for real estate projects create immersive walkthroughs, exterior visualizations, and interior renders that give developers, agents, and buyers the confidence to commit - faster and with less friction.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "Industrial & Healthcare Companies",
            url: "/services",
            desc: "Technical complexity is a communication challenge. Whether you need to explain how a piece of industrial equipment works or how a medical device interacts with the body, our industrial 3D animation services and medical 3D animation services translate technical reality into visual clarity that any audience can understand and act on.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        // Aur solutions add karne ho to yahan object push kar do ⬇️
    ],
};

const featuresData = {
    subTitle: "INDUSTRIES WE SERVE",
    subIcon: "tji-box",
    title: "Industries We Serve With Our 3D Animation Services in India",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Healthcare",
            desc: "Medical device demonstrations, surgical procedure animations, and anatomical visualization that educates patients and supports healthcare marketing",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Real Estate",
            desc: "Architectural walkthroughs, interior renders, and project visualization that sells developments before construction is complete",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Education",
            desc: "Complex concept visualization, scientific process animation, and educational content that makes difficult subjects engaging and accessible",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Ecommerce",
            desc: "Product animation and 3D visualization that shows features, demonstrates use, and converts product page visitors into confident buyers",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Manufacturing",
            desc: "Industrial process animation, equipment demonstrations, and technical training content that explains complex manufacturing systems clearly",
        },
        {
            id: 6,
            icon: "tji-support",
            title: "Architecture",
            desc: "Design visualization, concept presentation animations, and client communication tools that bring architectural vision to life before it is built",
        },
    ],
};

const scalableHighlightData = {
    eye: 'BUSINESS CHALLENGES',
    title: "3D Animation Challenges Every Business in India Faces -",
    titleSpan: "And How We Fix Them",
    paragraphs: [
        "Most businesses that come to us have tried to communicate their product or vision through photographs, brochures, or basic videos - and found that none of it captures what actually makes what they do special. Others have received quotes from large animation studios, seen the price, and assumed high-quality 3D animation services are simply out of their reach. As a trusted 3D animation company in India working with 100+ businesses, we know exactly what communication challenges 3D animation solves and exactly how to deliver it at a price that makes business sense.",
    ],
    features: [
        "Complex products that photographs cannot explain - losing customers at the consideration stage because the value is not visually clear",
        "Architectural projects being evaluated without visualization - slowing approvals and sales because stakeholders cannot see the finished result",
        "Technical processes that words fail to communicate - creating confusion, misalignment, and lost business at critical decision moments",
        "High studio quotes making quality animation feel inaccessible - leaving businesses with poor quality content that damages rather than builds brand perception",
        "No 3D content for marketing campaigns - missing the engagement uplift that animation delivers compared to static image content",
        "Inconsistent visualization quality across projects - creating an unprofessional impression that undermines otherwise strong products and proposals",
    ],
};

const servicesData9 = {
    subTitle: "OUR PROCESS",
    title: "How We Deliver Our 3D Animation Services",
    moreText: "More services",
    moreUrl: "/services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Brief & Concept Development",
            desc: "We start by understanding exactly what you need to communicate, who the audience is, and what action you want them to take after watching. Every animation decision from here - style, camera movement, level of detail - is made in service of that specific communication goal.",
            url: "/services",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Storyboard & Script Planning",
            desc: "Before modeling begins, we plan every shot, sequence, and narrative beat. You approve the full storyboard and script so there are no surprises in the final animation - only the visual story we agreed on, executed at the quality level your project demands.",
            url: "/services",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "3D Modeling & Texturing",
            desc: "Our 3D modeling team builds every element of your animation with the precision and detail your project requires - products, spaces, characters, and environments all created from scratch and textured to achieve the visual quality your brand deserves.",
            url: "/services",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Animation & Rendering",
            desc: "We animate every element with the right timing, movement, and camera work to tell your story compellingly - then render at high resolution for the output format you need, whether that is photorealistic 3D rendering for marketing materials or optimized formats for digital distribution.",
            url: "/services",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Final Delivery & Revisions",
            desc: "We deliver your completed animation with a structured revision process - ensuring every element meets your expectations before final files are handed over. You receive all formats needed for your intended use, with technical support for any platform-specific requirements.",
            url: "/services",
        },
    ],
};

const scalableHighlightData2 = {
    eye: 'WHY CHOOSE US',
    title: "Why Choose Mematdigi as Your ",
    titleSpan: "3D Animation Company in India",
    paragraphs: [
        "At Mematdigi, we have built our reputation as the best 3D animation company in India by solving the problem that stops most businesses from investing in 3D animation - the gap between the quality they need and the price they can justify. We are the 3D animation company in India that delivers premium studio quality through an efficient, experienced team that does not charge premium studio rates. Whether you need affordable 3D animation services in India for a product launch, a complex architectural walkthrough animation services india project, or industrial 3D animation services for a technical training program - our 3D animation studio in india brings the same commitment to quality, precision, and business impact to every project we take on.",
        "Whether you need to hire a 3D animation company for product videos that convert ecommerce browsers into buyers, industrial 3D animation services that explain complex engineering to non-technical audiences, or architectural walkthrough animation services india that sell real estate projects before construction begins - Mematdigi is the 3D animation company in India that delivers the quality, precision, and business impact your project deserves.",
    ],
    features: [
        "3D animation company in india with 100+ projects delivered across 15+ industries and use cases",
        "Best 3D animation company in india for affordability - premium quality at a price point that makes business sense",
        "3D animation agency with full in-house capabilities - modeling, texturing, animation, and rendering under one roof",
        "Affordable 3D animation services in india - transparent pricing, no hidden costs, no scope creep surprises",
        "Hire 3D animation company for product videos - dedicated teams for product animation that converts and convinces",
        "CGI animation services india - photorealistic visual content for brands that need to make an unforgettable first impression",
    ],
};

const faqData = {
    subTitle: "FAQs",
    subIcon: "tji-box",
    title: "Frequently Asked Questions About 3D Animation Services in India",
    phone: { display: "1-888-452-1505", tel: "18884521505" },
    items: [
        {
            title: "What does a 3D animation company in India do? ",
            desc: "A 3D animation company in India creates computer-generated visual content - product animations, architectural walkthroughs, medical visualizations, industrial process animations, and CGI content - for businesses that need to communicate complex ideas visually. At Mematdigi, our 3D animation services are built around specific business outcomes - not just visual quality for its own sake.",
            initActive: true,
        },
        {
            title: "How much do 3D animation services cost in India? ",
            desc: "Affordable 3D animation services in india typically range from ₹30,000 to ₹5,00,000+ depending on complexity, length, and level of detail required. At Mematdigi, every project is quoted based on your specific brief. As a trusted 3D animation agency, we provide transparent pricing with a detailed breakdown before any work begins - no vague estimates, no post-project surprises.",
            initActive: false,
        },
        {
            title: "Do you offer architectural walkthrough animation services? ",
            desc: "Yes - architectural walkthrough animation services india is one of our most popular services. We create fully photorealistic walkthrough animations for residential, commercial, and mixed-use developments that help developers, architects, and agents sell and approve projects faster by helping stakeholders visualize the finished space with complete clarity.",
            initActive: false,
        },
        {
            title: "Do you create 3D product animation for ecommerce brands? ",
            desc: "Yes. Our 3D product animation services are specifically designed for brands that need to show their products in ways photography cannot - features in action, internal mechanisms, scale comparisons, and use-case demonstrations. When you hire 3D animation company for product videos from Mematdigi, you get animation content built to convert.",
            initActive: false,
        },
        {
            title: "Do you provide medical and industrial 3D animation? ",
            desc: "Yes - medical 3D animation services and industrial 3D animation services are both core capabilities of our studio. We work with healthcare brands, medical device companies, manufacturers, and engineering firms to create technically accurate, visually compelling animations that communicate complex processes to specialized and general audiences alike.",
            initActive: false,
        },
        {
            title: "How long does it take to complete a 3D animation project?",
            desc: "Timelines depend on project complexity and length. A product animation typically takes 2–4 weeks. A complex architectural walkthrough from our 3D animation studio in india may take 4–8 weeks. As the best 3D animation company in india, we provide a detailed project timeline at the start of every engagement so you always know exactly when to expect delivery.",
            initActive: false,
        },
    ],
};

const contactData = {
    left: {
        subTitle: "CONTACT US NOW",
        title: "Ready to Bring Your Vision to Life With India's Best 3D Animation Company?",
        desc: "Ready to partner with a trusted 3D animation company in India? Mematdigi delivers professional 3D animation services that transform products, projects, and ideas into compelling visual experiences. From startups to enterprise businesses, we create high-quality animations designed to increase engagement, strengthen brand communication, and drive measurable business growth.",
    },
    form: {
        subTitle: "Get a Call Now",
        subIcon: "tji-box",
        title: "Drop Us a",
        titleSpan: "Line.",
        selectOptions: [
            { value: "0", optionName: "Choose an option" },
            { value: "1", optionName: "3D Product Animation" },
            { value: "2", optionName: "Architectural Walkthrough Animation" },
            { value: "3", optionName: "Industrial 3D Animation" },
            { value: "4", optionName: "Medical 3D Animation" },
            { value: "5", optionName: "CGI Animation" },
            { value: "6", optionName: "3D Explainer Videos" },
            { value: "7", optionName: "Photorealistic 3D Rendering" },
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

export default function ThreeDeeAnimationServices() {
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