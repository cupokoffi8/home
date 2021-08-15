import React from 'react'; 
import './Mag-And-Myst.css'; 

function MagAndMyst() {
    return (
        <div>
          <div className="Mag-And-Myst">
            <h1 className="exhibition">Magnificent and Mysterious Art Exhibition</h1> 
            <hr /> 

            <img src="./1.jpeg" id="image" /> 

            <p id="paragraph" >
            On July 24th of 2021, American Dragon International Fine Art Gallery held the opening reception of the 
            "Magnificent and Mysterious” art exhibition. 
            </p> 

            <img src="./2.jpeg" id="image" /> 

          </div>
        </div>
    );
  }
  
  export default MagAndMyst;