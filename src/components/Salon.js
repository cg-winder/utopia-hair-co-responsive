import React from "react";
import SalonCarousel from "./SalonComponents/SalonCarousel";
import SalonTreatments from "./SalonComponents/SalonTreatments";
import SalonContent from "./SalonComponents/SalonContent";
import InstagramEmbed from "./InstagramEmbeds/UtopiaInstagramEmbed";
import SalonInfo from "./SalonComponents/SalonInfo";
import SalonContact from "./SalonComponents/SalonContact";

const Salon = () => {
  return (
    <div className="salon-page-wrap">
      <div className="homepage-head" id="salon-head">
          <div>The Salon</div>
      </div>
      <SalonContent />
      <SalonTreatments />
      <SalonInfo />
      <SalonCarousel />
      <SalonContact />
      <InstagramEmbed />
    </div>
  );
};

export default Salon;
