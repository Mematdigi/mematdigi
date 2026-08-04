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
  title: "IT Consulting Company in India for Digital Transformation",
  description:
    "Memat Digi delivers IT consultancy services, software consulting and digital transformation strategies that improve efficiency and business growth.",
  alternates: {
    canonical: "https://www.mematdigi.com/it-consulting-company",
  },
};

const chooseData = {
    subTitle: "COMMON CHALLENGES",
    subIcon: "tji-box",
    title: "Why Businesses Struggle Without the Right IT Consulting Partner",
    desc: "",
    banner: "/images/choose/h8-choose-bnner.webp",
    boxes: [
        {
            icon: "tji-innovative",
            title: "Lack of a Clear IT Strategy",
            desc: "Many businesses invest in multiple software platforms and technologies without a long-term roadmap. This creates disconnected systems, duplicate processes, higher operational costs, and technology that fails to support business growth.",
        },
        {
            icon: "tji-award",
            title: "Outdated Technology Infrastructure",
            desc: "Legacy systems, manual workflows, and aging IT infrastructure slow productivity, increase maintenance costs, and make it difficult for businesses to adapt to changing customer expectations and market demands.",
        },
        {
            icon: "tji-support",
            title: "Poor Return on Technology Investments",
            desc: "Technology alone does not improve business performance. Without strategic planning, proper implementation, system integration, and continuous optimization, businesses often spend heavily on IT without achieving measurable operational or financial improvements.",
        },
    ],
};

const servicesData = {
    subTitle: "WHAT WE OFFER",
    subIcon: "tji-box",
    title: "Our IT Consulting Services for Businesses Across India",
    desc: "From IT strategy and software consulting to cloud solutions, digital transformation, and business process automation - complete IT consultancy services designed to make technology work for your business, not against it.",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "IT Strategy Consulting",
            desc: "We build clear, actionable IT strategies aligned to your business goals - defining the right technology roadmap, the right investment priorities, and the right implementation sequence to make your technology decisions pay off consistently and predictably.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Technology Consulting",
            desc: "We help businesses evaluate, select, and implement the right technologies - from enterprise software and cloud platforms to automation tools and data systems - ensuring every technology investment is matched to a specific business outcome.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Software Consulting",
            desc: "We provide expert software consulting for businesses navigating complex software decisions - custom versus off-the-shelf, vendor selection, integration planning, and migration strategy - so your software investments deliver the efficiency and scalability your business needs.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Cloud Consulting Services",
            desc: "We help businesses plan and execute cloud adoption - from cloud readiness assessments and migration strategy to cloud architecture design and ongoing optimization - delivering the cost efficiency, scalability, and security that modern business operations demand.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Digital Transformation Consulting",
            desc: "We guide businesses through the full digital transformation journey - identifying the processes, systems, and capabilities that need to change, building the transformation roadmap, and managing the implementation so your business emerges genuinely more competitive and efficient.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Business Process Automation Consulting",
            desc: "We identify the manual, repetitive processes consuming your team's time and build the automation strategy - RPA, workflow tools, AI-assisted processes - that frees your people to focus on the work that actually drives business growth.",
            url: "/services",
        },
    ],
};

const solutionsData = {
    subTitle: "WHO WE SERVE",
    title: "IT Consulting Solutions for Every Business Type",
    moreText: "More Services",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Startups & Small Businesses",
            url: "/services",
            desc: "The technology decisions you make in the early stages of your business have outsized consequences later. Our IT consulting company in india works with startups to build scalable technology foundations from the start - choosing the right software stack, avoiding costly vendor lock-in, and implementing the IT infrastructure that supports rapid growth without requiring expensive rebuilds when the business scales.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "Growing SMEs",
            url: "/services",
            desc: "Mid-sized businesses hit a technology inflection point - the systems that worked at fifty employees create bottlenecks at two hundred. Our IT consultancy services help growing SMEs modernize their technology stack, automate manual processes, adopt cloud infrastructure, and build the operational efficiency that allows the business to scale without proportionally scaling headcount or costs.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "Enterprises & Large Organizations",
            url: "/services",
            desc: "Enterprise technology consulting demands a different level of depth - legacy system modernization, multi-department digital transformation, complex integration architecture, and the kind of IT strategy consulting that balances innovation with operational continuity. Our enterprise IT consulting team brings the technical depth and business consulting experience to deliver transformation at scale without disrupting the operations the business depends on.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
    ],
};

