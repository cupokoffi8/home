import React from 'react'; 
import '../../../Artists/Artists/Artists.css'; 
import '../../Exhibitions.css'; 
import Navbar from '../../../Navbar/Navbar';  
import '../../../Button';  

function Pennsylvania() {
  window.scrollTo(0, 0); 
    return (
      <>
          
          <div className="Pennsylvania"> 

          <form method="get" action="#/pennsylvania-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            <h1 className="artist">Pennsylvania Exhibitions</h1> 
            <hr /> 

            {/* href began with: /home/#/ because of gh-pages, but was changed because of domain name change */} 

            <div className="card-row-artists"> 
            <a id="link" href="#/ink-storm">
            <h5 id="caption-card-l">Ink Storm</h5> 
            </a> 
            <a id="link" href="#/mag-and-myst">
            <h5 id="caption-card-r">"Magnificent and Mysterious"</h5> 
            </a>
            </div> 

            {/* Mobile */} 
 
            <a id="link" href="#/ink-storm"> 
            <h5 id="caption-card">Ink Storm</h5> 
            </a> 

            <a id="link" href="#/mag-and-myst"> 
            <h5 id="caption-card">"Magnificent and Mysterious"</h5> 
            </a> 

          </div>
        </>
    );
  }
  
  export default Pennsylvania; 