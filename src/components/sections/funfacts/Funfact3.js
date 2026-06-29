import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import Link from "next/link";
const Funfact3 = () => {
	return (
		<section className=" h8-funfact section-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="sec-heading style-3 sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>OUR FUN FACT
							</span>
							<h2 className="sec-title title-anim">
								Results Delivered Through AI-Powered Digital Marketing
							</h2>
						</div>
					</div>
				</div>
				<div className="row justify-content-between">
					<div className="col-12 col-lg-6">
						<div
							className="h8-funfact-banner wow fadeInLeft"
							data-wow-delay=".3s"
						>
							<div className="h8-funfact-banner-img">
								<img src="/images/funfact/h8-funfact-banner.webp" alt="" />
							</div>
							{/* <div className="box-area">
								<div className="call-box wow fadeInUp" data-wow-delay=".5s">
									<h4 className="title">Get Started Free Call? </h4>
									<span className="call-icon">
										<i className="tji-phone"></i>
									</span>
									<Link className="number" href="tel:18884521505">
										<span>1-888-452-1505</span>
									</Link>
								</div>
							</div> */}
						</div>
					</div>
					<div className="col-12 col-lg-6 pl-0">
						<div className="h8-funfact-wrapper">
							<div className="countup-item style-2 h8-funfact-item" style={{padding:"30px 35px"}}>
								<div className="count-inner">
									<FunfactSingle currentValue={200} symbol={"+"} />
									<div className="counter-desc">
										<h4 className="counter-title">Project Delivered</h4>
										{/* <p className="count-text">
											Through a combination of data-driven insights and
											innovative approaches.
										</p> */}
									</div>
								</div>
							</div>
							<div className="countup-item style-2 h8-funfact-item" style={{padding:"30px 35px"}}>
								<div className="count-inner">
									<FunfactSingle currentValue={5} symbol={"X"} />
									<div className="counter-desc">
										<h4 className="counter-title">Average ROI Delivered</h4>
										{/* <p className="count-text">
											Through a combination of data-driven insights and
											innovative approaches.
										</p> */}
									</div>
								</div>
							</div>
							<div className="countup-item style-2 h8-funfact-item" style={{padding:"30px 35px"}}>
								<div className="count-inner">
									<FunfactSingle currentValue={15} symbol={"+"} />
									<div className="counter-desc">
										<h4 className="counter-title">Industries Covered</h4>
										{/* <p className="count-text">
											Through a combination of data-driven insights and
											innovative approaches.
										</p> */}
									</div>
								</div>
							</div>
							<div className="countup-item style-2 h8-funfact-item" style={{padding:"30px 35px"}}>
								<div className="count-inner">
									<FunfactSingle currentValue={98} symbol={"%"} />
									<div className="counter-desc">
										<h4 className="counter-title">Client Retention Rate</h4>
										{/* <p className="count-text">
											Through a combination of data-driven insights and
											innovative approaches.
										</p> */}
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

export default Funfact3;
