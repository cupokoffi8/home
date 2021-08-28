import React from 'react'; 
import './Oil-Painting-Exhibition.css'; 
import Navbar from '../../Navbar/Navbar'; 
import '../../Button.css'; 

function PleaseWork() {
  window.scrollTo(0, 0);
    return (
      <>
        <Navbar />
          <div className="Oil-Painting-Exhibition"> 

          <form method="get" action="#/oil-painting-exhibition-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            <h1 className="exhibition">Oil Painting Exhibition in Jeju Island, South Korea</h1> 
            <hr /> 

            <h5 id="caption">
              April 22- April 26, 2014 
            </h5>

            <div id="the-pictures">
              <img id="image-thing-at-uh" src="./OP1.jpeg" /> 
              <img id="image-thing-at-uhh" src="./OP2.jpeg" /> 
            </div> 

            <br /> 
            <br /> 
            
            <p id="art-paragraph-other">
            The famous curator, Lena Liu, said: The Oil Painting Exhibition of Zhao Qing, at Jeju Island, 
            South Korea,  attracted the attention of many collectors.  The famous artist Zhao Quing is the 
            first generation of the Chinese Dance Artist. 
            </p> 

            <p id="art-paragraph-other">
            She was born in 1936. She was the Vice Chairman of the Chinese Dancers Association, and the daughter 
            of the famous film actor Zhao Dan.  She has many classic dance works, but she was injured at the age 
            of 54.  She began to learn to paint and her talent is innate.  Every oil painting of her life has vitality. 
            It appears to be a jumping note, which makes people happy. 
            </p>

            <p id="art-paragraph-other">
            In September of 2013, the United States Guggenheim Museum, the Lincoln Art Center, and other famous American 
            Art Institutions jointly invited Ms. Zhao Qing to hold painting exhibitions in the United States. 
            </p>

            <p id="art-paragraph-other">
            “As long as you want to learn to paint, you should not care about your age and try to be your best. Time is 
            not a problem”.  Ms. Zhao Qing is nearly 60 years old.  She started a new artistic life with painting. This 
            exhibition gives more people confidence and begins to experiment with art. 
            </p> 

          </div>
        </> 
    );
  }
  
  export default PleaseWork; 