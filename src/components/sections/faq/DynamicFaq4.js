import FaqItem2 from "@/components/shared/faq/FaqItem2";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Link from "next/link";

const DynamicFaq4 = ({ data = [] }) => {
  const items = data.length > 0
    ? data.map((f, i) => ({ title: f.question, desc: f.answer, initActive: i === 0 }))
    : [
        { title: "What services does your agency offer?", desc: "We offer comprehensive digital marketing services including SEO, PPC, SMM, web development, and content marketing.", initActive: true },
        { title: "How do I get started?", desc: "Simply reach out through our contact form and we'll schedule a consultation within 24 hours.", initActive: false },
        { title: "How long does it take to see results?", desc: "Results vary by service. SEO typically shows progress in 3-6 months, while PPC can generate leads immediately.", initActive: false },
      ];

  return (
    <section className="h7-faq section-gap slidebar-stickiy-container">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-4">
            <div className="sec-heading style-2 style-7 slidebar-stickiy">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i> OUR SOLUTIONS
              </span>
              <h2 className="sec-title text-anim">Find answers to the common questions</h2>
              <Link className="number" href="tel:+91 9136797555">
                <span className="call-icon"><i className="tji-phone"></i></span>
                <span>+91 9136797555</span>
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <BootstrapWrapper>
              <div className="accordion tj-faq style-2 h7-faq-wrapper" id="faqTwo">
                {items.map((item, idx) => (
                  <FaqItem2 key={idx} item={item} idx={idx} />
                ))}
              </div>
            </BootstrapWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicFaq4;
