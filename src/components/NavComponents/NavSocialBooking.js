import React from "react";
import tiktoklogo from "/Users/chloewinder/Desktop/ /Code/Projects/Utopia Hair Co/src/components/imgs/tiktok3-removebg-preview.png";
import instagramlogo from "/Users/chloewinder/Desktop/ /Code/Projects/Utopia Hair Co/src/components/imgs/nav-icon3-instagram.svg";

const SocialsBooking = () => {
  return (
    <div className="socials-booking">
      <span className="buttons">
        <div className="social-icon">
          <a href="https://www.instagram.com/utopiahairco_/?hl=en">
            <img src={instagramlogo} alt="instagram-icon" />
          </a>
          <a href="https://www.tiktok.com/@utopiahairco?lang=en">
            <img src={tiktoklogo} alt="tiktok-icon" />
          </a>
        </div>
        <button
          className="book-now-button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://linktr.ee/utopiahairco";
          }}
        >
          <span className="button-span">BOOK NOW</span>
        </button>
      </span>
    </div>
  );
};

export default SocialsBooking;
