import React from 'react'; 
import '../../../Artists/Artists/Artists.css'; 
import '../../Exhibitions.css'; 
import Navbar from '../../../Navbar/Navbar';  
import '../../../Button';  

function NewYork() {
  window.scrollTo(0, 0); 
    return (
      <>
        <Navbar /> 
          <div className="NewYork"> 

          <form method="get" action="#/new-york-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            <h1 className="artist">New York Exhibitions</h1> 
            <hr /> 

            {/* href began with: /home/#/ because of gh-pages, but was changed because of domain name change */} 

            <div className="card-row-artists"> 
            <a id="link" href="#/victory-of-light">
            <h5 id="caption-card-l">The Victory of Light Exhibition</h5> 
            </a>
            <a id="link" href="#/headless">
            <h5 id="caption-card-m">Headless and Unintentional</h5> 
            </a>
            <a id="link" href="#/art-therapy">
            <h5 id="caption-card-r">Art Therapy</h5> 
            </a>
            </div> 

            {/* Mobile */} 
 
            <a id="link" href="#/victory-of-light">
            <h5 id="caption-card">The Victory of Light Exhibition</h5> 
            </a>

            <a id="link" href="#/headless">
            <h5 id="caption-card">Headless and Unintentional</h5> 
            </a> 

            <a id="link" href="#/art-therapy"> 
            <h5 id="caption-card">Art Therapy</h5> 
            </a> 

          </div>
        </>
    );
  }
  
  export default NewYork; 