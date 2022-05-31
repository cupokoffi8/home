import React from 'react'; 
import '../Aparna-Banerjee/Aparna-Banerjee.css'; 
import '../Artists/Artists.css'; 
import Navbar from '../../Navbar/Navbar'; 
import '../../Button.css'; 
import Image1 from './Images/1.jpg'; 
import Image2 from './Images/2.jpg'; 
import Image3 from './Images/3.jpg'; 
import Image4 from './Images/4.jpg'; 
import Image5 from './Images/5.jpg'; 
import Image6 from './Images/6.jpg'; 
import Image7 from './Images/7.jpg'; 

function AngelCruz() {

  window.scrollTo(0, 0)

    return (
      <>
        <Navbar /> 
          <div className="artist-section"> 

          <form method="get" action="#/angel-cruz-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            {/* Artist Name */} 

            <h1 className="artist">Angel Cruz</h1>
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            Angel is a talented artist who specializes in using the digital world as his tool to express his artistic ideas. 
            He is a graduate of Millersville University with a BA in Commercial Art in 2001, and was retained as an Artist in 
            Residence and teaching assistant until 2004.  He taught as an Adjunct Professor at the Pennsylvania College of Art 
            and Design (PCAD) for a semester in 2002.  In 2005, he achieved his Masters Degree in Digital Arts from the Maryland 
            Institute, College of Art (MICA). Angel has exhibited his work in Lancaster, Philadelphia, Baltimore, Washington D.C., 
            and Ocean City, Maryland. He has continued to do freelance work for local musicians and businesses in the Lancaster area. 
              </p>

              {/* List of Paintings [Computer] */} 

              <div className="the-paintings">
              <img src={Image1} id="painting-ab"></img> 
              <img src={Image2} id="painting-ab"></img> 
              </div>
              <div className="the-words">
              <h5 id="caption-ab-1"></h5>
              <h5 id="caption-ab-2"></h5>
              </div>
              <div className="the-words">
              <h5 id="caption-ab-11"></h5> 
              <h5 id="caption-ab-22"></h5> 
              </div>
              <div className="the-words">
              <h5 id="caption-ab-11"></h5> 
              <h5 id="caption-ab-22"></h5> 
              </div>
              <div className="the-wordss">
              <h5 id="caption-ab-11"></h5>
              <h5 id="caption-ab-22"></h5>
              </div> 

              <div className="the-paintings">
              <img src={Image3} id="painting-ab"></img> 
              <img src={Image5} id="painting-ab"></img> 
              </div>
              <div className="the-words">
              <h5 id="caption-ab-1"></h5>
              <h5 id="caption-ab-2"></h5>
              </div>
              <div className="the-words">
              <h5 id="caption-ab-11"></h5> 
              <h5 id="caption-ab-22"></h5> 
              </div>
              <div className="the-words">
              <h5 id="caption-ab-11"></h5> 
              <h5 id="caption-ab-22"></h5> 
              </div>
              <div className="the-wordss">
              <h5 id="caption-ab-11"></h5>
              <h5 id="caption-ab-22"></h5>
              </div> 

              <div className="the-paintings">
              <img src={Image6} id="painting-ab"></img> 
              <img src={Image7} id="painting-ab"></img> 
              </div>
              <div className="the-words">
              <h5 id="caption-ab-1"></h5>
              <h5 id="caption-ab-2"></h5>
              </div>
              <div className="the-words">
              <h5 id="caption-ab-11"></h5> 
              <h5 id="caption-ab-22"></h5> 
              </div>
              <div className="the-words">
              <h5 id="caption-ab-11"></h5> 
              <h5 id="caption-ab-22"></h5> 
              </div>
              <div className="the-wordss">
              <h5 id="caption-ab-11"></h5>
              <h5 id="caption-ab-22"></h5>
              </div> 

              {/* List of Paintings [Phone] */} 

              <img src={Image1} id="image-mobile"/> 
              <h5 id="caption-mobile"></h5> 
              <h5 id="caption-mobile"></h5> 
              <h5 id="caption-mobile"></h5> 
              <h5 id="caption-mobile"></h5> 

              <br id="only-mobile"/> 

              <img src={Image2} id="image-mobile"/> 
              <h5 id="caption-mobile"></h5> 
              <h5 id="caption-mobile"></h5> 
              <h5 id="caption-mobile"></h5> 
              <h5 id="caption-mobile"></h5> 

              <br id="only-mobile"/> 

              <img src={Image3} id="image-mobile"/> 
              <h5 id="caption-mobile"></h5> 
              <h5 id="caption-mobile"></h5> 
              <h5 id="caption-mobile"></h5> 
              <h5 id="caption-mobile"></h5> 

              <br id="only-mobile"/> 

              <img src={Image5} id="image-mobile"/> 
              <h5 id="caption-mobile"></h5> 
              <h5 id="caption-mobile"></h5> 
              <h5 id="caption-mobile"></h5> 
              <h5 id="caption-mobile"></h5> 

              <br id="only-mobile"/> 

              <img src={Image6} id="image-mobile"/> 
              <h5 id="caption-mobile"></h5> 
              <h5 id="caption-mobile"></h5> 
              <h5 id="caption-mobile"></h5> 
              <h5 id="caption-mobile"></h5> 

              <br id="only-mobile"/> 

              <img src={Image7} id="image-mobile"/> 
              <h5 id="caption-mobile"></h5> 
              <h5 id="caption-mobile"></h5> 
              <h5 id="caption-mobile"></h5> 
              <h5 id="caption-mobile"></h5> 

              <br id="only-mobile"/> 

              <img src={Image4} id="painting-zf" /> 
              <h5 id="caption"></h5> 
              <h5 id="caption"></h5> 
              <h5 id="caption"></h5> 
              <h5 id="caption"></h5> 

          </div> 
          </> 
    );
  }
  
  export default AngelCruz;