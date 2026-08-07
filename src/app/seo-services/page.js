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
  title: "Best SEO Company in India | Hire SEO Experts | Mematdigi",
  description:
    "Mematdigi is the best SEO company in India offering on-page, technical, local & ecommerce SEO. Affordable plans, transparent pricing. Book a free audit today.",
  alternates: {
    canonical: "https://www.mematdigi.com/seo-services",
  },
};

const chooseData = {
    subTitle: "COMMON SEO CHALLENGES",
    subIcon: "tji-box",
    title: "Why Your Website Is Not Ranking on Google",
    desc: "",
    banner: "/images/choose/h8-choose-bnner.webp",
    boxes: [
        {
            icon: "tji-innovative",
            title: "Weak SEO Foundation",
            desc: "Many websites struggle to rank because of poor on-page optimization, technical SEO issues, and a lack of keyword-focused content that search engines can properly understand.",
        },
        {
            icon: "tji-award",
            title: "Low Organic Visibility",
            desc: "Without a proven SEO strategy, your competitors capture the rankings, traffic, and customers while your website remains invisible to people actively searching on Google.",
        },
        {
            icon: "tji-support",
            title: "No Measurable Results",
            desc: "Many businesses invest in SEO but receive confusing reports instead of meaningful growth. A successful SEO campaign should improve rankings, increase organic traffic, and generate qualified leads.",
        },
    ],
};

const servicesData = {
    subTitle: "WHAT WE OFFER",
    subIcon: "tji-box",
    title: "Our SEO Services for Businesses Across India",
    desc: 'From technical foundations to content and link building - complete SEO services that move rankings and drive real organic growth.',
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "On-Page SEO",
            desc: "We optimize every page of your website - title tags, meta descriptions, headings, internal links, and content structure - so search engines understand exactly what you offer and rank you for it.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Off-Page SEO",
            desc: "We build your website's authority through high-quality backlinks, business listings, brand mentions, and digital PR - the off-page signals that tell Google your website deserves to rank.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Technical SEO",
            desc: "Crawl errors, slow load times, indexing issues, broken links - our technical SEO audit finds and fixes every issue that is quietly holding your rankings back before it costs you more traffic.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Local SEO",
            desc: "Dominate local search results and Google Maps for your city. Our local SEO services help businesses appear in front of customers searching for exactly what you offer in their area.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Ecommerce SEO",
            desc: "Product pages, category pages, schema markup, and site architecture - our ecommerce SEO services in India are built specifically to drive organic traffic to your online store and convert it into sales.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Content Optimization",
            desc: "We audit your existing content, identify gaps, and optimize every page to match search intent - so your website ranks for the right keywords and keeps visitors engaged long enough to convert.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "SEO Consulting",
            desc: "Need an SEO consultant in India to audit your strategy, review your agency's work, or build a roadmap from scratch? Our SEO consulting service gives you expert guidance without the long-term commitment.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Keyword Research & Analysis",
            desc: "The right keywords are the foundation of every successful SEO campaign. We identify the exact terms your audience is searching for - balancing volume, competition, and commercial intent for maximum impact.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "SEO Audit",
            desc: "A comprehensive SEO audit that covers technical health, on-page optimization, content quality, backlink profile, and competitor analysis - giving you a clear, prioritized roadmap to better rankings.",
            url: "/services",
        },
    ],
};

const solutionsData = {
    subTitle: "WHO WE SERVE",
    title: "SEO Services for Every Business Type in India",
    moreText: "More Services",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Startups & Small Businesses",
            url: "/services",
            desc: "Every business starts with zero domain authority - but the right SEO strategy from day one makes all the difference. Our SEO services for small business focus on low-competition, high-intent keywords that drive qualified traffic fast, building a strong organic foundation as your business grows.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "D2C & Ecommerce Brands",
            url: "/services",
            desc: "Paid ads stop the moment you stop spending. Our ecommerce SEO services in India build sustainable organic traffic that keeps converting long after the campaign ends - product page optimization, category SEO, and schema markup that drives clicks from search results directly to your store.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "B2B & Enterprise Companies",
            url: "/services",
            desc: "Enterprise SEO demands a different approach - technical depth, content authority, and white label SEO services for agencies looking to deliver results under their own brand. We have the team, the process, and the track record to handle complex, multi-site SEO at scale.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        // Aur solutions add karne ho to yahan object push kar do ⬇️
    ],
};

