import React from "react";
import ServicesRecommendation from "./ServicesComponents/ServicesRecommendation";
import ServicesPolicies from "./ServicesComponents/ServicesPolicies";
import ServicesImgs from "./ServicesComponents/ServicesImgs";
import ServicesPricing from "./ServicesComponents/ServicesPricing";
import ServicesInfo from "./ServicesComponents/ServicesInfo";

const Services = () => {
  return (
    <div className="services-page-wrap">
      <div className="homepage-head" id="services-head">
          <div>Services</div>
      </div>
      {/* <ServicesInfo /> */}
      <ServicesPricing />
      <ServicesRecommendation />
      <ServicesImgs />
      <ServicesPolicies />
    </div>
  );
};

export default Services;
