import React from 'react'; 
import './San-Diego.css';  
import NavbarMandarin from '../../Navbar-Mandarin/Navbar-Mandarin'; 
import '../../Button.css'; 

function SanDiegoMandarin() {
  window.scrollTo(0, 0);
    return (
      <>
        <NavbarMandarin />  
          <div className="SanDiego"> 

          <form method="get" action="/san-diego">
            <button id="the-button" type='btn'>English</button> 
          </form> 

            <h1 className="exhibition">圣地亚哥当代艺术展——2019</h1> 
            <hr /> 

            <p id="art-paragraph-other">
            2019念10月10日下午“圣地亚哥当代艺术展”在美丽的海滨城市圣地亚哥会议中心盛大开幕。 当代艺术博览会的参展商包括顶级画廊，
            艺术出版商和知名的工作室艺术家。 
            </p> 

            <p id="art-paragraph-other">
            美国龙国际画CEO，American Dragon International Gallery 劉偉女士（Lena Liu）说：她们推荐的中国艺术家邱子皓的音乐绘画凝聚了观众的视点，
            这次展览很多画廊希望与他签约，银行家购买了他的作品…他的艺术创作追求绘画与音乐结合，受到保罗·克利和瓦西里·康定斯基作品的启发，
            邱子皓对音乐与美术的关系进行了深入的探讨。在研究过程中，他将美术与音乐相互融合，创立出一个新颖的艺术体系，可以通过绘画作品来识别和表现乐曲的节奏与旋律。
            运用这一系统，他创作出了很多优美的图画，每幅画都蕴含着一首乐曲。通过这种视觉和听觉的结合，他提供了一种崭新的方式，
            使人们能够在同时欣赏绘画作品和音乐旋律中获得更加生动的感知和体验。 
            </p> 

            <p id="art-paragraph-other">
            今年的ART SAN DIEGO Contemporary art show（圣地亚哥当代艺术展）已经是第二个十年的艺术展，组委会特别给亚洲美国文化传媒集团
            （与美国龙国际画廊是一个所有者）推荐的艺术家邱子皓颁发了“最佳参展奖”。中国艺术家在国际这个大展中获此殊荣，是令人兴奋的。
            祝福艺术家邱子皓先生（Howard Qiu），你将成为世界的音乐绘画艺术明 
            </p> 

            <img src="./SD1.jpeg" id="image-thing-sd" /> 

            <img src="./SD2.jpeg" id="image-thing-sd" /> 

            <img src="./SD3.jpeg" id="image-thing-sd" /> 

            <img src="./SD4.jpeg" id="image-thing-sd" /> 
          </div>
        </> 
    );
  }
  
  export default SanDiegoMandarin;