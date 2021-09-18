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

            <div className="card-row-artists"> 
            <a id="link" href="#/mag-and-myst-mandarin"> 
            <h5 id="caption-card-l">"華麗與神秘" 藝術展</h5> 
            </a>
            <a id="link" href="#/victory-of-light-mandarin"> 
            <h5 id="caption-card-m">光的光輝</h5> 
            </a>
            <a id="link" href="#/art-basel-mandarin"> 
            <h5 id="caption-card-r">佛羅里達州邁阿密市巴塞爾藝術博覽會</h5> 
            </a>
            </div>

            <div className="card-row-artists">
            <a id="link" href="#/san-diego-mandarin"> 
            <h5 id="caption-card-l">圣地亚哥当代艺术展-2019</h5> 
            </a> 
            <a id="link" href="#/headless-mandarin">
            <h5 id="caption-card-m">“沈敬东，蔡江：無頭無心”展覽</h5> 
            </a>
            <a id="link" href="#/magnificent-mandarin"> 
            <h5 id="caption-card-r">宏伟的壁画</h5> 
            </a>
            </div>

            <div className="card-row-artists">
            <a id="link" href="#/art-therapy-mandarin"> 
            <h5 id="caption-card-l">艺术疗法</h5> 
            </a>
            <a id="link" href="#/works-at-hefei-mandarin"> 
            <h5 id="caption-card-m">在合肥工作</h5> 
            </a>
            <a id="link" href="#/oil-painting-exhibition-mandarin"> 
            <h5 id="caption-card-r">韩国济州岛油画展</h5> 
            </a>
            </div> 

            {/* Mobile */} 
 
            <a id="link" href="#/mag-and-myst-mandarin"> 
            <h5 id="caption-card">"華麗與神秘" 藝術展</h5> 
            </a> 

            <a id="link" href="#/victory-of-light-mandarin">
            <h5 id="caption-card">光的光輝</h5> 
            </a> 

            <a id="link" href="#/art-basel-mandarin">
            <h5 id="caption-card">佛羅里達州邁阿密市巴塞爾藝術博覽會</h5> 
            </a> 

            <a id="link" href="#/san-diego-mandarin"> 
            <h5 id="caption-card">圣地亚哥当代艺术展-2019</h5> 
            </a> 

            <a id="link" href="#/headless-mandarin">
            <h5 id="caption-card">“沈敬东，蔡江：無頭無心”展覽</h5> 
            </a> 

            <a id="link" href="#/magnificent-mandarin">
            <h5 id="caption-card">宏伟的壁画</h5> 
            </a> 

            <a id="link" href="#/art-therapy-mandarin">
            <h5 id="caption-card">艺术疗法</h5> 
            </a> 

            <a id="link" href="#/works-at-hefei-mandarin"> 
            <h5 id="caption-card">在合肥工作</h5> 
            </a> 

            <a id="link" href="#/oil-painting-exhibition-mandarin"> 
            <h5 id="caption-card">韩国济州岛油画展</h5> 
            </a> 
          </div>
        </> 
    );
  }
  
  export default ExhibitionsMandarin; 