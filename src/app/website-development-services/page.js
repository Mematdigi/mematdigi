import Link from "next/link";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";

import Footer5 from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

import HeroSection from "../HeroSection";

export const metadata = {
  title: "Best Website Development Company in India | Memat Digi",
  description:
    "Hire Memat Digi, a trusted website development company in India for responsive, fast loading and SEO-friendly websites. Get your free quote today.",
  alternates: {
    canonical: "https://www.mematdigi.com/website-development-services",
  },
};

const chooseData = {
    subTitle: "COMMON WEBSITE PROBLEMS",
    subIcon: "tji-box",
    title: "Why Most Business Websites Fail to Generate Leads",
    desc: "",
    banner: "/images/choose/h8-choose-bnner.webp",
    boxes: [
        {
            icon: "tji-innovative",
            title: "Poor User Experience",
            desc: "Slow loading pages, confusing navigation, and poor mobile responsiveness frustrate visitors and drive potential customers away before they take action.",
        },
        {
            icon: "tji-award",
            title: "Invisible on Search Engines",
            desc: "Many websites lack SEO-friendly foundations, making it difficult for customers to find your business on Google when they are actively searching.",
        },
        {
            icon: "tji-support",
            title: "No Conversion Strategy",
            desc: "A website without clear messaging, strong CTAs, and lead generation elements becomes a digital brochure instead of a business growth tool.",
        },
    ],
};

const servicesData = {
    subTitle: "WHAT WE OFFER",
    subIcon: "tji-box",
    title: "Our Website Development Services for Businesses Across India",
    desc: 'From custom web development to ecommerce, web apps, and ongoing support - everything your business needs is built under one roof.',
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Custom Web Development",
            desc: "We build fully custom websites from scratch - no templates, no shortcuts. Every line of code is written around your brand, your audience, and your business goals.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Ecommerce Development",
            desc: "Launch a high-performing online store built for sales. Our ecommerce website development in India covers product catalogs, payment gateways, inventory management, and conversion optimization.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Web App Development",
            desc: "From dashboards and portals to SaaS platforms - our web application development team builds scalable, secure, and high-performance web apps for businesses across India.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Shopify Development",
            desc: "We build and customize Shopify stores that look great and sell even better. From theme development to app integration - complete Shopify development services for your ecommerce brand.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Magento Web Development",
            desc: "Enterprise-grade ecommerce solutions built on Magento - powerful, scalable, and built to handle high volumes of traffic, products, and transactions without breaking a sweat.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Website Redesign Services",
            desc: "Your old website is costing you leads. Our website redesign services start with a full audit - fixing UX gaps, improving speed, and rebuilding for conversion without losing your SEO equity.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "UI/UX Design",
            desc: "Beautiful design means nothing if users cannot navigate it. We design intuitive, conversion-focused interfaces that guide visitors naturally toward the action you want them to take.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "SEO-Friendly Websites",
            desc: "Every website we build has SEO-friendly website development baked in from day one - clean URLs, schema markup, fast load times, mobile responsiveness, and proper heading structure throughout.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Maintenance & Support",
            desc: "We stay involved after launch. Our website maintenance and support plans cover security patches, performance updates, content changes, and technical fixes - so your website never goes stale.",
            url: "/services",
        },
    ],
};

const solutionsData = {
    subTitle: "WHO WE SERVE",
    title: "Website Development Services for Startups, Ecommerce & Enterprises",
    moreText: "More Services",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Startups & Small Businesses",
            url: "/services",
            desc: "Your website is your most important salesperson - and it needs to work from day one. Our affordable website development in India for startups focuses on speed, clarity, and conversion so your business makes a strong first impression without overspending on development.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "D2C & Ecommerce Brands",
            url: "/services",
            desc: "Selling online is competitive. We build ecommerce websites that do more than display products - they guide visitors through a seamless buying journey, reduce cart abandonment, and drive repeat revenue through smart design and performance optimization.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "B2B & Enterprise Companies",
            url: "/services",
            desc: "Corporate website development for enterprises requires a different approach - lead capture, gated content, CRM integration, and authority-building design that speaks directly to decision-makers. We deliver exactly that, on time and at scale.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        // Aur solutions add karne ho to yahan object push kar do ⬇️
    ],
};

const featuresData = {
    subTitle: "INDUSTRIES WE SERVE",
    subIcon: "tji-box",
    title: "Industry Specific Website Development Services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Healthcare",
            desc: "HIPAA-aware, trust-building websites for clinics, hospitals, and health brands that convert patients into appointments",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Real Estate",
            desc: "Property listing websites with advanced search, lead capture forms, and location-based features built for real estate agencies",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Education",
            desc: "Student-focused websites for schools, colleges, and edtech platforms that drive admissions and build institutional authority",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Ecommerce",
            desc: "High-converting online stores with seamless checkout, product filtering, and performance optimization built for sales growth",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Finance & Fintech",
            desc: "Secure, compliance-aware websites for financial brands that build trust and generate qualified inbound leads",
        },
        {
            id: 6,
            icon: "tji-support",
            title: "SaaS & Technology",
            desc: "Product-led websites for tech companies that communicate value clearly and convert visitors into trial signups",
        },
    ],
};

const scalableHighlightData = {
    eye: 'BUSINESS CHALLENGES',
    title: "Common Website Challenges We",
    titleSpan: "Help Businesses Overcome",
    paragraphs: [
        "Most businesses come to us with the same problems - a website that looks fine on the surface but is quietly losing leads every single day. Whether it is poor mobile performance, slow load times, zero search visibility, or a design that confuses rather than converts - these are not small problems. They are revenue problems. As India's best website development company, we have seen every version of a broken website and we know exactly how to fix it.",
    ],
    features: [
        "Slow load times costing you rankings and users who never come back",
        "Poor mobile experience driving away the majority of your traffic",
        "No SEO foundation making your website invisible to search engines",
        "Unclear messaging that fails to communicate your value in seconds",
        "No conversion strategy leaving leads on the table with every visit",
        "Outdated design damaging trust before a single word is read",
    ],
};

