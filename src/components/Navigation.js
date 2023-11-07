import React, {useState} from 'react'
import "../css/Navigation.css"
import Background from "./NavComponents/background"
import lightsign from "./imgs/utopialight.png";

const Navigation = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);
  return (
    <>
    <a href="/home" className='logo'>
            <img src={lightsign}  />
    </a>
    <button onClick={handleClick} className="nav-toggle" aria-controls="primary-navigation" aria-expanded="false"><i className={click ? 'fas fa-times' : 'fas fa-bars'} /></button>
    <Background />
    <nav>
      <ul className="primary-navigation flex" data-visible="false" id={click ? 'primary-navigation' : 'primary-navigation-inactive'}>
        <li className="active" onClick={closeMenu}>
            <a href="/home" onClick={closeMenu}>
                <span aria-hidden="true"></span>Home
            </a>
        </li>
        <li className="active" onClick={closeMenu}>
            <a href="/salon">
                <span aria-hidden="true"></span>The Salon
            </a>
        </li>
        <li className="active" onClick={closeMenu}>
            <a href="/services">
                <span aria-hidden="true"></span>Services
            </a>
        </li>
        <li className="active" onClick={closeMenu}>
            <a href="/team">
                <span aria-hidden="true"></span>Meet The Team
            </a>
        </li>
        <li className="active" onClick={closeMenu}>
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
