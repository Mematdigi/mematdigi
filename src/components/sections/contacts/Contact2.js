"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";
import Link from "next/link";

const Contact2 = () => {
    return (
        <section className="tj-contact-section section-gap">
            {/* Scoped Internal CSS to fix the dark theme text visibility */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .tj-contact-section .contact-left-content {
                    margin-bottom: 40px;
                }
                .tj-contact-section .contact-left-content .sub-title {
                    color: #fd5d14;
                    font-weight: 600;
                    margin-bottom: 12px;
                    display: inline-block;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .tj-contact-section .contact-left-content .sec-title {
                    color: #ffffff !important;
                    font-size: 42px;
                    line-height: 1.3;
                    font-weight: 700;
                    margin-bottom: 20px;
                }
                .tj-contact-section .contact-left-content p {
                    color: #d1d5db;
                    font-size: 18px;
                    line-height: 1.6;
                }
                @media (max-width: 991px) {
                    .tj-contact-section .contact-left-content .sec-title {
                        font-size: 32px;
                    }
                }
            `}} />

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        {/* New Text Content */}
                        <div className="contact-left-content wow fadeInUp" data-wow-delay=".2s">
                            <div className="sec-heading">
                                <span className="sub-title">
                                    Let's Work Together
                                </span>
                                <h2 className="sec-title title-anim">
                                    Ready to Grow Your Business with India's Leading Digital Marketing & Technology Company?
                                </h2>
                                <p>
                                    Stop losing leads to competitors. Partner with Mematdigi for AI-powered digital marketing and technology solutions that deliver real, measurable results.
                                </p>
                            </div>
                        </div>

                        {/* Original Map Content */}
                        <div className="global-map wow fadeInUp" data-wow-delay=".3s">
                            <div className="global-map-img">
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6">
                        <div
                            className="contact-form style-2 wow fadeInUp"
                            data-wow-delay=".4s"
                        >
                            <div className="sec-heading">
                                <span className="sub-title text-white">
                                    <i className="tji-box"></i>Get in Touch
                                </span>
                                <h2 className="sec-title title-anim">
                                    Drop Us a <span>Line.</span>
                                </h2>
                            </div>
                            <form id="contact-form-2">
                                <div className="row wow fadeInUp" data-wow-delay=".5s">
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <input
                                                type="text"
                                                name="cfName2"
                                                placeholder="Full Name *"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <input
                                                type="email"
                                                name="cfEmail2"
                                                placeholder="Email Address *"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-input">
                                            <input
                                                type="tel"
                                                name="cfPhone2"
                                                placeholder="Phone number *"
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
                                                            { value: "0", optionName: "Chose a option" },
                                                            { value: "1", optionName: "Business Strategy" },
                                                            { value: "2", optionName: "Customer Experience" },
                                                            {
                                                                value: "3",
                                                                optionName: "Sustainability and ESG",
                                                            },
                                                            {
                                                                value: "4",
                                                                optionName: "Training and Development",
                                                            },
                                                            {
                                                                value: "5",
                                                                optionName: "IT Support & Maintenance",
                                                            },
                                                            {
                                                                value: "6",
                                                                optionName: "Marketing Strategy",
                                                            },
                                                        ]}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-input message-input">
                                            <textarea
                                                name="cfMessage2"
                                                id="message"
                                                placeholder="Type message *"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="submit-btn">
                                        <ButtonPrimary text={"Send Message"} type={"submit"} />
                                    </div>
                                </div>
                            </form>
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
        </section>
    );
};

export default Contact2;