import React from 'react'; 
import '../Aparna-Banerjee/Aparna-Banerjee.css'; 
import '../Artists/Artists.css'; 
import Navbar from '../../Navbar/Navbar'; 
import '../../Button.css'; 
import Image1 from './Images/1.jpg'; 
import Image2 from './Images/2.jpg'; 
import Image3 from './Images/3.jpg'; 
import Image4 from './Images/Mischief.png'; 
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
              <h5 id="caption-ab-1">The Calm</h5>
              <h5 id="caption-ab-2">Stress</h5>
              </div>
              <div className="the-words">
              <h5 id="caption-ab-11">18" x 24"</h5> 
              <h5 id="caption-ab-22">14" x 20"</h5> 
              </div>
              <div className="the-wordss">
              <h5 id="caption-ab-11">$375</h5>
              <h5 id="caption-ab-22">$250</h5>
              </div> 

              <div className="the-paintings">
              <img src={Image3} id="painting-ab"></img> 
              <img src={Image5} id="painting-ab"></img> 
              </div>
              <div className="the-words">
              <h5 id="caption-ab-1">Resting Worry</h5>
              <h5 id="caption-ab-2">Sea Dream</h5>
              </div>
              <div className="the-words">
              <h5 id="caption-ab-11">16" x 24"</h5> 
              <h5 id="caption-ab-22">16" x 24"</h5> 
              </div>
              <div className="the-wordss">
              <h5 id="caption-ab-11">$350</h5> 
              <h5 id="caption-ab-22">$350</h5> 
              </div> 

              <div className="the-paintings">
              <img src={Image6} id="painting-ab"></img> 
              <img src={Image7} id="painting-ab"></img> 
              </div>
              <div className="the-words">
              <h5 id="caption-ab-1">Restraint</h5>
              <h5 id="caption-ab-2">Comfort</h5>
              </div>
              <div className="the-words">
              <h5 id="caption-ab-11">16" x 24"</h5> 
              <h5 id="caption-ab-22">24" x 36"</h5> 
              </div>
              <div className="the-wordss">
              <h5 id="caption-ab-11">$350</h5>
              <h5 id="caption-ab-22">$500</h5>
              </div> 

              {/* List of Paintings [Phone] */} 

              <img src={Image1} id="image-mobile"/> 
              <br id="only-mobile"/>  
              <h5 id="caption-mobile">The Calm</h5> 
              <h5 id="caption-mobile">18" x 24"</h5> 
              <h5 id="caption-mobile">$375</h5> 

              <br id="only-mobile"/> 

              <img src={Image2} id="image-mobile"/> 
              <br id="only-mobile"/>  
              <h5 id="caption-mobile">Stress</h5> 
              <h5 id="caption-mobile">14" x 20"</h5> 
              <h5 id="caption-mobile">$250</h5> 

              <br id="only-mobile"/> 

              <img src={Image3} id="image-mobile"/> 
              <br id="only-mobile"/>  
              <h5 id="caption-mobile">Resting Worry</h5> 
              <h5 id="caption-mobile">16" x 24"</h5> 
              <h5 id="caption-mobile">$350</h5> 

              <br id="only-mobile"/> 

              <img src={Image5} id="image-mobile"/> 
              <br id="only-mobile"/>  
              <h5 id="caption-mobile">Sea Dream</h5> 
              <h5 id="caption-mobile">16" x 24"</h5> 
              <h5 id="caption-mobile">$350</h5>  

              <br id="only-mobile"/> 

              <img src={Image6} id="image-mobile"/> 
              <br id="only-mobile"/>  
              <h5 id="caption-mobile">Restraint</h5> 
              <h5 id="caption-mobile">16" x 24"</h5> 
              <h5 id="caption-mobile">$350</h5> 

              <br id="only-mobile"/> 

              <img src={Image7} id="image-mobile"/> 
              <br id="only-mobile"/>  
              <h5 id="caption-mobile">Comfort</h5> 
              <h5 id="caption-mobile">24" x 36"</h5> 
              <h5 id="caption-mobile">$500</h5> 

              <br id="only-mobile"/> 

              <img src={Image4} id="painting-zf" /> 
              <h5 id="caption-ac">Mischief</h5> 
              <h5 id="caption-ac">20" x 24"</h5>
              <h5 id="caption-ac">$400</h5> 

          </div> 
          </> 
    );
  }
  
  export default AngelCruz;