import React from 'react'; 
import '../Aparna-Banerjee/Aparna-Banerjee.css'; 
import '../Artists/Artists.css'; 
import NavbarMandarin from '../../Navbar-Mandarin/Navbar-Mandarin'; 
import '../../Button.css'; 
import Image1 from './Images/1.jpg'; 
import Image2 from './Images/Stress.png'; 
import Image3 from './Images/3.jpg'; 
import Image4 from './Images/4.jpg'; 
import Image5 from './Images/5.jpg'; 
import Image6 from './Images/6.jpg'; 
import Image7 from './Images/Comfort.png'; 
import Image8 from './Images/Passion.jpg'; 
import Image9 from './Images/Whisper.jpg'; 

function AngelCruzMandarin() {

  window.scrollTo(0, 0)

    return (
      <>
           
          <div className="artist-section"> 

          <form method="get" action="#/angel-cruz"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            {/* Artist Name */} 

            <h1 className="artist">安吉尔克鲁兹</h1>
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            Angel 是一位才华横溢的艺术家，擅长利用数字世界作为表达艺术理念的工具。
            他于 2001 年毕业于米勒斯维尔大学，获得商业艺术学士学位，并在
            直到 2004 年为止的居住和助教。他在宾夕法尼亚艺术学院担任兼职教授
            2002 年学习了一个学期的设计和设计（PCAD）课程。2005 年，他获得了马里兰州的数字艺术硕士学位
            研究所，艺术学院（MICA）。 Angel 曾在华盛顿特区巴尔的摩、费城兰开斯特、
            和马里兰州大洋城。他继续为兰开斯特地区的当地音乐家和企业做自由职业。
              </p>

              {/* List of Paintings [Computer] */} 

              <div className="the-paintings">
              <img src={Image8} id="painting-ab"></img> 
              <img src={Image9} id="painting-ab"></img> 
              </div>
              <div className="the-words">
              <h5 id="caption-ab-1">Passion</h5>
              <h5 id="caption-ab-2">Whisper</h5>
              </div>
              <div className="the-words">
              <h5 id="caption-ab-11">18" x 24"</h5> 
              <h5 id="caption-ab-22">18" x 24"</h5> 
              </div>
              <div className="the-wordss">
              <h5 id="caption-ab-11">$350</h5>
              <h5 id="caption-ab-22">$350</h5>
              </div> 

              <div className="the-paintings">
              <img src={Image1} id="painting-ab"></img> 
              <img src={Image2} id="painting-ab-sold-thing"></img> 
              </div>
              <div className="the-words">
              <h5 id="caption-ab-1">The Calm</h5>
              <h5 id="caption-ab-2">Stress</h5>
              </div>
              <div className="the-words">
              <h5 id="caption-ab-11">18" x 24"</h5> 
              <h5 id="caption-ab-22">14" x 20"</h5> 
              </div>
              <div className="the-wordss">
              <h5 id="caption-ab-11">$375</h5>
              <h5 id="caption-ab-22">$250</h5>
              </div> 

              <div className="the-paintings">
              <img src={Image3} id="painting-ab"></img> 
              <img src={Image5} id="painting-ab"></img> 
              </div>
              <div className="the-words">
              <h5 id="caption-ab-1">Resting Worry</h5>
              <h5 id="caption-ab-2">Sea Dream</h5>
              </div>
              <div className="the-words">
              <h5 id="caption-ab-11">16" x 24"</h5> 
              <h5 id="caption-ab-22">16" x 24"</h5> 
              </div>
              <div className="the-wordss">
              <h5 id="caption-ab-11">$350</h5> 
              <h5 id="caption-ab-22">$350</h5> 
              </div> 

              <div className="the-paintings">
              <img src={Image6} id="painting-ab"></img> 
              <div>
                <br />
                <img src={Image7} id="painting-ab-sold"></img>
                </div>
              </div>
              <div className="the-words">
              <h5 id="caption-ab-1">Restraint</h5>
              <h5 id="caption-ab-2">Comfort</h5>
              </div>
              <div className="the-words">
              <h5 id="caption-ab-11">16" x 24"</h5> 
              <h5 id="caption-ab-22">24" x 36"</h5> 
              </div>
              <div className="the-wordss">
              <h5 id="caption-ab-11">$350</h5>
              <h5 id="caption-ab-22">$500</h5>
              </div> 

              {/* List of Paintings [Phone] */} 

              <br id="only-mobile"/> 

              <img src={Image8} id="image-mobile" /> 
              <h5 id="caption-mobile">Passion</h5> 
              <h5 id="caption-mobile">18" x 24"</h5>
              <h5 id="caption-mobile">$350</h5> 

              <br id="only-mobile"/> 

              <img src={Image9} id="image-mobile" /> 
              <h5 id="caption-mobile">Whisper</h5> 
              <h5 id="caption-mobile">18" x 24"</h5>
              <h5 id="caption-mobile">$350</h5> 

              <br id="only-mobile"/> 

              <img src={Image1} id="image-mobile"/> 
              <br id="only-mobile"/>  
              <h5 id="caption-mobile">The Calm</h5> 
              <h5 id="caption-mobile">18" x 24"</h5> 
              <h5 id="caption-mobile">$375</h5> 

              <br id="only-mobile"/>
              <br id="only-mobile"/> 
              <br id="only-mobile"/>  

              <img src={Image2} id="image-mobile-sold"/> 
              <br id="only-mobile"/>  
              <h5 id="caption-mobile">Stress</h5> 
              <h5 id="caption-mobile">14" x 20"</h5> 
              <h5 id="caption-mobile">$250</h5> 

              <br id="only-mobile"/> 

              <img src={Image3} id="image-mobile"/> 
              <br id="only-mobile"/>  
              <h5 id="caption-mobile">Resting Worry</h5> 
              <h5 id="caption-mobile">16" x 24"</h5> 
              <h5 id="caption-mobile">$350</h5> 

              <br id="only-mobile"/> 

              <img src={Image5} id="image-mobile"/> 
              <br id="only-mobile"/>  
              <h5 id="caption-mobile">Sea Dream</h5> 
              <h5 id="caption-mobile">16" x 24"</h5> 
              <h5 id="caption-mobile">$350</h5>  

              <br id="only-mobile"/> 

              <img src={Image6} id="image-mobile"/> 
              <br id="only-mobile"/>  
              <h5 id="caption-mobile">Restraint</h5> 
              <h5 id="caption-mobile">16" x 24"</h5> 
              <h5 id="caption-mobile">$350</h5> 

              <br id="only-mobile"/> 
              <br id="only-mobile"/>
              <br id="only-mobile"/>

              <img src={Image7} id="image-mobile-sold"/> 
              <br id="only-mobile"/>  
              <h5 id="caption-mobile">Comfort</h5> 
              <h5 id="caption-mobile">24" x 36"</h5> 
              <h5 id="caption-mobile">$500</h5> 

              <br id="only-mobile"/> 

              <img src={Image4} id="painting-zf" /> 
              <h5 id="caption-ac">Mischief</h5> 
              <h5 id="caption-ac">20" x 24"</h5>
              <h5 id="caption-ac">$400</h5> 

          </div> 
          </> 
    );
  }
  
  export default AngelCruzMandarin;