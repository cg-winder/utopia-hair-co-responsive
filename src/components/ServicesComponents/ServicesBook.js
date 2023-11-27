import React from 'react'


const ServicesBook = () => {
  return (
    <div className="services-book-wrap">
        <div className="services-book-text">
            <p className="services-book-1">Book an appointment</p>
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
