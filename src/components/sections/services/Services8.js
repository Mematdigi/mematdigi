import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";

const Services8 = () => {
	return (
		<section className="h8-service overflow-hidden section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-3 sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>What We Do
							</span>
							<h2 className="sec-title title-anim">
								AI-Powered Digital Marketing & Technology Services for Businesses Across India
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="container gap-30">
				<div className="row">
					<div className="col-12">
						<div
							className="service-wrapper h8-service-wrapper  wow bounceInLeft"
							data-wow-delay=".3s"
						>
							<div className="row">
								<div className="col-12 col-md-6 col-xl-4">
									<div className="service-item h8-service-item">
										<div className="service-icon">
											<i className="tji-service-1"></i>
										</div>
										<h4 className="title">
											Website Development
										</h4>
										<div className="service-content">
											<p className="desc">
												We build fast, SEO-friendly, and conversion-focused websites that turn visitors into customers. From business websites to ecommerce.
											</p>
										</div>
										<ButtonPrimary text={"Visit Now"} url={"/services"} />
									</div>
								</div>
								<div className="col-12 col-md-6 col-xl-4">
									<div className="service-item h8-service-item">
										<div className="service-icon">
											<i className="tji-service-1"></i>
										</div>
										<h4 className="title">
											Digital Marketing
										</h4>
										<div className="service-content">
											<p className="desc">
												Result-driven digital marketing services powered by AI - SEO, PPC, social media, and more - designed to generate leads and measurable ROI.
											</p>
										</div>
										<ButtonPrimary text={"Visit Now"} url={"/services"} />
									</div>
								</div>
								<div className="col-12 col-md-6 col-xl-4">
									<div className="service-item h8-service-item">
										<div className="service-icon">
											<i className="tji-service-1"></i>
										</div>
										<h4 className="title">
											Mobile App Development
										</h4>
										<div className="service-content">
											<p className="desc">
												From iOS and Android to cross-platform apps - we build scalable, high-performance mobile applications tailored to your business needs.
											</p>
										</div>
										<ButtonPrimary text={"Visit Now"} url={"/services"} />
									</div>
								</div>
							</div>

							<div className="row mt-3">
								<div className="col-12 col-md-6 col-xl-4">
									<div className="service-item h8-service-item">
										<div className="service-icon">
											<i className="tji-service-1"></i>
										</div>
										<h4 className="title">
											AI Consulting
										</h4>
										<div className="service-content">
											<p className="desc">
												Our experts help businesses adopt AI-powered digital marketing strategies, automate workflows and leverage data intelligence to improve customer acquisition.
											</p>
										</div>
										<ButtonPrimary text={"Visit Now"} url={"/services"} />
									</div>
								</div>
								<div className="col-12 col-md-6 col-xl-4">
									<div className="service-item h8-service-item">
										<div className="service-icon">
											<i className="tji-service-1"></i>
										</div>
										<h4 className="title">
											Content Marketing
										</h4>
										<div className="service-content">
											<p className="desc">
												Strategic content that ranks, engages, and converts. From blog writing and SEO content to B2B content marketing - we build content that works.
											</p>
										</div>
										<ButtonPrimary text={"Visit Now"} url={"/services"} />
									</div>
								</div>
								<div className="col-12 col-md-6 col-xl-4">
									<div className="service-item h8-service-item">
										<div className="service-icon">
											<i className="tji-service-1"></i>
										</div>
										<h4 className="title">
											ORM Services
										</h4>
										<div className="service-content">
											<p className="desc">
												Protect and strengthen your brand's online reputation with our proven ORM services - review management, crisis control, and reputation building.
											</p>
										</div>
										<ButtonPrimary text={"Visit Now"} url={"/services"} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col-12 item-center">
						<div className="h9-hero-cta wow fadeInUp" data-wow-delay="0.5s">
							<Link href="/services" className="h9-hero-btn">
								<span>More Services</span>
								<i className="fa-solid fa-arrow-right"></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services8;
