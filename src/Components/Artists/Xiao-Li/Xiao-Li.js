import React from 'react'; 
import './Xiao-Li.css'; 

function XiaoLi() {
    return (
          <div className="artist-section"> 

            {/* Artist Name */} 

            <h1 className="artist">Xiao Li</h1> 
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            Xiao Li graduated from the Central Academy of Fine Arts and the 
            Sculpture Department of the Central Academy of Fine Arts. 
            He has participated in the following venues:
              </p> 
              <ul id="venues">
                <li id="bullet">
                • Paris International Art City Exhibition in France
                </li>
                <li id="bullet">
                • The French AUBAZINE City Sculpture
                </li>
                <li id="bullet">
                • The French Paris Autumn Alon Exhibition
                </li>
                <li id="bullet">
                • The Chinese Contemporary Sculpture Exhibition
                </li>
                <li id="bullet">
                • The French Paris LA BIENNALE D’ISSY Biennial Exhibition
                </li>
                <li id="bullet">
                • 2nd National Youth Art Exhibition, winner of Bronze Prize
                </li>
                <li id="bullet">
                • Central Academy of Fine Arts Exhibition, winner of First Prize
                </li>
              </ul> 

              <p id="art-paragraph-other">
              He became the first mainland artist to create residential gardens 
              at the invitation of the Guilin Yuzi Paradise International Art Park. 
              For nearly four years, he created a series of large scale wood carvings, 
              such as “ Big Dream ”, “ Late Night ”, and “ Source”. Xiao Li was also 
              invited to discuss, shape, and trial produce for the opening and closing 
              ceremonies of the Beijing Olympic Games. He played a decisive role in the 
              function and shape of lifting props for the successful realization of 
              the “movable type“ performance projects. 
              </p> 

              <p id="art-paragraph-other">
              He is currently a Professor in the Sculpture Department of the Central Academy 
              of Fine Arts, invited to be an expert of the Ministry of Culture, and a standing 
              member of the China Wood Carving Professional Committee. He currently presides 
              over the teaching of the wood sculpture studio at the academy. 
              </p> 

              {/* List of Paintings */} 

              <img src="./beauty_1.jpeg" id="painting"></img>
              <h5 id="caption">Beauty 1</h5> 

              <img src="./beauty_2.jpeg" id="painting"></img> 
              <h5 id="caption">Beauty 2</h5> 

          </div>
    );
  }
  
  export default XiaoLi;