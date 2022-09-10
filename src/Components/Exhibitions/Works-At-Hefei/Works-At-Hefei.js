import React from 'react'; 
import './Works-At-Hefei.css'; 
import Navbar from '../../Navbar/Navbar'; 
import '../../Button.css'; 

function Works() {
  window.scrollTo(0, 0);
    return (
      <>
          
          <div className="Works-At-Hefei"> 

          <form method="get" action="#/works-at-hefei-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            <h1 className="exhibition">Beijing Art Academy Works At Hefei Exhibition</h1> 
            <hr /> 

            <h5 id="caption">
              October 11th – October 15th, 2014 
            </h5> 

            <img id="image-thing-at" src="./WaH1.jpeg" /> 

            <h5 id="caption">
              Curators: Wei Liu (Lena Liu) and Wu Zu Hong 
            </h5> 

            <h5 id="caption">
              Exhibition Address: Hefei-Kurume Friendly Art Museum 
            </h5> 

            <h5 id="caption">
              Exhibitors: 
            </h5> 

            <p id="art-paragraph-other">
              Wang Wen Fang,   Li Xiao Ke, Wang Ming Ming,   Zhuang Xiao Lei,  Ji Qing Yuan, Lu Ping, Yuan Wu, 
              Cai Yu Shui, Mo Xiao Song, Guo Bao Jun, Li Feng Long, Sun Zhen Sheng 
            </p> 

            <h5 id="caption">
              Foreward: 
            </h5> 

            <p id="art-paragraph-other">
              The Beijing Painting Academy is the earliest and largest professional painting institute in China, 
              which was founded in 1957.  The School of Art Creation, Teaching and Research at the Beijing Academy 
              of Paintings adheres to the traditional context, and all artistic creations serve the purpose of 
              producing fine products and talents.  While creating, researching and cultivating artists, the academy 
              also undertakes traditional Chinese painting.  Classical collections, excavation, combing, dissemination, 
              and other tasks show their unique cultural values, as well as social and historical responsibility.  
              Beijing Painting Academy has a strong creative power in flower and bird paintings. Many celebrities 
              in the history of Chinese Art, have worked and studied at this institution.  Qi Bai Shi, Chen Ban Ding, 
              Yu Fei, Wang Xue Tao, Cui Zi Fan, and many other famous masters have helped create many excellent and 
              influential artists.  The Beijing Academy of Painting has formed a rich traditional heritage, which 
              is a valuable asset for China. 
            </p> 

            <p id="art-paragraph-other">
            This is the first collective exhibition of the Beijing Academy of Painting.  Many academic artist groups, 
            art school students, and artists have viewed the exhibition. 
            </p> 

            <img id="image-thing-at" src="./WaH2.jpeg" /> 

            <img id="image-thing-at" src="./WaH3.jpeg" /> 

          </div>
        </> 
    );
  }
  
  export default Works; 