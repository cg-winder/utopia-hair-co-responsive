import React from 'react'
import salon from "../imgs/salonblackedout2.png";
import salonstretch from "../imgs/blackoutsalonstretch.png"

const ServicesBookBackground = () => {
  return (
    <div className="services-background">
      <picture className="services-book-background-img">
          <source media="(min-width:1023px)" srcSet={salonstretch}/>
          <img src={salon}/>
        </picture>
    </div>
  )
}

export default ServicesBookBackground
