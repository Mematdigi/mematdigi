"use client";

const DynamicScrollableServices = ({ data = {} }) => {
	const {
		eyebrow = "What We Deliver",
		heading = "Transforming Customer: Tailored Solutions for Experiences.",
		description1 = "Recognize that exceptional customer experiences are at the heart of every successful business.",
		description2 = "Our approach to customer experience is comprehensive and data-driven.",
		featuresLeft = [],
		featuresRight = [],
		features = [],
	} = data;

	// Backward compatible: accept a single `features` array OR the split left/right columns
	const allFeatures = features.length
		? features
		: [...featuresLeft, ...featuresRight];

	const CheckIcon = () => (
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M16.6667 5L7.5 14.1667L3.33333 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);

	// Split heading on the first ":" — text after the colon is the highlighted phrase
	const [titleStart, ...titleRest] = heading.split(":");
	const highlight = titleRest.join(":").trim();

	return (
		<section className="services-section">
			{/* Decorative brand glows */}
			<span className="ss-glow ss-glow--orange" aria-hidden="true" />
			<span className="ss-glow ss-glow--blue" aria-hidden="true" />

			<div className="container">
				<div className="services-content">
					{/* Header */}
					<div className="services-header">
						{eyebrow && (
							<span className="ss-eyebrow">
								<span className="dot" aria-hidden="true" />
								{eyebrow}
							</span>
						)}
						<h1 className="main-title">
							{highlight ? (
								<>
									{titleStart}: <span>{highlight}</span>
								</>
							) : (
								heading
							)}
						</h1>
					</div>

					{/* Description */}
					{(description1 || description2) && (
						<div className="services-description">
							{description1 && <p>{description1}</p>}
							{description2 && <p>{description2}</p>}
						</div>
					)}

					{/* Features */}
					{allFeatures.length > 0 && (
						<div className="features-grid">
							{allFeatures.map((f, i) => (
								<div key={i} className="feature-item">
									<span className="feature-icon">
										<CheckIcon />
									</span>
									<span className="feature-text">{f.text}</span>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default DynamicScrollableServices;