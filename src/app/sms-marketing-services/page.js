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
  title: "Best SMS Marketing Services in India for Business Growth",
  description:
    "Boost customer engagement with Memat Digi's SMS marketing services. SMS campaigns, transactional SMS and analytics that increase conversions.",
  alternates: {
    canonical: "https://www.mematdigi.com/sms-marketing-services",
  },
};

const chooseData = {
    subTitle: "COMMON CHALLENGES",
    subIcon: "tji-box",
    title: "Why Your Business Is Missing Opportunities Without an Effective SMS Marketing Strategy",
    desc: "",
    banner: "/images/choose/h8-choose-bnner.webp",
    boxes: [
        {
            icon: "tji-innovative",
            title: "Poor Audience Targeting",
            desc: "Sending the same SMS to every customer without proper segmentation leads to low engagement, poor response rates, and missed opportunities to deliver relevant messages that encourage action.",
        },
        {
            icon: "tji-award",
            title: "Lack of Automation & Personalization",
            desc: "Manual campaigns and generic messaging make it difficult to engage customers consistently. Without SMS automation and personalized communication, businesses struggle to build lasting customer relationships at scale.",
        },
        {
            icon: "tji-support",
            title: "Low Campaign Performance",
            desc: "Many businesses launch SMS campaigns without a clear strategy, performance tracking, or optimization. This results in weak conversions, wasted marketing spend, and limited return on investment despite high message delivery rates.",
        },
    ],
};

const servicesData = {
    subTitle: "WHAT WE OFFER",
    subIcon: "tji-box",
    title: "Our SMS Marketing Services for Businesses Across India",
    desc: 'Reach the right customers at the right time with data-driven SMS marketing solutions designed to improve engagement, drive conversions, and build lasting customer relationships at scale.',
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Bulk SMS Marketing Services",
            desc: "We manage high-volume bulk SMS campaigns with proper audience segmentation, message personalization, compliance management, and delivery optimization - reaching thousands of customers instantly without damaging your sender reputation.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Promotional SMS Services",
            desc: "We build and execute promotional SMS campaigns for offers, product launches, seasonal sales, and brand announcements - crafted with compelling copy, strategic timing, and audience targeting that maximizes response rates and campaign ROI.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Transactional SMS Services",
            desc: "We set up and manage transactional SMS services for order confirmations, OTPs, shipping updates, appointment reminders, and account notifications - reliable, instant delivery that keeps customers informed and builds operational trust.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "SMS Campaign Management",
            desc: "End-to-end SMS campaign management - strategy, content creation, audience segmentation, scheduling, delivery monitoring, and performance analysis - all managed by our SMS marketing agency team so your campaigns run smoothly and deliver results.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "SMS Automation Services",
            desc: "We build SMS automation workflows that send the right message at the right moment - welcome sequences, abandoned cart reminders, re-engagement campaigns, and behavioral triggers that run without manual intervention and improve customer lifecycle performance.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "SMS Analytics & Reporting",
            desc: "We track delivery rates, open rates, click-through rates, conversion rates, and campaign ROI - delivering clear monthly SMS analytics and reporting that shows exactly how your SMS marketing services in India are performing and where the next optimization opportunity is.",
            url: "/services",
        },
    ],
};

const solutionsData = {
    subTitle: "WHO WE SERVE",
    title: "SMS Marketing Solutions for Every Business Type",
    moreText: "More Services",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Startups & Small Businesses",
            url: "/services",
            desc: "SMS is one of the most cost-effective marketing channels available to a business with a limited budget - instant reach, high open rates, and no algorithm standing between your message and your customer. Our SMS marketing services in india for startups and small businesses build lean, high-impact campaigns that generate leads, promote offers, and build customer relationships from a channel that delivers results from the first send.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "Ecommerce & Retail Brands",
            url: "/services",
            desc: "For ecommerce brands, mobile SMS marketing is the fastest way to recover abandoned carts, announce flash sales, and drive repeat purchases from existing customers. Our SMS marketing agency builds the automation sequences and promotional campaigns that keep your customers engaged between purchases - increasing repeat purchase rate and customer lifetime value through the channel with the highest open rate of any digital touchpoint.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "B2B & Enterprise Companies",
            url: "/services",
            desc: "Enterprise SMS solutions require a different level of scale, reliability, and integration. We build and manage B2B SMS programs that automate customer notifications, streamline appointment scheduling, support sales follow-up sequences, and deliver the kind of personalized SMS marketing that moves complex buying decisions forward at the speed enterprise businesses need.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
    ],
};

