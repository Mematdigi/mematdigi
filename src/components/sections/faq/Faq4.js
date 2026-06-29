import FaqItem2 from "@/components/shared/faq/FaqItem2";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Link from "next/link";

const Faq4 = () => {
	const items = [
		{
			title: "What does a digital marketing company in India do?",
			desc: "A digital marketing company in India helps businesses increase online visibility, attract qualified customers, and drive revenue through SEO, PPC, social media, content marketing, and AI-powered digital marketing strategies. The goal is to generate consistent leads, improve conversions, and support long-term business growth.",
			initActive: true,
		},
		{
			title: "How long does SEO take to show results?",
			desc: "SEO typically takes 3 to 6 months to deliver noticeable results, depending on your industry, competition, and website authority. As a digital marketing agency in India, we focus on sustainable SEO strategies that improve rankings, increase organic traffic, and generate long-term business growth rather than short-term gains.",
			initActive: false,
		},
		{
			title: "Is PPC better than SEO for business growth?",
			desc: "PPC generates immediate traffic and leads, while SEO builds long-term visibility and trust. The most effective approach combines both. A digital marketing company can use PPC for quick results and SEO for sustainable growth, helping businesses maximize ROI and strengthen their online presence.",
			initActive: false,
		},
		{
			title: "How do I choose the right digital marketing agency?",
			desc: "Choose a digital marketing agency in India with proven results, transparent reporting, and a strong focus on business growth. Review case studies, client testimonials, and their expertise in SEO, performance marketing, content strategy, and AI-powered digital marketing before making a decision.",
			initActive: false,
		},
		{
			title: "Can digital marketing generate real leads and sales?",
			desc: "Yes. When executed correctly, digital marketing can generate qualified leads, increase conversions, and drive sales. By combining SEO, paid advertising, content marketing, and AI-based digital marketing strategies, businesses can attract the right audience and achieve measurable growth.",
			initActive: false,
		},
		{
			title: "How much does digital marketing cost in India?",
			desc: "Digital marketing costs in India vary based on your goals, competition, and required services. Whether you need SEO, PPC, content marketing, or digital business solutions, a customized strategy ensures better ROI, improved performance, and results aligned with your business objectives.",
			initActive: false,
		},
	];
	return (
		<section className="h7-faq section-gap slidebar-stickiy-container">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-12 col-lg-4">
						<div className="sec-heading style-2 style-7 slidebar-stickiy">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> Common Questions
							</span>
							<h2 className="sec-title text-anim">
								Frequently Asked Questions About MematDigi
							</h2>
							<Link className="number" href="tel:18884521505">
								{" "}
								<span className="call-icon">
									<i className="tji-phone"></i>
								</span>
								<span>1-888-452-1505</span>
							</Link>
						</div>
					</div>
					<div className="col-12 col-lg-8">
						<BootstrapWrapper>
							<div
								className="accordion tj-faq style-2 h7-faq-wrapper"
								id="faqTwo"
							>
								{items?.length
									? items?.map((item, idx) => (
											<FaqItem2 key={idx} item={item} idx={idx} />
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

export default Faq4;
