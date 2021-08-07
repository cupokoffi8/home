import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import TgDropdown from './TG-Dropdown';
import EDropdown from './E-Dropdown';
import ADropdown from './A-Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Start 1

  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      setDropdown2(false);
      setDropdown3(false);
    } else {
      setDropdown(true);
      setDropdown2(false);
      setDropdown3(false);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      setDropdown2(false);
      setDropdown3(false);
    } else {
      setDropdown(false);
      setDropdown2(false);
      setDropdown3(false);
    }
  };

  // Start 2

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      setDropdown2(false);
      setDropdown3(false);
    } else {
      setDropdown(false);
      setDropdown2(true);
      setDropdown3(false);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      setDropdown2(false);
      setDropdown3(false);
    } else {
      setDropdown(false);
      setDropdown2(false);
      setDropdown3(false);
    }
  };

  // Start 3

  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      setDropdown2(false);
      setDropdown3(false);
    } else {
      setDropdown(false);
      setDropdown2(false);
      setDropdown3(true);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
      setDropdown2(false);
      setDropdown3(false);
    } else {
      setDropdown(false);
      setDropdown2(false);
      setDropdown3(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
      <Link to='/home/' className='mobile-logo' onClick={closeMobileMenu}>
          <h1 className='logo' style={{ marginTop: "40px"}} href="/home/">American Dragon International Fine Art</h1>
          </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          {/* The Gallery */}
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
          >
            <Link
              to='/the-gallery'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              The Gallery <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <TgDropdown />}
          </li>

          {/* Exhibitions */}
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <Link
              to='/exhibitions'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Exhibitions <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <EDropdown />}
          </li>

          {/* Exhibitions */}
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter3}
            onMouseLeave={onMouseLeave3}
          >
            <Link
              to='/the-gallery'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Artists <i className='fas fa-caret-down' />
            </Link>
            {dropdown3 && <ADropdown />}
          </li>

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src="./logo.png" width="140" height="140" alt="Logo" className='logo' style={{ marginTop: "40px"}} href="/"></img>
          </Link>

          {/* News and Events */}
          <li className='nav-item'>
            <Link 
              to='/' 
              className='nav-links' 
              onClick={closeMobileMenu}
              >
              News and Events
            </Link>
          </li>

          {/* Art Service */}
          <li className='nav-item'>
            <Link
              to='/art-service'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Art Service
            </Link>
          </li>

          {/* Contact Us */}
          <li className='nav-item'>
            <Link
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>

        </ul>
      </nav>
    </>
  );
}

export default Navbar;
