import Link from "next/link";

const Footer5 = () => {
	return (
		<footer className="tj-footer-section footer-2 h5-footer">
			<div className="footer-main-area pt-0">
				<div className="container">
					<div className="row justify-content-between">

						{/* Col 1 — Logo + Description + Socials */}
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget footer-col-1 wow fadeInUp"
								data-wow-delay=".1s"
							>
								<div className="footer-logo" style={{height: '44px', width:'238px'}}>
									<Link href="/">
										<img src="/images/logos/memat-logo-white.png" alt="Memat Digi Logo"/>
									</Link>
								</div>
								<div className="footer-text">
									<p>
										We Create what you dream and we earn what you appreciate.
										At MematDigi with our 360 digital and tech services we
										turn your ideas into impactful solutions that drive growth.
									</p>
								</div>
								{/* Social Icons — using fa-brands classes already in your project */}
								<div className="social-links style-3">
									<ul>
										<li>
											<Link href="https://www.facebook.com/" target="_blank">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/" target="_blank">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/" target="_blank">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
										<li>
											<Link href="https://wa.me/919136797555" target="_blank">
												<i className="fa-brands fa-whatsapp"></i>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>

						{/* Col 2 — Quick Links */}
						<div className="col-xl-2 col-md-6">
							<div
								className="footer-widget footer-col-2 widget-nav-menu wow fadeInUp p-0"
								data-wow-delay=".3s"
							>
								<h5 className="title">Quick Links</h5>
								<ul>
									<li>
										<Link href="/">Home</Link>
									</li>
									<li>
										<Link href="/about-us">About Us</Link>
									</li>
									<li>
										<Link href="/services">Services</Link>
									</li>
									<li>
										<Link href="/blogs">Blog</Link>
									</li>
									<li>
										<Link href="/portfolios">Portfolio</Link>
									</li>
									<li>
										<Link href="/contact-us">Contact Us</Link>
									</li>
								</ul>
							</div>
						</div>

						{/* Col 3 — Our Services */}
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget footer-col-3 widget-nav-menu wow fadeInUp"
								data-wow-delay=".5s"
							>
								<h5 className="title">Our Services</h5>
								<ul>
									<li>
										<Link href="/services/web-development">Web Development</Link>
									</li>
									<li>
										<Link href="/services/mobile-app-development">Mobile App Development</Link>
									</li>
									<li>
										<Link href="/services/digital-marketing">Digital Marketing</Link>
									</li>
									<li>
										<Link href="/services/seo">SEO</Link>
									</li>
									<li>
										<Link href="/services/ppc">PPC</Link>
									</li>
									<li>
										<Link href="/services/it-consultation">IT Consultation</Link>
									</li>
								</ul>
							</div>
						</div>

						{/* Col 4 — Contact Us */}
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget widget-contact wow fadeInUp"
								data-wow-delay=".7s"
							>
								<h5 className="title">Contact Us</h5>
								<div className="footer-contact-info">
									<div className="contact-item">
										<span>
											129, P.P Trade Center, NSP, Pitampura, Delhi-110034
										</span>
									</div>
									<div className="contact-item">
										<Link href="tel:+919136797555">+91 9136797555</Link>
										<Link href="mailto:info@mematdigi.com">
											info@mematdigi.com
										</Link>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>

			{/* Copyright Bar */}
			<div className="tj-copyright-area-2 h5-footer-copyright">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="copyright-menu">
									<ul>
										<li>
											<Link href="/sitemap">Sitemap</Link>
										</li>
										<li>
											<Link href="/privacy-policy">Privacy Policy</Link>
										</li>
										<li>
											<Link href="/terms-and-conditions">Terms & Conditions</Link>
										</li>
										<li>
											<Link href="/careers">Career</Link>
										</li>
									</ul>
								</div>
								<div className="copyright-text">
									<p>
										&copy; 2026 All rights reserved{" "}
										<Link href="https://www.mematdigi.com" target="_blank">
											MematDigi Pvt. Ltd.
										</Link>
									</p>
								</div>
							</div>
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
		</footer>
	);
};

export default Footer5;