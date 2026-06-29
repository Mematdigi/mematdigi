"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";

const Contact3 = () => {
	return (
		<section className="tj-contact-section-2 section-bottom-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="contact-form wow fadeInUp" data-wow-delay=".1s">
							<h3 className="title">
								Feel Free to Get in Touch or Visit our Location.
							</h3>
							<form id="contact-form">
								<div className="row">
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="text"
												name="cfName"
												placeholder="Full Name*"
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="email"
												name="cfEmail"
												placeholder="Email Address*"
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="tel"
												name="cfPhone"
												placeholder="Phone Number*"
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<div className="tj-nice-select-box">
												<div className="tj-select">
													<ReactNiceSelect
														selectedIndex={0}
														options={[
															{ value: "0", optionName: "Choose a Service" },
															{ value: "1", optionName: "Web Development" },
															{ value: "2", optionName: "Mobile App Development" },
															{ value: "3", optionName: "Digital Marketing" },
															{ value: "4", optionName: "SEO" },
															{ value: "5", optionName: "PPC" },
															{ value: "6", optionName: "Social Media Marketing" },
															{ value: "7", optionName: "Email Marketing" },
															{ value: "8", optionName: "Online Reputation Management" },
															{ value: "9", optionName: "WhatsApp Marketing" },
															{ value: "10", optionName: "Content Marketing" },
															{ value: "11", optionName: "IT Consultation" },
															{ value: "12", optionName: "Data Analytics" },
														]}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="form-input message-input">
											<textarea
												name="cfMessage"
												id="message"
												placeholder="Type your message*"
											></textarea>
										</div>
									</div>
									<div className="submit-btn">
										<ButtonPrimary type={"submit"} text={"Submit Now"} />
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="map-area wow fadeInUp" data-wow-delay=".3s">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.6775767417!2d77.14871!3d28.697860!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d038d6f9e6c5f%3A0x7f3b2e6b1c1e2a9e!2sP.P.%20Trade%20Centre%2C%20Netaji%20Subhash%20Place%2C%20Pitampura%2C%20Delhi%2C%20110034!5e0!3m2!1sen!2sin!4v1717000000000!5m2!1sen!2sin"
								allowFullScreen=""
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact3;