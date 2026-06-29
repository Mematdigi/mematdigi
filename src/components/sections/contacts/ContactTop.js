import Link from "next/link";

const ContactTop = () => {
	return (
		<div className="tj-contact-area section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".1s">
								<i className="tji-box"></i>Contact info
							</span>
							<h2 className="sec-title title-anim">
								<span>Reach</span> Out to Us
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">

					{/* Our Location */}
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".3s"
						>
							<div className="contact-icon">
								<i className="tji-location-3"></i>
							</div>
							<h3 className="contact-title">Our Location</h3>
							<p>129, P.P Trade Center, NSP, Pitampura, Delhi-110034</p>
						</div>
					</div>

					{/* Email Us */}
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".5s"
						>
							<div className="contact-icon">
								<i className="tji-envelop"></i>
							</div>
							<h3 className="contact-title">Email Us</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:info@mematdigi.com">info@mematdigi.com</Link>
								</li>
							</ul>
						</div>
					</div>

					{/* Call Us */}
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".7s"
						>
							<div className="contact-icon">
								<i className="tji-phone"></i>
							</div>
							<h3 className="contact-title">Call Us</h3>
							<ul className="contact-list">
								<li>
									<Link href="tel:+919136797555">+91 9136797555</Link>
								</li>
							</ul>
						</div>
					</div>

					{/* Live Chat */}
					<div className="col-xl-3 col-lg-6 col-sm-6">
						<div
							className="contact-item style-2 wow fadeInUp"
							data-wow-delay=".9s"
						>
							<div className="contact-icon">
								<i className="tji-chat"></i>
							</div>
							<h3 className="contact-title">Live Chat</h3>
							<ul className="contact-list">
								<li>
									<Link href="mailto:info@mematdigi.com">
										info@mematdigi.com
									</Link>
								</li>
								<li className="active">
									<Link href="/contact-us">Need help?</Link>
								</li>
							</ul>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
};

export default ContactTop;