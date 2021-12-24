import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import TgDropdown from './TG-Dropdown';
import EDropdown from './E-Dropdown';
import ADropdown from './A-Dropdown';
import { IconButton, Badge } from '@material-ui/core'; 
import { ShoppingCart } from '@material-ui/icons'; 


const NavbarMandarin = ({}) => {
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
      <Link to='/mandarin' className='mobile-logo'>
        <img src="./logo.png" width="72" height="72" alt="Logo" className='mobile-logo' style={{ marginTop: "40px"}} href="/"></img>
          </Link>
          <input className='menu-btn' type='checkbox' id='menu-btn'/> 
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label> 

          {/*className={click ? 'nav-menu active' : 'nav-menu'}*/}
        <ul className='menu'>

          {/* Shopping Cart */}
          <li className='nav-item-move'>  
          <Link to='cart' className='active'>
            <IconButton className='shopping-cart-button' component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            </Link> 
          </li> 

          {/* Exhibitions */}
          <li
            className='nav-item-1'
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <Link
              to='/exhibitions-mandarin'
              className='active-1'
              onClick={closeMobileMenu}
            >
              展览 {/* <i className='fas fa-caret-down' /> */}
            </Link>
            {dropdown2 && <EDropdown />}
          </li> 

          {/* Artists */}
          <li
            className='nav-item-1'
            onMouseEnter={onMouseEnter3}
            onMouseLeave={onMouseLeave3}
          >
            <Link
              to='/artists-mandarin'
              className='active-1'
              onClick={closeMobileMenu}
            >
              艺术家们 {/* <i className='fas fa-caret-down' /> */}
            </Link>
            {dropdown3 && <ADropdown />}
          </li>

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src="./logo.png" width="100" height="100" alt="Logo" className='logo' style={{ marginTop: "20px"}} href="/"></img>
          </Link> 

          {/* The Gallery */}
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
          >
            <Link
              to='/about-us-mandarin'
              className='active'
              onClick={closeMobileMenu}
            >
              关于我们 {/* <i className='fas fa-caret-down' /> */}
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
              to='/shop'
              className='active'
              onClick={closeMobileMenu}
            >
              店铺 
            </Link>
          </li> 

          {/* E-Mobile */}
          <li className='nav-item-2'>
            <Link
              to='/exhibitions-mandarin'
              className='active-2'
              onClick={closeMobileMenu}
            >
              展览 
            </Link>
          </li> 

          {/* A-Mobile */}
          <li className='nav-item-2'>
            <Link
              to='/artists-mandarin'
              className='active-2'
              onClick={closeMobileMenu}
            >
              艺术家们 
            </Link>
          </li> 

          {/* Contact Us */}
          <li className='nav-item'>
            <Link
              to='/contact-us-mandarin'
              className='active'
              onClick={closeMobileMenu}
            >
              联系我们 
            </Link>
          </li> 

        </ul> 

      </nav>
    </>
  );
};

export default NavbarMandarin; 
