import React from 'react'; 
import '../Zen-Frescos/Zen-Frescos.css'; 
import '../Apelles-Zhou/Apelles-Zhou.css'; 
import '../Aparna-Banerjee/Aparna-Banerjee.css'; 
import '../Charles-Haber/Charles-Haber.css'; 
import './Zhenghui-Lan.css'; 
import Navbar from '../../Navbar/Navbar'; 
import '../../Button.css'; 
import Long1 from './Images/18L.jpg'; 
import Long2 from './Images/2L.jpg'; 
import Long3 from './Images/24L.jpeg'; 
import Long4 from './Images/25L.jpeg'; 
import Wide3 from './Images/9W.jpg'; 
import Wide4 from './Images/23W.jpg'; 
import Wide5 from './Images/13W.jpg'; 
import Wide6 from './Images/15W.jpg'; 
import Wide8 from './Images/19W.jpg'; 
import Wide7 from './Images/C1.jpg'; 
import Wide2 from './Images/C2.jpg'; 
import Wide1 from './Images/C3.jpg'; 

function ZhenghuiLan() {

  window.scrollTo(0, 0)

    return (
      <>
        <Navbar />
          <div className="artist-section"> 

          <form method="get" action="#/zhenghui-lan-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            {/* Artist Name */} 

            <h1 className="artist">Lan Zhenghui</h1> 
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            Lan Zhenghui, a 1987 graduate of the Sichuan Fine Arts Institute, was born in 1959 in Sichuan, China, 
            and currently lives and works in Beijing, China, as well as in New York City. By combining traditional Chinese 
            ink painting with Western abstraction, Lan Zhenghui’s work has shed a new light on the exuberance of both categories. 
            Zhenghui's unique style embodies the flow of the ink, where its own momentum determines his forms from each stroke.<br /> 
            <br />  
            Working on both a monumental and intimate scale, his powerful brush paintings carve a landscape in time where the spirits of 
            Chinese landscape linger like ghosts, haunting both the process – the brushstrokes, the vectoring – and the resulting shapes.<br /> 
            <br /> 
            Zhenghui’s work has been shown in the Flemish Art Museum in Brussels, the Art Institute of Chicago, the Venice Biennale, the 
            Singapore Third Biennial and Art International in Istanbul in 2015, the National Art Museum of China in Beijing, among others. 
            His work has been collected by Rubell Family, National Art Museum of China, Beijing, Songzhuang Ink Painting League, China, 
            Florida Gulf Coast University, FL, Chinese Cultural Centre Of Greater Toronto and is part of numerous private collections. 
            </p> 

              {/* --v--v--v--v--v--v--v--v-- WIDE --v--v--v--v--v--v--v--v-- */} 

              <img src={Wide4} id="painting-zf"></img>
              <h5 id="caption">
                  J016<br />
                  Black Ink on Rice Paper<br /> 
                  41" x 17.5"
              </h5> 

              <img src={Wide3} id="painting-zf"></img>
              <h5 id="caption">
                  J024<br />
                  Black Ink on Rice Paper<br /> 
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
                  Black Ink on Rice Paper<br /> 
                  62" x 17.5" 
                </h5> 
                <h5 id="small-caption-ch">
                  J028<br />
                  Black Ink on Rice Paper<br /> 
                  47" x 15" 
                  </h5> 
                
              </div> 

              {/* ----------- MOBILE ----------- */}

              <img src={Long1} id="image-mobile"/>
              <h5 id="caption-mobile">
                  J022<br />
                  Black Ink on Rice Paper<br /> 
                  62" x 17.5" 
                </h5> 

              <br id="only-mobile"/> 

              <img id="image-mobile" src={Long2}/> 
              <h5 id="caption-mobile">
                  J028<br />
                  Black Ink on Rice Paper<br /> 
                  47" x 15" 
                </h5> 

              <br id="only-mobile"/> 


              {/* --v--v--v--v--v--v--v--v-- WIDE --v--v--v--v--v--v--v--v-- */}

              <img src={Wide5} id="painting-zf"></img>
              <h5 id="caption">
                J010<br />
                Black Ink on Rice Paper<br /> 
                26" x 35" 
              </h5>

              <img src={Wide6} id="painting-zf"></img>
              <h5 id="caption">
                J012<br />
                Black Ink on Rice Paper<br /> 
                26" x 36" 
              </h5> 


              {/* --v--v--v--v--v--v--v--v-- LONG --v--v--v--v--v--v--v--v-- */}

              <div className="the-paintings-zl">
                <img src={Long3} id="painting-ch-other"></img> 
                <img src={Long4} id="painting-ch-other"></img> 
              </div> 

              <div className="the-words-zl">
              <h5 id="small-caption-ch">
                  J021<br />
                  Black Ink on Rice Paper<br /> 
                  62" x 17.5" 
                </h5> 
                <h5 id="small-caption-ch">
                  J028<br />
                  Black Ink on Rice Paper<br /> 
                  47" x 15" 
                  </h5> 
                
              </div> 

              {/* ----------- MOBILE ----------- */}

              <img src={Long3} id="image-mobile"/>
              <h5 id="caption-mobile">
                  J022<br />
                  Black Ink on Rice Paper<br /> 
                  62" x 17.5" 
                </h5> 

              <br id="only-mobile"/> 

              <img id="image-mobile" src={Long4}/> 
              <h5 id="caption-mobile">
                  J032<br />
                  Black Ink on Rice Paper<br /> 
                  57" x 15" 
                </h5> 

              <br id="only-mobile"/> 


              {/* --v--v--v--v--v--v--v--v-- WIDE --v--v--v--v--v--v--v--v-- */} 

              <img src={Wide8} id="painting-zf"></img>
              <h5 id="caption">
                  J025<br />
                  Black Ink on Rice Paper<br /> 
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
  
  export default ZhenghuiLan;