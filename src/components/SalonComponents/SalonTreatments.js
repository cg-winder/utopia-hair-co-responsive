import React from "react";
import nails from "../imgs/nails2.jpeg";
import lashes from "../imgs/utopialashbed.jpeg";
import hair from "../imgs/hair6.jpeg";

const SalonTreatments = () => {
  return (
    <div className="salon-treatments">
      <h1>Our Treatments</h1>
      <div className="salon-treatment-content">
        <div className="salon-hair">
          <h2>Hair</h2>
          <div className="salon-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              iaculis vel magna a consequat. Cras at neque a lacus egestas
              porttitor. Integer sed lacus scelerisque, pretium tellus vitae,
              venenatis sem. Sed pretium est enim, et feugiat felis ultrices ut.
            </p>
            <img src={hair} />
          </div>
        </div>
        <div className="salon-lashes">
          <h2>Lashes & Brows</h2>
          <div className="salon-content-lash">
            <img src={lashes} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              iaculis vel magna a consequat. Cras at neque a lacus egestas
              porttitor. Integer sed lacus scelerisque, pretium tellus vitae,
              venenatis sem. Sed pretium est enim, et feugiat felis ultrices ut.
            </p>
          </div>
        </div>
        <div className="salon-nails">
          <h2>Nails</h2>
          <div className="salon-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              iaculis vel magna a consequat. Cras at neque a lacus egestas
              porttitor. Integer sed lacus scelerisque, pretium tellus vitae,
              venenatis sem. Sed pretium est enim, et feugiat felis ultrices ut.
            </p>
            <img src={nails} />
          </div>
        </div>
        <div className="salon-disclaimer">
          <p>
            For more details about our treatments and specific pricing, please
            see our Services page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalonTreatments;
