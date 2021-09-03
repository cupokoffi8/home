import React from "react";
import "./Home.css"; 
import Map from "../Map/Map";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; 
import HoursMandarin from "./Hours-Mandarin"; 
import NavbarMandarin from '../Navbar-Mandarin/Navbar-Mandarin';  
import '../Button.css'; 

export default function HomeMandarin() { 
  
  window.scrollTo(0, 0)

    return (
      <>
      <NavbarMandarin /> 

        <div id="bottom"> 

        <form method="get" action="#/">
          <button id="the-button" type='btn'>English</button> 
        </form> 

        <a id="bigBoiLink" href="#/mag-and-myst-mandarin">
        <h1 className="magAndMyst">"宏伟而神秘"</h1>
        <h1 id="please">艺术展</h1> 
        <h1 id="moreInfo">已延长至2021年9月25日</h1> 
      </a> 

      <a id="why" href="#/jill-slaymaker-mandarin">
      <button className="currentExhibitionMessage">
      此外，我们还从才华横溢的画廊展览中添加了新的艺术作品艺术家：
        <a href="#/jill-slaymaker-mandarin"><span id="linkToArtist">吉尔·斯莱梅克</span></a> 
        </button>
        </a> 

        <br /> 
      
        <h1 className='welcome' id="uh">歡迎來到美國龍國際美術</h1> 

        <div id="info">
          <a id="addy-click" href="https://www.google.com/maps/place/American+Dragon+International+Fine+Art+Gallery/@40.0483338,-76.3059007,15z/data=!4m5!3m4!1s0x0:0x4c549ed6537c2a4!8m2!3d40.0483496!4d-76.3057639">
            614 N. Duke Street, Suite One, Lancaster, PA 17602
            </a>

            <a id="addy">
                   917-886-1701      
            </a>

            <a id="addyBottom"> 
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

        <HoursMandarin /> 

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