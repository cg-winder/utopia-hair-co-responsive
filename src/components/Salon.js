import React from "react";
import SalonContent from "./SalonComponents/SalonContent";
import SalonInfo from "./SalonComponents/SalonInfo";
import SalonGallery from "./SalonComponents/SalonGallery";
import HomeContact from "./HomeComponents/HomeContact"


const Salon = () => {
  return (
    <div className="salon-page-wrap">
      <div className="homepage-head" id="salon-head">
          <div>The Salon</div>
      </div>
      <SalonContent />
      <SalonGallery />
      <SalonInfo />
      <HomeContact />
    </div>
  );
};

export default Salon;
