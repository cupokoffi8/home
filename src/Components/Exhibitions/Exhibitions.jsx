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
            <a id="link" href="#/mag-and-myst"> 
            <img id="image-thing-e" src="./1.jpeg"/> 
            <h5 id="caption">Magnificent and Mysterious Art Exhibition</h5> 
            </a>

            <a id="link" href="#/victory-of-light">
            <img id="image-thing-e" src="./Vol6.jpeg"/> 
            <h5 id="caption">The Victory of Light Exhibition</h5> 
            </a>

            <a id="link" href="#/art-basel">
            <img id="image-thing-e" src="./AB.jpeg"/> 
            <h5 id="caption">Art Basel Exhibition in Miami</h5> 
            </a>

            <a id="link" href="#/san-diego">
            <img id="image-thing-e" src="./SD1.jpeg"/> 
            <h5 id="caption">San Diego Contemporary Art Exhibition</h5> 
            </a>

            <a id="link" href="#/headless">
            <img id="image-thing-e" src="./HU1.jpeg"/> 
            <h5 id="caption">Headless and Unintentional</h5> 
            </a>

            <a id="link" href="#/magnificent">
            <img id="image-thing-e" src="./M3.jpg"/>
            <h5 id="caption">Magnificent Murals</h5> 
            </a>

            <a id="link" href="#/art-therapy">
            <img id="image-thing-e" src="./AT1.jpeg"/>
            <h5 id="caption">Art Therapy</h5> 
            </a>

            <a id="link" href="#/works-at-hefei">
            <img id="image-thing-e" src="./WaHT.jpg"/>
            <h5 id="caption">Works at Hefei</h5> 
            </a> 

            <a id="link" href="#/oil-painting-exhibition"> 
            <img id="image-thing-e" src="./OP2.jpeg"/> 
            <h5 id="caption">Oil Painting Exhibition</h5> 
            </a>

          </div>
        </> 
    );
  }
  
  export default Exhibitions; 