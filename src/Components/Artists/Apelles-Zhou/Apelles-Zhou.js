import React from 'react'; 
import './Apelles-Zhou.css'; 

function ApellesZhou() {

  window.scrollTo(0, 0)

    return (
          <div className="artist-section"> 

            {/* Artist Name */} 

            <h1 className="artist">Apelles Zhou</h1>
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            Apelles Zhou merges traditional Old Master techniques with motifs from pop art, 
            cubism, abstract expressionism, and other modern movements.  Zhou’s paintings 
            also explore contemporary issues in spirituality and metaphysics.
              </p>

              <p id="art-paragraph-other">
              Apelles Zhou was born in 1992 in Jinan-Shandong, China.  He currently lives 
              and works in New York City.  He holds a BFA and MFA from The China Central 
              Academy of Fine Arts in Beijing, China.  Since earning his MFA in 2017, Zhou 
              has traveled throughout Europe to learn firsthand the techniques of painters 
              such as Elisabeth Vigee Le Brun, Hilma af Klint, Raphael, and Michelangelo.  
              In New York City, he has exhibited with The Amsterdam Whitney Gallery.  
              In Beijing, he has exhibited at the CAFA Arts Museum, The Beijing National 
              Aquatics Center, and other notable galleries.
              </p> 

              <p id="art-paragraph-bottom">
              Zhou is also a curator of contemporary art and has organized exhibitions in 
              both Beijing and New York City. 
              </p>

              <p id="art-paragraph-bottom-mobile">
              Zhou is also a curator of contemporary art and has organized exhibitions in 
              both Beijing and New York City. 
              </p>

              {/* List of Paintings */} 

              <img src="./Eye-of-Horus.png" id="painting"></img>
              <h5 id="caption">Eye of Horus</h5> 

              <img src="./Age-of-Aquarius.png" id="painting"></img> 
              <h5 id="caption">Age of Aquarius</h5> 

              <img src="./Back-to-Pleiade.png" id="painting"></img> 
              <h5 id="caption">Back to Pleiade</h5> 

              <img src="./Portrait-of-Thoth.png" id="painting"></img> 
              <h5 id="caption">Portrait of Thoth</h5> 

              <img src="./Purple-Flame.png" id="painting"></img> 
              <h5 id="caption">Purple Flame</h5> 

              <img src="./The-Grey.png" id="painting"></img> 
              <h5 id="caption">The Grey</h5> 

              <img src="./Sirian-Girl.png" id="painting-wide"></img> 
              <h5 id="caption">Sirian Girl</h5> 

          </div>
    );
  }
  
  export default ApellesZhou;