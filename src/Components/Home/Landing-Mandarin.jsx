import React, { useEffect, useState } from "react";
import "./Home.css"; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 
import instagram from "./Images/instagram.png"; 
import twitter from "./Images/twitter.png"; 
import linkedin from "./Images/linkedin.png"; 
import facebook from "./Images/facebook.png"; 

function LandingMandarin() {

    Aos.init({}); 
  
      return (
          <div id="landing-div"> 

            <form method="get" action="#/">
            <button id="the-button" type='btn'>English</button> 
            </form> 

            <h1 data-aos="fade-down" data-aos-duration="1800" className='gallery'>歡迎來到美國龍國際美術</h1>

        <div id="info"> 

          {/* <a data-aos="fade-left" data-aos-duration="900" id="addy-click" href="https://www.google.com/maps/place/American+Dragon+International+Fine+Art+Gallery/@40.0483338,-76.3059007,15z/data=!4m5!3m4!1s0x0:0x4c549ed6537c2a4!8m2!3d40.0483496!4d-76.3057639">
            614 N. Duke Street, Suite One, Lancaster, PA 17602
            </a>

            <a data-aos="fade-right" data-aos-duration="900" id="addy">
                   917-886-1701      
            </a>

            <a data-aos="fade-left" data-aos-duration="900" id="addyBottom"> 
              info@americandragonfineart.com
            </a>  */} 

          </div> 

          <p data-aos="fade-down" data-aos-duration="1000" className="paragraph-description" style={{marginLeft: "auto", marginRight: "auto"}}>
            来自世界各地的优质艺术品。浏览我们的页面以了解更多关于我们的事业的信息，并找到可以增强任何环境的作品！ 
            </p> 

            <br /> 

          <div data-aos="fade-up" data-aos-duration="2000" id="iconStuff"> 
            <a id="twitter" href="https://facebook.com/americandragonart">
            <img src={facebook} width="50" height="50" /> 
            </a> 

            <a id="instagram" href="https://twitter.com/ameridragonart">
            <img src={twitter} width="50" height="50" />
            </a>

            <a id="instagram" href="https://www.instagram.com/american.dragon.art/">
            <img src={instagram} width="50" height="50"/>
            </a>

            <a id="linkedin" href="https://www.linkedin.com/company/american-dragon-fine-art/">
            <img src={linkedin} width="50" height="50"/> 
            </a> 
            </div> 

          </div>
      );
    }
    
    export default LandingMandarin; 