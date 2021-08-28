import React from 'react'; 
import './Oil-Painting-Exhibition.css'; 
import NavbarMandarin from '../../Navbar-Mandarin/Navbar-Mandarin'; 
import '../../Button.css'; 

function PleaseWorkMandarin() {
  window.scrollTo(0, 0);
    return (
      <>
        <NavbarMandarin /> 
          <div className="Oil-Painting-Exhibition"> 

          <form method="get" action="/home/#/oil-painting-exhibition"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            <h1 className="exhibition">韩国济州岛油画展</h1> 
            <hr /> 

            <h5 id="caption">
            2014年4月22日-4月26日 
            </h5>

            <div id="the-pictures">
              <img id="image-thing-at-uh" src="./OP1.jpeg" /> 
              <img id="image-thing-at-uhh" src="./OP2.jpeg" /> 
            </div> 

            <br /> 
            <br /> 
            
            <p id="art-paragraph-bottom">
            至著名策展人刘伟说：韩国济州岛赵青油画展，引起了众多收藏家的关注。 
            </p> 

            <p id="art-paragraph-bottom-mobile">
            至著名策展人刘伟说：韩国济州岛赵青油画展，引起了众多收藏家的关注。 
            </p> 

            <p id="art-paragraph-other">
            著名艺术家赵青是中国第一代舞蹈艺术家。1936年出生，中国舞蹈家协会副主席，著名电影演员赵丹之女。 她有很多经典的舞蹈作品，
            但54岁的她受伤了。她开始学习绘画，天赋是与生俱来的。 她一生的每一幅油画都充满了生命力。 似乎是一个跳跃的音符，让人开心。 
            </p>

            <p id="art-paragraph-bottom">
            2013年9月，美国古根海姆博物馆、林肯艺术中心等美国著名艺术机构联合邀请赵青女士赴美举办画展。 
            </p> 

            <p id="art-paragraph-bottom-mobile">
            2013年9月，美国古根海姆博物馆、林肯艺术中心等美国著名艺术机构联合邀请赵青女士赴美举办画展。 
            </p> 

            <p id="art-paragraph-other">
            至 “只要你想学画画，就不要在意自己的年龄，努力做到最好。 时间不是问题”。 赵青女士年近60岁开始学习绘画，以绘画开始了新的艺术生活。 
            这个展览让更多喜欢艺术的人有了信心，开始尝试艺术。 
            </p> 

          </div>
        </> 
    );
  }
  
  export default PleaseWorkMandarin; 