import React from 'react'
import salonaccess1 from "../imgs/utopiadirections1.png"
import salonaccess2 from "../imgs/utopiadirections2.png"
import salonaccess3 from "../imgs/utopiadirections3.png"
import salonaccess4 from "../imgs/utopiadirections4.png"

const SalonAccessGallery = () => {
  return (
    <div className="salon-access-gallery">
      <div className="salon-access-gallery-1">
        <img src={salonaccess1}/>
        <img src={salonaccess2}/>
      </div>
      <div className="salon-access-gallery-2"> 
        <img src={salonaccess3}/>
        <img src={salonaccess4}/>
      </div>
    </div>
  )
}

export default SalonAccessGallery
