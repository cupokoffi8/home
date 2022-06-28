import React from 'react'; 
import '../../../Artists/Artists/Artists.css'; 
import '../../Exhibitions.css'; 
import NavbarMandarin from '../../../Navbar-Mandarin/Navbar-Mandarin'; 
import '../../../Button';  

function PennsylvaniaMandarin() {
  window.scrollTo(0, 0); 
    return (
      <>
        <NavbarMandarin /> 
          <div className="Pennsylvania"> 

          <form method="get" action="#/pennsylvania"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            <h1 className="artist">宾夕法尼亚展览</h1> 
            <hr /> 

            {/* href began with: /home/#/ because of gh-pages, but was changed because of domain name change */} 

            <div className="card-row-artists"> 
            <a id="link" href="#/ink-storm-mandarin">
            <h5 id="caption-card-l">墨风暴</h5> 
            </a> 
            <a id="link" href="#/mag-and-myst-mandarin">
            <h5 id="caption-card-r">“華麗與神秘”藝術展</h5> 
            </a>
            </div> 

            {/* Mobile */} 
 
            <a id="link" href="#/ink-storm-mandarin"> 
            <h5 id="caption-card">墨风暴</h5> 
            </a> 

            <a id="link" href="#/mag-and-myst-mandarin"> 
            <h5 id="caption-card">“華麗與神秘”藝術展</h5> 
            </a> 

          </div>
        </>
    );
  }
  
  export default PennsylvaniaMandarin; 