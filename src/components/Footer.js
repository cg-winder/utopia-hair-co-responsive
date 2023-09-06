import React from "react";
import FooterDetails from "./FooterComponents/FooterDetails";
import FooterSocials from "./FooterComponents/FooterSocials";
import FooterSitemap from "./FooterComponents/FooterSitemap";
import logo from "./imgs/utopiahairco-logo.jpeg";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-no-disclaimer">
        <FooterDetails />
        <FooterSocials />
        <FooterSitemap />
        <div className="footer-logo">
          <a href="/home">
            <img src={logo} alt="utopiahairco-logo" />
          </a>
        </div>
      </div>
      <hr className="footer-hr" />
      <p className="footer-disclaimer">
        &copy;{new Date().getFullYear()} Utopia Hair Co | All rights reserved |
        Website developed by Chloe Winder
      </p>
    </div>
  );
};

export default Footer;
