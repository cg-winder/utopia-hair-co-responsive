import React from "react";
import NavLinks from "./NavComponents/NavLinks";
import NavSocialBooking from "./NavComponents/NavSocialBooking";
import lightsign from "./imgs/utopialight.png";
import salon from "./imgs/salonpic3.jpeg";
import salonstretch from "./imgs/salonstretch.jpeg"
import ResponsiveNav from "./ResponsiveNav";

const Nav = () => {
  return (
    <div className="navbar">
      <a href="/home">
        <img className="navbar-logo" src={lightsign} />
      </a>
        <picture className="nav-img">
          <source media="(min-width:1348px)" srcSet={salonstretch}/>
          <img src={salon}/>
        </picture>
    </div>
  );
};

export default Nav;
