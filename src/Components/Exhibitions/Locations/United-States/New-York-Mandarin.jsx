import React from 'react'; 
import '../../../Artists/Artists/Artists.css'; 
import '../../Exhibitions.css'; 
import NavbarMandarin from '../../../Navbar-Mandarin/Navbar-Mandarin';  
import '../../../Button';  

function NewYorkMandarin() {
  window.scrollTo(0, 0); 
    return (
      <>
        <NavbarMandarin /> 
          <div className="NewYorkMandarin"> 

          <form method="get" action="#/new-york"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            <h1 className="artist">纽约展览</h1> 
            <hr /> 

            {/* href began with: /home/#/ because of gh-pages, but was changed because of domain name change */} 

            <div className="card-row-artists"> 
            <a id="link" href="#/victory-of-light">
            <h5 id="caption-card-l">光的光輝</h5> 
            </a>
            <a id="link" href="#/headless">
            <h5 id="caption-card-m">“沈敬东，蔡江：無頭無心”展覽</h5> 
            </a>
            <a id="link" href="#/art-therapy">
            <h5 id="caption-card-r">艺术疗法</h5> 
            </a>
            </div> 

            {/* Mobile */} 
 
            <a id="link" href="#/victory-of-light">
            <h5 id="caption-card">光的光輝</h5> 
            </a>

            <a id="link" href="#/headless">
            <h5 id="caption-card">“沈敬东，蔡江：無頭無心”展覽</h5> 
            </a> 

            <a id="link" href="#/art-therapy"> 
            <h5 id="caption-card">艺术疗法</h5> 
            </a> 

          </div>
        </>
    );
  }
  
  export default NewYorkMandarin; 