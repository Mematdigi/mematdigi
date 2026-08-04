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
  title: "Online Reputation Management Services in India | Memat Digi",
  description:
    "Protect your brand, outrank negative results, and win more customers with Memat Digi's online reputation management services in India.",
  alternates: {
    canonical: "https://www.mematdigi.com/orm-services",
  },
};

const chooseData = {
    subTitle: "COMMON ORM CHALLENGES",
    subIcon: "tji-box",
    title: "One Negative Review Can Cost You Thousands in Lost Business",
    desc: "",
    banner: "/images/choose/h8-choose-bnner.webp",
    boxes: [
        {
            icon: "tji-innovative",
            title: "Negative Reviews Damage Trust",
            desc: "Unanswered negative reviews and poor ratings create a bad first impression, reducing customer confidence and influencing potential buyers before they ever contact your business.",
        },
        {
            icon: "tji-award",
            title: "Poor Online Brand Visibility",
            desc: "Outdated news, negative search results, and inconsistent brand information across platforms can damage your reputation and make it difficult for customers to trust your business.",
        },
        {
            icon: "tji-support",
            title: "No Reputation Management Strategy",
            desc: "Without continuous monitoring, review management, and proactive reputation building, small issues can quickly become major problems that impact customer acquisition and long-term business growth.",
        },
    ],
};

const servicesData = {
    subTitle: "WHAT WE OFFER",
    subIcon: "tji-box",
    title: "Our ORM Services for Businesses Across India",
    desc: "From review management and crisis control to brand monitoring and content suppression - complete ORM services built to protect and strengthen your online reputation.",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Review Management",
            desc: "We monitor, respond to, and actively generate positive reviews across Google, industry platforms, and social media - turning your review profile into a trust-building asset rather than a liability.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Crisis Management",
            desc: "When a reputation crisis hits, speed and strategy matter. Our crisis management services provide rapid response protocols, message control, and damage containment to protect your brand when it matters most.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Corporate Reputation Management",
            desc: "We protect and build long-term corporate reputation through proactive monitoring, stakeholder communication strategy, and consistent positive brand presence across every channel that influences how your company is perceived.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Google Reputation Management",
            desc: "Search results form first impressions instantly. Our Google reputation management services work to push positive, brand-controlled content above negative mentions - controlling what people see first when they search your name.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Brand Monitoring",
            desc: "We continuously monitor mentions of your brand across the web, social media, and review platforms - catching reputation threats early, before they escalate into something that requires crisis management.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Negative Content Suppression",
            desc: "Through strategic content creation and SEO, we suppress negative content from page one search results - without violating platform policies - pushing it down while positive, authentic content rises to the top.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Social Media Reputation Management",
            desc: "We monitor and manage your brand's reputation across social media platforms - handling negative comments, managing public perception during sensitive moments, and ensuring your social presence reflects your brand accurately.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Wikipedia & Knowledge Panel Management",
            desc: "We help establish and manage accurate Wikipedia presence and Google Knowledge Panels - authoritative information sources that significantly shape how search engines and users perceive your brand or business.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "CEO & Personal Reputation Management",
            desc: "Leadership reputation directly impacts business reputation. We manage personal online presence for executives and founders - building thought leadership while protecting against personal reputation risks that could affect the company.",
            url: "/services",
        },
    ],
};

const solutionsData = {
    subTitle: "WHO WE SERVE",
    title: "ORM Services for Every Business Type in India",
    moreText: "More Services",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Startups & Small Businesses",
            url: "/services",
            desc: "A handful of negative reviews can devastate a young business before it has built enough positive presence to balance them out. Our ORM services in India for startups focus on building a strong review foundation fast, monitoring brand mentions proactively, and establishing the reputation infrastructure that protects your business as it scales.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "D2C & Ecommerce Brands",
            url: "/services",
            desc: "Customer reviews directly drive or destroy ecommerce conversion rates. Our online reputation management agency works with D2C brands to manage review generation, respond to customer complaints before they escalate publicly, and build the kind of trust signals that turn browsers into confident buyers.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "B2B & Enterprise Companies",
            url: "/services",
            desc: "Enterprise reputation extends beyond customer reviews into media coverage, employee sentiment, executive presence, and stakeholder perception. We deliver comprehensive corporate reputation management that protects brand equity across every audience that influences enterprise business outcomes.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        // Aur solutions add karne ho to yahan object push kar do ⬇️
    ],
};

