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
    eyebrow: "WHATSAPP MARKETING COMPANY",
    titlePre: "Best WhatsApp Marketing Company in India That Drives Real",
    titleHighlight: "Customer Engagement",
    titlePost: "",
    desc: (
        <>
            As a trusted WhatsApp marketing company in India, we help businesses build meaningful customer relationships through automation, bulk messaging, broadcast campaigns, and WhatsApp Business API solutions. Our result-driven WhatsApp marketing services increase engagement, generate qualified leads, and turn conversations into measurable business growth.
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
    title: "Why Most Businesses Are Leaving WhatsApp Revenue on the Table",
    desc: "",
    banner: "/images/choose/h8-choose-bnner.webp",
    boxes: [
        {
            icon: "tji-innovative",
            title: "Poor Customer Engagement",
            desc: "Sending generic promotional messages without audience segmentation leads to low response rates, poor customer experiences, and missed opportunities to build meaningful conversations that convert into sales.",
        },
        {
            icon: "tji-award",
            title: "Lack of Automation & Scalability",
            desc: "Managing customer conversations manually slows business growth. Without WhatsApp automation, chatbots, and Business API integration, businesses struggle to handle increasing inquiries efficiently.",
        },
        {
            icon: "tji-support",
            title: "Ineffective Campaign Performance",
            desc: "Many businesses send WhatsApp campaigns without a clear strategy, performance tracking, or compliance. This results in poor engagement, lower conversions, and the risk of damaging sender reputation through ineffective messaging.",
        },
    ],
};

const servicesData = {
    subTitle: "WHAT WE OFFER",
    subIcon: "tji-box",
    title: "Our WhatsApp Marketing Services for Businesses Across India",
    desc: "From bulk WhatsApp campaigns and automation to chatbot development, API setup, and broadcast management - complete WhatsApp marketing solutions built to drive engagement and revenue.",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "WhatsApp Campaign Management",
            desc: "End-to-end WhatsApp marketing campaign management - strategy, message creation, audience targeting, sending, and performance analysis - all managed by our WhatsApp marketing agency team for maximum impact and minimum friction.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "WhatsApp Automation",
            desc: "We build WhatsApp automation workflows that send the right message to the right customer at the right moment - welcome sequences, abandoned cart reminders, order updates, and re-engagement flows that run without manual intervention.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Bulk WhatsApp Marketing",
            desc: "Reach thousands of customers instantly with our bulk WhatsApp marketing services - segmented broadcast lists, personalized messaging at scale, rich media messaging, and compliance-first delivery that protects your sender reputation.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "WhatsApp Business API Setup",
            desc: "We set up and configure the WhatsApp Business API for businesses that need to communicate at scale - enabling automated messaging, CRM integration, chatbot deployment, and multi-agent customer support through a single verified business number.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "WhatsApp Chatbot Development",
            desc: "We build intelligent WhatsApp chatbots that handle customer inquiries, qualify leads, process orders, and provide instant support - 24 hours a day, 7 days a week, without adding headcount to your customer service team.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Broadcast & List Management",
            desc: "We build, segment, and manage your WhatsApp broadcast lists - organizing your audience by behavior, purchase history, location, and engagement level so every message reaches the people most likely to respond and convert.",
            url: "/services",
        },
    ],
};

const solutionsData = {
    subTitle: "WHO WE SERVE",
    title: "WhatsApp Marketing Solutions for Every Business Type",
    moreText: "More Services",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Startups & Small Businesses",
            url: "/services",
            desc: "WhatsApp marketing in India gives startups direct access to customers without the cost of large-scale paid advertising. Our WhatsApp marketing company in India works with small businesses to build lean, high-impact WhatsApp programs - automated follow-ups, personalized messaging, and broadcast campaigns that generate leads and sales from a channel your customers already use every day.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "D2C & Ecommerce Brands",
            url: "/services",
            desc: "For D2C brands, WhatsApp is the highest-engagement retention channel available. Our bulk WhatsApp marketing services build the abandoned cart recovery sequences, order update notifications, product launch announcements, and loyalty campaigns that keep your customers buying from you - not your competitors - through the most personal digital channel they have.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "B2B & Enterprise Companies",
            url: "/services",
            desc: "B2B WhatsApp marketing requires a completely different approach - lead qualification, appointment setting, proposal follow-ups, and account-based messaging that moves complex sales cycles forward. Our WhatsApp marketing agency builds the automation sequences and chatbot workflows that keep B2B conversations active at scale without requiring your sales team to manage every interaction manually.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
    ],
};

