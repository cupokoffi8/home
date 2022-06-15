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

      {/* Begin POPUP */}
      <Popup trigger={timedPopup} setTrigger={setTimedPopup}>
        <h3>重要更新</h3>
        <p>
        American Dragon 将于 6 月 18 日上午 10:00 至下午 3:00 开放<br />
        <br />
        我们的画廊距离宾夕法尼亚医学兰开斯特综合医院只有一个街区，
        距离快船杂志体育场两个街区。路上有很多免费停车位
        我们画廊周围的街道。<br />
        <br />
        除了我们伟大的美国和亚洲艺术家，您还可以访问我们的好朋友
        PAVAA 画廊，距离 American Dragon 画廊仅几步之遥。帕瓦
        拥有美丽的非洲和非洲中心艺术，供您观赏。<br />
        <br />
        PAVAA 和 American Dragon 一起让您有机会享受和购买优质产品
        来自世界各地的艺术，同时欣赏美丽的兰开斯特市中心。<br />
        <br />
        我们希望来自纽约市、费城、巴尔的摩、华盛顿和其他地区的所有访客
        美国地区，来这里购买鸡玉米汤和“我爱性交”
        T 恤，将抽出时间参观我们美丽的画廊。
        </p>
      </Popup>
      {/* End POPUP */} 

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
        </div>
        
      </>
    );
  }