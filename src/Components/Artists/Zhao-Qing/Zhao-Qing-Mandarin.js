import React from 'react'; 
import './Zhao-Qing.css'; 
import NavbarMandarin from '../../Navbar-Mandarin/Navbar-Mandarin'; 
import '../../Button.css'; 

function ZhaoQingMandarin() { 

  window.scrollTo(0, 0)

    return (
      <>
          
          <div className="artist-section"> 

          <form method="get" action="#/zhao-qing"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            {/* Artist Name */} 

            <h1 className="artist">趙青</h1> 
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            趙青1936年出生。她是中國舞蹈家協會副主席，著名電影演員趙丹的女兒。 她有很多經典的舞蹈作品，但在54歲時受傷。她開始學習繪畫，
            天賦與生俱 來。她一生中的每幅油畫都有生命力。它似乎是跳躍的音符，使人們感到高 興。 
              </p> 

              <p id="art-paragraph-other">
              2013年9月，美國古根海姆博物館，林肯藝術中心和其他著名的美國藝術機 構共同邀請趙青女士在美國舉辦繪畫展。
              </p> 

              <p id="art-paragraph-other">
              “只要您想學習繪畫，就不必關心自己的年齡，而要做到最好。時間不是問題 ”。趙晴女士已經快60歲了。她以繪畫開始了新的藝術生活。
              這次展覽使人 們更加自信，並開始嘗試 
              </p> 

              {/* List of Paintings */} 

              <img src="./ZQ1.jpeg" id="painting-zq"></img> 

              <img src="./ZQ2.jpeg" id="painting-zq"></img>  

              <img src="./ZQ3.jpeg" id="painting-zq"></img> 

              <img src="./ZQ4.jpeg" id="painting-zq"></img> 

          </div>
          </>
    );
  }
  
  export default ZhaoQingMandarin;