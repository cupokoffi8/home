import React from 'react'; 
import './Art-Basel.css'; 
import Navbar from '../../Navbar/Navbar'; 
import '../../Button.css'; 

function ArtBasel() { 
  window.scrollTo(0, 0);
    return (
      <>
        <Navbar />
          <div className="Art-Basel"> 

          <form method="get" action="#/art-basel-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            <h1 className="exhibition">Art Basel Exhibition, Miami, Florida</h1> 
            <hr /> 

            <p id="art-paragraph-other">
            Yachang Art Network is the world’s most important Chinese Art Internet brand, with over 2  
            million professional members and 8 million daily page reviews. 
              </p> 

              <p id="art-paragraph-other">
              Artron’s Art Headlines ( artron.net ) reported that the well known curator Lena Liu launched 
              the work of artist Qiu Zihao at Art Basil.  His exhibition at Spectrum Miami attracted the 
              attention of many collectors. 
              </p> 

              <p id="art-paragraph-other">
              Inspired by the works of Paul Klee and Wassily Kandinsky, Howard ( Qui Zihao ) delved deeply 
              into the relationship between music and art.  This journey has led him to synthesize fine art 
              with music, to create an innovative system of paintings that recognize rhythm and melodies. 
              With this system, he is making striking paintings, each containing a musical composition. By 
              combining the visual and the aural, he provides a novel way to dynamically engage one’s senses 
              in enjoying works of paintings and melodies. 
              </p> 

              <br /> 

              <p id="art-paragraph-other">
              Chinese artists at Art Basel Miami 2019: 
              </p> 

              <a href="https://news.artron.net/20191214/n1067043.html">
              <p id="art-paragraph-other">
              https://news.artron.net/20191214/n1067043.html
              </p> 
              </a> 
              
          </div>
        </> 
    );
  }
  
  export default ArtBasel;