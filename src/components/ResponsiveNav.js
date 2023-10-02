import React, { useState } from 'react';
import { Button } from './NavComponents/Button';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import lightsign from "./imgs/utopialight.png";
import salon from "./imgs/salonpic3.jpeg";
import salonstretch from "./imgs/salonstretch.jpeg"


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 1280) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 1280) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
      <a href="/home">
        <img className="navbar-logo" src={lightsign} />
      </a>
      <picture className="nav-img">
          <source media="(min-width:1348px)" srcSet={salonstretch}/>
          <img src={salon}/>
        </picture>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className='nav-item'
          >
            <Link
              to='/salon'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              The Salon 
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/team'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Meet The Team
            </Link>
          </li>
          <li>
            <Link
              to='https://linktr.ee/utopiahairco'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Book Now
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;