import React from "react";
import "./Home.css"; 
import HoursMandarin from "./Hours-Mandarin"; 
import NavbarMandarin from '../Navbar-Mandarin/Navbar-Mandarin';  
import '../Button.css'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 
import HomeImg from "./POND_FLOWERS.jpeg"; 
import LandingMandarin from "./Landing-Mandarin";

export default function HomeMandarin() { 
  
  Aos.init({});
  window.scrollTo(0, 0)

    return (
      <>
      <NavbarMandarin /> 
      <div id="bottom"> 

        <LandingMandarin /> 
        <HoursMandarin/> 

        <br id="br-mobile" /> 

          <img src={HomeImg} id="fung-shway" />   

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