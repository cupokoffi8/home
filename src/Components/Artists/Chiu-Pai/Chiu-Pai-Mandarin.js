import React from 'react'; 
import './Chiu-Pai.css'; 
import '../Aparna-Banerjee/Aparna-Banerjee.css'; 
import NavbarMandarin from '../../Navbar-Mandarin/Navbar-Mandarin'; 
import '../../Button.css'; 

function ChiuPaiMandarin() {

  window.scrollTo(0, 0)

    return ( 
      <>
        <NavbarMandarin />
          <div className="artist-section"> 

          <form method="get" action="#/chiu-pai"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            {/* Artist Name */} 

            <h1 className="artist">邱白</h1> 
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            邱排出生於台北。她在服裝協會學習服裝設計，並與著名畫家徐敏一起學習 繪畫。 Chiu Pai於1999年移居不列顛哥倫比亞省的溫哥華，
            並在艾米麗·卡 爾藝術與設計大學學習西方繪畫。 
              </p> 

              <p id="art-paragraph-other">
              她是國際中國美術家協會，加拿大美術家協會，中國國際文化藝術促進會， 世界中國書畫協會會員，並且是溫哥華書畫學院副主席兼首席策展人。 
              </p> 

              <h2 id="header">
              潮牌話：
              </h2> 

              <p id="art-paragraph-other">
              當我設想這些繪畫時，“我使用矛盾的“覺醒夢”來描述我的繪畫。他們是如此 真實。人們被“覺醒的夢”概念所吸引和迷住。我一直希望那些夢想能夠散發 
              出一種和平，凝聚和寧靜的氣氛。完成的圖像應顯示有霧且有霧的外觀，該 圖像會偏離細節。完成的繪畫應該反映出我朦朧的情緒。” 
              </p> 

              {/* List of Paintings [Computer] */} 

              <div className="the-paintings">
              <img src="./cpG1.jpeg" id="painting-cp"></img> 
              <img src="./cpG3.jpeg" id="painting-cp"></img> 
              </div>

              <div className="the-words-cp">
              <h5 id="caption-cp">Green Leaves</h5>
              <h5 id="caption-cp">Dream Melody</h5> 
              </div> 

              <img src="./cpG2.jpg" id="painting-wide-cp"></img> 
              <h5 id="caption-cp">Jumping Colors</h5> 

              <div className="the-paintings">
              <img src="./CP1.png" id="painting-cp"></img> 
              <img src="./CP2.jpeg" id="painting-cp"></img> 
              </div>

              <div className="the-words-cp">
              <h5 id="caption-cp">Vernal Gardens</h5>
              <h5 id="caption-cp">Field of Gold</h5> 
              </div> 

              <div className="the-paintings">
              <img src="./CP3.png" id="painting-cp"></img> 
              <img src="./CP4.jpeg" id="painting-cp"></img> 
              </div>

              <div className="the-words-cp">
              <h5 id="caption-cp">Shadow of Autumn</h5>
              <h5 id="caption-cp"></h5> 
              </div> 

              <div className="the-paintings">
              <img src="./CP5.jpeg" id="painting-cp"></img> 
              <img src="./CP6.jpeg" id="painting-cp"></img> 
              </div>

              <div className="the-words-cp">
              <h5 id="caption-cp"></h5>
              <h5 id="caption-cp"></h5> 
              </div> 

              {/* List of Paintings [Phone] */} 
              <img src="./cpG1.jpeg" id="image-mobile-cp"></img>
              <h5 id="caption-mobile-cp">Green Leaves</h5> 

              <img src="./cpG3.jpeg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Dream Melody</h5> 

              <img src="./cpG2.jpg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Jumping Colors</h5> 

              <img src="./CP1.png" id="image-mobile-cp"></img>
              <h5 id="caption-mobile-cp">Vernal Gardens</h5> 

              <img src="./CP2.jpeg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Field of Gold</h5> 

              <img src="./CP3.png" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Shadow of Autumn</h5> 

              <img src="./CP4.jpeg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp"></h5> 

              <img src="./CP5.jpeg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp"></h5> 

              <img src="./CP6.jpeg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp"></h5> 

          </div> 
          </> 
    );
  }
  
  export default ChiuPaiMandarin; 