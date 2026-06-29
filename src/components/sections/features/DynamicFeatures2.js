import FeatureCard2 from "@/components/shared/cards/FeatureCard2";

const DynamicFeatures2 = ({ data = [] }) => {
  const features = data.length > 0 ? data : [
    { id: 1, title: "Innovative Solutions", icon: "tji-innovative", desc: "We stay ahead of the curve leveraging cutting-edge technologies." },
    { id: 2, title: "Award-Winning", icon: "tji-award", desc: "Recognized by industry leaders, proven record of delivering excellence." },
    { id: 3, title: "Expert Team", icon: "tji-team", desc: "Our team is always available to address your concerns." },
    { id: 4, title: "Dedicated Support", icon: "tji-support", desc: "Providing quick and effective solutions for any business." },
  ];

  return (
    <section id="choose" className="tj-choose-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading style-3 text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Choose the Best
              </span>
              <h2 className="sec-title title-anim">How Empowering Business with Expertise.</h2>
            </div>
          </div>
        </div>
        <div className="row row-gap-4 rightSwipeWrap">
          {features.map((feature, idx) => (
            <div key={idx} className="col-xl-3 col-md-6">
              <FeatureCard2 feature={{ ...feature, id: feature.id || idx + 1 }} idx={idx} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicFeatures2;
