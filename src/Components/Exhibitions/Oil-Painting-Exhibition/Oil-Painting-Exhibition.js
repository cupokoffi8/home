import React from 'react'; 
import './Oil-Painting-Exhibition.css'; 

function PleaseWork() {
    return (
        <div>
          <div className="Oil-Painting-Exhibition">
            <h1 className="exhibition">Oil Painting Exhibition in Jeju Island, South Korea</h1> 
            <hr /> 

            <h5 id="caption">
              April 22- April 26, 2014 
            </h5>

            <div id="the-pictures">
              <img id="image-thing-at-uh" src="./OP1.jpeg" /> 
              <img id="image-thing-at-uhh" src="./OP2.jpeg" /> 
            </div>
          </div>
        </div>
    );
  }
  
  export default PleaseWork; 