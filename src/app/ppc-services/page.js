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
  title: "Best PPC Services India | Hire Memat Digi PPC Expert",
  description:
    "Get expert PPC services in India from Memat Digi. We build high-converting campaigns that cut CPC and maximize ROI. Request a call today!",
  alternates: {
    canonical: "https://www.mematdigi.com/ppc-services",
  },
};

const chooseData = {
    subTitle: "COMMON PPC CHALLENGES",
    subIcon: "tji-box",
    title: "Why Your PPC Campaigns Are Burning Budget Without Results",
    desc: "",
    banner: "/images/choose/h8-choose-bnner.webp",
    boxes: [
        {
            icon: "tji-innovative",
            title: "Poor Campaign Strategy",
            desc: "Many PPC campaigns fail because of poor keyword targeting, weak campaign structures, and ineffective bidding strategies that waste budget without generating qualified leads or sales.",
        },
        {
            icon: "tji-award",
            title: "Low Conversion Performance",
            desc: "Clicks alone don't grow a business. Without optimized ad copy, high-converting landing pages, and accurate conversion tracking, paid campaigns struggle to deliver measurable ROI.",
        },
        {
            icon: "tji-support",
            title: "Wasted Ad Spend",
            desc: "Running ads without continuous optimization leads to rising costs and declining results. A successful PPC strategy requires regular bid adjustments, audience refinement, and performance analysis to maximize every advertising budget.",
        },
    ],
};

const servicesData = {
    subTitle: "WHAT WE OFFER",
    subIcon: "tji-box",
    title: "Our PPC Services for Businesses Across India",
    desc: "From Google Search and Shopping to Meta, YouTube, and remarketing - complete PPC management services built to maximize ROI across every paid channel.",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Google Search Ads",
            desc: "We build and manage high-intent Google Search campaigns that put your business in front of people actively searching for exactly what you offer - driving qualified traffic that converts, not just clicks that cost.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Google Shopping Ads",
            desc: "For ecommerce brands, visibility at the moment of purchase intent is everything. Our Google Shopping Ads management places your products in front of high-intent buyers with optimized feeds, bidding, and targeting that drives direct sales.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Performance Max Campaigns",
            desc: "Full-funnel, maximum reach across Search, Display, YouTube, Gmail, and Maps - all from a single campaign. Our PPC management services in India team builds and optimizes Performance Max campaigns that extract maximum output from every rupee of ad spend.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Remarketing & Retargeting",
            desc: "Not every visitor converts the first time. Our remarketing strategies bring back website visitors, cart abandoners, and past customers with highly targeted ads - one of the most cost-effective PPC services for businesses that want to maximize conversion from existing traffic.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Meta Ads",
            desc: "Facebook and Instagram ads managed by our PPC experts in India - audience targeting, creative strategy, and conversion optimization that moves people from scroll to action across every stage of the funnel.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "YouTube Ads",
            desc: "Video ads that build intent before the search even happens. Our YouTube Ads management reaches your target audience at the right moment - building brand awareness and warming up prospects before they ever reach Google.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Bing Ads Management",
            desc: "Microsoft Bing reaches millions of users your Google campaigns miss. As a full-service pay per click company, we manage Bing Ads campaigns that expand your paid reach at a lower cost per click - giving you a competitive edge most brands ignore.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Landing Page Optimization",
            desc: "Clicks alone do not pay the bills - conversions do. We audit and optimize your landing pages for speed, messaging, CTA placement, and trust signals - ensuring every rupee of PPC spend has the best possible chance of converting into a lead or sale.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "PPC Audit",
            desc: "Not getting results from your current campaigns? Our comprehensive PPC audit identifies wasted spend, targeting mistakes, quality score issues, and conversion tracking gaps - giving you a clear, prioritized action plan to fix what is broken fast.",
            url: "/services",
        },
    ],
};

const solutionsData = {
    subTitle: "WHO WE SERVE",
    title: "PPC Services for Every Business Type in India",
    moreText: "More Services",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Startups & Small Businesses",
            url: "/services",
            desc: "Every rupee matters when you are starting out. Our PPC services in India for startups and small businesses are built around maximum efficiency - tight targeting, strong ad copy, and optimized landing pages that generate leads fast without burning through a limited budget on traffic that never converts.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "D2C & Ecommerce Brands",
            url: "/services",
            desc: "Ecommerce PPC is a different game - product feeds, shopping campaigns, dynamic remarketing, and ROAS optimization all working together. As a performance marketing agency in India, we build full-funnel paid strategies that drive new customer acquisition and repeat revenue for D2C brands at scale.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "B2B & Enterprise Companies",
            url: "/services",
            desc: "Long sales cycles and high-value deals demand a completely different PPC approach. Our PPC agency in India builds account-based paid strategies targeting specific industries, job titles, and buying signals - putting your brand in front of the decision-makers who actually control the budget.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        // Aur solutions add karne ho to yahan object push kar do ⬇️
    ],
};

