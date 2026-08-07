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
    title: "AR Development Company in India for Business Growth",
    description:
        "Grow your business with Memat Digi's AR development services. Build immersive AR apps that engage users, generate leads and increase conversions. ",
    alternates: {
        canonical: "https://www.mematdigi.com/ar-development-company",
    },
};

const chooseData = {
    subTitle: "COMMON CHALLENGES",
    subIcon: "tji-box",
    title: "Why Most Businesses Are Not Getting Results From Augmented Reality",
    desc: "",
    banner: "/images/choose/h8-choose-bnner.webp",
    boxes: [
        {
            icon: "tji-innovative",
            title: "Lack of a Clear AR Strategy",
            desc: "Many businesses recognize the potential of augmented reality but struggle to identify the right use cases. Without a clear strategy, businesses often invest in AR experiences that fail to solve real problems or deliver measurable business outcomes.",
        },
        {
            icon: "tji-award",
            title: "Limited Development Expertise",
            desc: "Working with an inexperienced AR development company in India can result in poor user experiences, unreliable performance, and applications that lack scalability. Successful AR solutions require technical expertise combined with a deep understanding of business objectives.",
        },
        {
            icon: "tji-support",
            title: "High Costs Without Measurable ROI",
            desc: "Businesses often assume AR development is expensive because projects are built without proper planning. Choosing the right development partner ensures cost-effective solutions focused on customer engagement, operational efficiency, and long-term return on investment.",
        },
    ],
};

const servicesData = {
    subTitle: "WHAT WE OFFER",
    subIcon: "tji-box",
    title: "Our AR Development Services for Businesses Across India",
    desc: "From AR app development and WebAR to custom augmented reality solutions and industry-specific applications - complete AR development services built to deliver real business impact.",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "AR App Development",
            desc: "We build high-performance augmented reality applications for iOS and Android - product visualization tools, training overlays, interactive marketing experiences, and customer-facing AR features that create genuine business value through immersive technology.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Custom AR Development",
            desc: "Every business has different AR requirements. Our custom AR development service builds fully bespoke augmented reality solutions from the ground up - designed around your specific industry, your specific users, and the specific problem your business needs AR to solve.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "WebAR Development",
            desc: "No app download required. Our WebAR development service builds browser-based augmented reality experiences that customers access instantly through any smartphone - product try-ons, interactive packaging, location-based AR, and brand experiences delivered without friction.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "AR Consulting Services",
            desc: "Not sure where AR fits in your business or whether the investment is justified? Our AR consulting services help you define the right augmented reality strategy - identifying your highest-impact use cases, recommending the right technology approach, and providing realistic cost estimates before any development begins.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "AR for Education",
            desc: "Immersive learning experiences, interactive textbook content, 3D concept visualization, and virtual laboratory simulations - our AR for education solutions make complex subjects genuinely engaging and improve learning outcomes for students across every age group and subject area.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "AR for Retail & Virtual Try-On",
            desc: "Let customers try before they buy - virtually. Our AR for retail solutions include virtual try-on for fashion and beauty, 3D product placement for furniture and home decor, and interactive product demonstrations that reduce purchase hesitation and cut return rates for online and offline retailers.",
            url: "/services",
        },
    ],
};

const solutionsData = {
    subTitle: "WHO WE SERVE",
    title: "AR Development Solutions for Every Business Type",
    moreText: "More Services",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Startups & Small Businesses",
            url: "/services",
            desc: "Augmented reality is no longer exclusively for enterprise budgets. As an ar development company in india that works with businesses at every stage, we help startups build focused, high-impact AR experiences that create genuine competitive differentiation - whether that is a WebAR product visualization, an interactive brand experience, or an AR tool that makes your small team deliver at a level that surprises much larger competitors.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "D2C & Ecommerce Brands",
            url: "/services",
            desc: "Virtual try-on, 3D product visualization, and AR-powered shopping experiences are reshaping how consumers discover and evaluate products online. Our AR app development company team helps D2C brands build the augmented reality shopping experiences that reduce the gap between online browsing and purchase confidence - cutting return rates and increasing conversion at the same time.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "B2B & Enterprise Companies",
            url: "/services",
            desc: "Enterprise AR applications - employee training overlays, equipment maintenance guidance, remote assistance tools, and client presentation experiences - deliver measurable efficiency gains at scale. As one of the leading AR companies in India for enterprise clients, we build the complex, integrated AR solutions that large organizations need to transform how they train, operate, and engage customers.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
    ],
};

