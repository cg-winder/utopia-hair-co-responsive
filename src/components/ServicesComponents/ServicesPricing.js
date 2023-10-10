import React from 'react'
import PopUpNicola from './PopUpNicola';
import PopUpEllie from "./PopUpEllie";
import PopUpAlannah from "./PopUpAlannah"
import PopUpErin from "./PopUpErin"
import PopUpMillie from "./PopUpMillie"

const ServicesPricing = () => {
  return (
    <div className="services-pricing">
      <div className="pricing-header">Treatments & Pricing</div>
      <div className="pricing-menu-wrap">
        <p>All prices are subject to change</p>
        <div className="services-artists">Click on an artist below to see their treatment and price list</div>
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
            <PopUpErin />
          </div>
      
          <div className="pricing-menus">
            <PopUpMillie />
          </div>
        </div>
    </div>
  )
}

export default ServicesPricing;