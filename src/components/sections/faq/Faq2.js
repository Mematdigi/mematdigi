import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FaqItem from "@/components/shared/faq/FaqItem";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";

const Faq2 = ({ type = 1 }) => {
	const items = [
		{
			title: "What services does Memat Digi provide?",
			desc: "Memat Digi offers comprehensive digital solutions including SEO, digital marketing, content marketing, website development, mobile app development, AI consulting, ORM services, and lead generation strategies. Our goal is to help businesses improve online visibility, attract qualified customers, strengthen brand authority, and achieve sustainable growth through data-driven marketing and technology solutions.",
			initActive: true,
		},
		{
			title: "How do I get started with Memat Digi?",
			desc: "Getting started is easy. Simply contact our team through our website, phone, or email to schedule a consultation. We take time to understand your business goals, challenges, and target audience before recommending a customized strategy. From planning to execution, our team guides you through every step of the process.",
			initActive: false,
		},
		{
			title: "How do you ensure the success of a project?",
			desc: "We follow a structured approach built on research, strategy, execution, and continuous optimization. Every project begins with understanding your business objectives and market landscape. We track key performance indicators, analyze results, and make data-driven improvements to ensure campaigns remain aligned with your goals and deliver measurable business outcomes.",
			initActive: false,
		},
		{
			title: "How long will it take to complete my project?",
			desc: "Project timelines vary depending on the scope, complexity, and specific requirements. Website development projects may take a few weeks, while SEO and digital marketing campaigns require ongoing optimization for long-term success. Before starting, we provide clear timelines, milestones, and regular updates so expectations remain transparent throughout the engagement.",
			initActive: false,
		},
		{
			title: "Can I track the progress of my project?",
			desc: "Yes. Transparency is a core part of our process. Clients receive regular updates, detailed performance reports, and direct communication with our team. Whether it's a website project, SEO campaign, or digital marketing strategy, you'll have clear visibility into progress, key metrics, completed tasks, and the results being achieved.",
			initActive: false,
		},
	];
	return (
		<section
			className={`tj-faq-section section-gap  ${
				type === 3 || type === 4 ? "" : "tj-arrange-container-2"
			}`}
		>
			<div className="container">
				<div className="row justify-content-between">
					{type === 3 ? (
						<div className="col-lg-4">
							<div className="content-wrap">
								<div className="sec-heading">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-box"></i>Common Questions
									</span>
									<h2 className="sec-title title-anim">
										 Frequently Asked Questions About <span>Memat Digi</span>
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".6s">
									Find answers to the most common<br/> questions about working with Memat Digi.
								</p>
								<div className="wow fadeInUp" data-wow-delay=".8s">
									<ButtonPrimary text={"Request a Call"} url={"/contact-us"} />
								</div>
							</div>
						</div>
					) : (
						<div className="col-lg-6">
							<div
								className={`faq-img-area ${
									type === 3 ? "" : "tj-arrange-item-2"
								}`}
							>
								<div className="faq-img overflow-hidden">
									<Image
										src="/images/faq/faq.webp"
										alt=""
										width={585}
										height={629}
									/>
									<h2 className={`title ${type === 4 ? "title-anim" : ""}`}>
										Need Help? Start Here...
									</h2>
								</div>
								<div className="box-area ">
									<div className="call-box">
										<h4 className="title">Get Started Free Call? </h4>
										<span className="call-icon">
											<i className="tji-phone"></i>
										</span>
										<Link className="number" href="tel:18884521505">
											<span>1-888-452-1505</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					)}

					<div className={`col-lg-${type === 3 ? "8" : "6"}`}>
						<BootstrapWrapper>
							<div
								className={`accordion tj-faq ${
									type === 2 || type === 4 ? "style-2" : ""
								} ${type === 3 || type === 4 ? "" : "tj-arrange-item-2"}`}
								id="faqOne"
							>
								{items?.length
									? items?.map((item, idx) => (
											<FaqItem key={idx} item={item} idx={idx} />
									  ))
									: ""}
							</div>
						</BootstrapWrapper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Faq2;