const featuresData = {
    subTitle: "INDUSTRIES WE SERVE",
    subIcon: "tji-box",
    title: "Industries We Serve With Our Online Reputation Management Services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Healthcare",
            desc: "Patient review management and trust-building ORM strategies for clinics and hospitals where reputation directly drives appointment bookings",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Real Estate",
            desc: "Reputation management for developers and agents where client trust and project credibility directly impact sales and lead generation",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Education",
            desc: "Institutional reputation building for schools and colleges where parent and student trust significantly influences enrollment decisions",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Ecommerce",
            desc: "Review management and reputation protection for online stores where customer trust signals directly impact conversion rates",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Finance & Fintech",
            desc: "Compliance-aware reputation management for financial brands where trust and credibility are non-negotiable for customer acquisition",
        },
        {
            id: 6,
            icon: "tji-support",
            title: "SaaS & Technology",
            desc: "Review platform management and brand monitoring for tech companies where reputation influences enterprise buying decisions",
        },
    ],
};

const scalableHighlightData = {
    eye: 'BUSINESS CHALLENGES',
    title: "Reputation Challenges Every Business in India Faces -",
    titleSpan: "And How We Fix Them",
    paragraphs: [
        "Most businesses that come to us are already dealing with a reputation problem that has been building for months. A string of negative reviews nobody responded to. A competitor leaving fake complaints. Old negative press still ranking on page one. They tried to handle it themselves, made it worse, and finally realized they needed professional ORM services in India. As a trusted ORM agency in India working with 100+ businesses, we have seen every version of a damaged online reputation - and we know exactly how to rebuild it strategically.",
    ],
    features: [
        "Unanswered negative reviews piling up - sending the message that customer complaints do not matter to your business",
        "Fake or malicious reviews from competitors - damaging your rating with content that should never have been published",
        "Old negative press still ranking high - controlling the first impression every new customer or partner forms about you",
        "No crisis response plan in place - leaving businesses scrambling when a reputation issue suddenly goes public",
        "Inconsistent brand presence across platforms - creating confusion about who you actually are and what you stand for",
        "No proactive monitoring system - meaning reputation threats are discovered only after the damage has already spread",
    ],
};

const servicesData9 = {
    subTitle: "OUR PROCESS",
    title: "How We Deliver Our ORM Services in India",
    moreText: "More services",
    moreUrl: "/services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Reputation Audit & Analysis",
            desc: "We start with a comprehensive audit of your current online reputation - reviews, search results, social mentions, and press coverage - identifying exactly where the damage is and what is driving it before we build a single strategy.",
            url: "/services",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Strategy & Action Plan",
            desc: "Based on the audit, we build a custom ORM action plan - covering review management, content suppression, brand monitoring, and crisis protocols if needed - all tailored to the specific reputation challenges your business faces.",
            url: "/services",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Review & Content Management",
            desc: "We actively manage your review profile across all relevant platforms - responding professionally to negative reviews, encouraging satisfied customers to share their experience, and building the positive content that strengthens your corporate reputation management efforts.",
            url: "/services",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Negative Suppression & Brand Building",
            desc: "We work to suppress harmful content from page one search results through strategic, ethical content creation and SEO - while simultaneously building authentic positive content that reflects your brand accurately and builds long-term trust.",
            url: "/services",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Monitoring & Ongoing Reporting",
            desc: "Continuous brand monitoring catches new reputation threats before they escalate. You receive clear monthly reports showing review trends, sentiment changes, and search result improvements - full transparency into how our online reputation management services are protecting your brand.",
            url: "/services",
        },
    ],
};

