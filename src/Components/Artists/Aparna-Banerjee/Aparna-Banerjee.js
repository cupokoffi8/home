import React from 'react'; 
import './Aparna-Banerjee.css'; 
import Map from '../../Map/Map'; 

function AparnaBanerjee() {
    return (
        <div>
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

              <img id="painting" 
              src="https://images.squarespace-cdn.com/content/v1/5d55df31eaca5e00018cde6c/1572979012246-DNGRI7ICV1XX626RLYYX/beauty_1.jpg?format=750w"
              /> 


          </div>
        </div>
    );
  }
  
  export default AparnaBanerjee;