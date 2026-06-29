import Image from "next/image";
import Link from "next/link";

const PortfolioCard3 = () => {
	const portfolios = [
		{
			title: "Business & AI Consulting Website",
			img3: "/images/project/enh-consulting.png",
			shortDesc: "A professional consulting website developed for a Dubai-based firm offering business strategy, AI consulting, digital transformation, and startup advisory services. Designed with a modern corporate interface and structured service presentation to strengthen credibility and generate high-quality business inquiries.",
			id: "https://enh.consulting/", // Ensure IDs are unique
			category: "ENH Consulting",
			techStack: "MERN Stack Development",
			tags: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB'],
		},
		{
			title: "Custom Printing  & Print-on-Demand Store",
			img3: "/images/project/customfy.png",
			shortDesc: "The Customfy is an eCommerce platform specializing in personalized apparel and custom-printed products. Built to provide a seamless shopping experience, the website allows customers to explore, customize, and order high-quality products through an intuitive and responsive online store.",
			id: "https://www.thecustomfy.com/", // Ensure IDs are unique
			category: "Customfy",
			techStack: "Shopify Development",
			tags: ['Shopify', 'Liquid', 'HTML', 'CSS', 'JavaScript'],
		},
		{
			title: "Custom Packaging Solutions Website",
			img3: "/images/project/boxish.png",
			shortDesc: "A modern business website built for a packaging manufacturer offering custom boxes, paper bags, folding cartons, and wholesale packaging solutions. Developed with a user-friendly design and optimized navigation to simplify product discovery and generate business inquiries.",
			id: "https://www.boxish.in/", // Ensure IDs are unique
			category: "Boxish",
			techStack: "Shopify Development",
			tags: ['Shopify', 'Liquid', 'HTML', 'CSS', 'JavaScript'],
		},
		{
			title: "Business Insurance & Risk Management Platform",
			img3: "/images/project/bimaflow.png",
			shortDesc: "A modern insurance platform developed to help businesses secure comprehensive coverage, manage risks, and protect their operations. Designed with a professional user experience and streamlined service structure to simplify insurance discovery, policy management, and corporate risk protection.",
			id: "https://www.bimaflow.com/", // Ensure IDs are unique
			category: "Bimaflow",
			techStack: "PHP Laravel Development",
			tags: ['html', 'css', 'javascript', 'php', 'laravel', 'mysql'],
		},
		{
			title: "Insurance Management Platform",
			img3: "/images/project/policysaath.png",
			shortDesc: "A digital insurance management platform developed to help agents and agencies efficiently manage client records, policy data, renewals, and reporting. Designed with a user-friendly interface and centralized dashboard to streamline insurance operations and improve customer management.",
			id: "https://policysaath.com/", // Ensure IDs are unique
			category: "Policysaath",
			techStack: "MERN Stack Development",
			tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Next.js'],
		},
		{
			title: "News & Media Website",
			img3: "/images/project/flypped.png",
			shortDesc: "Flypped is a modern digital news platform built to deliver the latest news, trending stories, and informative content across various categories. Designed with a responsive layout and user-friendly navigation, the website offers a seamless reading experience while supporting efficient content management and long-term growth.",
			id: "https://flypped.com/", // Ensure IDs are unique
			category: "Flypped",
			techStack: "PHP Development",
			tags: ['html', 'css', 'javascript', 'php', 'CodeIgniter', 'MySQL'],
		},
	];

	return (
		<>
			<div className="col-md-12 d-flex justify-content-center flex-wrap mb-4"> {/* Added flex-wrap here */}
    {portfolios.map((portfolio, index) => (
        <div className="pf-card col-md-5 m-3" key={index}>
            {/* Browser chrome + screenshot */}
            <div className="pf-card__img-wrap">
                <div className="pf-card__browser-bar">
                    <span className="pf-card__dot" style={{ background: "#ff5f56" }} />
                    <span className="pf-card__dot" style={{ background: "#ffbd2e" }} />
                    <span className="pf-card__dot" style={{ background: "#27c93f" }} />
                </div>
                <div className="pf-card__screen">
                    <Image
                        src={portfolio.img3}
                        alt={portfolio.title}
                        width={620}
                        height={340}
                        className="pf-card__img"
                    />
                </div>
                <span className="pf-card__badge" style={{background:'#f08020'}}>{portfolio.category}</span>
            </div>

            {/* Card body */}
            <div className="pf-card__body">
                <div className="pf-card__meta">
                    <span className="pf-card__category">{portfolio.category}</span>
                    <span className="pf-card__sep">·</span>
                    <span className="pf-card__tech">{portfolio.techStack}</span>
                </div>

                <h3 className="pf-card__title">
                    <Link href={`/${portfolio.id}`}>{portfolio.title}</Link>
                </h3>

                <p className="pf-card__desc">{portfolio.shortDesc}</p>

                {/* Tech tags */}
                {portfolio.tags?.length > 0 && (
                    <div className="pf-card__tags">
                        {portfolio.tags.map((tag, i) => (
                            <span key={i} className="pf-card__tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <Link href={`${portfolio.id}`} className="pf-card__btn " target="_blank">
                    View Full Project
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    ))}
</div>
		</>
	);
};

export default PortfolioCard3;