import React from "react";

const NavLinks = () => {
  return (
    <div className="navbar-links">
      <a href="/home">
        <span className="span-link">HOME</span>
      </a>
      <a href="/salon">
        <span className="span-link">THE SALON</span>
      </a>
      <a href="/services">
        <span className="span-link">SERVICES</span>
      </a>
      <a href="/team">
        <span className="span-link">MEET THE TEAM</span>
      </a>
    </div>
  );
};

export default NavLinks;
