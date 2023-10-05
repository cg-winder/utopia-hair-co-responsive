import React from 'react'
import Nicola1 from "../imgs/NicolaPricing1.png";
import Nicola2 from "../imgs/NicolaPricing2.png"
import Ellie1 from "../imgs/ElliePricing1.png";
import Ellie2 from "../imgs/ElliePricing2.png"
import Alannah from "../imgs/AlannahPricing.png";
import Erin from "../imgs/ErinPricing.png"
import Millie from "../imgs/MilliePricing.png"
import ServicesPopUp from './ServicesPopUp';


const ServicesPricing = () => {
  return (
    <div className="services-pricing">
      <div className="pricing-header">Nicola's Price List</div>
        <div className="pricing-menus">
          <ServicesPopUp />
        </div>
        <div className="pricing-header">Alannah's Price List</div>
        <div className="pricing-menus">
            <img src={Alannah}/>
        </div>
        <div className="pricing-header">Ellie's Price List</div>
        <div className="pricing-menus">
            <img src={Ellie1}/>
            <img src={Ellie2}/>
        </div>
        <div className="pricing-header">Erin's Price List</div>
        <div className="pricing-menus">
            <img src={Erin}/>
        </div>
        <div className="pricing-header">Millie's Price List</div>
        <div className="pricing-menus">
            <img src={Millie}/>
        </div>
    </div>
  )
}

export default ServicesPricing;
