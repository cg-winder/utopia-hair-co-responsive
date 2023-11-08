import React from 'react'
import salon from "../imgs/salonblack.png"
import salon2 from "../imgs/blackedoutsalon.png"

const HomedetailBackground = () => {
  return (
    <div className="homedetail-background-wrap">
      <picture className="homedetail-background-img">
          <source media="(min-width:767px)" srcSet={salon}/>
          <img className="homedetail-small-img"src={salon2}/>
        </picture>
    </div>
  )
}

export default HomedetailBackground;
