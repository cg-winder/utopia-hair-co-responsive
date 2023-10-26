import React from 'react'
import PopUpNicola from './PopUpNicola';
import PopUpEllie from "./PopUpEllie";
import PopUpAlannah from "./PopUpAlannah"
import PopUpErin from "./PopUpErin"
import PopUpMillie from "./PopUpMillie"
import PopUpMaddie from './PopUpMaddie';
import brush from "../imgs/salonbrush3.png"
import smallbrush from "../imgs/salonbrushsmall2.png"

const ServicesPricing = () => {
  return (
    <div className="services-pricing">
       <picture className="services-pricing-img">
          <source media="(min-width:768px)" srcSet={brush}/>
          <img src={smallbrush}/>
        </picture>
        <div className="services-text">
          <div className="pricing-header">Our Services</div>
          <div className="pricing-menu-wrap">
            <p>All prices are subject to change</p>
            <div className="services-artists">Click on an artist to see their treatments & prices</div>
              <div className="pricing-menus">
                <PopUpNicola />
              </div>
            
              <div className="pricing-menus">
                <PopUpAlannah />
              </div>
            
              <div className="pricing-menus">
                <PopUpEllie />
              </div>

              <div className="pricing-menus">
                <PopUpMaddie />
              </div>
            
              <div className="pricing-menus">
                <PopUpErin />
              </div>
          
              <div className="pricing-menus">
                <PopUpMillie />
              </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesPricing;
