import React from 'react'; 
import './Cai-Jiang.css'; 
import Navbar from '../../Navbar/Navbar'; 

function CaiJiang() {

  window.scrollTo(0, 0)

    return (
      <>
        <Navbar />
          <div className="artist-section"> 

            {/* Artist Name */} 

            <h1 className="artist">Cai Jiang Jon Tsoi</h1> 
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            Cai Jiang Tsoi is originally from Sichuan, China.  In 1979, 
            he moved to New York City, a place of contemporary art in the 
            United States.  For 37 years, he has been cultivating and 
            understanding the super-sensory, super-experience, and time-out 
            “moral experience” of Chinese Philosophy, combined with Chinese 
            Medicine, the “Emperor’s  Internal Classic” yin and yang, blood, 
            body, spirit, and soul.
              </p>

              <p id="art-paragraph-other">
              From 1981 onwards, he held more than 30 individual art exhibitions 
              in the United States, including a four-day blind art performance 
              at the Queens Museum in New York City in 2014, entitled “Art 
              Diagnostics and Diagnosis”.  He also participated in more than 20 
              exhibitions and art fairs around the world.  
              </p> 

              <p id="art-paragraph-other">
              From 2015 to 2016, he performed blind art performances and solo 
              exhibitions at the Whitebox Art Center in New York, a famous gallery. 
              His work has been collected by President George Bush, as well as 
              numerous famous art institutions and collectors.
              </p> 

              <p id="art-paragraph-other">
              Anthony Haden, a famous American Art Critic based in New York City, 
              gave his art and performance a high level artistic evaluation.  
              “Cai Jiang is a great and extraordinary artist with blindly created 
              art that has gone beyond the beauty of normal visual art.”
              </p> 

              <p id="art-paragraph-bottom">
              The artistic experience is divided into three major stages:
              </p>

              <p id="art-paragraph-bottom">
              1. Innovative Pope Wandering Goddess and Landscape series.
              </p>

              <p id="art-paragraph-bottom">
              2. Innovative ink landscapes, flowers, and bird series.
              </p>

              <p id="art-paragraph-bottom">
              3. Original contemporary blind wisdom art, painting, and sculpture series.
              </p>

              <p id="art-paragraph-bottom">
              It is from outside to inside, from far to near, from complex to concise, 
              from technology to  art, from promising to inaction.
              </p>

              {/* ------------------------------------------------------------- */}

              <p id="art-paragraph-bottom-mobile">
              The artistic experience is divided into three major stages:
              </p>

              <p id="art-paragraph-bottom-mobile">
              1. Innovative Pope Wandering Goddess and Landscape series.
              </p>

              <p id="art-paragraph-bottom-mobile">
              2. Innovative ink landscapes, flowers, and bird series.
              </p>

              <p id="art-paragraph-bottom-mobile">
              3. Original contemporary blind wisdom art, painting, and sculpture series.
              </p>

              <p id="art-paragraph-bottom-mobile">
              It is from outside to inside, from far to near, from complex to concise, 
              from technology to  art, from promising to inaction.
              </p>



              {/* List of Paintings */} 

              <img src="./CJ1.jpeg" id="painting"></img> 

              <img src="./CJ2.jpeg" id="painting"></img> 

              <img src="./CJ3.jpeg" id="painting"></img> 

              <img src="./CJ4.jpeg" id="painting"></img> 

          </div> 
          </> 
    );
  }
  
  export default CaiJiang; 