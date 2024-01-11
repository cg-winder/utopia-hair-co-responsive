import React from 'react'
import PopUpNicola from './PopUpNicola';
import PopUpEllie from "./PopUpEllie";
import PopUpAlannah from "./PopUpAlannah"
import PopUpGabrielle from './PopUpGabrielle';
import PopUpUnknown from "./PopUpUnknown";
import PopUpErin from "./PopUpErin"
import PopUpMillie from "./PopUpMillie"
import PopUpMaddie from './PopUpMaddie';


const ServicesPricing = () => {
  return (
    <div className="services-pricing">
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
                <PopUpGabrielle />
              </div>

              <div className="pricing-menus">
                <PopUpUnknown />
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
