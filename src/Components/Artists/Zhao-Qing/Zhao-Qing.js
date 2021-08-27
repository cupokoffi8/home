import React from 'react'; 
import './Zhao-Qing.css'; 
import Navbar from '../../Navbar/Navbar'; 

function ZhaoQing() { 

  window.scrollTo(0, 0)

    return (
      <>
        <Navbar />
          <div className="artist-section"> 

            {/* Artist Name */} 

            <h1 className="artist">Zhao Qing</h1> 
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            Zhao Qing was born in 1936. She was the Vice Chairman of the Chinese Dancers Association, and the 
            daughter of the famous film actor Zhao Dan. She has many classic dance works, but she was injured 
            at the age of 54. She began to learn to paint and her talent is innate. Every oil painting of her 
            life has vitality. It appears to be a jumping note, which makes people happy. 
              </p> 

              <p id="art-paragraph-other">
              In September of 2013, the United States Guggenheim Museum, the Lincoln Art Center, and other famous 
              American Art Institutions jointly invited Ms. Zhao Qing to hold painting exhibitions in the United States. 
              </p> 

              <p id="art-paragraph-other">
              “As long as you want to learn to paint, you should not care about your age and try to be your best. Time 
              is not a problem”. Ms. Zhao Qing is nearly 60 years old. She started a new artistic life with painting. 
              This exhibition gives more people confidence and begins to experiment with art. 
              </p> 

              {/* List of Paintings */} 

              <img src="./ZQ1.jpeg" id="painting-zq"></img> 

              <img src="./ZQ2.jpeg" id="painting-zq"></img>  

              <img src="./ZQ3.jpeg" id="painting-zq"></img> 

              <img src="./ZQ4.jpeg" id="painting-zq"></img> 

          </div>
          </>
    );
  }
  
  export default ZhaoQing;