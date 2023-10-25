import React from 'react'
import brush from "../imgs/salonbrush3.png"
import smallbrush from "../imgs/salonbrushsmall2.png"

const ServicesBackground = () => {
  return (
    <div className="services-background">
       <picture className="services-background-img">
          <source media="(min-width:768px)" srcSet={brush}/>
          <img src={smallbrush}/>
        </picture>
    </div>
  )
}

export default ServicesBackground
