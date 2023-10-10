import React from "react";
import SmallUtopiaEmbed from "./InstagramEmbeds/SmallUtopiaEmbed";
import ServicesRecommendation from "./ServicesComponents/ServicesRecommendation";
import ServicesPolicies from "./ServicesComponents/ServicesPolicies";
import ServicesPricing from "./ServicesComponents/ServicesPricing";
import ServicesInfo from "./ServicesComponents/ServicesInfo";

const Services = () => {
  return (
    <div className="services-page-wrap">
        <div className="homepage-head" id="services-head">
          <div>Services</div>
      </div>
      <ServicesInfo />
      <ServicesPricing />
      <ServicesPolicies />
      <ServicesRecommendation />
      
      {/* <SmallUtopiaEmbed /> */}
    </div>
  );
};

export default Services;
