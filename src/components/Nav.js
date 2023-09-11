import React from "react";
import NavLinks from "./NavComponents/NavLinks";
import NavSocialBooking from "./NavComponents/NavSocialBooking";
import lightsign from "./imgs/utopialight.png";
import salon from "./imgs/salonpic3.jpeg";

const Nav = () => {
  return (
    <div className="navbar">
      <a href="/home">
        <img className="navbar-logo" src={lightsign} />
      </a>
      <NavLinks />
      <NavSocialBooking />
      <div className="nav-img">
          <img src={salon} alt="" />
        </div>
    </div>
  );
};

export default Nav;
