import React from "react";
import { useEffect } from "react";
import salon from "../imgs/exteriorUtopia.jpeg"
import SalonAccessGallery from "./SalonAccessGallery";

const SalonInfo = () => {


  return (
    <div className="salon-info">
      <div className="salon-address-context">
        <div className="salon-address-div">
          <h2>salon accessibility</h2>
        </div>
        <div className="salon-context">
          <p>Utopia Hair Co is conveniently located in between Freckleton and Preston, and our salon is fully accessible with no stairs required.</p>
            <p className="salon-context-p2">Free car parking is available on site and is no more than a minute's walk away on those rainy days.</p>
            <SalonAccessGallery />
            <p><a href="https://www.google.com/maps/place/Utopia+Hair+Co/@53.7562682,-2.8150462,15z/data=!4m2!3m1!1s0x0:0xc91f429bb4fd04bf?sa=X&ved=2ahUKEwjzrIjxvYKCAxULX0EAHfVbDWIQ_BJ6BAhIEAA&ved=2ahUKEwjzrIjxvYKCAxULX0EAHfVbDWIQ_BJ6BAhQEAg">Find Us</a></p>
        </div>
      </div>
    </div>
  );
};

export default SalonInfo;
