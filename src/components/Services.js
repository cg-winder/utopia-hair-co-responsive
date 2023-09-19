import React from "react";
import SmallUtopiaEmbed from "./InstagramEmbeds/SmallUtopiaEmbed";
import ServicesRecommendation from "./ServicesComponents/ServicesRecommendation";

const Services = () => {
  return (
    <div className="services-page-wrap">
        <div className="homepage-head" id="services-head">
          <div>Services</div>
      </div>
      <ServicesRecommendation />
      {/* <SmallUtopiaEmbed /> */}
    </div>
  );
};

export default Services;
