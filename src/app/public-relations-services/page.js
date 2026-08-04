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
  title: "PR Agency in India | Public Relations Services by Memat Digi",
  description:
    "Grow your brand with Memat Digi's public relations services in India. Build media visibility, earn trust, and generate more business opportunities.",
  alternates: {
    canonical: "https://www.mematdigi.com/public-relations-services",
  },
};

const chooseData = {
    subTitle: "COMMON PR CHALLENGES",
    subIcon: "tji-box",
    title: "Why Most Businesses Struggle to Get Media Attention and Build Brand Authority",
    desc: "",
    banner: "/images/choose/h8-choose-bnner.webp",
    boxes: [
        {
            icon: "tji-innovative",
            title: "Weak Media Presence",
            desc: "Many businesses have compelling stories but fail to gain media coverage because they lack the right PR strategy, journalist relationships, and newsworthy positioning.",
        },
        {
            icon: "tji-award",
            title: "Low Brand Authority",
            desc: "Without consistent press coverage, thought leadership, and third-party validation, businesses struggle to build credibility, earn customer trust, and stand out from competitors.",
        },
        {
            icon: "tji-support",
            title: "No Strategic PR Plan",
            desc: "Publishing press releases alone is not enough. Without proactive media outreach, crisis communication planning, and brand storytelling, businesses miss valuable opportunities to strengthen their reputation and market presence.",
        },
    ],
};

const servicesData = {
    subTitle: "WHAT WE OFFER",
    subIcon: "tji-box",
    title: "Our PR Services for Businesses Across India",
    desc: "From digital PR and media relations to crisis communication and thought leadership - complete PR services built to build brand authority and drive real media presence.",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Digital PR",
            desc: "We build online brand authority through strategic digital PR - earning high-quality media coverage, authoritative backlinks, and brand mentions across the publications your target audience actually reads and trusts.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Media Relations & Outreach",
            desc: "We build and maintain genuine relationships with journalists, editors, and influencers in your industry - ensuring your brand has a trusted voice ready to tell your story when news breaks or opportunities arise.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Press Coverage & Press Releases",
            desc: "We craft press releases and story pitches that journalists want to cover - compelling angles, newsworthy hooks, and perfect timing that maximizes your chances of earning press coverage in the publications that matter.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Crisis Communication",
            desc: "When a reputation crisis hits, how fast you respond and what you say determines the outcome. Our crisis communication services provide rapid response strategy, message control, and stakeholder communication that contains damage and protects your brand.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Corporate Communications",
            desc: "Consistent, strategic corporate communications services that align your internal and external messaging - investor communications, employee announcements, stakeholder updates, and corporate storytelling that builds long-term institutional credibility.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Brand Reputation Management",
            desc: "We proactively build and protect your brand reputation through strategic media placement, positive content creation, and ongoing monitoring - ensuring your brand is perceived exactly the way you want it to be.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Online PR Management",
            desc: "We manage your complete online PR presence - monitoring brand mentions, managing digital narratives, responding to emerging stories, and building the kind of consistent online presence that strengthens your reputation over time.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Thought Leadership",
            desc: "We position your founders, executives, and subject matter experts as recognized authorities in their field - through bylined articles, speaking opportunities, expert commentary, and content that builds personal and brand credibility simultaneously.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Communication Strategy",
            desc: "A clear, coherent communication strategy is the foundation of every successful PR campaign. We build yours from the ground up - defining your brand narrative, key messages, target media, and PR objectives aligned to your business goals.",
            url: "/services",
        },
    ],
};

const solutionsData = {
    subTitle: "WHO WE SERVE",
    title: "PR Services for Every Business Type in India",
    moreText: "More Services",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Startups & Small Businesses",
            url: "/services",
            desc: "Getting media attention as a new brand is one of the hardest things to do without the right relationships and the right story. Our PR agency in India works with startups to craft compelling brand narratives, build early media credibility, and create the kind of press coverage that attracts investors, partners, and customers who would otherwise never have heard of you.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "D2C & Ecommerce Brands",
            url: "/services",
            desc: "Consumer brand PR is about building the kind of media presence and social proof that makes customers choose you over competitors they find on the same page. Our online PR agency builds product coverage, influencer relationships, and brand authority for D2C brands that need more than paid advertising to build lasting consumer trust.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "B2B & Enterprise Companies",
            url: "/services",
            desc: "Enterprise PR requires a different level of sophistication - investor communications, industry media positioning, executive thought leadership, and corporate communications services that speak credibly to the business audiences that influence enterprise buying decisions and strategic partnerships.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        // Aur solutions add karne ho to yahan object push kar do ⬇️
    ],
};

