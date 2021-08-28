import React from 'react'; 
import './Zhen-Zhong-Duan.css'; 
import NavbarMandarin from '../../Navbar-Mandarin/Navbar-Mandarin'; 
import '../../Button.css'; 

function ZhenZhongDuanMandarin() { 

  window.scrollTo(0, 0)

    return (
      <>
        <NavbarMandarin /> 
          <div className="artist-section"> 

          <form method="get" action="/zhen-zhong-duan"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            {/* Artist Name */} 

            <h1 className="artist">段振中</h1> 
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            段振中，1944年生於安徽。1969年畢業於中央工藝美術學院裝飾藝術與建築專業。 1969年至1973年任中央歌舞團美術設計師。
            之後他在北京電影製片廠任職，成為他們的高級藝術設計師。他的佈景設計出現在20多部主要影視作品中，
            並因其對中國電影行業的貢獻而獲得了許多特殊榮譽和獎項。 
              </p> 

              <p id="art-paragraph-other">
              1989年因為電影《等待黎明》設計佈景，獲得相當於美國奧斯卡金像獎的“金雞獎”。段先生還與世界著名導演胡安合作拍攝了享譽國際的電影
              《夢與記憶》。 
              </p> 

              <p id="art-paragraph-other">
              段先生是一位多才多藝的水彩和油畫風景畫家。他的作品曾在國際上展出，包括北京、香港、歐洲和美國。他是美國油畫家的成員，
              他的油畫曾在蘇富比展出和出售。 
              </p> 

              {/* List of Paintings */} 

              <img src="./ZZD1.jpeg" id="painting-zzd"></img>
              {/* <h5 id="caption">Beauty 1</h5>  */}

              <img src="./ZZD2.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD3.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD4.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD5.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD6.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD7.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD8.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD9.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD10.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD11.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD12.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD13.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD14.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD15.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */} 

          </div>
          </>
    );
  }
  
  export default ZhenZhongDuanMandarin;