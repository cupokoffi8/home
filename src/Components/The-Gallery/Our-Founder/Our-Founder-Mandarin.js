import React from 'react'; 
import '../../Exhibitions/Art-Therapy/Art-Therapy.css'; 
import NavbarMandarin from '../../Navbar-Mandarin/Navbar-Mandarin'; 
import '../../Button.css'; 

function OurFounderMandarin() { 
    return (
      <>
        <NavbarMandarin /> 
          <div className="Our-Founder"> 

          <form method="get" action="/home/#/our-founder"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            <h1 className="exhibition">美國龍美術與美國藝術博物館</h1> 
            <hr /> 

            <h5 id="caption">
            我們的創始人 
            </h5> 

            <p id="art-paragraph-other">
            莉娜·劉（Lena Liu） 來自中國北京，但目前正在紐約市、費城、洛杉磯、馬里蘭州和賓夕法尼亞州的蘭開斯特分享她的時間。
            從事文化藝術工作二十餘年。她的客戶群包括來自世界各地的許多著名藝術家，包括中國、日本、韓國、俄羅斯、印度、美國和加拿大等國家。
            客戶依靠她在展覽、藝術品媒體推廣和藝術品拍賣領域的專業知識。 
            </p>

            <p id="art-paragraph-other">
            與博物館、藝術畫廊、藝術大學和私人收藏家的藝術展覽管理只是與 Lena 背景相關的專業領域中的一小部分。她保持著在中國各地展示藝術家創作才華的能力，
            包括北京和中國許多其他城市。此外，紐約市、費城和洛杉磯都是她可以展示藝術家創作才能的城市。 
            </p>

            <p id="art-paragraph-other">
            展覽是為每位藝術家量身定制的。藝術家的藝術標準、畫廊位置的選擇和媒體展示只是與展示給每位藝術家的銷售計劃相關的幾個方面。 
            Lena 在世界各地的資源使藝術家能夠在國際藝術界建立許多新的聯繫。 
            </p> 

            <img id="image-thing-at" src="Uh.png" /> 

          </div>
        </>
    );
  }
  
  export default OurFounderMandarin;