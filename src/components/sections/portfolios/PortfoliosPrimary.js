"use client";
import PortfolioCard3 from "@/components/shared/cards/PortfolioCard3";
import getPortfolio from "@/libs/getPortfolio";
import makeWowDelay from "@/libs/makeWowDelay";

const PortfoliosPrimary = () => {
	const items = getPortfolio();

	return (
		<>
			{/* ── Hero Section ── */}
			<section className="pf-hero-section section-gap">
				<div className="container">
					<div className="pf-hero-inner">
						{/* Left text */}
						<div className="pf-hero-text">
							<h1 className="pf-hero-heading">
								Our Recent {" "}
								<span className="pf-hero-accent">Work</span>
							</h1>
							<p className="pf-hero-desc">
								Explore a selection of websites and digital solutions we've crafted for businesses across various industries. From corporate platforms and eCommerce stores to media portals and custom web applications, each project reflects our commitment to quality, performance, and user experience. Interested in building something similar? Contact us to discuss your project.
							</p>
							<a href="/contact-us" className="pf-hero-btn">
								Let's Discuss Your Project
							</a>
						</div>	
					</div>
				</div>
			</section>

			{/* ── Portfolio Grid Section ── */}
			<section className="pf-grid-section section-gap">
				<div className="container">
					{/* Section heading */}
					<div className="pf-section-head text-center">
						<p className="pf-section-eyebrow">Featured Projects</p>
						<h2 className="pf-section-title">
							Our <em>Best Work</em>
						</h2>
					</div>

					{/* 2-column grid, no pagination */}
					<div className="pf-grid row row-gap-4">
									<div
										className=" wow fadeInUp p-0"
										data-wow-delay={makeWowDelay(0.1)}
									>
										<PortfolioCard3 />
									</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PortfoliosPrimary;