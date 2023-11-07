import React from 'react'
import "../css/Navigation.css"
import lightsign from "./imgs/utopialight.png";

const Navigation = () => {
  return (
    <>
      <a href="/home" className='logo'>
            <img src={lightsign}  />
        </a>
    <button className="nav-toggle" aria-controls="primary-navigation" aria-expanded="false"><span className="sr-only">Menu</span></button>
    <nav>
      <ul className="primary-navigation flex" data-visible="false" id="primary-navigation">
        <li className="active">
            <a href="/home">
                <span aria-hidden="true"></span>Home
            </a>
        </li>
        <li className="active">
            <a href="/salon">
                <span aria-hidden="true"></span>The Salon
            </a>
        </li>
        <li className="active">
            <a href="/services">
                <span aria-hidden="true"></span>Services
            </a>
        </li>
        <li className="active">
            <a href="/team">
                <span aria-hidden="true"></span>Meet The Team
            </a>
        </li>
        <li className="active">
            <a href="https://linktr.ee/utopiahairco">
                <span aria-hidden="true"></span>Book Now
            </a>
        </li>
      </ul>
    </nav>
    </>
  )
}

export default Navigation
