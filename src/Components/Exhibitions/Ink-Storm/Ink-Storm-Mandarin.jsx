import React from 'react'; 
import '../Works-At-Hefei/Works-At-Hefei.css'; 
import '../../Artists/Apelles-Zhou/Apelles-Zhou.css'; 
import '../../Artists/Aparna-Banerjee/Aparna-Banerjee.css'; 
import '../../Artists/Chiu-Pai/Chiu-Pai.css'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 
import NavbarMandarin from '../../Navbar-Mandarin/Navbar-Mandarin'; 
import '../../Button.css'; 

function InkStormMandarin() { 

  Aos.init({}); 
  window.scrollTo(0, 0);
    return (
      <>
           
          <div className="Ink-Storm"> 

          <form method="get" action="#/ink-storm"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            <h1 className="exhibition">“水墨风暴”与“魅力”展</h1> 
            <hr /> 

            <h5 id="caption">
              2022 年 6 月 3 日至 7 月 3 日 
            </h5> 

            <img id="image-thing-at" src="./IS2.jpeg" /> 

            <br /> 

            <p id="art-paragraph">
            6月3日晚，“水墨风暴”和“魅力”两场艺术展在北京举行。
            美国龙国际美术馆在美国。
            </p> 

            <p id="art-paragraph-other">
            疫情期间，艺术家创作了许多优秀作品。我们的展期
            美国龙国际美术馆今年客满，所以这两个展览
            问题在美国龙国际美术馆的两个空间内展出
            同时。
            </p> 

            <br /> 

            <div className="the-paintings">
              <img data-aos="fade-right" data-aos-duration="1000" src="./IS1.png" id="painting-cp" /> 
              <img data-aos="fade-left" data-aos-duration="1000" src="./IS3.png" id="painting-cp" /> 
              </div> 

              <img data-aos="fade-right" data-aos-duration="1000" src="./IS1.png" id="image-mobile-cp" /> 
              <img data-aos="fade-left" data-aos-duration="1000" src="./IS3.png" id="image-mobile-cp" /> 

            <p id="art-paragraph">
            展览由亚美文化传媒集团董事长刘薇女士介绍，
            美国龙国际美术馆首席执行官/高级策展人。最近几年，
            亚洲艺术形式已成为西方探索东方文化的重要渠道
            及其审美价值。
            </p> 

            <div className="the-paintings">
              <img data-aos="fade-left" data-aos-duration="1000" src="./IS4.jpeg" id="painting-cp" /> 
              <img data-aos="fade-right" data-aos-duration="1000" src="./IS5.jpeg" id="painting-cp" /> 
              </div> 

              <img data-aos="fade-left" data-aos-duration="1000" src="./IS4.jpeg" id="image-mobile-cp" /> 
              <img data-aos="fade-right" data-aos-duration="1000" src="./IS5.jpeg" id="image-mobile-cp" /> 

            <p id="art-paragraph">
            在本次以“墨风暴”为主题的展览中，我们特别邀请了艺术家蓝正辉先生
            展出他近两年创作的13件作品。蓝增辉以创作闻名
            大型抽象水墨画。他的水墨作品以促进自然的运动感而闻名
            和墨水的力量。在向中国水墨致敬的同时，他大胆而充满活力的笔触驱动
            水墨以当代艺术景观的方式发现自身的动态，解放水墨
            从形式决定的状态。
            </p> 

            <p id="art-paragraph-other">
            中国水墨画以其丰富多样的艺术语汇和无与伦比的形式生命力，
            深受西方艺术市场收藏家的理解和喜爱，意境深厚，生机勃勃
            反射。
            </p> 

            <br /> 

            <div className="the-paintings">
              <img data-aos="fade-right" data-aos-duration="1000" src="./IS6.jpeg" id="painting-cp" /> 
              <img data-aos="fade-left" data-aos-duration="1000" src="./IS7.jpeg" id="painting-cp" /> 
              </div> 

              <img data-aos="fade-right" data-aos-duration="1000" src="./IS6.jpeg" id="image-mobile-cp" /> 
              <img data-aos="fade-left" data-aos-duration="1000" src="./IS7.jpeg" id="image-mobile-cp" /> 

            <p id="art-paragraph">
            美国龙国际美术馆的另一个展览“迷人”是美国
            艺术家Angel Cruz，毕业于宾夕法尼亚艺术与设计学院并获得硕士学位
            马里兰艺术学院数字艺术学位。展览展出了他的7件作品。
            刘薇女士说：“在安吉尔的画中，我看到了挪威表现主义画家爱德华·蒙克的影子。
            绘画对象可能是安琪表达情感的载体。” 
            </p> 

            <p id="art-paragraph-other">
            天使的女性形象有着不同的情感。他表达了他的焦虑、痛苦和悲观
            人物通过扭曲的曲线和令人不安的面孔。天使是表达灵魂的画家。这
            作品的视觉冲击力让人们在观看图像后产生了很多思考。 <br />
            <br />
            展览由亚美文化传媒集团和美国龙国际联合主办
            美术画廊。展览将持续至2022年7月3日。
            </p> 

          </div>
        </> 
    );
  }
  
  export default InkStormMandarin; 