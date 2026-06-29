"use client";
import ProcessCard2 from "@/components/shared/cards/ProcessCard2";

const Process2 = () => {
	const process = [
		{
			id: 1,
			title: "Discovery & Strategy",
			desc: "We analyze your business, audience, and competitors to build a customized AI-powered digital marketing growth strategy.",
		},
		{
			id: 2,
			title: "Implementation & Execution",
			desc: "Our team executes digital marketing, technology solutions, and automation campaigns designed to generate leads and measurable results.",
		},
		{
			id: 3,
			title: "Optimization & Growth",
			desc: "We track performance, optimize campaigns, and provide transparent reporting to help your business achieve long-term growth.",
		},
	];
	return (
		<section className="h5-working-process section-gap section-gap-x ">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered style-3">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> How We Work
							</span>
							<h2 className="sec-title text-anim  text-white">
								Our Digital Marketing Process - How We Deliver Real Results
							</h2>
						</div>
					</div>
				</div>
			</div>

			<div className="h5-working-process-inner">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="working-process-area h5-working-process-wrapper">
								{process?.length
									? process?.map((processSingle, idx) => (
											<ProcessCard2
												key={idx}
												processSingle={processSingle}
												idx={idx}
											/>
									  ))
									: ""}
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
			<div className="bg-shape-3">
				<img src="/images/shape/shape-blur.svg" alt="" />
			</div>
			<div className="bg-shape-4">
				<img src="/images/shape/shape-blur.svg" alt="" />
			</div>
		</section>
	);
};

export default Process2;
