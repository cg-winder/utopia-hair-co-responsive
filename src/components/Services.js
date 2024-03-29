import React from "react";
import ServicesBook from "./ServicesComponents/ServicesBook";
import ServicesRecommendation from "./ServicesComponents/ServicesRecommendation";
import ServicesPolicies from "./ServicesComponents/ServicesPolicies";
import ServicesImgs from "./ServicesComponents/ServicesImgs";
import ServicesPricing from "./ServicesComponents/ServicesPricing";


const Services = () => {
  return (
    <div className="services-page-wrap">
      <div className="homepage-head" id="services-head">
          <div>Services</div>
      </div>
      <ServicesBook />
      <ServicesPricing />
      <ServicesRecommendation />
      <ServicesImgs />
      <ServicesPolicies />
    </div>
  );
};

export default Services;
