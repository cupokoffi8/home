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
            <a id="link" href="#/works-at-hefei-mandarin"> 
            <h5 id="caption-card-l">中国</h5> 
            </a>
            <a id="link" href="#/art-basel-mandarin"> 
            <h5 id="caption-card-m">迈阿密</h5> 
            </a>
            <a id="link" href="#/new-york-mandarin"> 
            <h5 id="caption-card-r">纽约</h5> 
            </a>
            </div>

            <div className="card-row-artists">
            <a id="link" href="#/pennsylvania-mandarin"> 
            <h5 id="caption-card-l">宾夕法尼亚州</h5> 
            </a> 
            <a id="link" href="#/san-diego-mandarin">
            <h5 id="caption-card-m">圣地亚哥</h5> 
            </a>
            <a id="link" href="#/oil-painting-exhibition-mandarin"> 
            <h5 id="caption-card-r">韩国</h5> 
            </a>
            </div>

            <div className="card-row-artists">
            <a id="link" href="#/magnificent-mandarin"> 
            <h5 id="caption-card-m">东京</h5> 
            </a> 
            </div> 

            {/* Mobile */} 
 
            <a id="link" href="#/works-at-hefei-mandarin"> 
            <h5 id="caption-card">中国</h5> 
            </a> 

            <a id="link" href="#/art-basel-mandarin">
            <h5 id="caption-card">迈阿密</h5> 
            </a> 

            <a id="link" href="#/new-york-mandarin">
            <h5 id="caption-card">纽约</h5> 
            </a> 

            <a id="link" href="#/pennsylvania-mandarin"> 
            <h5 id="caption-card">宾夕法尼亚州</h5> 
            </a> 

            <a id="link" href="#/san-diego-mandarin"> 
            <h5 id="caption-card">圣地亚哥</h5> 
            </a> 

            <a id="link" href="#/oil-painting-exhibition-mandarin">
            <h5 id="caption-card">韩国</h5> 
            </a> 

            <a id="link" href="#/magnificent-mandarin"> 
            <h5 id="caption-card">东京</h5> 
            </a> 

          </div>
        </> 
    );
  }
  
  export default ExhibitionsMandarin; 