const servicesData9 = {
    subTitle: "OUR PROCESS",
    title: "How We Deliver Your Website Development Project",
    moreText: "More services",
    moreUrl: "/services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Discovery & Requirement Gathering",
            desc: "We start by understanding your business, your audience, and your goals. Every decision from here - design, structure, technology - is made with your growth in mind, not ours.",
            url: "/services",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "UI/UX Design & Wireframing",
            desc: "Before a single line of code is written, we design and wireframe every page. You see exactly what your website will look like and how users will move through it before development begins.",
            url: "/services",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Development & Testing",
            desc: "Our developers build your website with clean, optimized code - SEO-friendly website development standards applied throughout. Every page is tested across devices, browsers, and speeds before it goes anywhere near a live server.",
            url: "/services",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Launch & Deployment",
            desc: "We handle the full launch - domain configuration, hosting setup, speed optimization and Core Web Vitals. Your website goes live the right way, with everything in place from day one.",
            url: "/services",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Post-Launch Support & Maintenance",
            desc: "The launch is just the beginning. We provide ongoing website maintenance and support to keep your website fast, secure, and generating leads - long after the project is delivered.",
            url: "/services",
        },
    ],
};

const scalableHighlightData2 = {
    eye: 'WHY CHOOSE US',
    title: "Why Choose Mematdigi as Your ",
    titleSpan: "Website Development Company",
    paragraphs: [
        "When you are looking for the best website development company in India, you need more than a team that can code. You need a partner that understands business, understands SEO, and understands that a website is only valuable if it generates results. At Mematdigi, we are that partner. As a trusted web development agency in India, we have delivered 135+ websites across industries - every single one built with the same commitment to performance, conversion, and long-term business growth. Our professional website developers are experts in Shopify, Magento, custom web development, UI/UX, SEO, and performance optimization.",
    ],
    features: [
        "Best website development company in India - proven track record across 15+ industries with measurable results",
        "Affordable website development in India - transparent pricing built around your budget with no hidden costs",
        "Hire website developers in India - dedicated developers who stay involved from brief to launch and beyond",
        "Custom web development - every website built from scratch around your brand, goals, and audience",
        "Top website development company in India - trusted by startups, ecommerce brands, and enterprises across the country",
        "Professional website developers - certified experts in web development, UI/UX, SEO, and performance optimization",
    ],
};

const faqData = {
    subTitle: "FAQs",
    subIcon: "tji-box",
    title: "Frequently Asked Questions About Website Development in India",
    phone: { display: "+91 9136797555", tel: "+91 9136797555" },
    items: [
        {
            title: "What makes Memat Digi the best website development company in India? ",
            desc: "We combine conversion-focused design, performance-driven development, and dedicated support under one roof. Our website development services India businesses trust are built around measurable outcomes - not just deliverables. We focus on results: more leads, better performance, and long-term digital growth.",
            initActive: true,
        },
        {
            title: "How long does it take to develop a website in India? ",
            desc: "Timelines vary by project complexity. A simple business website typically takes 2-4 weeks. An ecommerce website development or complex web application may take 6-12 weeks. We provide a detailed timeline at the start of every project so you always know what to expect.",
            initActive: false,
        },
        {
            title: "Can I hire website developers in India for ongoing support? ",
            desc: "Absolutely. We offer dedicated maintenance & support plans for businesses that need continuous updates, monitoring, and improvements. When you hire website developers in India through Memat Digi, you gain a long-term technology partner.",
            initActive: false,
        },
        {
            title: "Will my website be SEO-friendly from day one? ",
            desc: "Yes. SEO-friendly website development is part of our core process. We implement technical SEO foundations - clean URL structures, schema markup, meta tags, mobile responsiveness, and speed optimization - during the development phase, not as an afterthought.",
            initActive: false,
        },
        {
            title: "Do you build websites for small businesses?",
            desc: "Yes. Our website development for small business packages are specifically designed to deliver maximum impact at an affordable price. We work with businesses of all sizes - from solopreneurs to enterprise corporations.",
            initActive: false,
        },
        {
            title: "How much does website development cost in India? ",
            desc: "Website development cost in India typically ranges from ₹30,000 to ₹1,50,000 or more, depending on the project scope, features, and complexity.",
            initActive: false,
        },
    ],
};

const contactData = {
    left: {
        subTitle: "CONTACT US NOW",
        title: "Ready to Build Your Website With India's Top Website Development Company?",
        desc: "Ready to partner with the best website development company in India? Mematdigi delivers custom web development, ecommerce website development, and SEO-friendly websites built to generate leads, improve user experience, and increase conversions. Whether you're a startup, ecommerce brand, or enterprise, we create websites designed for long-term business growth and measurable results. ",
    },
    form: {
        subTitle: "Get a Call Now",
        subIcon: "tji-box",
        title: "Drop Us a",
        titleSpan: "Line.",
        selectOptions: [
            { value: "0", optionName: "Choose an option" },
            { value: "1", optionName: "Custom Web Development" },
            { value: "2", optionName: "Ecommerce Development" },
            { value: "3", optionName: "Web App Development" },
            { value: "4", optionName: "Shopify Development" },
            { value: "5", optionName: "Website Redesign" },
            { value: "6", optionName: "Maintenance & Support" },
        ],
    },
};

/* ============================================================
 *  SECTIONS
 * ========================================================== */


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

export default function WebDevelopmentServices() {
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