const featuresData = {
    subTitle: "INDUSTRIES WE SERVE",
    subIcon: "tji-box",
    title: "Industries We Serve With Our PR Services in India",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Healthcare",
            desc: "Patient trust building and medical authority PR for clinics, hospitals, and health brands that need credible third-party validation from trusted media",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Real Estate",
            desc: "Project credibility and developer reputation building for real estate brands where media coverage directly influences buyer confidence and sales",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Education",
            desc: "Institutional authority and admissions-driving PR for schools, colleges, and edtech brands where reputation is the primary decision factor",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Ecommerce",
            desc: "Consumer brand building and product press coverage for ecommerce businesses that need media attention to stand out in crowded markets",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Finance & Fintech",
            desc: "Credibility-building and compliance-aware PR for financial brands where trust and regulatory perception directly impact customer acquisition",
        },
        {
            id: 6,
            icon: "tji-support",
            title: "SaaS & Technology",
            desc: "Thought leadership and product launch PR for tech companies that need industry media coverage to drive awareness among enterprise decision-makers",
        },
    ],
};

const scalableHighlightData = {
    eye: 'BUSINESS CHALLENGES',
    title: "PR Challenges Every Business in India Faces -",
    titleSpan: "And How We Fix Them",
    paragraphs: [
        "Most businesses that come to us have tried to handle PR themselves - sending press releases to generic email lists, posting on social media and hoping journalists notice, or paying for award submissions that nobody reads. They get no coverage, no authority, and no return from the time invested. As a leading PR agency in India trusted by 100+ businesses, we have seen every version of an invisible brand - and we know exactly what it takes to build a media presence that actually moves business outcomes.",
    ],
    features: [
        "No media coverage despite newsworthy work - because the right journalist relationships and story angles were never in place",
        "Press releases that go unread - because they were written like marketing copy rather than actual news stories",
        "No brand authority in the industry - leaving the space open for less capable competitors to dominate media perception",
        "No crisis communication plan - leaving businesses unprepared when a negative story breaks or a customer complaint goes viral",
        "Inconsistent brand messaging - creating confusion across media, social, and direct channels that undermines trust",
        "No thought leadership presence - missing the opportunity to position leadership as industry experts that media turns to for comment",
    ],
};

const servicesData9 = {
    subTitle: "OUR PROCESS",
    title: "How We Deliver Our PR Services in India",
    moreText: "More services",
    moreUrl: "/services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Brand & Media Audit",
            desc: "We start by auditing your current brand presence - existing coverage, media relationships, competitor positioning, and communication gaps. You get a clear picture of where your brand stands in the media landscape and exactly what needs to change.",
            url: "/services",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "PR Strategy & Communication Planning",
            desc: "We build a custom PR strategy and communication strategy around your business goals - defining your brand narrative, key messages, target publications, campaign angles, and a media calendar that keeps your brand consistently in front of the right audiences.",
            url: "/services",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Media Outreach & Relationship Building",
            desc: "We leverage existing journalist relationships and build new ones relevant to your industry - pitching compelling stories, securing interviews, and positioning your brand as the go-to source for expert comment in your sector.",
            url: "/services",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Press Coverage & Content Placement",
            desc: "We execute the strategy - securing press coverage, placing bylined articles, arranging speaking opportunities, and managing every piece of media engagement that builds your brand authority month over month.",
            url: "/services",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Monitoring & Reputation Reporting",
            desc: "We monitor every mention of your brand across media and deliver clear monthly reports showing coverage secured, reach achieved, sentiment trends, and the ongoing impact of your PR services in India on brand authority and business outcomes.",
            url: "/services",
        },
    ],
};