const featuresData = {
    subTitle: "INDUSTRIES WE SERVE",
    subIcon: "tji-box",
    title: "Industries We Serve With Our PPC Services in India",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Healthcare",
            desc: "Patient acquisition PPC campaigns for clinics, hospitals, and health brands that drive appointment bookings at the lowest possible cost per lead",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Real Estate",
            desc: "High-intent property lead generation campaigns for developers and agents that target serious buyers and investors at the right moment",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Education",
            desc: "Student enrollment PPC strategies for schools, colleges, and edtech brands that drive admissions through Search, Display, and YouTube campaigns",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Ecommerce",
            desc: "Full-funnel PPC management for online stores - Google Shopping, Performance Max, and remarketing working together to maximize ROAS",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Finance & Fintech",
            desc: "Compliant, conversion-focused PPC services for financial brands that generate qualified leads at a sustainable cost per acquisition",
        },
        {
            id: 6,
            icon: "tji-support",
            title: "SaaS & Technology",
            desc: "Demand generation PPC for tech companies targeting decision-makers with trial signups, demo requests, and enterprise lead campaigns",
        },
    ],
};

const scalableHighlightData = {
    eye: 'BUSINESS CHALLENGES',
    title: "PPC Challenges Every Business in India Faces -",
    titleSpan: "And How We Fix Them",
    paragraphs: [
        "Most businesses that come to us have already wasted significant budget on PPC campaigns that delivered nothing. They worked with a PPC company in India that set up the campaigns, sent monthly reports, and collected the management fee - while the cost per lead climbed and the conversion rate stayed flat. These are not isolated cases. They are the norm. As the best PPC company in India trusted by 100+ businesses, we know exactly what breaks paid campaigns and exactly how to rebuild them for results.",
    ],
    features: [
        "High cost per lead with no improvement - because campaigns were never properly optimized after launch",
        "Clicks with zero conversions - because landing pages were never built or tested for conversion",
        "No conversion tracking in place - meaning there was never any real data to make decisions from",
        "Wrong audience targeting - driving irrelevant traffic that was never going to convert regardless of ad spend",
        "Ad spend going to broad match keywords - burning budget on searches with zero commercial intent",
        "No remarketing strategy - losing warm prospects who visited but did not convert on the first visit",
    ],
};

const servicesData9 = {
    subTitle: "OUR PROCESS",
    title: "How We Manage Your PPC Campaigns in India",
    moreText: "More services",
    moreUrl: "/services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "PPC Audit & Account Analysis",
            desc: "Every engagement starts with a full audit of your existing campaigns - identifying wasted spend, targeting errors, quality score issues, and conversion tracking gaps. We fix the foundation before we spend a single rupee of your budget on new campaigns.",
            url: "/services",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Keyword Research & Campaign Strategy",
            desc: "Our Google Ads experts in India identify the exact keywords your audience uses at each stage of the buying journey - building a campaign structure that captures high-intent searches while eliminating irrelevant traffic that burns budget without converting.",
            url: "/services",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Ad Copy & Landing Page Creation",
            desc: "We write ad copy that earns clicks from the right audience and build or optimize landing pages that convert those clicks into leads and sales. Ad and landing page alignment is where most PPC campaigns win or lose - we get it right from the start.",
            url: "/services",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Campaign Launch & Bid Management",
            desc: "We launch with precision - smart bidding strategies, audience layering, device adjustments, and budget allocation across campaigns - then actively manage every element to improve performance week over week as the algorithm learns and data builds.",
            url: "/services",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Reporting & Continuous Optimization",
            desc: "You get a clear, plain-language monthly report covering leads generated, cost per lead, conversion rate, and ROAS. No jargon. No vanity metrics. Just the numbers that show exactly what our PPC management services in India are delivering for your business.",
            url: "/services",
        },
    ],
};

