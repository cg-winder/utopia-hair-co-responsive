import React from "react";
import SmallUtopiaEmbed from "./InstagramEmbeds/SmallUtopiaEmbed";
import ServicesRecommendation from "./ServicesComponents/ServicesRecommendation";
import ServicesPolicies from "./ServicesComponents/ServicesPolicies";
import ServicesPricing from "./ServicesComponents/ServicesPricing";

const Services = () => {
  return (
    <div className="services-page-wrap">
        <div className="homepage-head" id="services-head">
          <div>Services</div>
      </div>
      <ServicesPricing />
      <ServicesRecommendation />
      <ServicesPolicies />
      {/* <SmallUtopiaEmbed /> */}
    </div>
  );
};

export default Services;
