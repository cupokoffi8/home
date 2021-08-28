import React from 'react'; 
import './Su-Zi.css'; 
import NavbarMandarin from '../../Navbar-Mandarin/Navbar-Mandarin'; 
import '../../Button.css'; 

function SuZiMandarin() {

  window.scrollTo(0, 0)

    return (
      <>
        <NavbarMandarin />
          <div className="artist-section"> 

          <form method="get" action="/su-zi"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            {/* Artist Name */} 

            <h1 className="artist">蘇子</h1> 
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            蘇子是專業畫家，是北京市女畫家聯誼會會員，還是北京市油畫學會會員。 她從小就喜歡繪畫。蘇子以系統的方式研究了大膽的徒手中國傳統繪畫，
            並 在中央美術學院繼續研究西方油畫。 
              </p> 

              <p id="art-paragraph-other">
              近年來，蘇子全心投入油畫民族化研究，融合了西方文化與中國文化。她的 繪畫風格採用了表現主義，但從本質上講，它仍然是大膽的寫意傳統國畫， 
              它藉鑑了中國戲曲人物的形式語言。蘇子具有這種獨特的繪畫風格，已進入 一種新的藝術狀態。 
              </p> 

              {/* List of Paintings */} 

              <img src="./Sing.png" id="painting"></img>
              <h5 id="caption">Sing</h5> 

              <img src="./Love-by-the-River.png" id="painting"></img> 
              <h5 id="caption">Love by the River</h5> 

              <img src="./Listened.png" id="painting"></img> 
              <h5 id="caption">Listened</h5> 

              <img src="./Red-Age.png" id="painting"></img> 
              <h5 id="caption">Red Age</h5> 

              <img src="./Cherry-Blossom-Season.png" id="painting"></img> 
              <h5 id="caption">Cherry Blossom Season</h5> 

          </div>
          </> 
    );
  }
  
  export default SuZiMandarin; 