const featuresData = {
    subTitle: "INDUSTRIES WE SERVE",
    subIcon: "tji-box",
    title: "Industries We Serve With Our SEO Services in India",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Healthcare",
            desc: "Patient-acquisition SEO for clinics, hospitals, and health brands that builds trust and drives appointment bookings",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Real Estate",
            desc: "Local and national SEO strategies for property developers and real estate agencies that generate consistent inbound leads",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Education",
            desc: "Student acquisition SEO for schools, colleges, and edtech platforms that builds authority and drives admissions",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Ecommerce",
            desc: "Product and category SEO that drives high-intent organic traffic to online stores and converts visitors into buyers",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Finance & Fintech",
            desc: "Compliance-aware SEO for financial brands that builds search authority and generates qualified organic leads",
        },
        {
            id: 6,
            icon: "tji-support",
            title: "SaaS & Technology",
            desc: "Demand generation SEO for tech companies that attracts decision-makers and converts them into trial signups",
        },
    ],
};

const scalableHighlightData = {
    eye: 'BUSINESS CHALLENGES',
    title: "SEO Challenges Every Business in India Faces -",
    titleSpan: "And How We Fix Them",
    paragraphs: [
        "Most businesses that come to us have been burned before. They hired an SEO company in India, paid for months of work, and ended up with nothing to show for it except a thick report they could not understand. These are not isolated stories - they are the industry norm. As the best SEO company in India trusted by 100+ businesses, we know exactly what breaks SEO campaigns and exactly how to fix them.",
    ],
    features: [
        "No rankings after months of work - because the strategy was built on the wrong keywords from the start",
        "Traffic with zero conversions - because SEO was driving the wrong audience to the wrong pages",
        "Agency reports with no clarity - because vanity metrics were being tracked instead of revenue-driving results",
        "Technical issues killing crawlability - because no one audited the website before running campaigns",
        "Content that ranks for nothing - because it was written without keyword research or search intent analysis",
        "Backlinks from irrelevant sources - because link building was outsourced to the lowest bidder",
    ],
};

const servicesData9 = {
    subTitle: "OUR PROCESS",
    title: "How We Deliver Our SEO Services in India",
    moreText: "More services",
    moreUrl: "/services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "SEO Audit & Website Analysis",
            desc: "Every engagement starts with a comprehensive SEO audit - technical health, content quality, backlink profile, and competitor analysis. We find exactly what is holding your rankings back before we touch a single thing.",
            url: "/services",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Keyword Research & Strategy",
            desc: "Our SEO experts in India identify the exact keywords your audience is searching for - balancing search volume, competition, and commercial intent to build a keyword strategy that drives qualified traffic, not just numbers.",
            url: "/services",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "On-Page & Technical Optimization",
            desc: "We fix the foundation first - optimizing every page for its target keyword, improving site speed, fixing crawl errors, and implementing schema markup so search engines can properly understand and rank your content.",
            url: "/services",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Off-Page SEO & Link Building",
            desc: "We build your domain authority through strategic link acquisition, digital PR, and brand mentions from relevant, high-authority sources - the kind of off-page signals that move rankings in competitive markets.",
            url: "/services",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Reporting & Continuous Optimization",
            desc: "You get a clear, plain-language monthly report showing keyword movements, organic traffic growth, technical fixes completed, and the plan for next month. No jargon. No fluff. Just what matters for your business.",
            url: "/services",
        },
    ],
};

