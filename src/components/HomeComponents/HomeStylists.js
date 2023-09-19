import React from 'react'
import team from "../imgs/utopiateam.jpeg"

const HomeStylists = () => {
  return (
    <div className="homestylists-wrap">
        <div className="homestylists-header">Home to some of the best stylists in Lancashire</div>
        <div className="homestylists-subtext">Utopia Hair Co is home to experienced and knowledgable stylists with a true passion for their craft. Whether it be hair, nails, lashes or brows, your stylist will work with you on a personal level using their skill and creativity for the perfect finish.</div>
        <button className="homestylist-book-button">FIND YOUR STYLIST</button>
        <img className="homestylist-img" src={team}/>
    </div>
  )
}

export default HomeStylists;
