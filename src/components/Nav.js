import React from "react";
import NavLinks from "./NavComponents/NavLinks";
import NavSocialBooking from "./NavComponents/NavSocialBooking";
import lightsign from "./imgs/utopialight.png";

const Nav = () => {
  return (
    <div className="navbar">
      <a href="/home">
        <img className="navbar-logo" src={lightsign} />
      </a>
      <NavLinks />
      <NavSocialBooking />
    </div>
  );
};

export default Nav;
