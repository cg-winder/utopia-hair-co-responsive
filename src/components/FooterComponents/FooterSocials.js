import React from "react";
import tiktoklogo from "../imgs/tiktok3-removebg-preview.png";
import instagramlogo from "/Users/chloewinder/Desktop/ /Code/Projects/utopia-hair-co-responsive/src/components/imgs/nav-icon3-instagram.svg";

const FooterSocials = () => {
  return (
    <div className="footer-socials">
      <div className="footer-social-icons">
        <a href="https://www.instagram.com/utopiahairco_/?hl=en">
          <img src={instagramlogo} alt="instagram-icon" />
        </a>
        <a
          className="tiktok-footer"
          href="https://www.tiktok.com/@nicola_utopiahairco"
        >
          <img src={tiktoklogo} alt="tiktok-icon" />
        </a>
      </div>
    </div>
  );
};

export default FooterSocials;
