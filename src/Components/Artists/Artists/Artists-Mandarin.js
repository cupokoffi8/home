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

          <form method="get" action="#/artists"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            <h1 className="artist">艺术家</h1> 
            <hr /> 

            {/* href began with: /home/#/ because of gh-pages, but was changed because of domain name change */} 

            <div className="card-row-artists"> 
            <a id="link" href="#/aparna-banerjee-mandarin">
            <h5 id="caption-card-a-l">阿帕娜·班纳吉</h5> 
            </a>
            <a id="link" href="#/apelles-zhou-mandarin">
            <h5 id="caption-card-a-m">阿佩莱斯周</h5> 
            </a>
            <a id="link" href="#/cai-jiang-mandarin">
            <h5 id="caption-card-a-r">蔡江</h5> 
            </a>
            </div>

            <div className="card-row-artists"> 
            <a id="link" href="#/charles-haber-mandarin">
            <h5 id="caption-card-a-l">查尔斯·哈伯</h5> 
            </a> 
            <a id="link" href="#/chiu-pai-mandarin">
            <h5 id="caption-card-a-m">邱白</h5> 
            </a> 
            <a id="link" href="#/jill-slaymaker-mandarin">
            <h5 id="caption-card-a-r">吉尔·斯莱梅克</h5> 
            </a>
            </div>

            <div className="card-row-artists">
            <a id="link" href="#/qui-huade-mandarin">
            <h5 id="caption-card-a-l">奎華德</h5> 
            </a>
            <a id="link" href="#/su-zi-mandarin">
            <h5 id="caption-card-a-m">蘇子</h5> 
            </a>
            <a id="link" href="#/xiao-li-mandarin">
            <h5 id="caption-card-a-r">萧立</h5> 
            </a>
            </div> 

            <div className="card-row-artists">
            <a id="link" href="#/zen-frescos-mandarin">
            <h5 id="caption-card-a-l">禅意壁画</h5> 
            </a>
            <a id="link" href="#/zhao-qing-mandarin">
            <h5 id="caption-card-a-m">趙青</h5> 
            </a> 
            </div> 

            {/* Mobile */} 

            <a id="link" href="#/aparna-banerjee-mandarin">
            <h5 id="caption-card">阿帕娜·班纳吉</h5> 
            </a>

            <a id="link" href="#/apelles-zhou-mandarin">
            <h5 id="caption-card">阿佩莱斯周</h5> 
            </a>

            <a id="link" href="#/cai-jiang-mandarin"> 
            <h5 id="caption-card">蔡江</h5> 
            </a> 

            <a id="link" href="#/charles-haber-mandarin">
            <h5 id="caption-card">查尔斯·哈伯</h5> 
            </a> 

            <a id="link" href="#/chiu-pai-mandarin"> 
            <h5 id="caption-card">邱白</h5> 
            </a> 

            <a id="link" href="#/jill-slaymaker-mandarin">
            <h5 id="caption-card">吉尔·斯莱梅克</h5> 
            </a> 

            <a id="link" href="#/qui-huade-mandarin"> 
            <h5 id="caption-card">奎華德</h5> 
            </a>

            <a id="link" href="#/su-zi-mandarin">  
            <h5 id="caption-card">蘇子</h5> 
            </a>

            <a id="link" href="#/xiao-li-mandarin"> 
            <h5 id="caption-card">萧立</h5> 
            </a>

            <a id="link" href="#/zen-frescos-mandarin"> 
            <h5 id="caption-card">禅意壁画</h5> 
            </a>

            <a id="link" href="#/zhao-qing-mandarin"> 
            <h5 id="caption-card">趙青</h5> 
            </a> 

          </div>
        </>
    );
  }
  
  export default AritistsMandarin; 