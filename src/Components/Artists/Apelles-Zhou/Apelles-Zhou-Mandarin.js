import React from 'react'; 
import './Apelles-Zhou.css'; 
import NavbarMandarin from '../../Navbar-Mandarin/Navbar-Mandarin'; 
import '../../Button.css'; 

function ApellesZhouMandarin() { 

  window.scrollTo(0, 0)

    return (
      <>
        <NavbarMandarin /> 
          <div className="artist-section"> 

          <form method="get" action="/home/#/apelles-zhou"> 
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

              {/* List of Paintings */} 

              <img src="./Eye-of-Horus.png" id="painting"></img>
              <h5 id="caption">Eye of Horus</h5> 

              <img src="./Age-of-Aquarius.png" id="painting"></img> 
              <h5 id="caption">Age of Aquarius</h5> 

              <img src="./Back-to-Pleiade.png" id="painting"></img> 
              <h5 id="caption">Back to Pleiade</h5> 

              <img src="./Portrait-of-Thoth.png" id="painting"></img> 
              <h5 id="caption">Portrait of Thoth</h5> 

              <img src="./Purple-Flame.png" id="painting"></img> 
              <h5 id="caption">Purple Flame</h5> 

              <img src="./The-Grey.png" id="painting"></img> 
              <h5 id="caption">The Grey</h5> 

              <img src="./Sirian-Girl.png" id="painting-wide"></img> 
              <h5 id="caption">Sirian Girl</h5> 

          </div> 
          </> 
    );
  }
  
  export default ApellesZhouMandarin; 