const featuresData = {
    subTitle: "INDUSTRIES WE SERVE",
    subIcon: "tji-box",
    title: "Industries We Serve With Our WhatsApp Marketing Services in India",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Healthcare",
            desc: "Appointment reminders, health tips, prescription alerts, and patient re-engagement campaigns that reduce no-shows and build patient loyalty.",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Real Estate",
            desc: "Property alerts, site visit scheduling, follow-up automation, and broker communication tools that keep buyers engaged through long consideration cycles.",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Education",
            desc: "Admission inquiry handling, course updates, fee reminders, and student engagement campaigns for schools, colleges, and edtech platforms.",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Ecommerce",
            desc: "Abandoned cart recovery, order tracking, product launch broadcasts, and loyalty campaigns that drive repeat purchases through WhatsApp.",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Finance & Fintech",
            desc: "Lead nurturing, document collection automation, policy renewal reminders, and customer support workflows for financial services brands.",
        },
        {
            id: 6,
            icon: "tji-support",
            title: "SaaS & Technology",
            desc: "Trial activation sequences, onboarding messages, feature announcements, and churn prevention campaigns for SaaS businesses using WhatsApp.",
        },
    ],
};

const scalableHighlightData = {
    eye: 'BUSINESS CHALLENGES',
    title: "WhatsApp Marketing Challenges Every Business in India Faces -",
    titleSpan: "And How We Fix Them",
    paragraphs: [
        "Most businesses that come to us for WhatsApp marketing in India are either sending unstructured bulk messages that damage their sender reputation or have no WhatsApp marketing strategy at all. They know their customers are on WhatsApp. They know the open rates are far higher than email. But they do not know how to build a compliant, scalable, automated WhatsApp marketing program that generates real revenue without the risk of getting their number blocked. As a trusted WhatsApp marketing company in India working with 100+ businesses, we have solved every version of this problem.",
    ],
    features: [
        "WhatsApp number getting blocked - because messages were sent without proper opt-in management and compliance protocols",
        "No automation in place - meaning every customer interaction requires manual effort that does not scale as the business grows",
        "Generic broadcast messages with no segmentation - sending the same message to every contact regardless of where they are in the buying journey",
        "No rich media messaging strategy - missing the engagement uplift that images, videos, catalogs, and interactive buttons deliver over plain text",
        "WhatsApp Business API not set up - limiting the business to basic WhatsApp functionality without the automation and integration capabilities that drive real results",
        "No campaign analytics - making it impossible to know which messages are performing, which audiences are converting, and where the strategy needs to improve",
    ],
};

const servicesData9 = {
    subTitle: "OUR PROCESS",
    title: "How We Deliver Our WhatsApp Marketing Services",
    moreText: "More services",
    moreUrl: "/services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Audit & Strategy Development",
            desc: "We start by auditing your existing WhatsApp presence, audience, and communication history - then build a complete WhatsApp marketing strategy covering campaign types, automation workflows, audience segmentation, and messaging frameworks aligned to your specific business goals.",
            url: "/services",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "WhatsApp Business API Setup",
            desc: "We configure and verify your WhatsApp Business API account - setting up the technical infrastructure for automated messaging, broadcast list management, chatbot integration, and CRM connectivity that makes professional WhatsApp marketing in India possible at scale.",
            url: "/services",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Audience Building & Segmentation",
            desc: "We build and segment your WhatsApp contact lists - organizing your audience by behavior, purchase history, location, and engagement level so every campaign delivers personalized messaging to the contacts most likely to respond and convert.",
            url: "/services",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Campaign Execution & Automation",
            desc: "We create, schedule, and deploy your WhatsApp campaigns and automation sequences - bulk WhatsApp marketing services for broadcasts, triggered automation for behavioral messages, and chatbot workflows for instant customer response across every touchpoint.",
            url: "/services",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Analytics, Reporting & Optimization",
            desc: "Monthly performance reports covering message delivery rates, open rates, response rates, conversion rates, and campaign ROI - clear, plain-language reporting that shows exactly how our WhatsApp marketing solutions are contributing to your business growth.",
            url: "/services",
        },
    ],
};

