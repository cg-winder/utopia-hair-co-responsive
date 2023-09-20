import React from 'react'
import mug from "../imgs/salonmug.jpeg"

const HomeStylists = () => {
  return (
    <div className="homestylists-wrap">
        <div className="homestylists-header">Home to some of the best stylists in Lancashire</div>
        <div className="homestylists-text-img">
          <img className="homestylists-img" src={mug}/>
            <div className="homestylists-subtext">Utopia Hair Co is home to experienced and knowledgable stylists with a true passion for their craft. Whether it be hair, nails, lashes or brows, your stylist will work with you on a personal level using their skill and creativity for the perfect finish every time.</div>
            </div>
          <a href="/team" className="homestylists-button"><span>FIND YOUR STYLIST </span></a>
    </div>
  )
}

export default HomeStylists;