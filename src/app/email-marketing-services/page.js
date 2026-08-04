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
  title: "Best Email Marketing Company in India | Memat Digi",
  description:
    "Memat Digi is a best email marketing company in India delivering strategy, automation, and campaigns that drive real opens, clicks, and revenue. Get your free audit today.",
  alternates: {
    canonical: "https://www.mematdigi.com/email-marketing-services",
  },
};


const chooseData = {
    subTitle: "COMMON EMAIL MARKETING CHALLENGES",
    subIcon: "tji-box",
    title: "Why Most Email Campaigns Get Ignored or Land in Spam",
    desc: "",
    banner: "/images/choose/h8-choose-bnner.webp",
    boxes: [
        {
            icon: "tji-innovative",
            title: "Poor Email Strategy",
            desc: "Sending the same message to every subscriber without segmentation, personalization, or a clear campaign strategy leads to low open rates, weak engagement, and missed revenue opportunities.",
        },
        {
            icon: "tji-award",
            title: "Low Deliverability",
            desc: "Poor sender reputation, weak list hygiene, and incorrect technical setup often cause emails to land in spam instead of your customers' inboxes, reducing campaign performance.",
        },
        {
            icon: "tji-support",
            title: "No Measurable Results",
            desc: "Without email automation, conversion tracking, and performance analysis, businesses struggle to understand what works, improve engagement, or generate consistent leads and revenue through email marketing.",
        },
    ],
};

const servicesData = {
    subTitle: "WHAT WE OFFER",
    subIcon: "tji-box",
    title: "Our Email Marketing Services for Businesses Across India",
    desc: "From strategy and email copywriting to automation and performance tracking - complete email marketing services built to drive opens, clicks, and revenue for your business.",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Email Strategy & Planning",
            desc: "We build a complete email marketing strategy around your audience, your goals, and your existing list - mapping out campaign types, sending frequency, segmentation approach, and automation triggers before a single email is written.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Email Copywriting",
            desc: "Words sell. Our email copywriting service produces subject lines that get opened, body copy that holds attention, and CTAs that get clicked - written for your specific audience, your specific offer, and the specific action you want them to take.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Campaign Design & Development",
            desc: "Visually compelling, mobile-optimized email templates designed and coded for maximum deliverability and engagement - every design built around your brand identity and tested across every major email client before it reaches your list.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "List Building & Segmentation",
            desc: "A well-segmented list is the foundation of effective email marketing. We build list growth strategies and segment your existing contacts by behavior, purchase history, engagement level, and lifecycle stage - so the right message reaches the right person every time.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Email Automation",
            desc: "From welcome sequences and abandoned cart emails to re-engagement campaigns and post-purchase flows - our email automation services set up the triggered campaigns that run in the background, nurturing leads and retaining customers without manual effort.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "B2B Email Marketing",
            desc: "B2B email marketing requires precision targeting, professional tone, and content that speaks directly to business decision-makers. We build outreach sequences, nurture campaigns, and account-based email strategies that generate qualified B2B leads consistently.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Ecommerce Email Marketing",
            desc: "For ecommerce brands, email is your most powerful retention channel. We build and manage welcome flows, abandoned cart recovery, product recommendations, seasonal campaigns, and loyalty emails that drive repeat purchases and increase customer lifetime value.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Email Campaign Management",
            desc: "End-to-end email campaign management - from planning and copywriting to scheduling, sending, and performance analysis. We handle every element of your email marketing so you can focus on running your business while the revenue comes in.",
            url: "/services",
        },
        {
            icon: "tji-service-1",
            title: "Performance Tracking & Reporting",
            desc: "We track open rates, click rates, conversion rates, revenue generated, and list health - delivering clear monthly reports that show exactly what our email marketing services in India are delivering and where the next optimization opportunity lies.",
            url: "/services",
        },
    ],
};

const solutionsData = {
    subTitle: "WHO WE SERVE",
    title: "Email Marketing Services for Every Business Type",
    moreText: "More Services",
    moreUrl: "/services",
    items: [
        {
            icon: "tji-service-1",
            title: "Startups & Small Businesses",
            url: "/services",
            desc: "Email marketing for small businesses does not need to be complicated or expensive - it needs to be strategic. Our best email marketing company in India works with startups to build lean, effective email programs that nurture leads, retain early customers, and drive consistent revenue from a channel that costs a fraction of paid advertising.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "D2C & Ecommerce Brands",
            url: "/services",
            desc: "For D2C brands, email is the retention engine that keeps customers coming back after the first purchase. Our email marketing services cover the full ecommerce lifecycle - acquisition flows, abandoned cart recovery, post-purchase sequences, and loyalty campaigns that increase repeat purchase rate and customer lifetime value at scale.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        {
            icon: "tji-service-1",
            title: "B2B & Enterprise Companies",
            url: "/services",
            desc: "B2B buying decisions take time and involve multiple stakeholders. Our email marketing agency in India builds sophisticated nurture sequences, account-based email campaigns, and sales enablement content that keeps your brand top of mind throughout long sales cycles - turning cold prospects into warm leads and warm leads into closed deals.",
            list: ["Expansion Strategies", "Operational Efficiency", "Competitive Edge"],
        },
        // Aur solutions add karne ho to yahan object push kar do ⬇️
    ],
};

