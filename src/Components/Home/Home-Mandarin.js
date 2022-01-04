import React from "react";
import "./Home.css"; 
import HoursMandarin from "./Hours-Mandarin"; 
import NavbarMandarin from '../Navbar-Mandarin/Navbar-Mandarin';  
import '../Button.css'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 

export default function HomeMandarin() { 
  
  Aos.init({});
  window.scrollTo(0, 0)

    return (
      <>
      <NavbarMandarin /> 
      <div id="bottom"> 

        <form method="get" action="#/">
          <button id="the-button" type='btn'>English</button> 
        </form> 

        <div id="bottom-1"> 

        {/*------------------------------------------------------------------------------------------------------------------------------*/}
        <div className="top-message" data-aos="fade-down" data-aos-duration="1500">
        <h1 data-aos="fade-down" data-aos-duration="1700" className='celebrate' id="celebrate">祝我们所有的朋友新年快乐</h1>
        <h1 data-aos="fade-down" data-aos-duration="1900" className='from-1' id="from-1">
          我们希望2022年或4719年带给您许多快乐和健康
          </h1>
          <div className="inner-message" data-aos="fade-down" data-aos-duration="2000">
          <h1 data-aos="fade-down" data-aos-duration="2000" className='from-2' id="from">
          为了庆祝美国和中国的新年， 
          </h1>
          <h1 data-aos="fade-down" data-aos-duration="2200" className='from-3' id="from"> 
          我们将提供一个 <span className="blink_me">20% 折扣</span> 2022 年 1 月 1 日至 2 月 15 日（或 4719）我们所有的作品
          </h1>
          </div> 
          <h1 data-aos="fade-left" data-aos-duration="2400" className='from-2' id="from"> 
          我们期待很快在我们的画廊见到您！
          </h1>
        </div> 
        {/*------------------------------------------------------------------------------------------------------------------------------*/}

      
        <h1 data-aos="fade-down" data-aos-duration="1400" className='american'>歡迎來到美國龍國際美術</h1> 

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

        <div data-aos="fade-up" data-aos-duration="1800" id="iconStuff">
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

          </div>  

          {/*FUCK*/}
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          <br /> 
          {/*FUCK*/}

        <HoursMandarin/> 

        <br id="br-mobile" /> 

          <img src="./fung-shway.jpeg"id="fung-shway" />  

          <p id="p-top">
          美国龙国际艺术与许多城市和国家的画廊都有合作伙伴关系。我们的创始人刘娜（Lena Liu）通过多年的经验认识到，
          不同的国家和地区具有不同的艺术风格和品味。有些艺术作品在某些地区未被积极接受，但是同一艺术在世界其他地区将被视为非凡的创作。
          这可能会降低艺术家才华的兴趣，因此区域性展览对于艺术家来说是一个薄弱的地方。为了对艺术产生浓厚的兴趣，我们在中国，日本，
          韩国，意大利，法国，英国和美国设有画廊。这些国家/地区中许多城市的博物馆和美术馆与美国龙美术馆建立了长期的合作关系。
          通过我们的专业合作伙伴关系，艺术家可以展示自己的创造才能。   我们还为我们的艺术家以及对中国和美国艺术感兴趣的人提供许多其他服务。
          我们可以提供各种服务，包括艺术家参观，夏令营，艺术教育和旅游协调。为艺术家提供的每项服务都将根据艺术家的个人展览和其他业务合作进行定制。
          请立即与我们联系以获取更多信息！
          </p> 
        </div>
        
      </>
    );
  }