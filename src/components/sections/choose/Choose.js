const Choose = () => {
	return (
		<section id="choose" className="tj-choose-section h8-choose  section-gap-x">
			<div className="container-fluid gap-0">
				<div className="row align-items-center flex-column-reverse flex-lg-row">
					
					<div className="col-12 col-lg-6">
						<div className="h8-choose-content-wrapper">
							<div className="sec-heading style-3">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Who WE help
								</span>
								<h2 className="sec-title title-anim">
									Digital Solutions for Every Business Type in India.
								</h2>
								<p className="desc wow fadeInUp" data-wow-delay=".4s">
									Whether you are a startup, D2C brand, or enterprise organization, our digital marketing and technology solutions are designed to accelerate growth.
								</p>
							</div>
							<div className="h8-choose-box-wrapper ">
								<div
									className="choose-box h6-choose-box h8-choose-box  wow fadeInUp"
									data-wow-delay=".3s"
								>
									<div className="choose-content">
										<div className="choose-icon">
											<i className="tji-innovative"></i>
										</div>
										<div>
											<h4 className="title">Startups & Small Businesses</h4>
											<p className="desc">
												Getting your digital presence right from day one matters. We build affordable, ROI-focused digital strategies that help startups grow fast without burning budget.
											</p>
										</div>
									</div>
								</div>
								<div
									className="choose-box h6-choose-box h8-choose-box  wow fadeInUp"
									data-wow-delay=".4s"
								>
									<div className="choose-content">
										<div className="choose-icon">
											<i className="tji-award"></i>
										</div>
										<div>
											<h4 className="title">D2C & Ecommerce Brands</h4>
											<p className="desc">
												From performance marketing and SEO to ecommerce development and content - we help D2C brands reach the right audience and convert traffic into revenue.
											</p>
										</div>
									</div>
								</div>
								<div
									className="choose-box h6-choose-box h8-choose-box  wow fadeInUp"
									data-wow-delay=".5s"
								>
									<div className="choose-content">
										<div className="choose-icon">
											<i className="tji-support"></i>
										</div>
										<div>
											<h4 className="title">B2B & Enterprise Companies</h4>
											<p className="desc">
												Complex sales cycles need smarter digital strategies. We deliver lead generation, content authority, and AI-powered marketing solutions built for B2B growth.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-12 col-lg-6 align-self-stretch">
						<div className="h8-choose-banner">
							<img
								data-speed=".8"
								className="wow fadeInLeftBig"
								data-wow-delay=".3s"
								src="/images/choose/h8-choose-bnner.webp"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default Choose;
