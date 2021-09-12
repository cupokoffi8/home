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

const PopUpMessage = ({ closeToast }) => {
  return (
    <>
      <h5 id="caption">American Dragon Fine Art will be closed on September 11, 2021.</h5>
      <h5 id="caption">We look forward to seeing you next week.</h5> 
    </> 
  );
}

toast.configure() 

export default function Home() { 

  // v Pop-Up v 

  // Uncomment the following to activate the pop-up: 
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     toast(
  //       <PopUpMessage /> 
  //       , {position: toast.POSITION.TOP_CENTER, 
  //         autoClose: 8000
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
      
      <a id="bigBoiLink" href="#/mag-and-myst">
        <h1 data-aos="fade-down" data-aos-duration="900" className="magAndMyst">"Magnificent And Mysterious"</h1>
        <h1 data-aos="fade-down" data-aos-duration="1000" id="please">Art Exhibition</h1> 
        <h1 data-aos="fade-down" data-aos-duration="1100" id="moreInfo">Has Been Extended Until September 25, 2021</h1> 
      </a> 

      <a id="why" href="#/jill-slaymaker">
      <button data-aos="fade-down" data-aos-duration="1200" className="currentExhibitionMessage">
        In addition, we have added new works of art to our gallery show from the talented 
        artist: <a href="#/jill-slaymaker"><span id="linkToArtist">Jill Slaymaker</span></a> 
        </button>
        </a>

        <br /> 


        <h1 data-aos="fade-down" data-aos-duration="1300" className='welcome' id="uh">Welcome To</h1>
        <h1 data-aos="fade-down" data-aos-duration="1400" className='american'>American Dragon International Fine Art Gallery</h1>

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

        <div id="iconStuff">
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

            <br /> 

        <Hours /> 

          <img src="./fung-shway.jpeg"id="fung-shway" />  

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