import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Link from "next/link";

const About8 = () => {
	return (
		<section className="h9-about-section section-bottom-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-8 h9-sec-heading">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Get To Know Us
							</span>
						</div>
						<div className="h9-about-area">
							<div
								className="about-img-area h9-about-img wow fadeInLeft"
								data-wow-delay=".3s"
							>
								<div className="about-img overflow-hidden">
									<img
										data-speed=".8"
										src="/images/about/h9-about.webp"
										alt=""
									/>
								</div>
								
								{/* <div className="box-area">
									<div
										className="author-info wow fadeInUp"
										data-wow-delay=".3s"
									>
										<h4 className="title">Eade Marren</h4>
										<span className="designation">CEO & Founder</span>
									</div>
								</div> */}
							</div>
							<div className="h9-about-content">
							<h2
								className="sec-title title-highlight wow fadeInUp"
								data-wow-delay=".3s"
							>
								We Create What You Dream - Creative <span>Digital Marketing Solutions</span>
							</h2>
								<p className="desc wow mt-5 fadeInUp" data-wow-delay=".4s">
									Since 2019, Mematdigi has been helping businesses achieve measurable growth through innovative digital marketing in India. As a leading AI-Powered digital marketing company in India, we combine AI-powered digital marketing, digital business solutions, automation, and digital and technology solutions to help brands increase visibility, generate leads, and drive long-term business success.
								</p>
								{/* <div
									className="h9-about-funfact wow fadeInUp"
									data-wow-delay=".6s"
								>
									<div className="countup-item">
										<FunfactSingle currentValue={20} symbol={"M"} />
										<span className="count-text">
											Reach Worldwide empower dreams everywhere.
										</span>
									</div>
									<div className="countup-item">
										<FunfactSingle currentValue={8.5} symbol={"X"} />
										<span className="count-text">
											Faster Growth starts smart solutions today.
										</span>
									</div>
								</div> */}
								<div
									className="about-btn-area-2 wow fadeInUp mt-5"
									data-wow-delay=".7s"
								>
									<ButtonPrimary text={"About Us"} url={"/about-us"} />
									<PopupVideo>
										<Link
											className="video-btn video-popup glightbox"
											data-autoplay="true"
											data-vbtype="video"
											data-maxwidth="1200px"
											href="https://www.youtube.com/watch?v=MLpWrANjFbI"
										>
											{/* <span className="play-btn">
												<i className="tji-play"></i>
											</span> */}
											{/* <span className="video-text">Play our reels</span> */}
										</Link>
									</PopupVideo>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About8;