const scalableHighlightData2 = {
    eye: 'WHY CHOOSE US',
    title: "Why Choose Mematdigi as Your ",
    titleSpan: "PPC Agency in India",
    paragraphs: [
        "At Mematdigi, we have built our reputation as the best PPC company in India by focusing on one metric above all others - your return on ad spend. We are not the pay per click company that chases cheap clicks and calls it performance. We are the PPC agency in India that takes full ownership of your paid campaigns, optimizes relentlessly, and ties every decision to your actual business goals. As a trusted Google Ads agency managing campaigns across Search, Shopping, Performance Max, Meta, and YouTube - we bring the full stack of PPC expertise to every engagement, regardless of budget size.",
        "When you work with the PPC experts at Mematdigi, you get a pay per click service provider that treats your ad budget like it is their own money. From the first audit to consistent month-on-month improvement in your cost per conversion - we are the PPC agency in India that delivers what we promise, every single time.",
    ],
    features: [
        "Best PPC services in India - proven across 15+ industries with measurable improvements in cost per lead and ROAS",
        "Google Ads expert in India - certified specialists who manage your campaigns with the same attention they would give their own business",
        "PPC management services India - active, hands-on campaign management - not set it and forget it",
        "Pay per click marketing agency with full transparency - every spend justified, every decision explained",
        "Hire PPC expert India - dedicated account managers who proactively optimize, not just react to problems",
        "Performance marketing agency India - full-funnel paid strategies that drive awareness, leads, and revenue together",
    ],
};

const faqData = {
    subTitle: "FAQs",
    subIcon: "tji-box",
    title: "Frequently Asked Questions About PPC Services in India",
    phone: { display: "+91 9136797555", tel: "+91 9136797555" },
    items: [
        {
            title: "What is PPC and how does it work? ",
            desc: "Pay per click (PPC) is a digital advertising model where you pay only when someone clicks your ad. Platforms like Google and Meta display your ads to users searching for relevant terms, and you are charged per click. A well-managed PPC company in India ensures those clicks come from high-intent users most likely to convert.",
            initActive: true,
        },
        {
            title: "How much do PPC management services cost in India? ",
            desc: "PPC packages India typically range from ₹10,000 to ₹50,000+ per month in management fees, depending on the number of campaigns, platforms, and ad spend managed. Your actual ad budget is separate and paid directly to Google or Meta.",
            initActive: false,
        },
        {
            title: "How long before I see results from Google Ads? ",
            desc: "Most campaigns show initial data within the first 7-14 days. Meaningful optimisation and stable results typically emerge within 30-60 days as the algorithm learns and our Google Ads management services team refines the targeting.",
            initActive: false,
        },
        {
            title: "What is the minimum ad budget to start PPC in India? ",
            desc: "We generally recommend a minimum ad budget of ₹15,000-₹20,000 per month to generate statistically meaningful data. Lower budgets can work for local campaigns, but limit optimisation speed.",
            initActive: false,
        },
        {
            title: "How is PPC different from SEO? ",
            desc: "PPC delivers immediate visibility through paid placements; SEO builds organic rankings over time. Both are valuable - PPC drives instant leads while SEO compounds authority. Many businesses use both in combination for maximum impact.",
            initActive: false,
        },
        {
            title: "Do you offer conversion tracking setup? ",
            desc: "Yes. Conversion tracking setup is included in every plan. We track form submissions, phone calls, purchases, and other key actions - ensuring every campaign decision is backed by real performance data.",
            initActive: false,
        },
        {
            title: "Can I run PPC for my local business in India? ",
            desc: "Absolutely. Local search ads and call-only campaigns are among the most cost-effective formats for local service businesses. Our PPC management services India include geo-targeting to ensure your ads only show in your service areas.",
            initActive: false,
        },
        {
            title: "What platforms do you manage PPC on?",
            desc: "We manage campaigns across Google Ads, Microsoft Bing Ads, Meta (Facebook & Instagram), YouTube, and LinkedIn - making us a true full-service pay per click marketing agency.",
            initActive: false,
        },
    ],
};

const contactData = {
    left: {
        subTitle: "CONTACT US NOW",
        title: "Ready to Get More Leads With India's Best PPC Services?",
        desc: "Ready to grow with the best PPC services in India? Partner with Mematdigi, a trusted PPC company in India, for ROI-focused PPC management services that increase qualified traffic, improve conversions, and maximize your advertising budget. Our PPC experts build data-driven campaigns designed to deliver measurable business growth. ",
    },
    form: {
        subTitle: "Get a Call Now",
        subIcon: "tji-box",
        title: "Drop Us a",
        titleSpan: "Line.",
        selectOptions: [
            { value: "0", optionName: "Choose an option" },
            { value: "1", optionName: "Google Search Ads" },
            { value: "2", optionName: "Google Shopping Ads" },
            { value: "3", optionName: "Performance Max Campaigns" },
            { value: "4", optionName: "Remarketing & Retargeting" },
            { value: "5", optionName: "Meta Ads" },
            { value: "6", optionName: "YouTube Ads" },
            { value: "7", optionName: "PPC Audit" },
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

export default function PpcServices() {
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