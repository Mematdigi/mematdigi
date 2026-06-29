import TestimonialsCard8 from "@/components/shared/cards/TestimonialsCard8";
import getTestimonials from "@/libs/getTestimonials";
import makeWowDelay from "@/libs/makeWowDelay";


const Testimonials9 = () => {

	return (
		<section className="h9-testimonial section-gap">
			<div className="container">
				<div className="row">
					<h2 className="mb-5 text-center">What Our Clients says</h2>
					<div className="col-lg-4 order-2 order-lg-1">
						<div className="h9-testimonial-wrap">

							<div
								className={`testimonial-item wow fadeInUpBig`}
								data-wow-delay={makeWowDelay(1, 0.2)}
							>
								<div className="star-ratings">
									<div className="fill-ratings">
										<span>★★★★★</span>
									</div>
									<div className="empty-ratings">
										<span>★★★★★</span>
									</div>
								</div>
								<div className="desc">
									<p>
										“Mematdigi transformed our online presence completely. Within 6 months our organic traffic tripled and leads doubled. Their team is transparent, proactive, and genuinely invested in our growth.”
									</p>
								</div>
								<div className="testimonial-author">
									<div className="author-inner">
										<div className="author-header">
											<h5 className="title">Rahul Mehta</h5>
											<span className="designation">CEO</span>
										</div>
									</div>
								</div>
							</div>

							<div
								className={`testimonial-item wow fadeInUpBig`}
								data-wow-delay={makeWowDelay(2, 0.2)}
							>
								<div className="star-ratings">
									<div className="fill-ratings">
										<span>★★★★★</span>
									</div>
									<div className="empty-ratings">
										<span>★★★★★</span>
									</div>
								</div>
								<div className="desc">
									<p>
										“We tried three agencies before Mematdigi. The difference was immediate - clear strategy, and results that actually moved the needle for our business.”
									</p>
								</div>
								<div className="testimonial-author">
									<div className="author-inner">
										<div className="author-header">
											<h5 className="title">Priya Sherma</h5>
											<span className="designation">Marketing Manager</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4 order-1 order-lg-2 mt-5">
						<div className="h9-testimonial-heading">
							<div className="sec-heading style-8">
								<span className="sub-title wow fadeInUp mt-3 pb-3" data-wow-delay=".3s">
									Clients Testimonials
								</span>
								{/* <h2 className="sec-title title-anim">What Our Clients Say About Working With Mematdigi</h2> */}
							</div>
							<div
								className="testimonial-img wow fadeInUpBig"
								data-wow-delay=".3s"
							>
								<img src="/images/testimonial/h9-testimonial-img.webp" alt="" />
							</div>
							<div className="shape-icon wow fadeIn" data-wow-delay=".5s">
								<img src="/images/testimonial/h9-testimonial-img.webp" alt="" />
							</div>
						</div>
					</div>
					<div className="col-lg-4 order-3 order-lg-3">
						<div className="h9-testimonial-wrap style-2">
							
							<div
								className={`testimonial-item wow fadeInUpBig`}
								data-wow-delay={makeWowDelay(1, 0.2)}
							>
								<div className="star-ratings">
									<div className="fill-ratings">
										<span>★★★★★</span>
									</div>
									<div className="empty-ratings">
										<span>★★★★★</span>
									</div>
								</div>
								<div className="desc">
									<p>
										“Their AI-powered approach to digital marketing is unlike anything we experienced before. Our ROI improved 4X within the first quarter. Highly recommend Mematdigi to any serious business”
									</p>
								</div>
								<div className="testimonial-author">
									<div className="author-inner">
										<div className="author-header">
											<h5 className="title">Arjun Singh</h5>
											<span className="designation">Founder</span>
										</div>
									</div>
								</div>
							</div>

							<div
								className={`testimonial-item wow fadeInUpBig`}
								data-wow-delay={makeWowDelay(2, 0.2)}
							>
								<div className="star-ratings">
									<div className="fill-ratings">
										<span>★★★★★</span>
									</div>
									<div className="empty-ratings">
										<span>★★★★★</span>
									</div>
								</div>
								<div className="desc">
									<p>
										“From website development to SEO and content - Mematdigi handles everything under one roof. It saves us time, money, and the headache of managing multiple vendors."”
									</p>
								</div>
								<div className="testimonial-author">
									<div className="author-inner">
										<div className="author-header">
											<h5 className="title">Neha Gupta</h5>
											<span className="designation">Business Development Manager</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials9;
