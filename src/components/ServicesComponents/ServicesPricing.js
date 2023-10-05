import React from 'react'
import PopUpNicola from './PopUpNicola';
import PopUpEllie from "./PopUpEllie";
import PopUpAlannah from "./PopUpAlannah"
import PopUpErin from "./PopUpErin"
import PopUpMillie from "./PopUpMillie"

const ServicesPricing = () => {
  return (
    <div className="services-pricing">
      <div className="pricing-header">Nicola's Price List</div>
        <div className="pricing-menus">
          <PopUpNicola />
        </div>
        <div className="pricing-header">Alannah's Price List</div>
        <div className="pricing-menus">
           <PopUpAlannah />
        </div>
        <div className="pricing-header">Ellie's Price List</div>
        <div className="pricing-menus">
          <PopUpEllie />
        </div>
        <div className="pricing-header">Erin's Price List</div>
        <div className="pricing-menus">
          <PopUpErin />
        </div>
        <div className="pricing-header">Millie's Price List</div>
        <div className="pricing-menus">
          <PopUpMillie />
        </div>
    </div>
  )
}

export default ServicesPricing;
