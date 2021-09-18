import React from 'react'; 
import './Exhibitions.css'; 
import Navbar from '../Navbar/Navbar'; 
import '../Button.css'; 

function Exhibitions() { 

    window.scrollTo(0, 0); 

    return (
      <>
        <Navbar /> 
          <div className="Aritists"> 

          <form method="get" action="#/exhibitions-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            <h1 className="exhibition">Exhibitions</h1> 
            <hr /> 

            {/* href began with: /home/#/ because of gh-pages, but was changed because of domain name change */}

            <div className="card-row-artists"> 
            <a id="link" href="#/mag-and-myst"> 
            <h5 id="caption-card-l">Magnificent and Mysterious Art Exhibition</h5> 
            </a>
            <a id="link" href="#/victory-of-light"> 
            <h5 id="caption-card-m">The Victory of Light Exhibition</h5> 
            </a>
            <a id="link" href="#/art-basel"> 
            <h5 id="caption-card-r">Art Basel Exhibition in Miami</h5> 
            </a>
            </div>

            <div className="card-row-artists">
            <a id="link" href="#/san-diego"> 
            <h5 id="caption-card-l">San Diego Contemporary Art Exhibition</h5> 
            </a> 
            <a id="link" href="#/headless">
            <h5 id="caption-card-m">Headless and Unintentional</h5> 
            </a>
            <a id="link" href="#/magnificent"> 
            <h5 id="caption-card-r">Magnificent Murals</h5> 
            </a>
            </div>

            <div className="card-row-artists">
            <a id="link" href="#/art-therapy"> 
            <h5 id="caption-card-l">Art Therapy</h5> 
            </a>
            <a id="link" href="#/works-at-hefei"> 
            <h5 id="caption-card-m">Works at Hefei</h5> 
            </a>
            <a id="link" href="#/oil-painting-exhibition"> 
            <h5 id="caption-card-r">Oil Painting Exhibition</h5> 
            </a>
            </div> 

            {/* Mobile */} 
 
            <a id="link" href="#/mag-and-myst"> 
            <h5 id="caption-card">Magnificent and Mysterious Art Exhibition</h5> 
            </a> 

            <a id="link" href="#/victory-of-light">
            <h5 id="caption-card">The Victory of Light Exhibition</h5> 
            </a> 

            <a id="link" href="#/art-basel">
            <h5 id="caption-card">Art Basel Exhibition in Miami</h5> 
            </a> 

            <a id="link" href="#/san-diego"> 
            <h5 id="caption-card">San Diego Contemporary Art Exhibition</h5> 
            </a> 

            <a id="link" href="#/headless">
            <h5 id="caption-card">Headless and Unintentional</h5> 
            </a> 

            <a id="link" href="#/magnificent">
            <h5 id="caption-card">Magnificent Murals</h5> 
            </a> 

            <a id="link" href="#/art-therapy">
            <h5 id="caption-card">Art Therapy</h5> 
            </a> 

            <a id="link" href="#/works-at-hefei"> 
            <h5 id="caption-card">Works at Hefei</h5> 
            </a> 

            <a id="link" href="#/oil-painting-exhibition"> 
            <h5 id="caption-card">Oil Painting Exhibition</h5> 
            </a> 
          </div>
        </> 
    );
  }
  
  export default Exhibitions; 