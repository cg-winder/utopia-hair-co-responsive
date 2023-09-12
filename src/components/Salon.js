import React from "react";
import SalonCarousel from "./SalonComponents/SalonCarousel";
import SalonTreatments from "./SalonComponents/SalonTreatments";
import SalonContent from "./SalonComponents/SalonContent";
import salon from "./imgs/salonpic3.jpeg";
import InstagramEmbed from "./InstagramEmbeds/UtopiaInstagramEmbed";
import SalonInfo from "./SalonComponents/SalonInfo";
import SalonContact from "./SalonComponents/SalonContact";

const Salon = () => {
  return (
    <div className="salon-page-wrap">
      <div className="homepage-contents" id="salon-head-pic">
        {/* <div className="homepage-img">
          <img src={salon} alt="" />
        </div> */}
        <div className="homepage-head" id="salon-head">
          <div>The Salon</div>
        </div>
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