const featuresData = {
    subTitle: "INDUSTRIES WE SERVE",
    subIcon: "tji-box",
    title: "Industries We Help Transform Through IT Consulting Services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Healthcare",
            desc: "Clinical system modernization, patient data management, compliance-aware IT strategy, and digital transformation consulting for hospitals, clinics, and health networks",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Manufacturing",
            desc: "ERP implementation, production automation consulting, supply chain technology strategy, and IT infrastructure consulting for manufacturers across India",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Education",
            desc: "Learning management system consulting, campus IT strategy, edtech platform advisory, and digital transformation consulting for schools, colleges, and educational institutions",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Retail & Ecommerce",
            desc: "Retail technology consulting, ecommerce platform strategy, omnichannel integration, and business process automation for retail and online businesses",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Finance & Banking",
            desc: "Fintech consulting, core banking system modernization, compliance technology strategy, and IT security and risk consulting for financial services organizations",
        },
        {
            id: 6,
            icon: "tji-support",
            title: "Logistics & Supply Chain",
            desc: "Logistics technology consulting, warehouse management system advisory, supply chain automation, and IT strategy for logistics businesses across India",
        },
    ],
};

const scalableHighlightData = {
    eye: 'BUSINESS CHALLENGES',
    title: "Common IT Challenges Businesses Face -",
    titleSpan: "And How We Solve Them",
    paragraphs: [
        "Most businesses that come to us for IT consulting services in India are not struggling because of a lack of technology - they are struggling because of too much technology that was never properly integrated, never properly aligned to business goals, and never properly managed after implementation. As a trusted IT consulting company in india working with 100+ businesses across industries, we have diagnosed and solved every version of this problem - and we know exactly what it takes to turn a fragmented IT environment into a cohesive, efficient technology ecosystem that genuinely supports business growth.",
    ],
    features: [
        "Legacy systems slowing business operations - outdated infrastructure that cannot integrate with modern tools, creating manual workarounds that consume team time and introduce errors",
        "Lack of technology strategy and planning - isolated software decisions made without a coherent IT strategy, resulting in disconnected systems that duplicate effort and prevent efficiency",
        "High IT costs with poor ROI - technology spending that cannot be justified because no measurement framework connects IT investment to specific business outcomes",
        "Manual business processes reducing productivity - repetitive workflows that should be automated consuming skilled employee time that should be directed at higher-value work",
        "Cloud migration and infrastructure challenges - businesses that know they need to modernize but lack the IT infrastructure consulting expertise to plan and execute migration without operational disruption",
        "Security, compliance, and technology scalability issues - IT environments that were never designed for the scale or regulatory requirements the business now faces",
    ],
};

const servicesData9 = {
    subTitle: "OUR PROCESS",
    title: "Our IT Consulting Process for Business Growth",
    moreText: "More services",
    moreUrl: "/services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Business & Technology Assessment",
            desc: "We start with a comprehensive technology assessment - auditing your existing infrastructure, software, workflows, integrations, and IT spend against your business objectives to identify exactly where technology is supporting growth and where it is holding it back.",
            url: "/services",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "IT Strategy & Roadmap Development",
            desc: "We develop a clear technology roadmap aligned to your business goals and future scalability requirements - prioritizing the right investments, sequencing the right implementations, and building the business case for every technology decision in the plan.",
            url: "/services",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Solution Planning & Architecture",
            desc: "We recommend the right software, cloud, automation, and infrastructure solutions for your specific business context - evaluating vendors, designing integration architecture, and planning the implementation approach that minimizes disruption and maximizes adoption.",
            url: "/services",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Implementation & Technology Integration",
            desc: "We manage or support the implementation of your technology solutions - ensuring security, performance, and integration quality are maintained throughout deployment, and that your team has the training and change management support they need to adopt new systems effectively.",
            url: "/services",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Optimization, Support & Continuous Improvement",
            desc: "We monitor system performance, identify optimization opportunities, and provide ongoing IT advisory services that ensure your technology environment keeps pace with your business as it grows - turning IT consulting from a one-time engagement into a long-term competitive advantage.",
            url: "/services",
        },
    ],
};

const scalableHighlightData2 = {
    eye: 'WHY CHOOSE US',
    title: "Why Choose Mematdigi as Your ",
    titleSpan: "IT Consulting Company in India",
    paragraphs: [
        "At Mematdigi, we built our reputation as a trusted IT consulting company in india by treating technology as what it should be - a business enabler, not a business burden. We are not the IT consulting firm that recommends the most expensive solution or the one that generates the most implementation fees. We are the IT consultancy services partner that starts with your business objective, recommends the right technology to achieve it, and stays involved through implementation and beyond to ensure the investment actually delivers. Our technology consulting capabilities cover every dimension of modern business IT - from cloud consulting services and software consulting to digital transformation consulting and business process automation - all delivered by a team with genuine cross-industry expertise and a business-first approach to every engagement.",
        "Whether you are a startup that needs an IT consulting company in india to build a scalable technology foundation from the ground up or an enterprise that needs specialist digital transformation consulting to modernize a complex, legacy IT environment - Mematdigi delivers the IT consulting services that make technology a genuine competitive advantage for your business. Transparent, business-aligned, and focused on the outcomes that actually drive sustainable growth.",
    ],
    features: [
        "IT consulting company in India trusted by 100+ businesses across healthcare, manufacturing, education, retail, and finance",
        "IT consultancy services covering the complete technology lifecycle - strategy, selection, implementation, and ongoing optimization",
        "Technology consulting with business-first methodology - every recommendation grounded in your specific business context and growth objectives",
        "Digital transformation consulting for businesses ready to modernize - phased, practical transformation that delivers results without disrupting operations",
        "Cloud consulting services - cloud readiness assessment, migration strategy, architecture design, and ongoing optimization under one roof",
        "Software consulting with vendor-neutral expertise - recommending the right solution for your business, not the solution with the best margins",
    ],
};

