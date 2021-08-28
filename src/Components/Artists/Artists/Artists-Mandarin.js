import React from 'react'; 
import './Artists.css'; 
import NavbarMandarin from '../../Navbar-Mandarin/Navbar-Mandarin'; 
import '../../Button.css'; 

function AritistsMandarin() { 
  window.scrollTo(0, 0); 
    return (
      <>
        <NavbarMandarin /> 
          <div className="Aritists"> 

          <form method="get" action="/artists"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            <h1 className="artist">艺术家</h1> 
            <hr /> 

            {/* href began with: /home/#/ because of gh-pages, but was changed because of domain name change */} 
            <a id="link" href="/aparna-banerjee-mandarin">
            <img id="image" src="./Maiden-in-Color.jpeg"/> 
            <h5 id="caption">阿帕娜·班纳吉</h5> 
            </a>

            <a id="link" href="/apelles-zhou-mandarin">
            <img id="image" src="./Eye-of-Horus.png"/>
            <h5 id="caption">阿佩莱斯周</h5> 
            </a>

            <a id="link" href="/cai-jiang-mandarin">
            <img id="image" src="./Cai-Jiang.png"/>
            <h5 id="caption">蔡江</h5> 
            </a>

            <a id="link" href="/chiu-pai-mandarin">
            <img id="image" src="./Chiu-Pai.png"/>
            <h5 id="caption">潮牌</h5> 
            </a>

            <a id="link" href="/qui-huade-mandarin"> 
            <img id="image" src="./Howard.jpeg"/>
            <h5 id="caption">奎華德</h5> 
            </a>

            <a id="link" href="/su-zi-mandarin"> 
            <img id="image" src="./Su-Zi.png"/> 
            <h5 id="caption">蘇子</h5> 
            </a>

            <a id="link" href="/xiao-li-mandarin"> 
            <img id="image" src="./Xiao-Li.jpeg"/>
            <h5 id="caption">萧立</h5> 
            </a>

            <a id="link" href="/zen-frescos-mandarin"> 
            <img id="image" src="./ZF.jpeg"/>
            <h5 id="caption">禅意壁画</h5> 
            </a>

            <a id="link" href="/zhao-qing-mandarin"> 
            <img id="image" src="./ZQ.jpeg"/>
            <h5 id="caption">趙青</h5> 
            </a> 

            <a id="link" href="/zhen-zhong-duan-mandarin"> 
            <img id="image" src="./ZZD.jpeg"/>
            <h5 id="caption">段振中</h5> 
            </a>

          </div>
        </>
    );
  }
  
  export default AritistsMandarin; 