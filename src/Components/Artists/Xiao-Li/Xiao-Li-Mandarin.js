import React from 'react'; 
import './Xiao-Li.css'; 
import NavbarMandarin from '../../Navbar-Mandarin/Navbar-Mandarin'; 
import '../../Button.css'; 

function XiaoLiMandarin( ) {

  window.scrollTo(0, 0)

    return (
      <>
        <NavbarMandarin /> 
          <div className="artist-section"> 

          <form method="get" action="#/xiao-li"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            {/* Artist Name */} 

            <h1 className="artist">萧立</h1> 
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            萧立畢業於中央美術學院和中央美術學院雕塑系。他參加了以下活動： 
              </p> 
              <ul id="venues">
                <li id="bullet">
                • 法國巴黎國際藝術城展覽 
                </li>
                <li id="bullet">
                • 法國的AUBAZINE城市雕塑 
                </li>
                <li id="bullet">
                • 法國巴黎秋季阿隆展覽 
                </li>
                <li id="bullet">
                • 中國當代雕塑展 
                </li>
                <li id="bullet">
                • 法國巴黎LA BIENNALE D'ISSY兩年展  
                </li>
                <li id="bullet">
                • 第二屆全國青年美術作品展，銅獎獲得者 
                </li>
                <li id="bullet">
                • 中央美術學院作品展，一等獎獲得者 
                </li>
              </ul> 

              <p id="art-paragraph-other">
              應桂林漁子天堂國際藝術公園的邀請，他成為第一位創造居住花園的內地藝 術家。近四年來，他創作了一系列大型木雕作品，例如“ Big 
              Dream”，“Late Night” 和 “Source”。萧立還應邀為北京奧運會開幕式和閉幕式進行了討論， 造型和試制。對於成功實現“活動式”
              表演項目，他在起重道具的功能和形狀 方面起著決定性的作用。 
              </p> 

              <p id="art-paragraph-other">
              他目前是中央美術學院雕塑系教授，應邀擔任文化部專家，並擔任中國木雕 專業委員會常任理事。他目前主持該學院木雕工作室的教學。 
              </p> 

              {/* List of Paintings */} 

              <img src="./XL1.jpeg" id="painting-xl"></img>
              <h5 id="caption">Tribute to a Landscape Painting in Song Dynasty</h5> 

              <img src="./XL2.jpeg" id="painting-xl"></img> 
              <h5 id="caption">Memories of the Sea</h5> 

              <img src="./XL3.jpeg" id="painting-xl"></img> 
              <h5 id="caption">The Conversion of Night - A Small Draft</h5> 

              <img src="./XL.jpeg" id="painting-xl"></img> 
              <h5 id="caption">Long Ago</h5> 

              <img src="./XL5.jpeg" id="painting-xl"></img> 
              <h5 id="caption">War Horse</h5> 

              <img src="./XL6.jpeg" id="painting-xl"></img> 
              <h5 id="caption">Zen Masters</h5> 

          </div> 
          </> 
    );
  }
  
  export default XiaoLiMandarin; 