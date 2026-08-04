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
  title: "Best SMO Services in India | Social Media Optimization Agency",
  description:
    "Looking for a performance driven SMO company in India? Memat Digi helps brands grow on social media with proven optimization strategies.Get SMO audit today.",
  alternates: {
    canonical: "https://www.mematdigi.com/smo-services",
  },
};

const chooseData = {
    subTitle: "COMMON SMO PROBLEMS",
    subIcon: "tji-box",
    title: "Why Your Social Media Is Not Delivering Results",
    desc: "",
    banner: "/images/choose/h8-choose-bnner.webp",
    boxes: [
        {
            icon: "tji-innovative",
            title: "Poor Profile Optimization",
            desc: "Many businesses have incomplete profiles, inconsistent branding, and missing optimization elements that reduce credibility and make it difficult for the right audience to discover and trust their business.",
        },
        {
            icon: "tji-award",
            title: "Low Reach & Engagement",
            desc: "Posting regularly isn't enough. Without a platform-specific content strategy, optimized hashtags, and audience-focused content, your social media struggles to generate meaningful engagement or organic growth.",
        },
        {
            icon: "tji-support",
            title: "No Business Results",
            desc: "Followers and likes alone don't grow a business. Without professional SMO services, your social media fails to generate qualified leads, strengthen brand authority, or contribute to measurable business growth.",
        },
    ],
};

const servicesData = {
    subTitle: "WHAT WE OFFER",
    subIcon: "tji-box",
    title: "Our SMO Services for Businesses Across India",
    desc: "Everything your social media needs to grow organically - profile optimization, content strategy, branding, and performance tracking under one roof.",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Profile Optimization",
            desc: "We optimize your social media profiles with the right keywords, branding, and CTAs - improving your social media visibility in India and making every profile a conversion-ready asset.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Content Strategy",
            desc: "Our data-driven social media content strategy is built around your audience, your industry, and your competitors - so every post has a purpose and every campaign moves the needle.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Engagement Management",
            desc: "We handle comments, messages, and community interactions to build trust, strengthen relationships, and create the kind of social media engagement that turns followers into customers.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Analytics & Reporting",
            desc: "We track what matters - reach, engagement, follower growth, and conversions - and deliver clear monthly reports that show exactly how our SMO services are growing your business.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Hashtag & Keyword Research",
            desc: "We identify the exact hashtags and keywords your audience uses - improving discoverability, expanding organic reach, and building social media presence across every platform we manage.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Competitor Analysis",
            desc: "We benchmark your social media performance against your top competitors - identifying content gaps, engagement opportunities, and platform strategies that give you a measurable edge.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Brand Visual Identity",
            desc: "We build and maintain a consistent brand look and voice across every platform - so whether someone finds you on Instagram or LinkedIn, they experience the same professional, trustworthy brand.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Social Media Audit",
            desc: "A comprehensive audit of your existing social profiles - covering optimization gaps, content performance, audience analysis, and a clear roadmap to better SMO results starting from day one.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Social Media Branding",
            desc: "From profile aesthetics to content tone - our social media branding services build a cohesive brand identity that attracts the right audience and makes your business instantly recognizable online.",
            url: "/services",
        },
    ],
};

const solutionsData = {
    subTitle: "WHO WE SERVE",
    title: "SMO Services for Every Business Type",
    moreText: "More Services",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Startups & Small Businesses",
            url: "/services",
            desc: "Building a social media presence from zero is hard without the right strategy. Our SMO services in India for startups and small businesses focus on building an optimized, professional presence fast - on the platforms where your audience actually spends time - so you start generating leads, not just followers.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "D2C & Ecommerce Brands",
            url: "/services",
            desc: "Social media is one of your most powerful sales channels - but only when it is optimized correctly. Our social media optimization agency specializes in building ecommerce brand presence that drives product discovery, builds customer trust, and converts social traffic into repeat revenue.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "B2B & Enterprise Companies",
            url: "/services",
            desc: "B2B social media requires a completely different approach - thought leadership, LinkedIn authority, and content that speaks to decision-makers. Our SMO services for B2B and enterprise companies build the kind of credible social media presence that generates qualified leads from the right people.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        // Aur solutions add karne ho to yahan object push kar do ⬇️
    ],
};

