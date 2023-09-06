import React from "react";
import tiktoklogo from "../imgs/tiktok3-removebg-preview.png";
import instagramlogo from "../imgs/nav-icon3-instagram.svg";

const NavSocialBooking = () => {
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

export default NavSocialBooking;
