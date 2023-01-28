import React, { useState, useRef } from 'react'; 
import { FaBars, FaTimes } from "react-icons/fa"; 
import { Link } from 'react-router-dom'; 
import logo from "./logo.png"; 
import "./Navbar.css"; 

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
        <a href="/#/cart">Cart</a>
        <a href="/#/exhibitions">Exhibitions</a>
        <a href="/#/artists">Artists</a>
        <Link to='/'>
        <img src={logo} width="72" height="72" alt="Logo" className='logo' style={{ marginTop: "40px" }} href="/"></img>
          </Link>
        <a href="/#/about-us">About Us</a>
        <a href="/#/shop">Shop</a>
        <a href="/#/contact-us">Contact Us</a>
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