const scalableHighlightData2 = {
    eye: 'WHY CHOOSE US',
    title: "Why Choose Mematdigi as Your ",
    titleSpan: "WhatsApp Marketing Company in India",
    paragraphs: [
        "At Mematdigi, we have built our reputation as the best WhatsApp marketing agency in India by treating WhatsApp as what it actually is - the highest-engagement direct marketing channel available to any business in India, when it is used correctly. We are not the WhatsApp marketing company that sends bulk messages to purchased lists and reports on delivery counts. We are the WhatsApp marketing company in India that builds compliant, automated, conversion-focused WhatsApp programs - with the strategy, the technology, and the execution to turn your WhatsApp presence into a consistent revenue channel that compounds over time.",
        "Whether you are a startup that needs a WhatsApp marketing company in India to build your first automated customer communication program or an enterprise that needs a specialist WhatsApp marketing agency to manage complex multi-segment campaigns at scale - Mematdigi delivers the WhatsApp marketing services india businesses trust to drive real engagement, real conversations, and real revenue through India's most-used messaging platform.",
    ],
    features: [
        "WhatsApp marketing in India - 100+ businesses reached and engaged through strategic, compliant WhatsApp campaigns",
        "Best WhatsApp marketing agency - full-service delivery covering strategy, API setup, automation, content, and reporting",
        "Bulk WhatsApp marketing services - segmented broadcasts that reach thousands of customers with personalized messaging at scale",
        "WhatsApp marketing company in India with automation expertise - behavioral triggers, drip sequences, and chatbot workflows that run without manual effort",
        "WhatsApp marketing solutions built for compliance - opt-in management, sender reputation protection, and platform policy adherence at every step",
        "WhatsApp marketing services in India with transparent reporting - clear monthly visibility into campaign performance, engagement rates, and revenue generated",
    ],
};

const faqData = {
    subTitle: "FAQs",
    subIcon: "tji-box",
    title: "Frequently Asked Questions About WhatsApp Marketing Services in India",
    phone: { display: "1-888-452-1505", tel: "18884521505" },
    items: [
        {
            title: "What is WhatsApp marketing and how does it work for businesses?",
            desc: "WhatsApp marketing in India involves using WhatsApp to communicate with customers through promotional messages, automated sequences, chatbots, and broadcast campaigns. Businesses use WhatsApp marketing services to send product updates, promotional offers, order notifications, and customer support - through a channel with significantly higher open rates than email or SMS.",
            initActive: true,
        },
        {
            title: "How much do WhatsApp marketing services cost in India?",
            desc: "WhatsApp marketing services india typically range from ₹5,000 to ₹30,000+ per month depending on message volume, automation complexity, and whether WhatsApp Business API setup is included. As a transparent WhatsApp marketing company in India, Mematdigi prices are based on your specific requirements - no hidden fees, no post-signup surprises.",
            initActive: false,
        },
        {
            title: "Is bulk WhatsApp marketing legal in India?",
            desc: "Yes - when done correctly with proper opt-in management and WhatsApp Business API compliance. Our bulk WhatsApp marketing services are built around platform policy compliance - using verified business accounts, managing opt-ins properly, and maintaining the sender reputation that keeps your number active and your messages delivering.",
            initActive: false,
        },
        {
            title: "What is the WhatsApp Business API and do I need it?",
            desc: "The WhatsApp Business API is the platform that enables automated messaging, bulk WhatsApp services, CRM integration, and chatbot deployment at scale. If your business needs to communicate with more than a few hundred customers regularly, the API is essential. Our WhatsApp marketing agency handles the complete setup and verification process for every client.",
            initActive: false,
        },
        {
            title: "How is WhatsApp marketing different from email marketing?",
            desc: "WhatsApp marketing delivers significantly higher open rates - typically 90%+ compared to 20-30% for email - because messages arrive in the same inbox customers use for personal conversations. WhatsApp marketing solutions also support rich media messaging, interactive buttons, and real-time two-way conversation that email cannot replicate.",
            initActive: false,
        },
        {
            title: "How long does it take to see results from WhatsApp marketing?",
            desc: "WhatsApp campaigns can show immediate results - broadcast campaigns typically generate responses within hours of sending. Automation workflows and chatbot systems take 2-4 weeks to set up and optimize. As a trusted WhatsApp marketing company india, we set realistic expectations and show you performance data from the first campaign we run together.",
            initActive: false,
        },
    ],
};

const contactData = {
    left: {
        subTitle: "CONTACT US NOW",
        title: "Ready to Grow Your Business With India's Best WhatsApp Marketing Company?",
        desc: "Partner with Mematdigi, a trusted WhatsApp marketing company in India, to build automated, conversion-focused customer communication that drives higher engagement, stronger relationships, and measurable business growth. From bulk WhatsApp campaigns to Business API solutions, we help your business turn every conversation into an opportunity.",
    },
    form: {
        subTitle: "Get a Call Now",
        subIcon: "tji-box",
        title: "Drop Us a",
        titleSpan: "Line.",
        selectOptions: [
            { value: "0", optionName: "Choose a service" },
            { value: "1", optionName: "WhatsApp Campaign Management" },
            { value: "2", optionName: "WhatsApp Automation" },
            { value: "3", optionName: "Bulk WhatsApp Marketing" },
            { value: "4", optionName: "WhatsApp Business API Setup" },
            { value: "5", optionName: "WhatsApp Chatbot Development" },
            { value: "6", optionName: "Broadcast & List Management" },
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

export default function WhatsaapMarketingServices() {
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