const featuresData = {
    subTitle: "INDUSTRIES WE SERVE",
    subIcon: "tji-box",
    title: "Industries We Serve With Our Email Marketing Services in India",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Healthcare",
            desc: "Patient education emails, appointment reminders, health newsletters, and re-engagement campaigns that build trust and drive consistent clinic visits",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Real Estate",
            desc: "Property alert emails, market update newsletters, and lead nurture sequences that keep buyers and investors engaged through long decision cycles",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Education",
            desc: "Student enrollment email campaigns, course promotion sequences, and alumni engagement programs that drive admissions and build institutional loyalty",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Ecommerce",
            desc: "Full ecommerce email automation - welcome flows, abandoned cart recovery, product recommendations, and seasonal campaigns that maximize revenue per subscriber",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Finance & Fintech",
            desc: "Compliant, trust-building email campaigns for financial brands that educate subscribers, build credibility, and generate qualified leads through strategic nurture sequences",
        },
        {
            id: 6,
            icon: "tji-support",
            title: "SaaS & Technology",
            desc: "Trial activation emails, onboarding sequences, feature announcement campaigns, and churn prevention flows that improve retention and grow monthly recurring revenue",
        },
    ],
};

const scalableHighlightData = {
    eye: 'BUSINESS CHALLENGES',
    title: "Email Marketing Challenges Every Business in India Faces -",
    titleSpan: "And How We Fix Them",
    paragraphs: [
        "Most businesses that come to us are either not doing email marketing at all or doing it in a way that is actively damaging their sender reputation and list health. They are sending the same email to everyone, ignoring unsubscribes, using purchased lists, and wondering why their open rates are declining every month. As the best email marketing company in India trusted by 100+ businesses across industries, we have diagnosed and fixed every version of broken email marketing - and we know exactly what it takes to turn a dormant list into a consistent revenue channel.",
    ],
    features: [
        "Single-digit open rates - because subject lines are generic and sender reputation has been damaged by poor list hygiene",
        "No segmentation strategy - sending the same message to cold leads and loyal customers and wondering why neither converts",
        "Emails landing in spam - because technical deliverability setup was never done correctly from the start",
        "No automation in place - missing the highest-converting email touchpoints like welcome sequences and abandoned cart flows",
        "List decay going unmanaged - inactive subscribers dragging down deliverability and open rates for the entire list",
        "No performance tracking - making it impossible to know which campaigns are working and which are wasting budget",
    ],
};

const servicesData9 = {
    subTitle: "OUR PROCESS",
    title: "How We Deliver Our Email Marketing Services",
    moreText: "More services",
    moreUrl: "/services",
    items: [
        {
            id: 1,
            icon: "tji-innovative",
            title: "Audit & List Analysis",
            desc: "We start with a complete audit of your existing email setup - list health, deliverability scores, historical campaign performance, automation gaps, and segmentation quality. We fix the foundation before we send a single campaign so every email starts with the best possible chance of landing in the inbox.",
            url: "/services",
        },
        {
            id: 2,
            icon: "tji-award",
            title: "Strategy & Segmentation Planning",
            desc: "We build your complete email marketing strategy - campaign types, sending frequency, segmentation framework, automation triggers, and content themes - all mapped to your audience lifecycle and your specific business goals before any email copywriting begins.",
            url: "/services",
        },
        {
            id: 3,
            icon: "tji-team",
            title: "Email Copywriting & Design",
            desc: "Our email copywriting team writes every campaign from scratch - subject lines tested for open rate, body copy built for engagement, and CTAs designed to convert. Every email is paired with a mobile-optimized design and tested across major email clients before it goes near your list.",
            url: "/services",
        },
        {
            id: 4,
            icon: "tji-support",
            title: "Campaign Launch & Automation",
            desc: "We set up and launch your campaigns and automation flows with precision - list segmentation applied, sending times optimized, and technical deliverability checks completed. Your email marketing runs consistently whether we are actively sending a campaign or your automation is working in the background.",
            url: "/services",
        },
        {
            id: 5,
            icon: "tji-support",
            title: "Tracking, Reporting & Optimization",
            desc: "Monthly performance reports covering open rates, click rates, conversion rates, revenue generated, and list health trends. Every metric explained in plain language, every insight connected to a specific optimization we will test in the next cycle to keep your email marketing services improving month on month.",
            url: "/services",
        },
    ],
};