const featuresData = {
    subTitle: "INDUSTRIES WE SERVE",
    subIcon: "tji-box",
    title: "Industries We Serve With Our SMO Services in India",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Healthcare",
            desc: "Trust-building social media optimization for clinics, hospitals, and health brands that attracts patients and builds authority",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Real Estate",
            desc: "Lead-generating social media presence for property developers and agents that showcases listings and drives enquiries",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Education",
            desc: "Student acquisition social media strategies for schools, colleges, and edtech brands that build institutional credibility",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Ecommerce",
            desc: "Product-focused social media optimization that drives discovery, engagement, and direct sales for online stores",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Finance & Fintech",
            desc: "Compliance-aware social media branding for financial brands that builds trust and generates qualified leads",
        },
        {
            id: 6,
            icon: "tji-support",
            title: "SaaS & Technology",
            desc: "Thought leadership social media strategies for tech companies that attract decision-makers and drive demo requests",
        },
    ],
};

const scalableHighlightData = {
    eye: 'BUSINESS CHALLENGES',
    title: "Social Media Challenges Every Business in India Faces -",
    titleSpan: "And How We Fix Them",
    paragraphs: [
        "Most businesses managing social media in-house face the same problems - inconsistent posting, zero engagement growth, profiles that look abandoned, and content that never reaches the right audience. These are not small problems. They quietly damage your brand credibility every single day. As the best SMO company in India trusted by 100+ businesses, we have seen every version of a broken social media strategy - and we know exactly how to rebuild it.",
    ],
    features: [
        "Zero engagement despite consistent posting - because content is being created without a platform-specific strategy",
        "Incomplete and unoptimized profiles - costing you credibility before a single message is sent",
        "No brand consistency across platforms - creating confusion and eroding trust with every new visitor",
        "Wrong hashtags and zero discoverability - keeping your content invisible to the audience that matters",
        "No content strategy or posting schedule - resulting in bursts of activity followed by long silences that hurt reach",
        "No performance tracking - meaning there is no way to know what is working or where to improve",
    ],
};

const servicesData9 = {
    subTitle: "OUR PROCESS",
    title: "How We Deliver Our SMO Services",
    moreText: "More services",
    moreUrl: "/services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Social Media Audit & Analysis",
            desc: "We start with a full audit of your existing social media profiles - benchmarking against your top competitors and identifying exactly what is holding your social media presence back before we change a single thing.",
            url: "/services",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Profile Optimization & Branding",
            desc: "We optimize every profile element - bios, keywords, CTAs, cover images, and highlights - and align your social media branding services across every platform so your brand makes the right first impression every time.",
            url: "/services",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Content Strategy Development",
            desc: "We build a custom social media content strategy around your audience, your industry, and your competitors - with a 30-day content calendar planned before a single post goes live on any platform.",
            url: "/services",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Engagement & Community Building",
            desc: "We publish, engage, respond, and grow consistently. Every comment, message, and interaction is managed to build the kind of genuine social media engagement that converts followers into customers over time.",
            url: "/services",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Reporting & Continuous Optimization",
            desc: "Monthly performance reports with clear, actionable insights. We refine the strategy every cycle based on real data - so your SMO results compound over time instead of plateauing after the first 60 days.",
            url: "/services",
        },
    ],
};

const scalableHighlightData2 = {
    eye: 'WHY CHOOSE US',
    title: "Why Choose Mematdigi as Your ",
    titleSpan: "SMO Agency in India",
    paragraphs: [
        "At Mematdigi, we built our reputation as the best SMO company in India by treating social media as a business growth channel - not a vanity exercise. We are not the social media optimization agency that chases follower counts and calls it success. We are the SMO company in India that builds optimized, conversion-ready social media presence that attracts the right audience, builds genuine trust, and drives real business results. Every strategy we build is custom - researched around your industry, your competitors, and your specific audience - because social media optimization that works for one business rarely works for another.",
        "Whether you are a startup looking for affordable SMO services in India or an established brand that needs a full-scale social media optimization agency to manage every platform - Mematdigi delivers the best SMO services in India with complete transparency and a team that genuinely cares about your growth.",
    ],
    features: [
        "Best SMO company in India - 100+ businesses grown across India's most competitive industries",
        "SMO agency with platform specialists - dedicated experts per platform, not generalists managing everything",
        "Social media optimization company with transparent reporting - clear metrics, no vanity numbers, no smoke and mirrors",
        "Social media growth services built for ROI - every campaign tied to leads, conversions, and revenue",
        "Social media branding services - consistent brand identity built across every platform we manage",
        "Social media engagement strategies that convert - turning followers into customers, not just numbers",
    ],
};

