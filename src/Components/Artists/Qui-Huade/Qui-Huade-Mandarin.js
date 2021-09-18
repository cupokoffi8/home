import React from 'react'; 
import './Qui-Huade.css'; 
import NavbarMandarin from '../../Navbar-Mandarin/Navbar-Mandarin';
import '../../Button.css'; 

function QuiHuadeMandarin( ) {

  window.scrollTo(0, 0)

    return (
      <>
        <NavbarMandarin />
          <div className="artist-section"> 

          <form method="get" action="#/qui-huade"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            {/* Artist Name */} 

            <h1 className="artist">奎華德</h1> 
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            Qui Huade六歲時展現了他的藝術才華。在紐約攻讀雙碩士學位和博士學位 時，他參加了紐約市藝術學生聯盟的繪畫班。他在藝術學生聯盟學習油畫。 
            受Paul Klee和Wassily Kandinsky作品的啟發，Qui深入研究了音樂與美術之 間的關係。 
              </p> 

              <p id="art-paragraph-other">
              這次旅行使他將美術與音樂融合在一起，創造了一個創新的系統 ，可以創作出具有節奏感和旋律感的繪畫。通過結合視覺和聽覺，他提供了 
              一種新穎的方式來動態地使自己的感官享受繪畫和旋律的作品。 
              </p> 

              <p id="art-paragraph-other">
              在意大利都靈現代藝術博物館的Qui Huade藝術展覽中，意大利小提琴家 Matteo Marra與意大利著名畫家Vito Pittore先生討論了Qui 
              Huade每幅畫中 的音樂旋律。 Qui的繪畫開闢了一條全新的途徑，可以通過色彩觀看音樂。 
              </p> 

              <p id="art-paragraph-other">
              Qui Huade邀請我們進入一個世界，在這裡我們可以一邊聽繪畫，一邊欣賞 豐富多彩的音樂。這個世界豐富了我們的觀念並啟發了我們的靈魂。
              他的獲 獎作品已在亞洲，歐洲和美國的許多展覽中展出。 
              </p> 

              <p id="art-paragraph-other">
              目前，他的作品在意大利都靈的現代美術館，現代藝術博物館以及紐約的 Saphira和Ventura畫廊展出。即將舉行的展覽包括巴黎的盧浮宮，
              在Saphira 和Ventura畫廊的個展，以及參加邁阿密巴塞爾藝術展的獨立項目。 
              </p> 

              <p id="art-paragraph-bottom">
              奎華德的繪畫和雕塑作品被全世界私人收藏 
              </p>

              <p id="art-paragraph-bottom-mobile">
              奎華德的繪畫和雕塑作品被全世界私人收藏 
              </p> 

              {/* List of Paintings - PC */} 

              <div className="painting-duo">
              <img src="./H1.jpeg" id="painting-howard-l"></img> 
              <img src="./H1!.jpeg" id="painting-howard-r"></img> 
              </div> 

              <div className="painting-duo">
              <img src="./H2.png" id="painting-howard-l"></img> 
              <img src="./H2!.png" id="painting-howard-r"></img> 
              </div> 

              <div className="painting-duo">
              <img src="./H3.jpeg" id="painting-howard-l"></img> 
              <img src="./H3!.jpeg" id="painting-howard-r"></img> 
              </div> 

              <div className="painting-duo">
              <img src="./H4.jpeg" id="painting-howard-l"></img> 
              <img src="./H4!.png" id="painting-howard-r"></img> 
              </div> 

              {/* List of Paintings - Mobile */} 

              <img src="./H1.jpeg" id="painting-howard-t"></img> 
              <img src="./H1!.jpeg" id="painting-howard-b"></img>  

              <img src="./H2.png" id="painting-howard-t"></img> 
              <img src="./H2!.png" id="painting-howard-b"></img>  

              <img src="./H3.jpeg" id="painting-howard-t"></img> 
              <img src="./H3!.jpeg" id="painting-howard-b"></img>  

              <img src="./H4.jpeg" id="painting-howard-t"></img> 
              <img src="./H4!.png" id="painting-howard-b"></img> 

          </div> 
          </> 
    );
  }
  
  export default QuiHuadeMandarin; 