const featuresData = {
    subTitle: "INDUSTRIES WE SERVE",
    subIcon: "tji-box",
    title: "Industries We Help Grow With SMS Marketing Services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Ecommerce",
            desc: "Abandoned cart recovery, order updates, flash sale announcements, and loyalty campaign SMS that drive repeat purchases and increase customer lifetime value.",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Healthcare",
            desc: "Appointment reminders, health tips, prescription alerts, and patient re-engagement campaigns that reduce no-shows and improve clinic efficiency.",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Education",
            desc: "Admission inquiry follow-ups, fee reminders, exam notifications, and student engagement campaigns that keep institutions connected with students and parents.",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Real Estate",
            desc: "Property alert SMS, site visit scheduling, follow-up automation, and broker communication that keeps buyers engaged through long property decision cycles.",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Finance & Banking",
            desc: "OTP delivery, account notifications, loan update SMS, and financial promotion campaigns that build customer trust and drive product awareness.",
        },
        {
            id: 6,
            icon: "tji-support",
            title: "Restaurants & Hospitality",
            desc: "Reservation confirmations, special offer promotions, loyalty reward SMS, and event announcements that drive footfall and repeat visits.",
        },
    ],
};

const scalableHighlightData = {
    eye: 'BUSINESS CHALLENGES',
    title: "Common SMS Marketing Challenges Businesses Face -",
    titleSpan: "And How We Solve Them",
    paragraphs: [
        "Most businesses that come to us for SMS marketing services in india are dealing with the same fundamental problem - they know SMS should be working and they cannot figure out why it is not. Campaigns that get delivered but not acted on. Messages that feel generic. Numbers that get reported as spam. No visibility into what is actually performing. As a trusted SMS marketing agency working with 100+ businesses across India, we have diagnosed and fixed every version of broken SMS marketing - and we know exactly what it takes to build a program that consistently delivers results.",
    ],
    features: [
        "Low customer engagement despite high delivery rates - because messages are generic, poorly timed, and sent without any audience segmentation strategy",
        "Poor campaign targeting reaching wrong audiences - sending the same message to your entire list regardless of where each customer is in their relationship with your business",
        "Low conversion rates from promotional campaigns - because the offer, timing, and call to action were never optimized for the specific audience receiving the message",
        "Inefficient manual messaging consuming team time - no SMS automation in place means every campaign requires manual effort that does not scale as the business grows",
        "No campaign tracking or performance reporting - making it impossible to measure ROI, identify what is working, and improve results from one campaign to the next",
        "Weak customer retention and follow-up strategy - losing customers between purchases because no re-engagement or loyalty SMS program exists to bring them back",
    ],
};
const servicesData9 = {
    subTitle: "OUR PROCESS",
    title: "Our SMS Marketing Process for Better Customer Engagement and Business Growth",
    moreText: "More services",
    moreUrl: "/services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Business & Audience Analysis",
            desc: "We start by understanding your business, your customers, your existing communication channels, and your specific SMS marketing goals - building a complete picture of your audience segments before a single message is written or campaign is planned.",
            url: "/services",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Campaign Strategy & SMS Content Planning",
            desc: "We build your complete SMS marketing strategy - campaign types, messaging frameworks, audience segmentation approach, automation triggers, and sending schedule - all aligned to your business goals and the customer lifecycle stages that matter most.",
            url: "/services",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "SMS Campaign Setup & Automation",
            desc: "We configure your SMS platform, build automation workflows, set up audience segments, and create all campaign content - ensuring every message is compliant, personalized, and timed for maximum engagement before the first campaign goes live.",
            url: "/services",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Campaign Launch & Delivery Monitoring",
            desc: "We launch and monitor every campaign in real time - tracking delivery rates, identifying issues fast, and managing sender reputation to ensure your messages reach customers reliably and your SMS marketing services in india program stays compliant and effective.",
            url: "/services",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Performance Analysis & Continuous Optimization",
            desc: "Monthly performance reports covering delivery rates, response rates, conversion rates, and campaign ROI - plus specific optimizations implemented based on real data to improve results from every campaign cycle going forward.",
            url: "/services",
        },
    ],
};

const scalableHighlightData2 = {
    eye: 'WHY CHOOSE US',
    title: "Why Choose Mematdigi for ",
    titleSpan: "SMS Marketing Services in India",
    paragraphs: [
        "At Mematdigi, we have built our reputation as a trusted SMS marketing company in India by treating SMS as a strategic business communication channel - not a broadcast tool for sending the same message to everyone on a list. We are not the SMS marketing agency that sends bulk campaigns and reports on delivery counts. We are the SMS marketing services in India partner that builds proper audience segmentation, proper automation, proper personalized messaging, and proper analytics into every program we manage - because those are the elements that separate SMS campaigns that convert from SMS campaigns that get ignored.",
        "Whether you are a startup that needs a cost-effective SMS marketing company india to build your first customer communication program or an enterprise that needs a specialist SMS marketing agency to manage complex automation and segmentation at scale - Mematdigi delivers the SMS marketing services in india that help your business reach more customers, retain them longer, and convert them more consistently through India's most direct digital communication channel.",
    ],
    features: [
        "SMS marketing services in india with proven results across ecommerce, healthcare, education, real estate, and more",
        "SMS marketing agency with full-service delivery - strategy, content, automation, delivery, and reporting under one roof",
        "Transactional SMS services - reliable, instant delivery for OTPs, order updates, and customer notifications that build operational trust",
        "Bulk SMS marketing services - high-volume campaigns with proper segmentation, personalization, and compliance management",
        "SMS automation services - behavioral triggers and lifecycle sequences that engage customers at the right moment without manual effort",
        "Enterprise SMS solutions - scalable infrastructure and dedicated support for businesses managing high-volume, multi-segment SMS communication",
    ],
};

