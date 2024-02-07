import React from 'react'
import PopUpNicola from './PopUpNicola';
import PopUpEllie from "./PopUpEllie";
import PopUpAlannah from "./PopUpAlannah"
import PopUpGabrielle from './PopUpGabrielle';
import PopUpTiffany from "./PopUpTiffany";
import PopUpErin from "./PopUpErin"



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

              {/* <div className="pricing-menus">
                <PopUpMaddie />
              </div> */}

              <div className="pricing-menus">
                <PopUpGabrielle />
              </div>

              <div className="pricing-menus">
                <PopUpTiffany />
              </div>
            
              <div className="pricing-menus">
                <PopUpErin />
              </div>
        
            </div>
        </div>
    </div>
  )
}

export default ServicesPricing;
