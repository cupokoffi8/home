import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';
import TgDropdown from './TG-Dropdown';
import EDropdown from './E-Dropdown';
import ADropdown from './A-Dropdown'; 
import { IconButton, Badge } from '@material-ui/core'; 
import { ShoppingCart } from '@material-ui/icons'; 

function NavbarMandarin() {
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
      <nav className='navbar' style={{ marginRight: "0px"}}>
      <Link 
        to='/mandarin' 
        className='mobile-logo'>
        <img src="./logo.png" width="72" height="72" alt="Logo" className='mobile-logo' style={{ marginLeft: "40px", marginTop: "40px" }}></img>
          </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          {/* Shopping Cart */}
          <li className='nav-item'>
          <Link className="shopping-cart" to='/coming-soon-mandarin'> 
          <IconButton component={Link} to="/coming-soon-mandarin" aria-label="Show cart items" color="inherit">
              <Badge badgeContent='' color="">
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
              to='/exhibitions-mandarin'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              展览 <i className='fas fa-caret-down' />
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
              to='/artists-mandarin'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              艺术家们 <i className='fas fa-caret-down' />
            </Link>
            {dropdown3 && <ADropdown />}
          </li>

          <Link to='/mandarin' className='navbar-logo' onClick={closeMobileMenu}>
          <img src="./logo.png" width="140" height="140" alt="Logo" className='logo' style={{ marginTop: "40px"}}></img>
          </Link> 

          {/* The Gallery */}
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
          >
            <Link
              to='/about-us-mandarin' 
              className='nav-links'
              onClick={closeMobileMenu}
            >
              关于我们 <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <TgDropdown />}
          </li>

{/* ------------------------------------------------------------------------- */}
          {/* Art Service */}
          {/* <li className='nav-item'>
            <Link
              to='/art-service-mandarin'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              艺术服务 
            </Link>
          </li>  */}
{/* ------------------------------------------------------------------------- */}
          {/* Shop */}
          <li className='nav-item'>
            <Link
              to='/coming-soon-mandarin' 
              className='nav-links'
              onClick={closeMobileMenu}
            >
              店铺 
            </Link>
          </li> 

          {/* Contact Us */}
          <li className='nav-item'>
            <Link
              to='/contact-us-mandarin'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              联系我们
            </Link>
          </li>

        </ul>
      </nav>
    </>
  );
}

export default NavbarMandarin; 
