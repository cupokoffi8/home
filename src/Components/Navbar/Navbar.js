import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import TgDropdown from './TG-Dropdown';
import EDropdown from './E-Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src="./logo.png" width="144" height="144" alt="Logo" className='alt-logo' style={{ marginTop: "20px"}} href="/"></img>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          {/* The Gallery */}
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
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
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/the-gallery'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Exhibitions <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <TgDropdown />}
          </li>

          {/* Exhibitions */}
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/the-gallery'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Exhibitions <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <EDropdown />}
          </li>

          {/* News and Events */}
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              News and Events
            </Link>
          </li>

          {/* Art Service */}
          <li className='nav-item'>
            <Link
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Art Service
            </Link>
          </li>

        </ul>
      </nav>
    </>
  );
}

export default Navbar;
