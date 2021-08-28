import React from 'react'; 
import './Exhibitions.css'; 
import NavbarMandarin from '../Navbar-Mandarin/Navbar-Mandarin'; 
import '../Button.css'; 

function ExhibitionsMandarin() { 

    window.scrollTo(0, 0); 

    return (
      <>
        <NavbarMandarin /> 
          <div className="Aritists"> 

          <form method="get" action="#/exhibitions"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            <h1 className="exhibition">展览</h1> 
            <hr /> 

            {/* href began with: /home/#/ because of gh-pages, but was changed because of domain name change */}
            <a id="link" href="#/mag-and-myst-mandarin"> 
            <img id="image-thing-e" src="./1.jpeg"/> 
            <h5 id="caption">"華麗與神秘" 藝術展</h5> 
            </a>

            <a id="link" href="#/victory-of-light-mandarin">
            <img id="image-thing-e" src="./Vol6.jpeg"/> 
            <h5 id="caption">光的光輝</h5> 
            </a>

            <a id="link" href="#/art-basel-mandarin">
            <img id="image-thing-e" src="./AB.jpeg"/> 
            <h5 id="caption">佛羅里達州邁阿密市巴塞爾藝術博覽會</h5> 
            </a>

            <a id="link" href="#/san-diego-mandarin">
            <img id="image-thing-e" src="./SD1.jpeg"/> 
            <h5 id="caption">圣地亚哥当代艺术展-2019</h5> 
            </a>

            <a id="link" href="#/headless-mandarin">
            <img id="image-thing-e" src="./HUT.jpg"/> 
            <h5 id="caption">“沉京東，蔡江：無頭無心”展覽</h5> 
            </a>

            <a id="link" href="#/magnificent-mandarin">
            <img id="image-thing-e" src="./M3.jpg"/>
            <h5 id="caption">宏伟的壁画</h5> 
            </a>

            <a id="link" href="#/art-therapy-mandarin">
            <img id="image-thing-e" src="./AT1.jpeg"/>
            <h5 id="caption">艺术疗法</h5> 
            </a>

            <a id="link" href="#/works-at-hefei-mandarin">
            <img id="image-thing-e" src="./WaHT.jpg"/>
            <h5 id="caption">在合肥工作</h5> 
            </a> 

            <a id="link" href="#/oil-painting-exhibition-mandarin"> 
            <img id="image-thing-e" src="./OP2.jpeg"/> 
            <h5 id="caption">韩国济州岛油画展</h5> 
            </a>

          </div>
        </> 
    );
  }
  
  export default ExhibitionsMandarin; 