import React, { useRef } from 'react'; 
import { FaBars, FaTimes } from "react-icons/fa"; 
import { Link } from 'react-router-dom'; 
import logo from "./logo.png"; 
import ml from "./ml.png"; 
import "./Navbar.css"; 
import { ShoppingCart } from '@material-ui/icons'; 

export default function Navbar() { 

  const navRef = useRef(); 

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav") 
  }

  return (
    <header>
      <Link to={(window.location.href.slice(window.location.href.length - 8) !== 'mandarin') ? '/' : '/mandarin'}>
        <img src={ml} width="72" height="72" alt="Logo" className='ml' href={(window.location.href.slice(window.location.href.length - 8) !== 'mandarin') ? '/' : '/mandarin'} />
          </Link>
      <nav ref={navRef}> 
      <Link onClick={showNavbar} to={(window.location.href.slice(window.location.href.length - 8) !== 'mandarin') ? '/' : '/mandarin'}>
        <img src={logo} width="72" height="72" alt="Logo" className='mobile-logo' href={(window.location.href.slice(window.location.href.length - 8) !== 'mandarin') ? '/' : '/mandarin'} />
          </Link>
        <a onClick={showNavbar} href="/#/cart"><ShoppingCart style={{ marginTop: "5px" }} /></a>
        <a onClick={showNavbar} href={(window.location.href.slice(window.location.href.length - 8) !== 'mandarin') ? "/#/exhibitions" : "/#/exhibitions-mandarin"} style={{ fontWeight: "bold", textTransform: "uppercase" }} >
        {(window.location.href.slice(window.location.href.length - 8) !== 'mandarin') ? 'Exhibitions' : '展览'}
          </a>
        <a onClick={showNavbar} href={(window.location.href.slice(window.location.href.length - 8) !== 'mandarin') ? "/#/artists" : "/#/artists-mandarin"} style={{ fontWeight: "bold", textTransform: "uppercase" }} >
        {(window.location.href.slice(window.location.href.length - 8) !== 'mandarin') ? 'Artists' : '艺术家们'}
        </a>
        <Link to={(window.location.href.slice(window.location.href.length - 8) !== 'mandarin') ? '/' : '/mandarin'}>
        <img src={logo} width="72" height="72" alt="Logo" className='logo' href={(window.location.href.slice(window.location.href.length - 8) !== 'mandarin') ? '/' : '/mandarin'} />
          </Link>
        <a onClick={showNavbar} href={(window.location.href.slice(window.location.href.length - 8) !== 'mandarin') ? "/#/about-us" : "/#/about-us-mandarin"} style={{ fontWeight: "bold", textTransform: "uppercase" }} >
        {(window.location.href.slice(window.location.href.length - 8) !== 'mandarin') ? 'About' : '关于我们'}
        </a>
        <a onClick={showNavbar} href="/#/shop" style={{ fontWeight: "bold", textTransform: "uppercase" }} >
        {(window.location.href.slice(window.location.href.length - 8) !== 'mandarin') ? 'Shop' : '店铺'}
        </a>
        <a onClick={showNavbar} href={(window.location.href.slice(window.location.href.length - 8) !== 'mandarin') ? "/#/contact-us" : "/#/contact-us-mandarin"} style={{ fontWeight: "bold", textTransform: "uppercase" }} >
        {(window.location.href.slice(window.location.href.length - 8) !== 'mandarin') ? 'Contact' : '联系我们'}
        </a>
        <button style={{ float: "right !important" }} className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes /> 
        </button>
      </nav> 
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars /> 
      </button>
    </header>
  )
}