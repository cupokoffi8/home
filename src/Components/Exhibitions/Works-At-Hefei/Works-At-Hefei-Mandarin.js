import React from 'react'; 
import './Works-At-Hefei.css'; 
import NavbarMandarin from '../../Navbar-Mandarin/Navbar-Mandarin'; 
import '../../Button.css'; 

function WorksMandarin() { 
  window.scrollTo(0, 0);
    return (
      <>
        <NavbarMandarin /> 
          <div className="Works-At-Hefei"> 

          <form method="get" action="/home/#/works-at-hefei"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            <h1 className="exhibition">北京美术学院合肥作品展</h1> 
            <hr /> 

            <h5 id="caption">
            2014年10月11日至10月15日 
            </h5> 

            <img id="image-thing-at" src="./WaH1.jpeg" /> 

            <h5 id="caption">
            策展人: 刘伟 吴祖红  
            </h5> 

            <h5 id="caption">
            展览地址：合肥 - 久留⽶友好艺术博物馆 
            </h5> 

            <h5 id="caption">
            参展商： 
            </h5> 

            <p id="art-paragraph-other">
            王⽂芳，李晓科， 王明明，庄⼩雷，纪庆元， 陆平，袁武，蔡⽟⽔ 莫晓松，郭宝军， 李凤⻰，孙振⽣ 
            </p> 

            <br /> 

            <p id="art-paragraph-other">
            前⾔ 北京画院是1957年中国最早，最⼤的专业绘画学院。创作，教学和研究艺术学院。 北京画院坚持传统，追求艺术创作的最高水准，
            所有艺术创作都是为了最高水准和⼈才。 在创作， 研究和培养艺术家的同时，还承担了中国传统绘画。 古典收藏，挖掘，梳理，传播等任 
            务表现出其独特的⽂化价值观，社会责任感和历史责任感。 北京画院在花⻦画⽅⾯具有 很强的创作⼒。 中国艺术史上的许多名⼈都在这⾥⼯作和学习。 
            ⻬⽩⽯，陈班丁，于 ⻜，王雪涛，崔⼦凡等众多知名⼤师创造了许多优秀⽽有影响⼒的⼈物。 精品。 因此， 北京画院已形成了丰富的传统⽂化遗产，
            这是北京画院的宝贵的财富。 
            </p> 

            <p id="art-paragraph-other">
            这是北京画院的第⼀次集体展览，也是代表中国的⾼⽔平展览。 ⾮常学术的艺术家团 体，许多艺术学校的学⽣和艺术家观看了这次展览。 
            </p> 

            <img id="image-thing-at" src="./WaH2.jpeg" /> 

            <img id="image-thing-at" src="./WaH3.jpeg" /> 

          </div>
        </> 
    );
  }
  
  export default WorksMandarin; 