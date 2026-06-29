import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";

// Same default copy the static card family uses — keeps the card looking
// complete even when the admin data leaves a field empty.
const DEFAULT_DESC =
	"Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized.";

// ---------------------------------------------------------------------
// Card — reconstructed to match ServiceCard10 (H9). If your real
// ServiceCard10 markup differs, share it and I'll align the classes.
// ---------------------------------------------------------------------
const DynamicServiceCard9 = ({ service }) => {
	const { id, slug, title, desc, iconName, icon } = service || {};

	const resolvedIcon = iconName || icon || "tji-service-1";
	const resolvedDesc = desc || DEFAULT_DESC;
	const href = id || slug ? `/services/${slug || id}` : "/services";

	return (
		<div className="service-item h9-service-item">
			<div className="service-icon">
				<i className={resolvedIcon}></i>
			</div>
			<h4 className="title">
				<Link href={href}>{title}</Link>
			</h4>
			<div className="service-content">
				<p className="desc">{resolvedDesc}</p>
			</div>
		</div>
	);
};

const DynamicServices9 = ({ data = [] }) => {
	const services = (Array.isArray(data) ? data : []).slice(0, 4);

	return (
		<section className="h9-service section-gap  section-gap-x tj-sticky-panel-container-2 tj-progress-wrapper">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-4 ">
						<div className="sec-heading style-8  tj-sticky-panel-2">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								CHOOSE THE BEST
							</span>
							<h2 className="sec-title title-anim">
								hello Scalable business services
							</h2>
							<div className="h9-service-more wow fadeInUp" data-wow-delay=".3s">
								<ButtonPrimary text={"More services"} url={"/services"} />
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-8 ">
						{/* Scroll-progress rail — one indicator per service */}
						<div className="h9-service-scroll-progress tj-scroll-progress tj-sticky-panel-2">
							{services.map((_, idx) => (
								<div
									key={idx}
									className={`tj-scroll-progress-item${idx === 0 ? " active" : ""}`}
								>
									<h5 className="tj-scroll-progress-sln">
										{String(idx + 1).padStart(2, "0")}.
									</h5>
									<div className="tj-scroll-progress-ind">
										<div className="tj-scroll-progress-ind-inner"></div>
									</div>
								</div>
							))}
						</div>

						<div className="service-wrapper h9-service-wrapper">
							{services.map((service, idx) => (
								<DynamicServiceCard9
									key={service?.id ?? idx}
									service={service}
									idx={idx}
								/>
							))}
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
			<div className="bg-shape-3">
				<img src="/images/shape/h7-testimonial-shape-blur.svg" alt="" />
			</div>
		</section>
	);
};

export default DynamicServices9;