import React from 'react'; 
import '../The-Gallery/The-Gallery/The-Gallery.css';  

function Exhibitions() { 

    window.scrollTo(0, 0); 

    return (
        <div>
          <div className="Aritists">
            <h1 className="exhibition">Exhibitions</h1> 
            <hr /> 

            <a id="link" href="/home/#/mag-and-myst">
            <img id="image-thing-e" src="./1.jpeg"/> 
            <h5 id="caption">Magnificent and Mysterious Art Exhibition</h5> 
            </a>

            <a id="link" href="/home/#/victory-of-light">
            <img id="image-thing-e" src="./Vol6.jpeg"/> 
            <h5 id="caption">The Victory of Light Exhibition</h5> 
            </a>

            <a id="link" href="/home/#/art-basel">
            <img id="image-thing-e" src="./AB.jpeg"/> 
            <h5 id="caption">Art Basel Exhibition in Miami</h5> 
            </a>

            <a id="link" href="/home/#/san-diego">
            <img id="image-thing-e" src="./SD1.jpeg"/> 
            <h5 id="caption">San Diego Contemporary Art Exhibition</h5> 
            </a>

            <a id="link" href="/home/#/headless">
            <img id="image-thing-e" src="./HUT.jpg"/> 
            <h5 id="caption">Headless and Unintentional</h5> 
            </a>

            <a id="link" href="/home/#/magnificent">
            <img id="image-thing-e" src="./M3.jpg"/>
            <h5 id="caption">Magnificent Murals</h5> 
            </a>

            <a id="link" href="/home/#/art-therapy">
            <img id="image-thing-e" src="./AT1.jpeg"/>
            <h5 id="caption">Art Therapy</h5> 
            </a>

            <a id="link" href="/home/#/works-at-hefei">
            <img id="image-thing-e" src="./WaHT.jpg"/>
            <h5 id="caption">Works at Hefei</h5> 
            </a> 

            <a id="link" href="/home/#/oil-painting-exhibition"> 
            <img id="image-thing-e" src="./OP2.jpeg"/> 
            <h5 id="caption">Oil Painting Exhibition</h5> 
            </a>

          </div>
        </div>
    );
  }
  
  export default Exhibitions; 