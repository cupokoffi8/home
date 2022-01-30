import React, { useEffect, useState } from "react";
import "./Home.css"; 
import Map from "../Map/Map";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; 
import Hours from "./Hours"; 
import Navbar from '../Navbar/Navbar'; 
import '../Button.css'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { Link } from 'react-router-dom'; 
import { Warning } from "@material-ui/icons";
import HomeImg from "./POND_FLOWERS.jpeg"; 

const PopUpMessage = ({ closeToast }) => {
  return (
    <>
      <h5 id="caption">Due to an unexpected emergency, the gallery will be closed on Saturday, January 8th.</h5>
      <h5 id="caption">We apologize for the inconvenience, and look forward to seeing you next week.</h5> 
    </> 
  );
}

toast.configure() 

export default function Home() { 

  // v Pop-Up v 

  // UNCOMMENT/COMMENT THE FOLLOWING TO ACTIVATE/DEACTIVATE THE POP-UP: 

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     toast.error(
  //       <PopUpMessage /> 
  //       , {position: toast.POSITION.TOP_CENTER, 
  //         autoClose: 5000,
  //       })
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []); 
  
  // ^ End Pop-Up ^ 

  Aos.init({}); 
  window.scrollTo(0, 0) 

    return (
      <>
      <Navbar /> 

      <div id="bottom"> 

        <form method="get" action="#/mandarin">
          <button id="the-button" type='btn'>普通話</button> 
        </form> 

        {/* <div id="bottom-1">  v(Uncomment this when the stuff below is not in use)v */}


        {/*------------------------------------------------------------------------------------------------------------------------------*/}
        <div className="top-message" data-aos="fade-down" data-aos-duration="1500">
        <h1 data-aos="fade-down" data-aos-duration="1700" className='celebrate' id="celebrate">Happy New Year to All of Our Friends</h1>
        <h1 data-aos="fade-down" data-aos-duration="1900" className='from-1' id="from-1">
          We hope the year 2022 or 4719 brings you much happiness and good health
          </h1>
          <div className="inner-message" data-aos="fade-down" data-aos-duration="2000">
          <h1 data-aos="fade-down" data-aos-duration="2000" className='from-2' id="from">
          To celebrate the American and Chinese New Year, 
          </h1>
          <h1 data-aos="fade-down" data-aos-duration="2200" className='from-3' id="from"> 
          We are going to offer a <span className="blink_me">20% discount</span> on all our works of art from January 1 until February 15, 2022 (or 4719)
          </h1>
          </div> 
          <h1 data-aos="fade-left" data-aos-duration="2400" className='from-2' id="from"> 
          We look forward to seeing you soon at our gallery!
          </h1>
        </div> 
        {/*------------------------------------------------------------------------------------------------------------------------------*/}


        {/* <h1 data-aos="fade-down" data-aos-duration="1700" className='welcome' id="uh">Welcome to</h1> */}
        <h1 data-aos="fade-down" data-aos-duration="1800" className='american'>American Dragon International Fine Art Gallery</h1>

        <div id="info">
          <a data-aos="fade-left" data-aos-duration="900" id="addy-click" href="https://www.google.com/maps/place/American+Dragon+International+Fine+Art+Gallery/@40.0483338,-76.3059007,15z/data=!4m5!3m4!1s0x0:0x4c549ed6537c2a4!8m2!3d40.0483496!4d-76.3057639">
            614 N. Duke Street, Suite One, Lancaster, PA 17602
            </a>

            <a data-aos="fade-right" data-aos-duration="900" id="addy">
                   917-886-1701      
            </a>

            <a data-aos="fade-left" data-aos-duration="900" id="addyBottom"> 
              info@americandragonfineart.com
            </a> 

          </div> 

          <div data-aos="fade-up" data-aos-duration="2000" id="iconStuff"> 
            <a id="twitter" href="https://twitter.com/ameridragonart">
            <img src="./twitter.png" width="50" height="50" />
            </a>

            <a id="instagram" href="https://www.instagram.com/american.dragon.art/">
            <img src="./instagram.png" width="50" height="50"/>
            </a>

            <a id="linkedin" href="https://www.linkedin.com/company/american-dragon-fine-art/">
            <img src="./linkedin.png" width="50" height="50"/>
            </a> 
            </div> 

          {/* </div>  v(Uncomment this when the stuff below is not in use)v */} 
          {/* --------------------------------------------------------------------- */}

          <br /> 

          <div data-aos="fade-down" data-aos-duration="1400" className="announcement-card">
        <h6 className="magAndMyst">
          <span className="big-words">
            Visit Us to Explore a Diverse Collection of Artwork
            </span>
            <hr className="the-line" /> 
            <span className="other-words">
          We have six featured artists on display: 
          </span>
          </h6> 
        
          <Link className="artist-link" to="/apelles-zhou">Appelles Zhou</Link><br /> 
          <Link className="artist-link" to="/aparna-banerjee">Aparna Banerjee</Link><br />
          <Link className="artist-link" to="/charles-haber">Charles Haber</Link><br />
          <Link className="artist-link" to="/chiu-pai">Chiu Pai</Link><br /> 
          <Link className="artist-link" to="/jill-slaymaker">Jill Slaymaker</Link><br /> 
          <Link className="artist-link" to="/zhen-zhong-duan">Zhen Zhong Duan</Link> 
          
        <h6 id="moreInfo">
          We are happy to announce we currently have an extended exhibition of our
          international artists at The Greenfield Inn Restaurant in Lancaster, Pennsylvania.</h6> 
      </div> 

      <br />
      <br /> 

      {/* --------------------------------------------------------- */}

        <Hours /> 

        <br id="br-mobile" />  

          <img src={HomeImg} id="fung-shway" />  

          <p id="p-top">
          American Dragon International Fine Art has partnerships with galleries in a wide range of 
          cities and countries. Our founder, Lena Liu, through years of experience, realized that different 
          countries and regions have various artistic styles and tastes in art. Some works of art do not 
          have a positive acceptance in a given region, but the same art would be considered an exceptional 
          creation in another area of the world. This can diminish the interest of an artist’s talents, and 
          as a result, regional exhibitions can be a weak venue for the artist. In order to obtain a strong 
          interest in the art, we have our galleries located in China, Japan, Korea, Italy, France, the 
          United Kingdom, and the United States. The museums and galleries of many cities located in these 
          countries, have established a long term relationship with American Dragon. This allows the artist 
          to have the ability to showcase their creative talent through our professional partnerships.
          </p>

          <p id="p-bottom">
          We also offer many other services to our artists and those interested in the arts in China and the 
          United States. Artist visits, summer camps, art education, and tourism coordination are some of the 
          various services we can provide. Each service provided to the artist would be customized for the 
          artist’s individual exhibition and other business collaborations. Please contact us for additional 
          information today! 
          </p> 
          
        </div>
        
      </>
    );
  } 