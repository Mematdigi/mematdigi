"use client";

const ServicesSection = () => {
	return (
		<section className="services-section p-3 m-5 mb-5 border rounded-3 box-shadow">
			<div className="container">
				<div className="services-content">
					{/* Title Section */}
					<div className="services-header">
						<h1 className="main-title">
							Transforming Customer: <span>Tailored Solutions for Experiences.</span>
						</h1>
					</div>

					{/* Description Text */}
					<div className="services-description">
						<p>
							Recognize that exceptional customer experiences are at the heart of every successful business. Our Customer
							Experience Solutions are crafted to help you transform every interaction your customers have with your brand into
							a meaningful and positive experience. We believe that understanding the customer journey and providing
							personalized, seamless experiences can significantly enhance customer loyalty, satisfaction, and lifetime value.Our
							approach to customer experience is comprehensive and data-driven.
						</p>
						<p>
							Our approach to customer experience is comprehensive and data-driven. We begin by assessing your current
							customer touchpoints, identifying areas for improvement, and using insights to develop strategies that meet your
							customers' evolving needs. From optimizing digital platforms.
						</p>
					</div>

					{/* Features Grid - 2 Columns */}
					<div className="features-grid">
						<div className="feature-column">
							<div className="feature-item">
								<div className="feature-icon">
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								<span className="feature-text">Personalization at Scale</span>
								</div>
							</div>

							<div className="feature-item">
								<div className="feature-icon">
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								<span className="feature-text">Improved Customer Retention</span>
								</div>
							</div>

							<div className="feature-item">
								<div className="feature-icon">
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								<span className="feature-text">Data-Driven Insights</span>
								</div>
							</div>

							<div className="feature-item">
								<div className="feature-icon">
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								<span className="feature-text">Omni-channel Integration</span>
								</div>
							</div>
						</div>

						<div className="feature-column">
							<div className="feature-item">
								<div className="feature-icon">
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								<span className="feature-text">Customer Retention</span>
								</div>
							</div>

							<div className="feature-item">
								<div className="feature-icon">
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								<span className="feature-text">Support Optimization</span>
								</div>
							</div>

							<div className="feature-item">
								<div className="feature-icon">
									<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								<span className="feature-text">Proactive Engagement</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;