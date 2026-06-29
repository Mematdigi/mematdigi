import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";

// DynamicServiceCard9 — inline version using DB data (no fakedata dependency)
const DynamicServiceCard9 = ({ service, idx }) => {
  const { title, desc, icon = "tji-service-1", image } = service || {};
  return (
    <div className="service-item h8-service-item">
      <div className="service-icon">
        <i className={icon}></i>
      </div>
      <h4 className="title">{title}</h4>
      <div className="service-content">
        <p className="desc">{desc || "Through a combination of data-driven insights and innovative approaches, we work closely with you."}</p>
      </div>
    </div>
  );
};

const DynamicServices8 = ({ data = [] }) => {
  const services = data.slice(0, 3);

  return (
    <section className="h8-service overflow-hidden section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading style-3 sec-heading-centered">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Our Solutions
              </span>
              <h2 className="sec-title title-anim">Hello Tailor Business Solutions for Corporates.</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container gap-30">
        <div className="row">
          <div className="col-12">
            <div className="service-wrapper h8-service-wrapper wow bounceInLeft" data-wow-delay=".3s">
              <div className="row">
                {services.map((service, idx) => (
                  <div key={idx} className="col-12 col-md-6 col-xl-4">
                    <DynamicServiceCard9 service={service} idx={idx} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="h8-service-more wow fadeInUp" data-wow-delay=".8s">
              <ButtonPrimary text={"More services"} url={"/services"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicServices8;
