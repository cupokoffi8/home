import React from 'react'; 
import './Apelles-Zhou.css'; 
import '../Aparna-Banerjee/Aparna-Banerjee.css'; 
import '../Chiu-Pai/Chiu-Pai.css'; 
import '../Charles-Haber/Charles-Haber.css'; 
 
import '../../Button.css'; 

function ApellesZhouMandarin() { 

  window.scrollTo(0, 0)

    return (
      <>
           
          <div className="artist-section"> 

          <form method="get" action="#/apelles-zhou"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            {/* Artist Name */} 

            <h1 className="artist">阿佩莱斯周</h1> 
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            Apelles Zhou 将传统的古典大师技术与流行艺术的图案相结合，立体主义、抽象表现主义和其他现代运动。周先生的画
            还探索灵性和形而上学的当代问题。 
              </p>

              <p id="art-paragraph-other">
              Apelles Zhou 1992 年出生于中国济南-山东。他目前住
              并在纽约市工作。他拥有中央大学的学士和硕士学位
              中国北京美术学院。自 2017 年获得硕士学位以来，周
              曾游历欧洲，亲身学习画家的技巧
              例如伊丽莎白·维吉·勒布伦、希尔玛·阿夫·克林特、拉斐尔和米开朗基罗。
              在纽约市，他曾在阿姆斯特丹惠特尼画廊展出。
              在北京，他曾在中央美术学院美术馆、北京国立
              水上运动中心和其他著名的画廊。
              </p> 

              <p id="art-paragraph-bottom">
              周亦为当代艺术策展人，曾于
              无论是北京还是纽约。
              </p>

              <p id="art-paragraph-bottom-mobile">
              周亦为当代艺术策展人，曾于
              无论是北京还是纽约。
              </p>

              {/* List of Paintings [Computer] */} 

              <div className="the-paintings">
                <div>
              <img src="./Sirian-Girl.png" className="painting-ch-sg"></img> 
              <h5 className="word-ch-sg">Sirian Girl</h5> 
              </div>
              <div>
              <img src="./AZ.jpg" className="painting-ch-small"></img> 
              <h5 className="word-ch-2">Synthetic Plangency</h5> 
              </div>
              </div> 

              <div className="the-paintings">
              <img src="./Eye-of-Horus.png" id="painting-cp"></img> 
              <img src="./Age-of-Aquarius.png" id="painting-cp"></img> 
              </div> 

              <br /> 

              <div className="the-words-cp">
              <h5 id="caption-cp">Eye of Horus</h5>
              <h5 id="caption-cp">Age of Aquarius</h5> 
              </div> 

              <br id="only-computer"/> 
              <br id="only-computer"/> 

              <div className="the-paintings">
              <img src="./Back-to-Pleiade.png" id="painting-cp"></img> 
              <img src="./Portrait-of-Thoth.png" id="painting-cp"></img> 
              </div>

              <br id="only-computer"/> 

              <div className="the-words-cp">
              <h5 id="caption-cp">Back to Pleiade</h5>
              <h5 id="caption-cp">Portrait of Thoth</h5> 
              </div> 

              <br id="only-computer"/> 
              <br id="only-computer"/> 

              <div className="the-paintings">
              <img src="./Purple-Flame.png" id="painting-cp"></img> 
              <img src="./The-Grey.png" id="painting-cp"></img> 
              </div>

              <br id="only-computer"/> 

              <div className="the-words-cp">
              <h5 id="caption-cp">Purple Flame</h5>
              <h5 id="caption-cp">The Grey</h5> 
              </div> 

              <br id="only-computer"/> 
              <br id="only-computer"/> 

              <div className="the-paintings">
              <img src="./Life-Pulse-One.jpg" id="painting-cp"></img> 
              <img src="./Life-Pulse-Two.jpg" id="painting-cp"></img> 
              </div>

              <br id="only-computer"/> 

              <div className="the-words-cp">
              <h5 id="caption-cp">Life Pulse One</h5>
              <h5 id="caption-cp">Life Pulse Two</h5> 
              </div> 

              <br id="only-computer"/> 
              <br id="only-computer"/> 

              <div className="the-paintings">
              <img src="./Life-Pulse-Three.jpg" id="painting-cp"></img> 
              <img src="./Life-Pulse-Four.jpg" id="painting-cp"></img> 
              </div>

              <br id="only-computer"/> 

              <div className="the-words-cp">
              <h5 id="caption-cp">Life Pulse Three</h5>
              <h5 id="caption-cp">Life Pulse Four</h5> 
              </div> 

              <br id="only-computer"/> 
              <br id="only-computer"/> 

              <div className="the-paintings">
              <img src="./Sirius-Letter-One.jpg" id="painting-cp"></img> 
              <img src="./Sirius-Letter-Two.jpg" id="painting-cp"></img> 
              </div>

              <br id="only-computer"/> 

              <div className="the-words-cp">
              <h5 id="caption-cp">Sirius Letter One</h5>
              <h5 id="caption-cp">Sirius Letter Two</h5> 
              </div> 

              <br id="only-computer"/> 
              <br id="only-computer"/> 

              <div className="the-paintings">
              <img src="./Sirius-Letter-Three.jpg" id="painting-cp"></img> 
              <img src="./Untitled.jpg" id="painting-cp"></img> 
              </div>

              <br id="only-computer"/> 

              <div className="the-words-cp">
              <h5 id="caption-cp">Sirius Letter Three</h5>
              <h5 id="caption-cp">Untitled</h5> 
              </div> 

              {/* List of Paintings [Phone] */} 

              <img src="./Eye-of-Horus.png" id="image-mobile-cp"></img>
              <h5 id="caption-mobile-cp">Eye of Horus</h5> 

              <img src="./Age-of-Aquarius.png" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Age of Aquarius</h5> 

              <img src="./Back-to-Pleiade.png" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Back to Pleiade</h5> 

              <img src="./Portrait-of-Thoth.png" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Portrait of Thoth</h5> 

              <img src="./Purple-Flame.png" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Purple Flame</h5> 

              <img src="./The-Grey.png" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">The Grey</h5> 

              <img src="./Sirian-Girl.png" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Sirian Girl</h5> 

              <img src="./AZ.jpg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Synthetic Plangency</h5> 

              <img src="./Life-Pulse-One.jpg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Life Pulse One</h5> 

              <img src="./Life-Pulse-Two.jpg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Life Pulse Two</h5> 

              <img src="./Life-Pulse-Three.jpg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Life Pulse Three</h5> 

              <img src="./Life-Pulse-Four.jpg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Life Pulse Four</h5> 

              <img src="./Sirius-Letter-One.jpg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Sirius Letter One</h5> 

              <img src="./Sirius-Letter-Two.jpg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Sirius Letter Two</h5> 

              <img src="./Sirius-Letter-Three.jpg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Sirius Letter Three</h5> 

              <img src="./Untitled.jpg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Untitled</h5> 

          </div> 
          </> 
    );
  }
  
  export default ApellesZhouMandarin; 