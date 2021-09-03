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
            <a id="link" href="#/aparna-banerjee">
            <img id="image" src="./Maiden-in-Color.jpeg"/> 
            <h5 id="caption">Aparna Banerjee</h5> 
            </a>

            <a id="link" href="#/apelles-zhou">
            <img id="image" src="./Eye-of-Horus.png"/>
            <h5 id="caption">Apelles Zhou</h5> 
            </a>

            <a id="link" href="#/cai-jiang">
            <img id="image" src="./Cai-Jiang.png"/>
            <h5 id="caption">Cai Jiang</h5> 
            </a>

            <a id="link" href="#/chiu-pai">
            <img id="image" src="./Chiu-Pai.png"/>
            <h5 id="caption">Chiu Pai</h5> 
            </a> 

            <a id="link" href="#/jill-slaymaker">
            <img id="image" src="./JS7.jpg"/>
            <h5 id="caption">Jill Slaymaker</h5> 
            </a>

            <a id="link" href="#/qui-huade">
            <img id="image" src="./Howard.jpeg"/>
            <h5 id="caption">Qui Huade</h5> 
            </a>

            <a id="link" href="#/su-zi">
            <img id="image" src="./Su-Zi.png"/> 
            <h5 id="caption">Su Zi</h5> 
            </a>

            <a id="link" href="#/xiao-li">
            <img id="image" src="./Xiao-Li.jpeg"/>
            <h5 id="caption">Xiao Li</h5> 
            </a>

            <a id="link" href="#/zen-frescos">
            <img id="image" src="./ZF.jpeg"/>
            <h5 id="caption">Zen Frescos</h5> 
            </a>

            <a id="link" href="#/zhao-qing">
            <img id="image" src="./ZQ.jpeg"/>
            <h5 id="caption">Zhao Qing</h5>
            </a> 

            <a id="link" href="#/zhen-zhong-duan"> 
            <img id="image" src="./ZZD.jpeg"/>
            <h5 id="caption">Zhen-Zhong Duan</h5> 
            </a>

          </div>
        </>
    );
  }
  
  export default Aritists; 