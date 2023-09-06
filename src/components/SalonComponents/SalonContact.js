import React from "react";

const SalonContact = () => {
  return (
    <div className="salon-contact">
      <div className="salon-contact-book">
        To book an appointment, please click{" "}
        <a href="https://linktr.ee/utopiahairco">here</a>
      </div>
      <div className="salon-contact-instagram">
        <div
          className="instagram-embed-header"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://www.instagram.com/utopiahairco_/";
          }}
        >
          Alternatively, you can contact us via our Instagram...
        </div>
      </div>
    </div>
  );
};

export default SalonContact;
