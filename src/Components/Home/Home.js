import React, { useEffect, useState } from "react";
import "./Home.css"; 
import Hours from "./Hours"; 
import Navbar from '../Navbar/Navbar'; 
import '../Button.css'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import { Link } from 'react-router-dom'; 
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
  window.scrollTo(0, 0) 

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
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h3>IMPORTANT INFO</h3>
        <p>
        Our gallery is located one block from the Penn Medicine Lancaster General Hospital, 
        and two blocks from the Clipper Magazine Stadium. There is plenty of free parking on the 
        streets around our gallery.<br /> 
        <br /> 
        In addition to our great American and Asian artists, you can visit our good friends at 
        the PAVAA Gallery, which is located a few steps from the American Dragon gallery. PAVAA 
        has beautiful African and Afrocentric art featured for your viewing pleasure.<br /> 
        <br /> 
        Together, PAVAA and American Dragon give you the opportunity to enjoy and purchase outstanding 
        art from around the world, while enjoying beautiful downtown Lancaster.<br /> 
        <br /> 
        We hope all of our visitors from New York City, Philadelphia, Baltimore, Washington, and other 
        areas of the United States, who come here to purchase chicken corn soup and “I love Intercourse” 
        t-shirts, will find the time to visit our beautiful galleries. 
        </p>
      </Popup>
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
          
        </div>
        
      </>
    );
  } 