import React from 'react'
import mug from "../imgs/salonmug.jpeg"

const HomeStylists = () => {
  return (
    <div className="homestylists-wrap">
        <div className="homestylists-header">Our Stylists</div>
        <div className="homestylists-text-img">
          <img className="homestylists-img" src={mug}/>
            <div className="homestylists-subtext">Utopia Hair Co is home to experienced and knowledgable stylists with a true passion for their craft. Whether it be hair, nails, lashes or brows, your stylist will work with you on a personal level using their skill and creativity for the perfect, healthy finish and long-lasting results.</div>
            </div>
          <a href="/team" className="homestylists-button"><span>FIND YOUR STYLIST </span></a>
    </div>
  )
}

export default HomeStylists;
