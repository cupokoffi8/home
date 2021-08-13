import React from 'react'; 
import './Aparna-Banerjee.css'; 

function AparnaBanerjee() {
    return (
          <div className="artist-section"> 

            {/* Artist Name */} 

            <h1 className="artist">Aparna Banerjee</h1>
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
              The work of the outstanding Indian female artist Aparna Banerjee 
              perfectly combines Eastern traditional art with Western modern genre. 
              In her paintings, she can trace the footprints of contemporary genre 
              masters and the Dunhuang aftertaste!  The source is naturally the 
              traditional Buddhist culture of India!
              </p>

              {/* List of Paintings */} 

              <img src="./beauty_1.jpeg" id="painting"></img>
              <h5 id="caption">Beauty 1</h5> 

              <img src="./beauty_2.jpeg" id="painting"></img> 
              <h5 id="caption">Beauty 2</h5> 

          </div>
    );
  }
  
  export default AparnaBanerjee;