const faqData = {
    subTitle: "FAQs",
    subIcon: "tji-box",
    title: "Frequently Asked Questions About SMO Services in India",
    phone: { display: "1-888-452-1505", tel: "18884521505" },
    items: [
        {
            title: "What is SMO and how will it benefit my business? ",
            desc: "SMO - Social Media Optimization - is optimising your social media channels, content and strategy to build your online presence. In India, for businesses, it is about posting content regularly on social media platforms such as Instagram, Facebook or LinkedIn, earning the trust of the audience, and then converting their trust into leads and conversions. It is not just about sharing content - it's about sharing content strategically.",
            initActive: true,
        },
        {
            title: "How long will it take to see the impact of SMO services? ",
            desc: "Improved engagement, visits to your profile and reach usually show 4-6 weeks in. It takes 3-6 months of regular effort to see substantial growth in followers and leads. SMO is not a short-term strategy. Companies that commit to a sound plan for 6+ months experience the benefits of compounding growth that paid advertising can't match.",
            initActive: false,
        },
        {
            title: "What are the costs of SMO in India? ",
            desc: "In India, SMO packages cost between ₹8,000 - ₹50,000 monthly based on the platforms used, content type and campaign sophistication. At Memat Digi, we charge based on what your business needs - not a set menu. Small businesses can start small and grow their campaigns as they succeed.",
            initActive: false,
        },
        {
            title: "What social media channels should I use? ",
            desc: "It all depends on where your audience hangs out. Facebook and Instagram are good for most consumer brands. LinkedIn works for B2B. YouTube establishes authority over time with video. We will first analyse your business and target audience before suggesting platforms - because it's often better to be a jack of two or three trades, rather than a master of all.",
            initActive: false,
        },
        {
            title: "Who is the best SMO service provider in India? ",
            desc: "We have over 15 years of experience working with businesses across India. We take time to audit your current profiles and competitors before starting any work in SMO. You will have platform experts, regular reports and a team which will tell you what is and what is not working - and no \"beautified\" results. If you are looking for SMO agencies in India, we are willing to show you what we would do for your company, before signing.",
            initActive: false,
        },
        {
            title: "SMO or SMM - which is better for my business?",
            desc: "SMO is about improving your social media presence without paid promotion through social media profiles, content strategy, engagement and reach. SMM (Social Media Marketing) usually refers to advertising. Most companies require both, but SMO is a prerequisite. Paid ads won't be effective on an unoptimized profile. We suggest doing SMO first and then using paid ads if you have an organic foundation.",
            initActive: false,
        },
    ],
};

const contactData = {
    left: {
        subTitle: "CONTACT US NOW",
        title: "Ready to Grow Your Social Media Presence With India's Best SMO Services?",
        desc: "Ready to grow your brand with the best SMO services in India? Partner with Mematdigi, a trusted SMO company in India, to build a stronger social media presence, increase engagement, improve brand visibility, and generate qualified leads through customized social media optimization strategies designed for long-term business growth. ",
    },
    form: {
        subTitle: "Get a Call Now",
        subIcon: "tji-box",
        title: "Drop Us a",
        titleSpan: "Line.",
        selectOptions: [
            { value: "0", optionName: "Choose an option" },
            { value: "1", optionName: "Profile Optimization" },
            { value: "2", optionName: "Content Strategy" },
            { value: "3", optionName: "Engagement Management" },
            { value: "4", optionName: "Analytics & Reporting" },
            { value: "5", optionName: "Social Media Branding" },
            { value: "6", optionName: "Social Media Audit" },
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

export default function SmoServices() {
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