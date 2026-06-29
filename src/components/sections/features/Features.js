import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features = ({ type }) => {
	const features = [
		{
			title: "Healthcare ",
			desc: "Digital solutions that build patient trust and drive clinic growth",
			icon: "tji-innovative",
		},
		{
			title: "Real Estate",
			desc: "Lead generation and brand visibility for property businesses",
			icon: "tji-award",
		},
		{
			title: "Education",
			desc: "Marketing strategies that attract students and build institutional authority",
			icon: "tji-support",
		},
		{
			title: "Ecommerce",
			desc: "Performance-driven campaigns that turn traffic into sales",
			icon: "tji-innovative",
		},
		{
			title: "Finance & Fintech",
			desc: "Compliant, ROI-focused digital marketing for financial brands",
			icon: "tji-award",
		},
		{
			title: "SaaS & Technology",
			desc: "Growth marketing for tech companies that need qualified leads",
			icon: "tji-support",
		},
	];

	return (
		<section id="choose" className="tj-choose-section pt-5">
			<div className="container">
				<div className="row">
					<div className="col-12">
							<div className="sec-heading text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Industries We Serve
								</span>
								<h2 className="sec-title title-anim">
									Serving Businesses Across Key Industries in <span>India</span>
								</h2>
							</div>
					</div>
				</div>
				<div className="row row-gap-4 rightSwipeWrap">
					{features.map((feature, idx) => (
						<div key={idx} className="col-lg-4">
							<FeatureCard feature={feature} idx={idx} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Features;
