import React, { useState, useRef } from 'react'; 
import { FaBars, FaTimes } from "react-icons/fa"; 
import { Link } from 'react-router-dom'; 
import logo from "./logo.png"; 
import "./Navbar.css"; 
import { ShoppingCart } from '@material-ui/icons'; 

export default function Navbar() {
  const navRef = useRef(); 

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav") 
  }

  return (
    <header>
      <nav ref={navRef}> 
      <Link to='/'>
        <img src={logo} width="72" height="72" alt="Logo" className='mobile-logo' href="/"></img>
          </Link>
        <a href="/#/cart"><ShoppingCart style={{ marginTop: "5px" }} /></a>
        <a href="/#/exhibitions" style={{ fontWeight: "bold", textTransform: "uppercase" }} >Exhibitions</a>
        <a href="/#/artists" style={{ fontWeight: "bold", textTransform: "uppercase" }} >Artists</a>
        <Link to='/'>
        <img src={logo} width="72" height="72" alt="Logo" className='logo' style={{ marginTop: "20px" }} href="/"></img>
          </Link>
        <a href="/#/about-us" style={{ fontWeight: "bold", textTransform: "uppercase" }} >About</a>
        <a href="/#/shop" style={{ fontWeight: "bold", textTransform: "uppercase" }} >Shop</a>
        <a href="/#/contact-us" style={{ fontWeight: "bold", textTransform: "uppercase" }} >Contact</a>
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