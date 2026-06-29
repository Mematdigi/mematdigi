"use client";
import Link from "next/link";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

// Same defaults the static ServiceCard2 hardcodes — so the card looks
// identical even when the admin data leaves these empty.
const DEFAULT_DESC =
	"Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized.";
const DEFAULT_POINTS = [
	"Expansion Strategies",
	"Operational Efficiency",
	"Competitive Edge",
];

// Feature list may arrive as strings or as objects — normalise to text.
const toText = (item) =>
	typeof item === "string"
		? item
		: item?.text || item?.title || item?.name || item?.label || "";

const DynamicServiceCard2 = ({ service }) => {
	const { id, slug, title, desc, iconName, icon, points, features, list } =
		service || {};

	const resolvedIcon = iconName || icon || "tji-service-1";
	const resolvedDesc = desc || DEFAULT_DESC;

	const rawPoints =
		(Array.isArray(points) && points.length && points) ||
		(Array.isArray(features) && features.length && features) ||
		(Array.isArray(list) && list.length && list) ||
		DEFAULT_POINTS;
	const items = rawPoints.map(toText).filter(Boolean);

	const href = id || slug ? `/services/${slug || id}` : "/services";

	return (
		<div className="service-item-wrapper tj-fadein-right-on-scroll">
			<div className="service-item style-2 ">
				<div className="title-area">
					<div className="service-icon">
						<i className={resolvedIcon}></i>
					</div>
					<h4 className="title">
						<Link href={href}>{title}</Link>
					</h4>
				</div>
				<div className="service-content">
					<p className="desc">{resolvedDesc}</p>
					{/* <ul className="list-items">
						{items.map((point, i) => (
							<li key={i}>
								<i className="tji-list"></i>
								{point}
							</li>
						))}
					</ul> */}
				</div>
			</div>
		</div>
	);
};

const DynamicServices2 = ({ data = [] }) => {
	const services = (Array.isArray(data) ? data : []).slice(0, 4);

	return (
		<section className="tj-service-section service-2 section-gap section-gap-x slidebar-stickiy-container">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="content-wrap slidebar-stickiy">
							<div className="sec-heading style-2">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									Our Solutions
								</span>
								<h2 className="sec-title text-white text-anim">
									Hi Tailored Business Solutions for our <span>Corporates.</span>
								</h2>
							</div>
							<div className="wow fadeInUp" data-wow-delay=".6s">
								<ButtonPrimary text={"More Services"} url={"/services"} />
							</div>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="service-wrapper-2">
							{services.map((service, idx) => (
								<DynamicServiceCard2
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
				<img src="/images/shape/shape-blur.svg" alt="" />
			</div>
		</section>
	);
};

export default DynamicServices2;