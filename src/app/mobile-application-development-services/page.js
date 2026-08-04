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
  title: "Best Mobile App Development Company in India | Memat Digi",
  description:
    "Looking for a trusted mobile app development company in India? Memat Digi builds custom Android & iOS apps. Hire expert app developers India. Call Now!",
  alternates: {
    canonical: "https://www.mematdigi.com/mobile-application-development-services",
  },
};
const chooseData = {
    subTitle: "COMMON APP DEVELOPMENT CHALLENGES",
    subIcon: "tji-box",
    title: "Why Most Mobile Apps Fail to Deliver Business Results",
    desc: "",
    banner: "/images/choose/h8-choose-bnner.webp",
    boxes: [
        {
            icon: "tji-innovative",
            title: "Poor User Experience",
            desc: "Many mobile apps fail because of slow performance, confusing navigation, and poor UI/UX design, leading users to abandon the app after only a few interactions.",
        },
        {
            icon: "tji-award",
            title: "Lack of Scalability",
            desc: "Apps built without a scalable architecture often struggle with increasing users, new features, and platform updates, creating performance issues that limit long-term business growth.",
        },
        {
            icon: "tji-support",
            title: "No Long-Term Support",
            desc: "Building an app is only the beginning. Without regular updates, maintenance, security improvements, and post-launch support, even well-designed mobile apps quickly lose reliability and user trust.",
        },
    ],
};

const servicesData = {
    subTitle: "WHAT WE OFFER",
    subIcon: "tji-box",
    title: "Our Mobile App Development Services for Businesses Across India",
    desc: "From native iOS and Android to cross-platform apps, UI/UX design, and post-launch support - complete mobile app development services built to perform at every stage of growth.",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "iOS App Development",
            desc: "We build high-performance, App Store-ready iOS applications built for speed, security, and seamless user experience - designed to meet Apple's strict guidelines while delivering the business results your investment demands.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Android App Development",
            desc: "India runs on Android. We build scalable, feature-rich Android apps that work flawlessly across devices, screen sizes, and OS versions - built for the market where your users actually are.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Cross-Platform App Development",
            desc: "Build once, deploy everywhere. Our cross platform app development services use Flutter and React Native to deliver native-quality experiences on both iOS and Android - at a fraction of the time and cost of building two separate apps.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Flutter App Development",
            desc: "Flutter is the future of cross-platform mobile development. We build beautiful, high-performance Flutter apps with a single codebase that feels completely native on both iOS and Android - fast to build, easy to maintain, and smooth to use.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "React Native Development",
            desc: "React Native gives you the speed of cross-platform development with near-native performance. Our React Native team builds robust, scalable mobile applications for businesses that need to move fast without compromising on quality or user experience.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "App Design & UI/UX",
            desc: "Great apps start with great design. Our mobile UI/UX design team creates intuitive, conversion-focused interfaces that guide users naturally through your app - reducing drop-off, improving retention, and making every interaction feel effortless.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Backend & API Development",
            desc: "The best mobile apps are powered by the best backends. We build secure, scalable backend systems and API integrations that handle real-world traffic, real-time data, and complex business logic - without breaking under pressure.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "App Testing & QA",
            desc: "Every app we build goes through rigorous testing across devices, OS versions, and real-world usage scenarios before a single user ever touches it. Our QA process catches what development misses - so your launch is clean, your reviews are positive, and your users stay.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "App Maintenance & Deployment",
            desc: "Launch day is just the beginning. We manage app store deployment, handle OS update compatibility, push feature updates, and provide ongoing technical support - so your mobile app development company in India relationship does not end when the project does.",
            url: "/services",
        },
    ],
};

const solutionsData = {
    subTitle: "WHO WE SERVE",
    title: "Mobile App Development Solutions for Every Business Type",
    moreText: "More Services",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Startups & Small Businesses",
            url: "/services",
            desc: "Your app idea deserves a development partner that treats it like their own. Our mobile app development company in India works with startups to build lean, focused MVPs that validate your concept fast - without the enterprise price tag. We help you launch smart, gather real user feedback, and iterate quickly toward product-market fit.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "D2C & Ecommerce Brands",
            url: "/services",
            desc: "Mobile commerce is where D2C growth happens. We build ecommerce apps that make buying frictionless - fast product browsing, seamless checkout, push notification campaigns, and loyalty features that drive repeat purchases and customer lifetime value for brands serious about mobile-first growth.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "B2B & Enterprise Companies",
            url: "/services",
            desc: "Enterprise app development demands a different level of security, scalability, and integration capability. We build B2B mobile applications - from internal workflow tools and CRM apps to customer-facing platforms - that integrate with your existing tech stack and scale as your organization grows.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        // Aur solutions add karne ho to yahan object push kar do ⬇️
    ],
};

