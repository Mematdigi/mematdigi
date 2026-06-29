import Footer5 from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import About3 from "@/components/sections/about/About3";
import Faq2 from "@/components/sections/faq/Faq2";
import HeroInner from "@/components/sections/hero/HeroInner";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import FeatureCard from "@/components/shared/cards/FeatureCard";

export default function About() {

	const Features = () => {
	const features = [
		{
			title: "Growth-Focused Strategy",
			desc: "Every campaign starts with research, planning, and data-driven insights designed to maximize business growth.",
			icon: "tji-innovative",
		},
		{
			title: "Proven Industry Experience",
			desc: "Our team delivers practical digital solutions backed by years of experience across multiple industries.",
			icon: "tji-award",
		},
		{
			title: "Reliable Client Support",
			desc: "We provide transparent communication and dedicated support throughout every stage of your project.",
			icon: "tji-support",
		},
		{
			title: "AI-Powered Solutions",
			desc: "From automation to advanced analytics, we use AI to improve efficiency and marketing performance.",
			icon: "tji-innovative",
		},
		{
			title: "Performance-Driven Approach",
			desc: "We focus on qualified leads, conversions, and measurable results instead of vanity metrics.",
			icon: "tji-award",
		},
		{
			title: "Long-Term Partnerships",
			desc: "We work as an extension of your team to support sustainable growth and business success.",
			icon: "tji-support",
		},
	];

	return (
		<section id="choose" className="tj-choose-section pt-5">
			<div className="container">
				<div className="row">
					<div className="col-12">
							<div className="sec-heading text-center" style={{maxWidth:"1000px"}}>
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>CHOOSE THE BEST
								</span>
								<h2 className="sec-title title-anim">
									Building Brands Through Digital Innovation
								</h2>
								<p className="sec-text mt-3">
									At Memat Digi, we combine creativity, technology, and strategy to help businesses achieve measurable digital growth.
								</p>
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
	return (
		<div>
			<BackToTop />
			<Header/>
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner title={"About Us"} text={"About Us"} />
						<Features/>
						<About3 type={2} />
						<Testimonials2 type={2} />
						<Faq2 type={3} />
					</main>
					<Footer5 />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
