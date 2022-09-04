import React, { useEffect, useState } from "react";
import "./Home.css"; 
import Hours from "./Hours"; 
import Navbar from '../Navbar/Navbar'; 
import '../Button.css'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import HomeImg from "./Images/Home.JPG"; 
import Landing from "./Landing";
import Curve from "./Curve"; 
import Popup from './Popup/Popup'; 

// TOP OF SCREEN TOAST NOTIFICATION 
const PopUpMessage = ({ closeToast }) => {
  return (
    <>
      <h5 style={{textAlign: 'center'}} id="caption-pp-u">
        NEW ARTISTS
        </h5>

      <h5 style={{textAlign: 'center'}} id="caption-pp">
        We are featuring TWO new artists at our Lancaster gallery: 
        </h5> 

        <a id="caption-pp-l" href="#/angel-cruz">Angel Cruz</a>
        <a id="caption-pp-l" href="#/zhenghui-lan">Lan Zhenghui</a> 
    </> 
  );
}
// END

toast.configure() 

export default function Home() { 

  // v Pop-Up v 

  // UNCOMMENT/COMMENT THE FOLLOWING TO ACTIVATE/DEACTIVATE THE POP-UP: 

              // useEffect(() => {
              //   const timer = setTimeout(() => {
              //     toast(
              //       <PopUpMessage />, 
              //       {position: toast.POSITION.TOP_CENTER, 
              //        autoClose: 10000,
              //       })
              //   }, 1000);
              //   return () => clearTimeout(timer);
              // }, []); 
  
  // ^ End Pop-Up ^ 

  Aos.init({});  

  const [timedPopup, setTimedPopup] = useState(false); 

  // Set POPUP to show on the screen after 3 seconds 
  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true); 
    }, 2000); 
  }, []); 

    return (
      <>
      <Navbar /> 

      <div id="bottom"> 

      {/* Begin POPUP */}

      {/* <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h3 style={{textDecoration: "underline", textAlign: "center"}}>IMPORTANT INFO</h3>
        <p style={{textAlign: "center"}}>
        We will be open on First Friday, August 5, from 4:00 p.m. until 9:00 p.m.
        <br /><br /> 
        This will be our <span className="flash_me">“FINAL FIRST FRIDAY“</span> event for our gallery at our 
        Lancaster location.
        <br /><br />
        We will be closing the onsite gallery at 614 North Duke Street on August 31,
        2022. However, our online store will still be accessible after August 31, and will offer
        some of our artwork that is currently in our gallery. 
        <br /><br />
        Our online shop is getting a BIG upgrade! We hope to add new and
        exciting artists to our web site in the future. Friends, please continue to
        access our website. 
        <br /><br />
        We will carefully select the best upcoming artist talent as well as current acclaimed 
        artists from around the world. In addition, Lena Liu will continue to work with Artists 
        to help them show their talent in various worldwide galleries. Please contact her for additional
        information related to where you could display your works of art.
        <br /><br />
        Starting on August 5, we will be offering a 25% discount on all artwork in the
        gallery. This offer will be in effect until our closing day of August 31, 2022.
        <br /><br />
        We look forward to seeing everyone on August 5.
        </p>
      </Popup> */} 
      
      {/* End POPUP */} 

      <Landing /> 
      <Hours /> 
      <Curve /> 

      <br /> 

      {/* --------------------------------------------------------- */} 

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

          <br />
          <br /> 
          <br /> 
          
        </div>
        
      </>
    );
  } 