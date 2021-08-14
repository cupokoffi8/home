import React from 'react'; 
import './Su-Zi.css'; 

function SuZi() {
    return (
          <div className="artist-section"> 

            {/* Artist Name */} 

            <h1 className="artist">Su Zi</h1> 
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            Su Zi is a professional painter, a member of Beijing Woman Artist Sodality 
            and member of Beijing Oil Painting Society. She loves painting since childhood. 
            Su Zi has studied bold freehand traditional Chinese painting in a systemic way 
            and pursued further study of western oil painting at the China Central Academy 
            Of Fine Arts. 
              </p> 

              <p id="art-paragraph-other">
              In recent years, Su Zi has fully devoted herself to the study of 
              nationalization of oil painting, which integrates both western 
              culture and Chinese culture. Her painting style has adopted expressionism, 
              but in essence it is still bold freehand traditional Chinese painting 
              which borrows the formal language of characters in Chinese opera. Possessing 
              such an original and distinctive painting style, Su Zi has entered a new 
              artistic state.
              </p> 

              <p id="art-paragraph-other">
              Looking at Su Zi' s paintings, you can easily get the feeling that heroes, 
              warriors and beauties, which are the most recurrent themes in her work. 
              They might arise from her love for these themes. Naturally, she is quite 
              good at these kinds of artistic creations. 
              </p> 

              <p id="art-paragraph-other">
              It is remarkable that the painter's unique, exaggerated portrait of the 
              characters have perfectly captured the connotation of her artistic creations. 
              Su Zi's oil paintings exude an illusory and unrestrained feel and reveal 
              some vaguely discernible mythological color. 
              </p> 

              {/* List of Paintings */} 

              <img src="./beauty_1.jpeg" id="painting"></img>
              <h5 id="caption">Beauty 1</h5> 

              <img src="./beauty_2.jpeg" id="painting"></img> 
              <h5 id="caption">Beauty 2</h5> 

          </div>
    );
  }
  
  export default SuZi;