const scalableHighlightData2 = {
    eye: 'WHY CHOOSE US',
    title: "Why Choose Mematdigi as Your ",
    titleSpan: "PR Agency in India",
    paragraphs: [
        "At Mematdigi, we have built our reputation as a trusted PR agency in India by focusing on what actually moves business outcomes - not just press releases sent into the void, but real media relationships, compelling brand narratives, and strategic digital PR that earns coverage in the publications your audience actually reads. We are the online PR agency that combines traditional media expertise with digital public relations capabilities - because modern brand authority requires both. As a full-service digital PR agency India, we handle every element of your public relations from communication strategy and media outreach to crisis communication services and reputation management services.",
        "Whether you are a startup that needs a PR consultancy services partner to build your first media presence or an enterprise that needs comprehensive corporate reputation and communication strategy management - Mematdigi delivers the best PR services with the media relationships, strategic depth, and digital PR capability to build brand authority that drives real business growth. Online PR services that position your brand exactly where your audience, investors, and partners are looking.",
    ],
    features: [
        "PR agency in India with proven media relationships across national, industry, and digital publications",
        "Digital PR agency India covering online coverage, authority backlinks, and digital brand presence simultaneously",
        "Online PR agency managing your complete digital narrative - mentions, coverage, and brand perception across every online channel",
        "PR consultancy services built around your goals - strategy-first, results-focused, and transparent at every stage",
        "Crisis communication services ready to deploy - rapid response protocols protecting your brand when reputation threats emerge",
        "Brand reputation management for the long term - building the kind of earned media authority that paid advertising simply cannot replicate",
    ],
};

const faqData = {
    subTitle: "FAQs",
    subIcon: "tji-box",
    title: "Frequently Asked Questions About PR Services in India",
    phone: { display: "1-888-452-1505", tel: "18884521505" },
    items: [
        {
            title: "What does a PR agency in India do? ",
            desc: "A PR agency in India builds and manages your brand's relationship with media, journalists, and the public - through press coverage, thought leadership, crisis communication, and strategic storytelling. At Mematdigi, our public relations services go beyond press releases - we build the kind of brand authority that influences how every stakeholder perceives your business.",
            initActive: true,
        },
        {
            title: "How is digital PR different from traditional PR? ",
            desc: "Traditional PR focuses on print and broadcast media relationships. Digital public relations extends this to online publications, blogs, podcasts, and influencer networks - with the added benefit of earning SEO-valuable backlinks alongside brand coverage. Our digital PR services combine both approaches to build brand authority across every channel where your audience finds information.",
            initActive: false,
        },
        {
            title: "How much do PR services cost in India? ",
            desc: "PR services in India typically range from ₹20,000 to ₹1,50,000+ per month depending on campaign scope, media targets, and whether crisis communication is included. At Mematdigi, we offer the best PR services at transparent pricing built around your specific PR objectives - with clear deliverables and no vague retainer arrangements.",
            initActive: false,
        },
        {
            title: "Do you offer crisis communication services? ",
            desc: "Yes. Our crisis communication services include rapid response strategy, message control protocols, media statement drafting, and stakeholder communication management. Combined with our corporate communications services, we help businesses respond effectively to reputation crises - minimizing damage and guiding the recovery of brand trust.",
            initActive: false,
        },
        {
            title: "How do you measure PR campaign success? ",
            desc: "We measure PR success through press coverage secured, publication reach and authority, media engagement rates, share of voice against competitors, and reputation sentiment trends. Our monthly reports give you clear visibility into exactly how every element of your PR investment is building brand authority and media presence.",
            initActive: false,
        },
        {
            title: "Do you offer online PR services for small businesses?",
            desc: "Yes. Our online PR services are designed to be accessible for businesses at every stage - including startups and small businesses that need PR consultancy services to build their first meaningful media presence. We scale our approach to your budget and your PR goals, focusing on the highest-impact opportunities first.",
            initActive: false,
        },
    ],
};

const contactData = {
    left: {
        subTitle: "CONTACT US NOW",
        title: "Ready to Build Your Brand Authority With India's Leading PR Agency?",
        desc: "Ready to partner with a trusted PR agency in India? Mematdigi delivers strategic PR services that strengthen media presence, build brand authority, and enhance business credibility. From startups to enterprise brands, we create result-driven public relations strategies designed for long-term reputation, trust, and sustainable business growth.",
    },
    form: {
        subTitle: "Get a Call Now",
        subIcon: "tji-box",
        title: "Drop Us a",
        titleSpan: "Line.",
        selectOptions: [
            { value: "0", optionName: "Choose an option" },
            { value: "1", optionName: "Digital PR" },
            { value: "2", optionName: "Media Relations & Outreach" },
            { value: "3", optionName: "Press Coverage & Press Releases" },
            { value: "4", optionName: "Crisis Communication" },
            { value: "5", optionName: "Corporate Communications" },
            { value: "6", optionName: "Brand Reputation Management" },
            { value: "7", optionName: "Thought Leadership" },
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

export default function PublicRelationServices() {
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