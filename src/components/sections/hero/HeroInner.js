import sliceText from "@/libs/sliceText";
import Link from "next/link";
import React from "react";

const DEFAULT_BG = "/images/bg/pheader-back.webp";

const HeroInner = ({ title, text, breadcrums = [], bgImage }) => {
	// Use the blog/page image when provided, otherwise the default header bg.
	// A dark gradient is layered over custom images so the white title stays readable.
	const background = bgImage
		? `linear-gradient(rgb(51 46 23 / 28%), rgba(3, 49, 255, 0.1)), url(${bgImage})`
		: `url(${DEFAULT_BG})`;

	return (
		<section
			className="tj-page-header section-gap-x"
			style={{
				backgroundImage: background,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundColor: "transparent",
			}}
		>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="tj-page-header-content text-center">
							<h1 className={`tj-page-title`}>{title}</h1>
							{/* <div className="tj-page-link">
								<span>
									<i className="tji-home"></i>
								</span>
								<span>
									<Link href="/">Home</Link>
								</span>
								<span>
									<i className="tji-arrow-right"></i>
								</span>
								{breadcrums?.length
									? breadcrums?.map(({ name, path }, idx) => (
											<React.Fragment key={idx}>
												<span>
													<Link href={path ? path : "/"}>{name}</Link>
												</span>
												<span>
													<i className="tji-arrow-right"></i>
												</span>
											</React.Fragment>
									  ))
									: ""}
								<span>
									<span>{sliceText(text, 28, true)}</span>
								</span>
							</div> */}
						</div>
					</div>
				</div>
			</div>
			{/* <div
				className="page-header-overlay"
				style={{ backgroundImage: `url('/images/shape/pheader-overlay.webp')` }}
			></div> */}
		</section>
	);
};

export default HeroInner;