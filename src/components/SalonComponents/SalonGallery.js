import React from 'react'
import salon1 from "../imgs/backwash.jpeg"
import salon2 from "../imgs/salon.jpeg"
import salon3 from "../imgs/salon5.jpeg"
import salon4 from "../imgs/salonmirrored.jpeg"
import salon5 from "../imgs/salonmug.jpeg"
import salon6 from "../imgs/utopialashbed.jpeg"
import salon7 from "../imgs/utopiahairco-salon.jpeg"
import salon8 from "../imgs/salonmug2.jpeg"
import salon9 from "../imgs/utopiawash.jpeg"

const SalonGallery = () => {
  return (
    <div className="salon-gallery">
        <div className="gallery-1">
            <img src={salon1} />
            <img src={salon2} />
            <img src={salon3} />
        </div>
        <div className="gallery-2">
            <img src={salon4} />
            <img src={salon5} />
            <img src={salon6} />
        </div>
        <div className="gallery-3">
            <img src={salon7} />
            <img src={salon8} />
            <img src={salon9} />
        </div>
    </div>
  )
}

export default SalonGallery