const featuresData = {
    subTitle: "INDUSTRIES WE SERVE",
    subIcon: "tji-box",
    title: "Industries We Serve With Our AR Development Services in India",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Education",
            desc: "Interactive learning experiences, 3D concept visualization, and virtual laboratory simulations that improve engagement and learning outcomes across schools, colleges, and edtech platforms",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Retail & Ecommerce",
            desc: "Virtual try-on experiences, 3D product placement tools, and interactive shopping features that improve purchase confidence and reduce return rates for online and offline retailers",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Healthcare",
            desc: "Medical training overlays, surgical procedure guidance, patient education tools, and anatomy visualization applications that improve clinical training and patient communication",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Real Estate",
            desc: "AR property visualization, interior design overlay tools, and virtual staging applications that help developers and agents sell properties faster with greater buyer confidence",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Manufacturing",
            desc: "Assembly guidance overlays, equipment maintenance instructions, quality control tools, and safety procedure applications that reduce errors and improve workforce efficiency",
        },
        {
            id: 6,
            icon: "tji-support",
            title: "Architecture & Construction",
            desc: "Design visualization overlays, on-site AR reference tools, and client presentation experiences that improve communication and reduce costly design change requests",
        },
    ],
};

const scalableHighlightData = {
    eye: 'BUSINESS CHALLENGES',
    title: "AR Development Challenges Every Business Faces -",
    titleSpan: "And How We Fix Them",
    paragraphs: [
        "Most businesses that approach us for augmented reality development services have already spent significant time researching AR and come away with more questions than answers - about cost, about whether AR will actually solve their problem, and about how to find AR companies in India with genuine business application expertise rather than just technical capability. As a trusted AR development company working with businesses across education, retail, healthcare, and real estate, we have helped every type of business navigate these exact challenges.",
    ],
    features: [
        "Cannot find ar companies in india that understand business outcomes - working with technical developers who build impressive AR but cannot connect it to the business problem that needs solving",
        "Assuming ar development cost is out of reach - without ever getting a realistic quote from an AR development company that builds lean, focused solutions for specific business use cases",
        "Poor AR experiences that users abandon immediately - applications built without UX expertise that cause disorientation, confusion, and zero adoption regardless of technical quality",
        "No clear AR strategy before development begins - investing in augmented reality development services without a defined use case, target user, or success metric in place",
        "WebAR versus native app confusion - not knowing which approach is right for the specific use case and ending up with the wrong technology choice for the audience",
        "No post-launch support from the development team - AR applications that cannot be updated, improved, or maintained after initial delivery as business requirements evolve",
    ],
};

const servicesData9 = {
    subTitle: "OUR PROCESS",
    title: "How We Deliver Your AR Development Project",
    moreText: "More services",
    moreUrl: "/services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Discovery & AR Strategy Planning",
            desc: "We start with your business goals, your target users, and the specific problem your AR application needs to solve. Our AR consulting services approach ensures every technical decision is grounded in business value - defining the right use case, the right platform, and the right AR approach before development investment is committed.",
            url: "/services",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Concept Design & Prototyping",
            desc: "We design the complete AR experience - interaction flows, environment design, content requirements, and user journey - and build a prototype for your review before full development begins. You see and experience what will be built before any significant development resource is invested.",
            url: "/services",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "AR Development & Build",
            desc: "Our ar app development company team builds your augmented reality application with technical precision and creative quality - optimized for the target platform, tested for performance and usability throughout development, and built to the standards that make AR genuinely useful rather than just visually impressive.",
            url: "/services",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Testing & Quality Assurance",
            desc: "We test every element of your AR application across real devices in real conditions - tracking accuracy, rendering performance, interaction reliability, and user comfort - catching and fixing every issue during development rather than discovering them after launch.",
            url: "/services",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Launch & Post-Launch Support",
            desc: "We manage the complete deployment of your AR development project and stay involved after launch - providing updates, content additions, performance optimization, and technical support that keeps your augmented reality application effective as your business needs grow and change.",
            url: "/services",
        },
    ],
};

const scalableHighlightData2 = {
    eye: 'WHY CHOOSE US',
    title: "Why Choose Mematdigi as Your ",
    titleSpan: "AR Development Company in India",
    paragraphs: [
        "At Mematdigi, we have built our reputation as a trusted AR development company in India by approaching augmented reality the way it should be approached - as a business tool with a specific job to do, not a technology showcase built to impress at a demo and disappoint in real use. We are not the AR app development company that builds technically complex AR experiences that solve the wrong problem or reach the wrong users. We are the augmented reality development company that starts with the business outcome, designs the experience around the user, and measures success by whether the AR application actually delivers the result it was built to achieve. As one of the leading ar vr companies in India offering both augmented and virtual reality development services, our capabilities span every platform, every industry, and every scale of AR application.",
        "Whether you are a startup that needs an AR development company in India to build your first augmented reality experience cost-effectively or an enterprise that needs a specialist augmented reality development company to deliver complex, integrated AR training or retail solutions at scale - Mematdigi delivers the augmented reality development services that create real business impact. Not just impressive technology - working AR solutions that solve real problems and deliver measurable results for businesses across India.",
    ],
    features: [
        "AR development company in India trusted by businesses across education, retail, healthcare, real estate, and manufacturing",
        "AR app development company with full in-house capabilities - strategy, design, development, testing, and post-launch support",
        "AR companies in India with genuine business application expertise - not just technical developers building without business context",
        "AR vr development capabilities under one roof - augmented and virtual reality from a single specialist partner",
        "Hire ar developers from Mematdigi - dedicated specialists assigned to your project from discovery through delivery and beyond",
        "AR consulting services before development begins - defining the right strategy, right technology, and right investment level for your specific business use case",
    ],
};