const faqData = {
    subTitle: "FAQs",
    subIcon: "tji-box",
    title: "Frequently Asked Questions About SMS Marketing Services in India",
    phone: { display: "1-888-452-1505", tel: "18884521505" },
    items: [
        {
            title: "What are SMS marketing services and how can they benefit my business?",
            desc: "SMS marketing services in India involve using text messages to communicate with customers - promotional offers, transactional notifications, appointment reminders, and automated follow-up sequences. With open rates of up to 98%, SMS marketing delivers messages that actually get read. Our SMS marketing services help businesses improve customer engagement, increase conversions, and build stronger customer relationships through direct, personalized messaging.",
            initActive: true,
        },
        {
            title: "What is the difference between promotional and transactional SMS?",
            desc: "Promotional SMS services are used for marketing - offers, product launches, flash sales, and campaigns designed to drive purchases. Transactional SMS services are triggered by customer actions - order confirmations, OTPs, shipping updates, and appointment reminders. Both serve different purposes, and a complete SMS marketing strategy uses both types to communicate with customers throughout their journey.",
            initActive: false,
        },
        {
            title: "Do you provide bulk SMS marketing services for businesses?",
            desc: "Yes - our bulk SMS marketing services are designed for businesses that need to reach large customer lists quickly and reliably. We manage audience segmentation, message personalization, compliance, and delivery optimization for high-volume mobile SMS marketing campaigns - ensuring your messages reach customers without damaging your sender reputation or violating platform policies.",
            initActive: false,
        },
        {
            title: "Can you automate SMS campaigns for customer engagement?",
            desc: "Yes. Our SMS automation services build behavioral trigger campaigns - welcome messages, abandoned cart reminders, re-engagement sequences, and loyalty campaigns - that send automatically based on customer actions without any manual effort. Combined with strategic SMS campaign management, automation allows your business to communicate with customers at scale while maintaining the personalization that drives engagement.",
            initActive: false,
        },
        {
            title: "Which industries benefit most from SMS marketing?",
            desc: "SMS marketing delivers results across virtually every industry - ecommerce, healthcare, education, real estate, finance, and hospitality all see strong results from properly managed campaigns. Enterprise SMS solutions are particularly valuable for businesses with large customer bases and complex communication needs. Any business that needs to reach customers quickly, reliably, and cost-effectively can benefit from a strategic SMS lead generation and engagement program.",
            initActive: false,
        },
        {
            title: "Do you provide campaign reports and performance tracking?",
            desc: "Yes. Every client receives detailed SMS analytics and reporting covering delivery rates, open rates, click-through rates, conversion rates, and campaign ROI - delivered monthly in plain language. Our SMS campaign management reporting gives you complete visibility into what is working, what needs improvement, and how your SMS marketing services in india investment is contributing to your business growth.",
            initActive: false,
        },
    ],
};

const contactData = {
    left: {
        subTitle: "CONTACT US NOW",
        title: "Ready to Grow Your Business With Professional SMS Marketing Services in India?",
        desc: "Partner with Mematdigi for SMS marketing services in India that help you connect with customers instantly through targeted campaigns, automation, and personalized messaging. From bulk SMS to transactional notifications, we build communication strategies that increase engagement, improve conversions, and support long-term business growth.",
    },
    form: {
        subTitle: "Get a Call Now",
        subIcon: "tji-box",
        title: "Drop Us a",
        titleSpan: "Line.",
        selectOptions: [
            { value: "0", optionName: "Choose an option" },
            { value: "1", optionName: "Bulk SMS Marketing" },
            { value: "2", optionName: "Promotional SMS" },
            { value: "3", optionName: "Transactional SMS" },
            { value: "4", optionName: "SMS Campaign Management" },
            { value: "5", optionName: "SMS Automation Services" },
            { value: "6", optionName: "SMS Analytics & Reporting" },
        ],
    },
};

/* ============================================================
 * SECTIONS
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

export default function SmsMarketingServices() {
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