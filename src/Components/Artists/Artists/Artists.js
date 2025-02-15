import React from 'react'; 
import './Artists.css'; 
import Navbar from '../../Navbar/Navbar'; 
import '../../Button.css'; 

function Aritists() {
  window.scrollTo(0, 0); 
    return (
      <>
          
          <div className="Aritists"> 

          <form method="get" action="#/artists-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            <h1 className="artist">Artists</h1> 
            <hr /> 

            {/* href began with: /home/#/ because of gh-pages, but was changed because of domain name change */} 

            <div className="card-row-artists"> 
            <a id="link" href="#/angel-cruz">
            <h5 id="caption-card-a-l">Angel Cruz</h5> 
            </a>
            <a id="link" href="#/aparna-banerjee">
            <h5 id="caption-card-a-m">Aparna Banerjee</h5> 
            </a>
            <a id="link" href="#/apelles-zhou">
            <h5 id="caption-card-a-r">Apelles Zhou</h5> 
            </a>
            </div>

            <div className="card-row-artists">
            <a id="link" href="#/cai-jiang">
            <h5 id="caption-card-a-l">Cai Jiang</h5> 
            </a>
            <a id="link" href="#/charles-haber">
            <h5 id="caption-card-a-m">Charles Haber</h5> 
            </a> 
            <a id="link" href="#/chiu-pai">
            <h5 id="caption-card-a-r">Chiu Pai</h5> 
            </a> 
            </div>

            <div className="card-row-artists">
            <a id="link" href="#/jill-slaymaker">
            <h5 id="caption-card-a-l">Jill Slaymaker</h5> 
            </a>
            <a id="link" href="#/zhenghui-lan">
            <h5 id="caption-card-a-m">Lan Zhenghui</h5>
            </a> 
            <a id="link" href="#/qui-huade">
            <h5 id="caption-card-a-r">Qui Huade</h5> 
            </a>
            </div> 

            <div className="card-row-artists">
            <a id="link" href="#/zhen-zhong-duan">
            <h5 id="caption-card-a-l">Zhen Zhong Duan</h5>
            </a>
            <a id="link" href="#/xiao-li">
            <h5 id="caption-card-a-m">Xiao Li</h5> 
            </a>
            <a id="link" href="#/zen-frescos">
            <h5 id="caption-card-a-r">Zen Frescos</h5> 
            </a>
            </div> 

            {/* Mobile */} 
 
            <a id="link" href="#/angel-cruz">
            <h5 id="caption-card">Angel Cruz</h5> 
            </a>

            <a id="link" href="#/aparna-banerjee">
            <h5 id="caption-card">Aparna Banerjee</h5> 
            </a> 

            <a id="link" href="#/apelles-zhou">
            <h5 id="caption-card">Apelles Zhou</h5> 
            </a> 

            <a id="link" href="#/cai-jiang">
            <h5 id="caption-card">Cai Jiang</h5> 
            </a> 

            <a id="link" href="#/charles-haber">
            <h5 id="caption-card">Charles Haber</h5> 
            </a> 

            <a id="link" href="#/chiu-pai">
            <h5 id="caption-card">Chiu Pai</h5> 
            </a> 

            <a id="link" href="#/jill-slaymaker">
            <h5 id="caption-card">Jill Slaymaker</h5> 
            </a> 

            <a id="link" href="#/zhenghui-lan">
            <h5 id="caption-card">Lan Zhenghui</h5>
            </a> 

            <a id="link" href="#/qui-huade">
            <h5 id="caption-card">Qui Huade</h5> 
            </a> 

            <a id="link" href="#/zhen-zhong-duan">
            <h5 id="caption-card">Zhen Zhong Duan</h5> 
            </a> 

            <a id="link" href="#/xiao-li">
            <h5 id="caption-card">Xiao Li</h5> 
            </a> 

            <a id="link" href="#/zen-frescos">
            <h5 id="caption-card">Zen Frescos</h5> 
            </a>  

          </div>
        </>
    );
  }
  
  export default Aritists; 