const scalableHighlightData2 = {
    eye: 'WHY CHOOSE US',
    title: "Why Choose Memat Digi as Your ",
    titleSpan: "SEO Company in India",
    paragraphs: [
        "At Memat Digi, we have built our reputation as the best SEO company in India by doing one thing consistently - delivering rankings that translate into real business growth. We are not the agency that hides behind complicated reports or blames algorithm updates for poor results. We are the SEO company in India that takes full ownership of your organic performance, communicates with complete transparency, and keeps optimizing until the results compound. Whether you need an affordable SEO company in India for a startup budget or enterprise-level white label SEO services for your agency - we deliver the same standard of excellence across every engagement.",
    ],
    features: [
        "Best SEO company in India - 100+ businesses ranked across India's most competitive industries",
        "Hire SEO expert in India - dedicated SEO specialists who work on your account, not a revolving door of junior executives",
        "Affordable SEO company in India - transparent, flexible pricing built around your budget and growth goals",
        "White label SEO services - fully managed SEO delivered under your brand for agencies and resellers",
        "SEO consultant in India - strategic guidance from experienced consultants who have ranked businesses in competitive markets",
        "Affordable SEO services in India - no long-term lock-in contracts, no hidden fees, no vague deliverables",
    ],
};

const faqData = {
    subTitle: "FAQs",
    subIcon: "tji-box",
    title: "Frequently Asked Questions About SEO Services in India",
    phone: { display: "+91 9136797555", tel: "+91 9136797555" },
    items: [
        {
            title: "How much do SEO services cost in India? ",
            desc: "SEO services in India typically range from ₹8,000 to ₹80,000 or more per month, depending on website size, industry competition, and the scope of work. At Mematdigi, pricing is built around what your site actually needs. Book a free consultation and you'll get a clear number - no vague ranges, no post-call surprises.",
            initActive: true,
        },
        {
            title: "How long does SEO take to show results? ",
            desc: "Most websites see measurable ranking movement within six to ten weeks for easier keywords after on-page and technical work is done. Competitive keywords typically need four to six months of consistent work. Unlike paid ads, the traffic you build through search optimization doesn't stop when the budget ends - it compounds.",
            initActive: false,
        },
        {
            title: "Do you offer SEO for small businesses and startups? ",
            desc: "Yes. Our Starter Plan is built specifically for smaller budgets and newer websites. We focus on the optimizations that produce the fastest results within your budget and scale the strategy as your business grows.",
            initActive: false,
        },
        {
            title: "Do you provide monthly SEO reports? ",
            desc: "Yes. Every client gets a monthly report covering keyword ranking changes, organic traffic performance, technical work completed, links acquired, and the plan for the following month. Written in plain language - no jargon.",
            initActive: false,
        },
        {
            title: "What makes Memat Digi different from other SEO companies in India?",
            desc: "Three things. We're a full-service agency - web, app, content, and SEO under one roof, so execution is faster and there are no third-party delays. We're transparent on pricing - no \"contact us for a quote\" walls. And we set honest expectations from day one. If a keyword takes six months, we say that upfront - not six months in.",
            initActive: false,
        },
        {
            title: "Do you offer local SEO services in India? ",
            desc: "Yes. Local SEO is part of every plan. We optimize your Google Business Profile, build citations across relevant directories, and create location-specific content for the cities and regions you serve. Businesses in Delhi, Mumbai, Bangalore, Hyderabad, and across India use our local search work to generate consistent inbound leads.",
            initActive: false,
        },
    ],
};

const contactData = {
    left: {
        subTitle: "CONTACT US NOW",
        title: "Ready to Rank Higher With India's Best SEO Company?",
        desc: "Ready to work with the best SEO company in India? Partner with Memat Digi for result-driven SEO services that improve search rankings, increase organic traffic, and generate qualified leads. Whether you're a startup, ecommerce brand, or enterprise, our SEO experts in India build strategies that deliver sustainable growth and measurable business results. ",
    },
    form: {
        subTitle: "Get a Call Now",
        subIcon: "tji-box",
        title: "Drop Us a",
        titleSpan: "Line.",
        selectOptions: [
            { value: "0", optionName: "Choose an option" },
            { value: "1", optionName: "On-Page SEO" },
            { value: "2", optionName: "Off-Page SEO" },
            { value: "3", optionName: "Technical SEO" },
            { value: "4", optionName: "Local SEO" },
            { value: "5", optionName: "Ecommerce SEO" },
            { value: "6", optionName: "SEO Audit" },
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

export default function SeoServices() {
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