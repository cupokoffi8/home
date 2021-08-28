import React from 'react'; 
import './Mag-And-Myst.css'; 
import NavbarMandarin from '../../Navbar-Mandarin/Navbar-Mandarin'; 
import '../../Button.css'; 

function MagAndMystMandarin() {
  window.scrollTo(0, 0);
    return (
      <>
        <NavbarMandarin /> 
          <div className="Mag-And-Myst"> 

          <form method="get" action="#/mag-and-myst"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            <h1 className="exhibition">“華麗與神秘”藝術展</h1> 
            <hr /> 

            <img src="./1.jpeg" id="image-thing" /> 

            <br /> 

            <p id="paragraph" >
            7月24日下午，美国龙国际画廊举办了“华丽与神秘”艺术展的开幕酒会。
            </p> 

            <img src="./2.jpeg" id="image-thing" /> 

            <img src="./3.jpeg" id="image-thing" /> 

            <br /> 

            <p id="paragraph" >
            资深国际策展人刘伟（Lena Liu）介绍，这次展览共展出了87幅作品，他们是来自中国，美国，印度，加拿大的画家，
            其中以中国画家段震中先生的风景画作品为主，段先生作品曾经多次在苏富比拍卖中获得好成绩，此次展览再现东方墨韵，
            彰显中国江南水乡美景，西方华丽而古老的建筑和街景。风景画的中的建筑记载着不同国家的历史文化，
            同样也彰显了那个时代美的气息。 
            </p> 

            <img src="./6.jpeg" id="image-thing" /> 

            <br /> 

            <p id="paragraph" >
            开幕酒会在美国艺人Jeff表演的吉他和他浑厚的歌声中开始。舒缓的音乐，浑厚的歌声，充满了“华丽与神秘”色彩的艺术作品，
            美酒和丰富的中国美食，这是一场艺术盛宴，宾客云集，热闹非凡，宾客对画廊作品也表示了极高兴趣。
            </p> 

            <img src="./4.jpeg" id="image-thing" /> 

            <img src="./5.jpeg" id="image-thing" /> 

            <br /> 

            <p id="paragraph" >
            此次展览由亚洲美国文化传媒集团和美国龙国际画廊共同主办。展期直至8月23日结束。 
            </p> 

          </div>
        </> 
    );
  }
  
  export default MagAndMystMandarin;