const featuresData = {
    subTitle: "INDUSTRIES WE SERVE",
    subIcon: "tji-box",
    title: "Industries We Build Mobile Apps For Across India",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Healthcare",
            desc: "Patient engagement apps, appointment booking, teleconsultation platforms, and health tracking solutions built with security and compliance at the core",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Real Estate",
            desc: "Property listing apps, virtual tour features, lead management tools, and broker portals that modernize the real estate buying and renting experience",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Education",
            desc: "Learning management systems, student engagement apps, live class platforms, and edtech solutions that make education more accessible and interactive",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Ecommerce",
            desc: "High-converting mobile shopping apps with seamless checkout, product discovery, push notifications, and loyalty features that drive revenue growth",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Finance & Fintech",
            desc: "Secure banking apps, payment solutions, investment platforms, and financial management tools built with enterprise-grade security standards",
        },
        {
            id: 6,
            icon: "tji-support",
            title: "SaaS & Technology",
            desc: "Mobile companions for SaaS products, internal business tools, and customer-facing technology applications built to scale with your platform",
        },
    ],
};

const scalableHighlightData = {
    eye: 'BUSINESS CHALLENGES',
    title: "Mobile App Challenges Every Business in India Faces -",
    titleSpan: "And How We Fix Them",
    paragraphs: [
        "Most businesses that come to us have already been through one failed app development experience. They hired a mobile app development company in India based on the lowest quote, received a product that barely worked, and were left without support when it inevitably broke. These are not edge cases - they are what happens when you choose the wrong development partner. As a leading mobile app development company trusted by 100+ businesses, we have rebuilt broken apps, rescued abandoned projects, and delivered first-time-right solutions for clients across every industry.",
    ],
    features: [
        "Apps that crash on launch - because testing was skipped to cut costs and meet a rushed deadline",
        "No post-launch support - leaving businesses unable to fix bugs or release updates after delivery",
        "Poor UI/UX design - creating apps users find confusing, frustrating, and abandon after one session",
        "No backend scalability - apps that work for 100 users but collapse under real traffic load",
        "No app store optimization - apps built but never discoverable in the App Store or Google Play",
        "Source code ownership issues - developers who retain code access and use it as leverage post-delivery",
    ],
};

const servicesData9 = {
    subTitle: "OUR PROCESS",
    title: "How We Deliver Your Mobile App Development Project",
    moreText: "More services",
    moreUrl: "/services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Discovery & Requirement Analysis",
            desc: "We start by understanding your business goals, your users, and your technical requirements in detail. Every decision made from here - platform choice, technology stack, feature prioritization - is grounded in what your app actually needs to succeed, not what is easiest to build.",
            url: "/services",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "UI/UX Design & Prototyping",
            desc: "Before a single line of code is written, we design every screen and prototype the full user journey. You see exactly how your app will look and feel, how users will navigate it, and how key actions will work - all before development begins.",
            url: "/services",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "App Development & Testing",
            desc: "Our development team builds your app with clean, scalable code - following mobile app development best practices for performance, security, and maintainability. Every feature is tested continuously throughout development, not just at the end.",
            url: "/services",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Launch & App Store Deployment",
            desc: "We handle the complete App Store and Google Play submission process - optimizing your listing, preparing screenshots and descriptions, and managing the review process so your app launches cleanly and reaches users from day one.",
            url: "/services",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Post-Launch Support & Maintenance",
            desc: "After launch, we monitor performance, fix issues fast, push OS compatibility updates, and release new features on a structured roadmap. Our mobile app development services do not end at delivery - we are your long-term technology partner.",
            url: "/services",
        },
    ],
};

