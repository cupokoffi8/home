import React from 'react'; 
import './Artists.css'; 
import Navbar from '../../Navbar/Navbar'; 
import '../../Button.css'; 

function Aritists() {
  window.scrollTo(0, 0); 
    return (
      <>
        <Navbar /> 
          <div className="Aritists"> 

          <form method="get" action="#/artists-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            <h1 className="artist">Artists</h1> 
            <hr /> 

            {/* href began with: /home/#/ because of gh-pages, but was changed because of domain name change */} 

            <div className="card-row-artists"> 
            <a id="link" href="#/aparna-banerjee">
            <h5 id="caption-card-l">Aparna Banerjee</h5> 
            </a>
            <a id="link" href="#/apelles-zhou">
            <h5 id="caption-card-m">Apelles Zhou</h5> 
            </a>
            <a id="link" href="#/cai-jiang">
            <h5 id="caption-card-r">Cai Jiang</h5> 
            </a>
            </div>

            <div className="card-row-artists">
            <a id="link" href="#/chiu-pai">
            <h5 id="caption-card-l">Chiu Pai</h5> 
            </a> 
            <a id="link" href="#/jill-slaymaker">
            <h5 id="caption-card-m">Jill Slaymaker</h5> 
            </a>
            <a id="link" href="#/qui-huade">
            <h5 id="caption-card-r">Qui Huade</h5> 
            </a>
            </div>

            <div className="card-row-artists">
            <a id="link" href="#/su-zi">
            <h5 id="caption-card-l">Su Zi</h5> 
            </a>
            <a id="link" href="#/xiao-li">
            <h5 id="caption-card-m">Xiao Li</h5> 
            </a>
            <a id="link" href="#/zen-frescos">
            <h5 id="caption-card-r">Zen Frescos</h5> 
            </a>
            </div> 

            <div className="card-row-artists">
            <a id="link" href="#/zhao-qing">
            <h5 id="caption-card-l">Zhao Qing</h5>
            </a> 
            <a id="link" href="#/zhen-zhong-duan"> 
            <h5 id="caption-card-r">Zhen-Zhong Duan</h5> 
            </a>
            </div> 

            {/* Mobile */} 
 
            <a id="link" href="#/aparna-banerjee">
            <h5 id="caption-card">Aparna Banerjee</h5> 
            </a> 

            <a id="link" href="#/apelles-zhou">
            <h5 id="caption-card">Apelles Zhou</h5> 
            </a> 

            <a id="link" href="#/cai-jiang">
            <h5 id="caption-card">Cai Jiang</h5> 
            </a> 

            <a id="link" href="#/chiu-pai">
            <h5 id="caption-card">Chiu Pai</h5> 
            </a> 

            <a id="link" href="#/jill-slaymaker">
            <h5 id="caption-card">Jill Slaymaker</h5> 
            </a> 

            <a id="link" href="#/qui-huade">
            <h5 id="caption-card">Qui Huade</h5> 
            </a> 

            <a id="link" href="#/su-zi">
            <h5 id="caption-card">Su Zi</h5> 
            </a> 

            <a id="link" href="#/xiao-li">
            <h5 id="caption-card">Xiao Li</h5> 
            </a> 

            <a id="link" href="#/zen-frescos">
            <h5 id="caption-card">Zen Frescos</h5> 
            </a>  

            <a id="link" href="#/zhao-qing">
            <h5 id="caption-card">Zhao Qing</h5>
            </a> 

            <a id="link" href="#/zhen-zhong-duan"> 
            <h5 id="caption-card">Zhen-Zhong Duan</h5> 
            </a> 

          </div>
        </>
    );
  }
  
  export default Aritists; 