const scalableHighlightData2 = {
    eye: 'WHY CHOOSE US',
    title: "Why Choose Mematdigi as Your ",
    titleSpan: "Email Marketing Company in India",
    paragraphs: [
        "At Mematdigi, we built our reputation as the best email marketing company in India by treating email as what it actually is - the highest ROI marketing channel available to any business, when it is done right. We are not the email marketing services agency that blasts the same message to your entire list and reports on opens. We are the result oriented email marketing agency in India that builds proper strategy, proper segmentation, proper automation, and proper email copywriting - and measures success by revenue generated, not emails sent. As a full-service email marketing company in India, we manage every element of your email program so you get consistent results without the complexity of managing it yourself.",
        "Whether you are a startup looking to build your first email list or an enterprise that needs a full-service email marketing company in India to manage complex automation and segmentation at scale - Mematdigi delivers email marketing services in India that turn your list into one of your most reliable revenue channels. Stop sending emails that nobody opens and start building an email program that actually grows your business.",
    ],
    features: [
        "Best email marketing company in India - 100+ businesses served with measurable improvements in open rates, conversions, and email revenue",
        "Email marketing agency in India with full-service delivery - strategy, copywriting, design, automation, and reporting under one roof",
        "Email marketing for small business - affordable, lean email programs that prove ROI fast before scaling up investment",
        "Hire email marketing expert - dedicated specialists who manage your list, your campaigns, and your deliverability as a priority",
        "Email marketing service provider in India with transparent pricing - clear deliverables, no hidden fees, no lock-in surprises",
        "Result oriented email marketing agency India - every campaign tied to revenue metrics, not vanity open rate statistics",
    ],
};

const faqData = {
    subTitle: "FAQs",
    subIcon: "tji-box",
    title: "Frequently Asked Questions About Email Marketing Services in India",
    phone: { display: "1-888-452-1505", tel: "18884521505" },
    items: [
        {
            title: "What does an email marketing company in India do? ",
            desc: "An email marketing company in India builds and manages your complete email program - strategy, list management, campaign design, email copywriting, automation setup, and performance reporting. At Mematdigi, our email marketing services in India go beyond sending campaigns - we build systems that nurture leads, retain customers, and generate consistent revenue through email.",
            initActive: true,
        },
        {
            title: "How much do email marketing services cost in India? ",
            desc: "Email marketing service provider costs in India typically range from ₹8,000 to ₹40,000+ per month depending on list size, campaign volume, and automation complexity. As a trusted email marketing agency in India, Mematdigi prices based on what your program actually needs - with complete pricing transparency and no post-signup surprises regardless of your budget.",
            initActive: false,
        },
        {
            title: "Do you offer email marketing for small businesses? ",
            desc: "Yes - email marketing for small businesses is one of our most popular services. We build lean, high-impact email programs for small businesses that focus on the highest-converting campaigns first - welcome sequences, nurture flows, and promotional campaigns - proving ROI at a small scale before investing in more complex automation and segmentation.",
            initActive: false,
        },
        {
            title: "Can I hire a dedicated email marketing expert? ",
            desc: "Yes. When you hire an email marketing expert from Mematdigi, you get a dedicated specialist assigned to your account - managing your campaigns, monitoring your list health, optimizing your deliverability, and proactively improving your results every month. As a result oriented email marketing agency India, we assign experts who treat your email program as their own priority.",
            initActive: false,
        },
        {
            title: "How do you measure email marketing success? ",
            desc: "We track what actually matters - open rates, click rates, conversion rates, revenue influenced, and list health metrics like deliverability rate and unsubscribe rate. Our email campaign management reporting gives you clear monthly visibility into exactly how your email marketing agency in India investment is performing - in plain language without jargon.",
            initActive: false,
        },
        {
            title: "Do you offer email copywriting as part of your service?",
            desc: "Yes - email copywriting is included in every engagement. Our copywriters produce subject lines tested for open rate, body copy written for your specific audience, and CTAs designed to drive the action you want. Strong email copywriting is the single biggest lever for improving email performance, and it is a core part of every email marketing services in India program we deliver.",
            initActive: false,
        },
    ],
};

const contactData = {
    left: {
        subTitle: "CONTACT US NOW",
        title: "Ready to Grow Your Business With India's Best Email Marketing Company?",
        desc: "Ready to partner with a trusted email marketing company in India? Mematdigi delivers result-oriented email marketing services that increase engagement, improve conversions, and generate consistent revenue. From startups to enterprise businesses, we create customized email strategies designed for long-term customer relationships and measurable business growth.",
    },
    form: {
        subTitle: "Get a Call Now",
        subIcon: "tji-box",
        title: "Drop Us a",
        titleSpan: "Line.",
        selectOptions: [
            { value: "0", optionName: "Choose an option" },
            { value: "1", optionName: "Email Strategy & Planning" },
            { value: "2", optionName: "Email Copywriting" },
            { value: "3", optionName: "Campaign Design & Development" },
            { value: "4", optionName: "List Building & Segmentation" },
            { value: "5", optionName: "Email Automation" },
            { value: "6", optionName: "B2B Email Marketing" },
            { value: "7", optionName: "Ecommerce Email Marketing" },
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

export default function EmailMarketingServices() {
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