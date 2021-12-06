import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import TgDropdown from './TG-Dropdown';
import EDropdown from './E-Dropdown';
import ADropdown from './A-Dropdown';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'; 
import { ShoppingCart } from '@material-ui/icons';
import { commerce } from '../lib/commerce' 


const Navbar = ({}) => {
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
      <nav className='navbar' style={{ marginRight: "6.5px"}}>
      <Link to='/' className='mobile-logo'>
        <img src="./logo.png" width="72" height="72" alt="Logo" className='mobile-logo' style={{ marginTop: "40px"}} href="/"></img>
          </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> 
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          {/* Shopping Cart */}
          <li className='nav-item-move'>  
          <Link to='coming-soon' className='nav-item'>
            <IconButton className='shopping-cart-button' component={Link} to="/coming-soon" aria-label="Show cart items" color="inherit">
              <Badge color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            </Link> 
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

          {/* Artists */}
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter3}
            onMouseLeave={onMouseLeave3}
          >
            <Link
              to='/artists'
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

          {/* The Gallery */}
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
          >
            <Link
              to='/about-us'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About Us <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <TgDropdown />}
          </li>

{/* ------------------------------------------------------------------------- */}
          {/* Art Service */}
          {/* <li className='nav-item'>
            <Link
              to='/art-service'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services 
            </Link>
          </li> */}
{/* ------------------------------------------------------------------------- */} 

          {/* Shop */}
          <li className='nav-item'>
            <Link
              to='/coming-soon'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Shop 
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
};

export default Navbar;
