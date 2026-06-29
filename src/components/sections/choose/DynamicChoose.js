const DynamicChoose = ({ data = {} }) => {
  const {
    subTitle = "Choose the Best",
    title = "Empowering Business with Expertise.",
    image = "/images/choose/h8-choose-bnner.webp",
    boxes = [],
  } = data;

  const defaultBoxes = boxes.length > 0 ? boxes : [
    { icon: "tji-innovative", title: "Innovative Solutions", desc: "We stay ahead of the curve leveraging cutting-edge technologies and strategies." },
    { icon: "tji-award", title: "Winning Expertise", desc: "Recognized by industry leaders, our award-winning team has a proven record." },
    { icon: "tji-support", title: "Dedicated Support", desc: "Our team is always available to address your concerns quickly." },
  ];

  return (
    <section id="choose" className="tj-choose-section h8-choose section-gap-x">
      <div className="container-fluid gap-0">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-12 col-lg-6">
            <div className="h8-choose-content-wrapper">
              <div className="sec-heading style-3">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box"></i>{subTitle}
                </span>
                <h2 className="sec-title title-anim">{title}</h2>
              </div>
              <div className="h8-choose-box-wrapper">
                {defaultBoxes.map((box, i) => (
                  <div key={i} className="choose-box h6-choose-box h8-choose-box wow fadeInUp" data-wow-delay={`.${3 + i}s`}>
                    <div className="choose-content">
                      <div className="choose-icon"><i className={box.icon}></i></div>
                      <div>
                        <h4 className="title">{box.title}</h4>
                        <p className="desc">{box.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 align-self-stretch">
            <div className="h8-choose-banner">
              <img data-speed=".8" className="wow fadeInLeftBig" data-wow-delay=".3s" src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-shape-2">
        <img src="/images/shape/pattern-3.svg" alt="" />
      </div>
    </section>
  );
};

export default DynamicChoose;