const faqData = {
    subTitle: "FAQs",
    subIcon: "tji-box",
    title: "Frequently Asked Questions About IT Consulting Services in India",
    phone: { display: "1-888-452-1505", tel: "18884521505" },
    items: [
        {
            title: "What does an IT consulting company do?",
            desc: "An IT consulting company in india helps businesses make better technology decisions - evaluating existing systems, developing IT strategies, recommending the right software and infrastructure, and guiding implementation to ensure technology investments deliver measurable business outcomes. At Mematdigi, our IT consulting services combine business consulting depth with technology expertise to build strategies that genuinely work for your specific business context.",
            initActive: true,
        },
        {
            title: "How can IT consulting improve my business?",
            desc: "Technology consulting improves your business by aligning IT investments to specific business outcomes - reducing operational costs through automation, improving efficiency through better-integrated systems, enabling faster growth through scalable infrastructure, and eliminating the manual workarounds and disconnected tools that slow every team down. Our business technology solutions approach ensures every technology decision is justified by a clear business return.",
            initActive: false,
        },
        {
            title: "Do you provide cloud consulting services?",
            desc: "Yes. Our cloud consulting services cover the complete cloud journey - cloud readiness assessment, migration strategy, cloud architecture design, vendor selection, implementation support, and ongoing cloud optimization. Whether you are moving to AWS, Azure, Google Cloud, or a hybrid environment, our IT infrastructure consulting team builds the right cloud strategy for your specific business requirements and budget.",
            initActive: false,
        },
        {
            title: "Can you help with digital transformation?",
            desc: "Yes - digital transformation consulting is one of our core offerings. We guide businesses through the full transformation journey - assessing current capabilities, identifying the highest-impact transformation opportunities, building a phased technology roadmap, and managing implementation so your business modernizes effectively without disrupting the operations it depends on every day.",
            initActive: false,
        },
        {
            title: "Which industries benefit from IT consulting?",
            desc: "Every industry benefits from expert information technology consulting - but we have particular depth in healthcare, manufacturing, education, retail, finance, and logistics. Our enterprise IT consulting capabilities are especially valuable for organizations managing complex legacy environments, multi-system integration challenges, or large-scale digital transformation initiatives that require both technical expertise and business consulting depth.",
            initActive: false,
        },
        {
            title: "Do you provide ongoing support after implementation?",
            desc: "Yes - always. Our IT advisory services extend well beyond initial implementation - monitoring system performance, identifying optimization opportunities, supporting your team as requirements evolve, and providing the continuous improvement guidance that ensures your technology environment keeps pace with your business growth. Our managed IT consulting approach treats every client relationship as a long-term partnership, not a one-time project.",
            initActive: false,
        },
    ],
};

const contactData = {
    left: {
        subTitle: "CONTACT US NOW",
        title: "Ready to Transform Your Business With a Trusted IT Consulting Company in India?",
        desc: "Technology should help your business grow-not slow it down. Partner with Mematdigi for strategic IT consulting services that improve efficiency, modernize operations, and support long-term digital transformation. Whether you need cloud consulting, software consulting, business process automation, or enterprise technology solutions, our team delivers scalable solutions designed around your business goals.",
    },
    form: {
        subTitle: "Get Free Consultation",
        subIcon: "tji-box",
        title: "Drop Us a",
        titleSpan: "Line.",
        selectOptions: [
            { value: "0", optionName: "Choose an option" },
            { value: "1", optionName: "IT Strategy Consulting" },
            { value: "2", optionName: "Technology Consulting" },
            { value: "3", optionName: "Software Consulting" },
            { value: "4", optionName: "Cloud Consulting Services" },
            { value: "5", optionName: "Digital Transformation Consulting" },
            { value: "6", optionName: "Business Process Automation" },
            { value: "7", optionName: "Other IT Solution" },
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
                                        <ButtonPrimary text={"Get Free Consultation"} url={'/contact-us'}/>
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

export default function ItConsultingServices() {
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