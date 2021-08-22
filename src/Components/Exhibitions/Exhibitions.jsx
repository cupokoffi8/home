import React from 'react'; 
import '../Artists/Artists/Artists.css'; 

function Exhibitions() { 

    window.scrollTo(0, 0); 

    return (
        <div>
          <div className="Aritists">
            <h1 className="artist">Exhibitions</h1> 
            <hr /> 

            <a id="link" href="/home/#/mag-and-myst">
            <img id="image" src="./1.jpeg"/> 
            <h5 id="caption">Magnificent and Mysterious Art Exhibition</h5> 
            </a>

            <a id="link" href="/home/#/victory-of-light">
            <img id="image" src="./Vol6.jpeg"/> 
            <h5 id="caption">The Victory of Light Exhibition</h5> 
            </a>

            <a id="link" href="/home/#/art-basel">
            <img id="image" src="./AB.jpeg"/> 
            <h5 id="caption">Art Basel Exhibition in Miami</h5> 
            </a>

            <a id="link" href="/home/#/san-diego">
            <img id="image" src="./SD1.jpeg"/> 
            <h5 id="caption">San Diego Contemporary Art Exhibition</h5> 
            </a>

            <a id="link" href="/home/#/headless">
            <img id="image" src="./HU1.jpeg"/> 
            <h5 id="caption">Headless and Unintentional</h5> 
            </a>

            <a id="link" href="/home/#/magnificent">
            <img id="image" src="./M3.jpeg"/>
            <h5 id="caption">Magnificent Murals</h5> 
            </a>

            <a id="link" href="/home/#/art-therapy">
            <img id="image" src="./AT1.jpeg"/>
            <h5 id="caption">Art Therapy</h5> 
            </a>

            <a id="link" href="/home/#/works-at-hefei">
            <img id="image" src="./WaH1.jpeg"/>
            <h5 id="caption">Works at Hefei</h5> 
            </a> 

            <a id="link" href="/home/#/oil-painting-exhibition"> 
            <img id="image" src="./OP2.jpeg"/> 
            <h5 id="caption">Oil Painting Exhibition</h5> 
            </a>

          </div>
        </div>
    );
  }
  
  export default Exhibitions; 