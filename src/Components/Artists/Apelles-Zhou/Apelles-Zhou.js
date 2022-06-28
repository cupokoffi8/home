import React from 'react'; 
import './Apelles-Zhou.css'; 
import '../Aparna-Banerjee/Aparna-Banerjee.css'; 
import '../Chiu-Pai/Chiu-Pai.css'; 
import '../Charles-Haber/Charles-Haber.css'; 
import Navbar from '../../Navbar/Navbar'; 
import '../../Button.css'; 

function ApellesZhou() {

  window.scrollTo(0, 0)

    return (
      <>
        <Navbar /> 
          <div className="artist-section"> 

          <form method="get" action="#/apelles-zhou-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

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

              {/* List of Paintings [Computer] */} 

              <div className="the-paintings">
                <div>
              <img src="./Sirian-Girl.png" className="painting-ch-sg"></img> 
              <h5 className="word-ch-sg">Sirian Girl</h5> 
              </div>
              <div>
              <img src="./AZ.jpg" className="painting-ch-small"></img> 
              <h5 className="word-ch-2">Synthetic Plangency</h5> 
              </div>
              </div> 

              <div className="the-paintings">
              <img src="./Eye-of-Horus.png" id="painting-cp"></img> 
              <img src="./Age-of-Aquarius.png" id="painting-cp"></img> 
              </div> 

              <br /> 

              <div className="the-words-cp">
              <h5 id="caption-cp">Eye of Horus</h5>
              <h5 id="caption-cp">Age of Aquarius</h5> 
              </div> 

              <br id="only-computer"/> 
              <br id="only-computer"/> 

              <div className="the-paintings">
              <img src="./Back-to-Pleiade.png" id="painting-cp"></img> 
              <img src="./Portrait-of-Thoth.png" id="painting-cp"></img> 
              </div>

              <br id="only-computer"/> 

              <div className="the-words-cp">
              <h5 id="caption-cp">Back to Pleiade</h5>
              <h5 id="caption-cp">Portrait of Thoth</h5> 
              </div> 

              <br id="only-computer"/> 
              <br id="only-computer"/> 

              <div className="the-paintings">
              <img src="./Purple-Flame.png" id="painting-cp"></img> 
              <img src="./The-Grey.png" id="painting-cp"></img> 
              </div>

              <br id="only-computer"/> 

              <div className="the-words-cp">
              <h5 id="caption-cp">Purple Flame</h5>
              <h5 id="caption-cp">The Grey</h5> 
              </div> 

              <br id="only-computer"/> 
              <br id="only-computer"/> 

              <div className="the-paintings">
              <img src="./Life-Pulse-One.jpg" id="painting-cp"></img> 
              <img src="./Life-Pulse-Two.jpg" id="painting-cp"></img> 
              </div>

              <br id="only-computer"/> 

              <div className="the-words-cp">
              <h5 id="caption-cp">Life Pulse One</h5>
              <h5 id="caption-cp">Life Pulse Two</h5> 
              </div> 

              <br id="only-computer"/> 
              <br id="only-computer"/> 

              <div className="the-paintings">
              <img src="./Life-Pulse-Three.jpg" id="painting-cp"></img> 
              <img src="./Life-Pulse-Four.jpg" id="painting-cp"></img> 
              </div>

              <br id="only-computer"/> 

              <div className="the-words-cp">
              <h5 id="caption-cp">Life Pulse Three</h5>
              <h5 id="caption-cp">Life Pulse Four</h5> 
              </div> 

              <br id="only-computer"/> 
              <br id="only-computer"/> 

              <div className="the-paintings">
              <img src="./Sirius-Letter-One.jpg" id="painting-cp"></img> 
              <img src="./Sirius-Letter-Two.jpg" id="painting-cp"></img> 
              </div>

              <br id="only-computer"/> 

              <div className="the-words-cp">
              <h5 id="caption-cp">Sirius Letter One</h5>
              <h5 id="caption-cp">Sirius Letter Two</h5> 
              </div> 

              <br id="only-computer"/> 
              <br id="only-computer"/> 

              <div className="the-paintings">
              <img src="./Sirius-Letter-Three.jpg" id="painting-cp"></img> 
              <img src="./Untitled.jpg" id="painting-cp"></img> 
              </div>

              <br id="only-computer"/> 

              <div className="the-words-cp">
              <h5 id="caption-cp">Sirius Letter Three</h5>
              <h5 id="caption-cp">Untitled</h5> 
              </div> 

              {/* List of Paintings [Phone] */} 

              <img src="./Eye-of-Horus.png" id="image-mobile-cp"></img>
              <h5 id="caption-mobile-cp">Eye of Horus</h5> 

              <img src="./Age-of-Aquarius.png" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Age of Aquarius</h5> 

              <img src="./Back-to-Pleiade.png" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Back to Pleiade</h5> 

              <img src="./Portrait-of-Thoth.png" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Portrait of Thoth</h5> 

              <img src="./Purple-Flame.png" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Purple Flame</h5> 

              <img src="./The-Grey.png" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">The Grey</h5> 

              <img src="./Sirian-Girl.png" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Sirian Girl</h5> 

              <img src="./AZ.jpg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Synthetic Plangency</h5> 

              <img src="./Life-Pulse-One.jpg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Life Pulse One</h5> 

              <img src="./Life-Pulse-Two.jpg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Life Pulse Two</h5> 

              <img src="./Life-Pulse-Three.jpg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Life Pulse Three</h5> 

              <img src="./Life-Pulse-Four.jpg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Life Pulse Four</h5> 

              <img src="./Sirius-Letter-One.jpg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Sirius Letter One</h5> 

              <img src="./Sirius-Letter-Two.jpg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Sirius Letter Two</h5> 

              <img src="./Sirius-Letter-Three.jpg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Sirius Letter Three</h5> 

              <img src="./Untitled.jpg" id="image-mobile-cp"></img> 
              <h5 id="caption-mobile-cp">Untitled</h5> 

          </div> 
          </> 
    );
  }
  
  export default ApellesZhou;