const faqData = {
    subTitle: "FAQs",
    subIcon: "tji-box",
    title: "Frequently Asked Questions About AR Development Services in India",
    phone: { display: "+91 9136797555", tel: "+91 9136797555" },
    items: [
        {
            title: "What does an AR development company in India do?",
            desc: "An AR development company in India builds augmented reality applications that overlay digital content onto the real world - product visualization tools, training overlays, educational experiences, retail try-on applications, and interactive marketing tools. At Mematdigi, our augmented reality development company approach starts with your business objective - ensuring every AR experience we build delivers real, measurable business value rather than just technical novelty.",
            initActive: true,
        },
        {
            title: "How much does AR development cost in India?",
            desc: "AR development cost in India depends on the complexity of the experience, the platform, and the level of interactivity required. A focused WebAR product visualization might cost ₹1–3 lakhs. A complex custom AR development project with multi-environment functionality could range from ₹8–25 lakhs or more. We provide transparent, detailed quotes based on your specific brief - no vague estimates, no surprises after you commit to working with us.",
            initActive: false,
        },
        {
            title: "What is the difference between WebAR and native AR app development?",
            desc: "WebAR development delivers augmented reality through a mobile browser - no app download required, accessible to anyone with a smartphone. Native AR app development delivers richer, more complex AR experiences through a dedicated iOS or Android application. The right choice depends on your audience, your use case, and your distribution strategy. Our AR consulting services help you make the right decision before development begins.",
            initActive: false,
        },
        {
            title: "Can I hire dedicated AR developers from Mematdigi?",
            desc: "Yes. When you hire ar developers from Mematdigi, you get dedicated specialists assigned exclusively to your project - communicating directly with your team, working within your preferred processes, and staying accountable throughout the entire development lifecycle. Our AR app development company model ensures you get senior AR talent with genuine business application expertise without the overhead and risk of full-time employment.",
            initActive: false,
        },
        {
            title: "What industries do you serve with AR development services?",
            desc: "We deliver augmented reality development services across education, retail, healthcare, real estate, manufacturing, and architecture. Our AR for education solutions are particularly in demand - covering interactive learning experiences, 3D concept visualization, and virtual laboratory simulations that improve engagement and learning outcomes. Our AR for retail virtual try-on solutions are equally popular with D2C and ecommerce brands.",
            initActive: false,
        },
        {
            title: "Do you offer AR consulting services before development begins?",
            desc: "Yes - always. Our AR consulting services help businesses define the right augmented reality strategy before any development investment is made. We identify your highest-impact AR use case, recommend the right technology approach, provide realistic cost estimates, and help you build the business case for AR investment - so when development begins, every decision is grounded in a clear business outcome and a realistic path to achieving it.",
            initActive: false,
        },
    ],
};

const contactData = {
    left: {
        subTitle: "CONTACT US NOW",
        title: "Ready to Build Your AR Solution With India's Leading AR Development Company?",
        desc: "Bring your ideas to life with Mematdigi's AR development services in India. From custom AR applications and WebAR experiences to enterprise-grade augmented reality solutions, we build immersive technologies that improve engagement, solve real business challenges, and support long-term business growth.",
    },
    form: {
        subTitle: "Get Free Consultation",
        subIcon: "tji-box",
        title: "Drop Us a",
        titleSpan: "Line.",
        selectOptions: [
            { value: "0", optionName: "Choose an option" },
            { value: "1", optionName: "AR App Development" },
            { value: "2", optionName: "Custom AR Development" },
            { value: "3", optionName: "WebAR Development" },
            { value: "4", optionName: "AR Consulting Services" },
            { value: "5", optionName: "AR for Education" },
            { value: "6", optionName: "AR for Retail & Virtual Try-On" },
            { value: "7", optionName: "Other AR Solution" },
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
                            <h2 className="main-title mt-4" style={{ fontSize: '40px' }}>
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
                                <ButtonPrimary text={"Get Free Consultation"} url={'/contact-us'} />
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

export default function ArDevelopmentServices() {
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