const scalableHighlightData2 = {
    eye: 'WHY CHOOSE US',
    title: "Why Choose Mematdigi as Your ",
    titleSpan: "ORM Agency in India",
    paragraphs: [
        "At Mematdigi, we have built our reputation as a trusted ORM agency in India by treating online reputation management as a continuous business priority - not a one-time fix applied only after damage has already been done. We are not the orm agency that disappears after a quick suppression campaign. We are the online reputation management agency that builds lasting reputation infrastructure - proactive monitoring, consistent review management, and crisis-ready protocols that protect your brand around the clock. As one of the best ORM services in India, we combine ethical SEO suppression techniques with genuine reputation building, because lasting reputation protection comes from both.",
        "Whether you are a startup dealing with your first negative review or an enterprise managing a complex, multi-platform reputation challenge - Mematdigi delivers the best ORM services in India with the urgency a damaged reputation demands and the long-term strategy a strong reputation requires. Your reputation shapes every business decision a potential customer makes about you before they ever speak to your team.",
    ],
    features: [
        "Online reputation management services in India - comprehensive ORM coverage across reviews, search, social media, and press",
        "ORM agency in India with proactive monitoring - catching reputation threats early, before they require crisis management",
        "Crisis management services - rapid response protocols ready to deploy the moment your reputation faces a real threat",
        "Corporate reputation management for enterprises - protecting brand equity across every stakeholder audience that matters",
        "ORM company in India with transparent reporting - clear monthly visibility into exactly how your reputation is improving",
        "ORM online reputation management built for the long term - not quick fixes that leave you vulnerable again in six months",
    ],
};

const faqData = {
    subTitle: "FAQs",
    subIcon: "tji-box",
    title: "Frequently Asked Questions About ORM Services in India",
    phone: { display: "1-888-452-1505", tel: "18884521505" },
    items: [
        {
            title: "What are online reputation management services? ",
            desc: "Online reputation management services involve monitoring, managing, and improving how your brand appears online - across reviews, search results, social media, and press coverage. At Mematdigi, our online reputation management services in India combine proactive monitoring, review management, and strategic content to build and protect your brand's digital reputation.",
            initActive: true,
        },
        {
            title: "How much do ORM services cost in India? ",
            desc: "ORM services in India typically range from ₹15,000 to ₹1,00,000+ per month depending on the severity of the reputation challenge, the platforms involved, and whether crisis management is required. As a transparent ORM company in India, Mematdigi prices based on your specific reputation needs, not a fixed package.",
            initActive: false,
        },
        {
            title: "How long does it take to repair online reputation? ",
            desc: "Reputation repair timelines vary based on severity. Minor review management improvements can show results within weeks. More serious orm online reputation management cases - suppressing negative press or recovering from a crisis - typically take 3–6 months. We provide the best ORM services in India with honest timelines based on your specific situation.",
            initActive: false,
        },
        {
            title: "Can you remove negative reviews and content from Google? ",
            desc: "We cannot guarantee removal of legitimate reviews, but our Google reputation management services use ethical strategies to flag policy-violating content, respond professionally to negative reviews, and build positive content that suppresses harmful results. Our online reputation management agency focuses on what is actually achievable and effective.",
            initActive: false,
        },
        {
            title: "Do you offer crisis management services? ",
            desc: "Yes. Our crisis management services include rapid response protocols, message control strategies, and damage containment plans designed to protect your brand when a reputation crisis emerges. Combined with ongoing corporate reputation management, we help businesses respond effectively and recover faster from reputation threats.",
            initActive: false,
        },
        {
            title: "Do you offer ORM services for small businesses and startups?",
            desc: "Yes. Our ORM agency in India works with businesses of every size - including startups and small businesses that need an affordable orm agency to establish a strong reputation foundation early. We scale our online reputation management services to match your budget and the specific reputation challenges your business faces.",
            initActive: false,
        },
    ],
};

const contactData = {
    left: {
        subTitle: "CONTACT US NOW",
        title: "Ready to Protect Your Brand With India's Best ORM Services?",
        desc: "Ready to partner with a trusted online reputation management company in India? Mematdigi delivers professional online reputation management services that protect your brand, strengthen customer trust, and improve your online presence through proactive monitoring, review management, and long-term reputation building strategies.",
    },
    form: {
        subTitle: "Get a Call Now",
        subIcon: "tji-box",
        title: "Drop Us a",
        titleSpan: "Line.",
        selectOptions: [
            { value: "0", optionName: "Choose an option" },
            { value: "1", optionName: "Review Management" },
            { value: "2", optionName: "Crisis Management" },
            { value: "3", optionName: "Corporate Reputation Management" },
            { value: "4", optionName: "Google Reputation Management" },
            { value: "5", optionName: "Brand Monitoring" },
            { value: "6", optionName: "Negative Content Suppression" },
            { value: "7", optionName: "Social Media Reputation Management" },
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

export default function OrmServices() {
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