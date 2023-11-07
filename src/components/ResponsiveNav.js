import React, { useState } from 'react';
import { Button } from './NavComponents/Button';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'
import lightsign from "./imgs/utopialight.png";
import Background from "./NavComponents/background"

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <a href="/home" className='logo'>
            <img src={lightsign}  />
        </a>
      <Background />
            <div className='nav-menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item' id="nav-item-1">
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                  <span>Home</span>
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
                <span>The Salon</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <span>Services</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/team'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              <span>Meet The Team</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to='https://linktr.ee/utopiahairco'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              Book Now
              </Link>
            </li>
          </ul>
          {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;