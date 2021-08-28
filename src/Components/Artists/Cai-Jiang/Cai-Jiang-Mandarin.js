import React from 'react'; 
import './Cai-Jiang.css'; 
import NavbarMandarin from '../../Navbar-Mandarin/Navbar-Mandarin'; 
import '../../Button.css'; 

function CaiJiangMandarin() {

  window.scrollTo(0, 0)

    return (
      <>
        <NavbarMandarin />
          <div className="artist-section"> 

          <form method="get" action="#/cai-jiang"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            {/* Artist Name */} 

            <h1 className="artist">蔡江</h1> 
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            蔡江才來自中國四川。 1979年，他移居紐約，這是美國當代藝術之地。 37 年以來，他一直在培養和理解中國哲學的超感官，
            超體驗和超時的“道德經驗 ”，並結合中醫藥，“皇帝內經”陰陽，血液，身體，精神和靈魂。
              </p>

              <p id="art-paragraph-other">
              從1981年起，他在美國舉辦了30多次個人藝術展覽，其中包括2014年在紐 約市皇后博物館舉行的為期四天的盲人藝術表演，
              題目為“藝術診斷與診斷 ”。他還參加了全球20多個展覽和藝術博覽會。
              </p> 

              <p id="art-paragraph-other">
              從2015年到2016年，他在紐約的Whitebox藝術中心著名畫廊）進行了盲人 藝術表演和個展。他的作品已被喬治·布什總統以及許多著名的藝術機構和收 
              藏家收藏。
              </p> 

              <p id="art-paragraph-other">
              總部位於紐約的美國著名藝術評論家安東尼·哈登（Anthony Haden）對他的 藝術和表演給予了很高的藝術評價。 “蔡江是一位偉大而非凡的藝術家，
              其 盲目創造的藝術超越了普通視覺藝術的美感。” 
              </p> 

              <p id="art-paragraph-bottom">
              藝術經驗分為三個主要階段：
              </p>

              <p id="art-paragraph-bottom">
              1. 創新教皇流浪女神與風景系列。
              </p>

              <p id="art-paragraph-bottom">
              2. 創新的水墨山水，花鳥系列。
              </p>

              <p id="art-paragraph-bottom">
              3. 當代當代盲人智慧藝術，繪畫和雕塑系列。
              </p> 

              {/* ------------------------------------------------------------- */}

              <p id="art-paragraph-bottom-mobile">
              藝術經驗分為三個主要階段：
              </p>

              <p id="art-paragraph-bottom-mobile">
              1. 創新教皇流浪女神與風景系列。
              </p>

              <p id="art-paragraph-bottom-mobile">
              2. 創新的水墨山水，花鳥系列。
              </p>

              <p id="art-paragraph-bottom-mobile">
              3. 當代當代盲人智慧藝術，繪畫和雕塑系列。
              </p> 



              {/* List of Paintings */} 

              <img src="./CJ1.jpeg" id="painting"></img> 

              <img src="./CJ2.jpeg" id="painting"></img> 

              <img src="./CJ3.jpeg" id="painting"></img> 

              <img src="./CJ4.jpeg" id="painting"></img> 

          </div> 
          </> 
    );
  }
  
  export default CaiJiangMandarin; 