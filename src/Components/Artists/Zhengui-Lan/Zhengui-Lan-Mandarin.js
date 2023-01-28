import React from 'react'; 
import '../Zen-Frescos/Zen-Frescos.css'; 
import '../Apelles-Zhou/Apelles-Zhou.css'; 
import '../Aparna-Banerjee/Aparna-Banerjee.css'; 
import '../Charles-Haber/Charles-Haber.css'; 
import './Zhenghui-Lan.css'; 
 
import '../../Button.css'; 
import Long1 from './Images/1L.jpg'; 
import Long2 from './Images/2L.jpg'; 
import Long3 from './Images/4L.jpg'; 
import Long4 from './Images/6L.jpg'; 
import Wide3 from './Images/9W.jpg'; 
import Wide4 from './Images/10W.jpg'; 
import Wide5 from './Images/13W.jpg'; 
import Wide6 from './Images/15W.jpg'; 
import Wide8 from './Images/19W.jpg'; 
import Wide7 from './Images/C1.jpg'; 
import Wide2 from './Images/C2.jpg'; 
import Wide1 from './Images/C3.jpg'; 

function ZhenghuiLanMandarin() {

  window.scrollTo(0, 0)

    return (
      <>
           
          <div className="artist-section"> 

          <form method="get" action="#/zhenghui-lan"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            {/* Artist Name */} 

            <h1 className="artist">蓝正辉</h1> 
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            蓝正辉，1987年毕业于四川美术学院，1959年出生于中国四川，
            目前在中国北京和纽约市生活和工作。通过结合繁体中文
            水墨与西方抽象，蓝正辉的作品为这两个类别的繁荣提供了新的视角。
            正辉的独特风格体现了墨的流动，墨的气势决定了他的每一笔的形式。<br />
            <br />
            他的作品规模宏大，规模宏大，他有力的毛笔画及时雕刻出一幅风景，其中
            中国风景如鬼魅般萦绕在整个过程中——笔触、矢量——以及由此产生的形状。<br />
            <br />
            郑辉的作品曾在布鲁塞尔佛兰德美术馆、芝加哥艺术学院、威尼斯双年展、
            2015 年在伊斯坦布尔举行的新加坡第三届双年展和国际艺术展，北京的中国美术馆等。
            作品被鲁贝尔家族收藏，中国美术馆，北京，宋庄水墨联盟，中国，
            佛罗里达州墨西哥湾沿岸大学，大多伦多中华文化中心，是众多私人收藏的一部分。
            </p> 

              {/* --v--v--v--v--v--v--v--v-- WIDE --v--v--v--v--v--v--v--v-- */} 

              <img src={Wide4} id="painting-zf"></img>
              <h5 id="caption">
                  J016<br />
                  Ink and Acrylic on Xuan Paper<br /> 
                  41" x 17.5"
              </h5> 

              <img src={Wide3} id="painting-zf"></img>
              <h5 id="caption">
                  J024<br />
                  Ink and Acrylic on Xuan Paper<br /> 
                  57" x 15"
                </h5>

              {/* --v--v--v--v--v--v--v--v-- LONG --v--v--v--v--v--v--v--v-- */}

              <div className="the-paintings-zl">
                <img src={Long1} id="painting-ch-other"></img> 
                <img src={Long2} id="painting-ch-other"></img> 
              </div> 

              <div className="the-words-zl">
              <h5 id="small-caption-ch">
                  J022<br />
                  Ink and Acrylic on Xuan Paper<br /> 
                  62" x 17.5" 
                </h5> 
                <h5 id="small-caption-ch">
                  J028<br />
                  Ink and Acrylic on Xuan Paper<br /> 
                  15" x 47" 
                  </h5> 
                
              </div> 

              {/* ----------- MOBILE ----------- */}

              <img src={Long1} id="image-mobile"/>
              <h5 id="caption-mobile">
                  J022<br />
                  Ink and Acrylic on Xuan Paper<br /> 
                  17.5" x 62" 
                </h5> 

              <br id="only-mobile"/> 

              <img id="image-mobile" src={Long2}/> 
              <h5 id="caption-mobile">
                  J028<br />
                  Ink and Acrylic on Xuan Paper<br /> 
                  15" x 47" 
                </h5> 

              <br id="only-mobile"/> 


              {/* --v--v--v--v--v--v--v--v-- WIDE --v--v--v--v--v--v--v--v-- */}

              <img src={Wide5} id="painting-zf"></img>
              <h5 id="caption">
                J010<br />
                Ink and Acrylic on Xuan Paper<br /> 
                35" x 26"
              </h5>

              <img src={Wide6} id="painting-zf"></img>
              <h5 id="caption">
                J012<br />
                Ink and Acrylic on Xuan Paper<br /> 
                36" x 26" 
              </h5> 


              {/* --v--v--v--v--v--v--v--v-- LONG --v--v--v--v--v--v--v--v-- */}

              <div className="the-paintings-zl">
                <img src={Long3} id="painting-ch-other"></img> 
                <img src={Long4} id="painting-ch-other"></img> 
              </div> 

              <div className="the-words-zl">
              <h5 id="small-caption-ch">
                  J021<br />
                  Ink and Acrylic on Xuan Paper<br /> 
                  17.5" x 62"
                </h5> 
                <h5 id="small-caption-ch">
                  J028<br />
                  Ink and Acrylic on Xuan Paper<br /> 
                  15" x 47" 
                  </h5> 
                
              </div> 

              {/* ----------- MOBILE ----------- */}

              <img src={Long3} id="image-mobile"/>
              <h5 id="caption-mobile">
                  J022<br />
                  Ink and Acrylic on Xuan Paper<br /> 
                  17.5" x 62" 
                </h5> 

              <br id="only-mobile"/> 

              <img id="image-mobile" src={Long4}/> 
              <h5 id="caption-mobile">
                  J032<br />
                  Ink and Acrylic on Xuan Paper<br /> 
                  15" x 57"
                </h5> 

              <br id="only-mobile"/> 


              {/* --v--v--v--v--v--v--v--v-- WIDE --v--v--v--v--v--v--v--v-- */} 

              <img src={Wide8} id="painting-zf"></img>
              <h5 id="caption">
                  J025<br />
                  Ink and Acrylic on Xuan Paper<br /> 
                  57" x 15" 
              </h5> 

              <img src={Wide1} id="painting-zf"></img>
              <h5 id="caption">
                  Wave<br />
                  Acrylic on Canvas<br /> 
                  35.5" x 47" 
              </h5> 

              <img src={Wide7} id="painting-zf"></img>
              <h5 id="caption">
                  Go Up<br />
                  Acrylic on Canvas<br /> 
                  47" x 35" 
              </h5> 

              <img src={Wide2} id="painting-zf"></img>
              <h5 id="caption">
                  Secluded<br />
                  Acrylic on Paper on Mounted Canvas<br /> 
                  82" x 52"
              </h5> 

            </div>
        </> 
    );
  }
  
  export default ZhenghuiLanMandarin;