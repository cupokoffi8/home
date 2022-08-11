import React, { useEffect, useState } from "react"; 
import "./Home.css"; 
import HoursMandarin from "./Hours-Mandarin"; 
import NavbarMandarin from '../Navbar-Mandarin/Navbar-Mandarin';  
import '../Button.css'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import HomeImg from "./Images/Home.JPG"; 
import LandingMandarin from "./Landing-Mandarin";
import CurveMandarin from "./Curve-Mandarin"; 
import Popup from './Popup/Popup'; 

toast.configure(); 

export default function HomeMandarin() { 
  
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
      <NavbarMandarin /> 
      <div id="bottom"> 

      {/* 开始弹出窗口 */}

      {/* <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h3 style={{textDecoration: "underline", textAlign: "center"}}>重要信息</h3>
        <p style={{textAlign: "center"}}>
        我们将于 8 月 5 日第一个星期五下午 4:00 开放。直到晚上 9:00
        <br /><br />
        这将是我们画廊的 <span className="flash_me" style={{fontSize: "17px"}}>“FINAL FIRST FRIDAY”</span> 活动
        兰开斯特的位置。
        <br /><br />
        我们将于 8 月 31 日关闭位于北杜克街 614 号的现场画廊，
        2022. 但是，我们的在线商店在 8 月 31 日之后仍然可以访问，并且将提供
        我们的一些艺术品目前在我们的画廊中。
        <br /><br />
        我们的网上商店正在大升级！我们希望增加新的和
        未来令人兴奋的艺术家访问我们的网站。朋友们请继续
        访问我们的网站。
        <br /><br />
        我们将精心挑选最优秀的即将到来的艺术家人才以及当前备受赞誉的
        来自世界各地的艺术家。此外，Lena Liu 将继续与 Artists 合作
        帮助他们在世界各地的画廊展示他们的才华。请与她联系以获取更多信息
        与您可以在哪里展示您的艺术作品有关的信息。
        <br /><br />
        从 8 月 5 日开始，我们将为所有艺术品提供 25% 的折扣
        画廊。此优惠有效期至 2022 年 8 月 31 日截止日。
        <br /><br />
        我们期待在 8 月 5 日与大家见面。
        </p>
      </Popup> */}
      
      {/* 结束弹窗 */}

        <LandingMandarin /> 
        <HoursMandarin/> 
        <CurveMandarin /> 

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

          <br /> 
          <br /> 
          <br /> 
          
        </div>
        
      </>
    );
  }