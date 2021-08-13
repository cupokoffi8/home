import React from 'react'; 
import './Aparna-Banerjee.css'; 
import Map from '../../Map/Map'; 

function AparnaBanerjee() {
    return (
        <div>
          <div className="AparnaBanerjee">
            <h1 className="artist">Aparna Banerjee</h1>
            <hr /> 
            <p id="art-paragraph">
              The work of the outstanding Indian female artist Aparna Banerjee 
              perfectly combines Eastern traditional art with Western modern genre. 
              In her paintings, she can trace the footprints of contemporary genre 
              masters and the Dunhuang aftertaste!  The source is naturally the 
              traditional Buddhist culture of India!
              </p>

              <Map /> 
          </div>
        </div>
    );
  }
  
  export default AparnaBanerjee;