const scalableHighlightData2 = {
    eye: 'WHY CHOOSE US',
    title: "Why Choose Mematdigi as Your ",
    titleSpan: "Mobile App Development Company in India",
    paragraphs: [
        "Choosing the right mobile app development company in India is one of the most important decisions your business will make. A bad choice costs you time, money, and opportunity. At Mematdigi, we have built our reputation as a leading mobile app development company by doing what most development companies do not - staying involved, staying accountable, and staying focused on your business results long after the project is delivered. Whether you need a startup MVP, a cross-platform app for a growing D2C brand, or enterprise app development for a complex B2B workflow - our team brings the same commitment to quality, transparency, and performance to every engagement.",
        "When you work with the app developers at Mematdigi, you get more than a development team - you get a mobile app development company in India that treats your product like their own. From the first discovery call to ongoing post-launch maintenance, we are the mobile app development partner that Indian businesses trust to build apps that actually perform.",
    ],
    features: [
        "Mobile app development company in India with 135+ apps delivered across 15+ industries",
        "Best mobile app development company for startups - lean MVPs built fast, built right, built to validate",
        "Hire mobile app developer in India - dedicated developers assigned to your project from day one to launch",
        "Custom mobile app development - every app built from scratch around your users, your goals, and your business model",
        "Enterprise app development - secure, scalable, integrated solutions built for the complexity of real enterprise environments",
        "Hire mobile app developers in India - a full team including designers, developers, QA engineers, and a project manager under one roof",
    ],
};

const faqData = {
    subTitle: "FAQs",
    subIcon: "tji-box",
    title: "Frequently Asked Questions About Mobile App Development in India",
    phone: { display: "1-888-452-1505", tel: "18884521505" },
    items: [
        {
            title: "How much does mobile app development cost in India? ",
            desc: "No fixed answer here - it really depends on what you're building. A basic app might cost ₹3-5 lakhs. Add a payment gateway, admin panel, real-time chat, and suddenly you're looking at ₹15-30 lakhs. We've seen both. Share what you have in mind and we'll give you a realistic number, not a ballpark pulled from thin air.",
            initActive: true,
        },
        {
            title: "Should I build an Android or iOS app first? ",
            desc: "Where are your users? That's the only question that matters. If they're in India, Android - no debate, it owns the market here. If you're going after users in the US or Europe, or targeting people who spend money on apps, start with iOS. Can't decide or the budget is tight? Build once for both with Flutter or React Native. Works well for most businesses.",
            initActive: false,
        },
        {
            title: "Do you provide app maintenance after launch? ",
            desc: "Launch day is actually just the beginning. Apps break. OS updates happen. Users find bugs you never imagined. We stay involved after go-live - fixing issues, pushing updates, keeping things running. Think of it less like a service and more like having a team on call.",
            initActive: false,
        },
        {
            title: "Is cross-platform app development as good as native? ",
            desc: "For 90% of apps out there - yes, genuinely. Most users won't feel any difference. Where it gets complicated is if your app needs to do something very hardware-specific, like advanced camera processing or real-time sensor data. That's when native start making sense. We'll be upfront with you about which one your project actually needs.",
            initActive: false,
        },
        {
            title: "Do you sign an NDA before starting the project? ",
            desc: "Always, before we even get into details. A lot of founders are nervous about sharing their ideas - that's fair. We sign an NDA first, then talk. Your concept stays yours and goes nowhere outside this conversation.",
            initActive: false,
        },
        {
            title: "Will I own the source code after the project?",
            desc: "Yes - completely. Once we're done and payment is settled, the code is handed over to you. No monthly fees to \"keep access,\" no vendor lock-in. We've heard enough horror stories from clients burned by other agencies to make this a hard rule for us.",
            initActive: false,
        },
    ],
};

const contactData = {
    left: {
        subTitle: "CONTACT US NOW",
        title: "Ready to Build Your Mobile App With India's Leading App Development Company?",
        desc: "Ready to work with a trusted mobile app development company in India? Partner with Mematdigi for custom mobile app development services that build secure, scalable, and high-performance mobile applications. From startup MVPs to enterprise apps, we create solutions designed to drive user engagement, business growth, and long-term success. ",
    },
    form: {
        subTitle: "Get a Call Now",
        subIcon: "tji-box",
        title: "Drop Us a",
        titleSpan: "Line.",
        selectOptions: [
            { value: "0", optionName: "Choose an option" },
            { value: "1", optionName: "iOS App Development" },
            { value: "2", optionName: "Android App Development" },
            { value: "3", optionName: "Cross-Platform App Development" },
            { value: "4", optionName: "Flutter App Development" },
            { value: "5", optionName: "React Native Development" },
            { value: "6", optionName: "App Design & UI/UX" },
            { value: "7", optionName: "Backend & API Development" },
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

export default function MobileAppDevelopmentServices() {
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