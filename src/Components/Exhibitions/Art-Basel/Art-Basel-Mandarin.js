import React from 'react'; 
import './Art-Basel.css'; 
import NavbarMandarin from '../../Navbar-Mandarin/Navbar-Mandarin'; 
import '../../Button.css'; 

function ArtBaselMandarin() { 
  window.scrollTo(0, 0);
    return (
      <>
        <NavbarMandarin />
          <div className="Art-Basel"> 

          <form method="get" action="/art-basel"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            <h1 className="exhibition">佛羅里達州邁阿密市巴塞爾藝術博覽會</h1> 
            <hr /> 

            <p id="art-paragraph-other">
            雅昌藝術網是世界上最重要的中國藝術互聯網品牌，200萬專業會員和800萬每日頁面評論。
              </p> 

              <p id="art-paragraph-other">
              Artron的Art Headlines（artron.net）報導說，著名的策展人Liu Liu在Art Basil推出了藝術家Qiu Zihao的作品。
              他在邁阿密光譜劇院（Spectrum Miami）的展覽吸引了許多收藏家的注意。 
              </p> 

              <p id="art-paragraph-other">
              受到保羅·克利（Paul Klee）和瓦西里·康定斯基（Wassily Kandinsky）的啟發，霍華德（Qui Zihao）深入研究了音樂與藝術之間的關係。
              這次旅行使他將美術與音樂融合在一起，創建了一種創新的繪畫系統，可以識別節奏和旋律。通過這種系統，他可以製作出驚人的畫作，
              每幅畫都包含音樂作品。通過結合視覺和聽覺，他提供了一種新穎的方式來動態地使自己的感官享受繪畫和旋律的作品。 
              </p> 

              <br /> 

              <p id="art-paragraph-other">
              2019迈阿密巴塞尔艺术展的中国艺术家： 
              </p> 

              <a href="https://news.artron.net/20191214/n1067043.html">
              <p id="art-paragraph-other">
              https://news.artron.net/20191214/n1067043.html
              </p> 
              </a> 
              
          </div>
        </> 
    );
  }
  
  export default ArtBaselMandarin;