import BrandSlider1 from "@/components/shared/brands/BrandSlider1";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Link from "next/link";

const About7 = () => {
	return (
		<section className="tj-about-section h8-about section-gap">
			<div className="container">
				<div className="row row-gap-4">
					<div className="col-12">
						<div
							className="about-content-area-2 wow fadeInUp"
							data-wow-delay=".3s"
						>
							<div className="sec-heading style-3">
								<div className="row">
									<div className="col-12 col-lg-4">
									</div>
									<div className="col-12 col-lg-12">
											<span
												className="sub-title wow fadeInUp"
												data-wow-delay=".3s"
											>
												<i className="tji-box"></i>Why Choose Us
											</span>
										<div className="h8-about-content-inner">
											<h2 className="sec-title title-highlight">
												Why Businesses Across India Choose Mematdigi for Their Digital Solutions
											</h2>
										</div>
									</div>
								</div>
								<div className="row align-items-center">
									
									<div className="col-12 col-lg-9" style={{padding:"0 15px"}}>
										<div className="h8-about-item-wrapper">
											{/* <div className="h8-about-item h8-about-item-counter">
												<div className="countup-item style-2">
													<div className="count-inner">
														<FunfactSingle currentValue={30} sup={"+"} />
														<span className="count-text">
															Years of Corporate Experience.
														</span>
													</div>
												</div>
											</div> */}
											<div>
												<div className="h8-about-item-content">
													<p className="desc">
														Mematdigi is recognized as one of the best digital marketing companies in India, helping businesses achieve measurable growth through AI-powered digital marketing, innovative digital business solutions, and advanced technology strategies. As a trusted AI digital marketing agency, we focus on real leads, conversions, and ROI. Since 2019, our experienced team has delivered transparent, data-driven results backed by dedicated support and continuous optimization.
													</p>
													<div
														className="about-btn-area-2 wow fadeInUp"
														data-wow-delay="1s"
													>
														<ButtonPrimary text={"Learn More"} url={"/about-us"} />
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-12 col-lg-3">
										<div className="h8-about-video">
											<img src="/images/about/h8-about.webp" alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid client-container-2 gap-top">
				<div className="row">
					<div className="col-12">
						<BrandSlider1 className="client-slider-3" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About7;
