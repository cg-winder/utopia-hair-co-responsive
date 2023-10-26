import React from 'react'
import salon from "../imgs/blackedoutsalon.png";
import salonstretch from "../imgs/blackoutsalonstretch.png"

const ServicesBook = () => {
  return (
    <div className="services-book-wrap">
        <picture className="services-book-img">
          <source media="(min-width:1348px)" srcSet={salonstretch}/>
          <img src={salon}/>
        </picture>
        <div className="services-book-text">
            <p className="services-book-1">Book appointment</p>
            <p className="services-book-2">Make a reservation for <div className="services-book-3">the ultimate pampering</div></p>
            <button
        className="services-book-button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://linktr.ee/utopiahairco";
        }}
      >
        <span className="homedetail-book-now">BOOK NOW</span>
      </button>
        </div>
    </div>
  )
}

export default ServicesBook
