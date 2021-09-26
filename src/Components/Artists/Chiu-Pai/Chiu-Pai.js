import React from 'react'; 
import './Chiu-Pai.css'; 
import '../Aparna-Banerjee/Aparna-Banerjee.css'; 
import Navbar from '../../Navbar/Navbar'; 
import '../../Button.css'; 

function ChiuPai() {

  window.scrollTo(0, 0)

    return ( 
      <>
        <Navbar />
          <div className="artist-section"> 

          <form method="get" action="#/chiu-pai-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            {/* Artist Name */} 

            <h1 className="artist">Chiu Pai</h1>
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            Chiu Pai was born in Taipei. She studied Fashion Design at the Garment Association, 
            and studied painting with the famous painter Xu Min. Chiu Pai moved to Vancouver, 
            British Columbia in 1999, and studied Western Painting at the Emily Carr University 
            of Art and Design.
              </p> 

              <p id="art-paragraph-other">
              She is a member of the International Chinese Artists Association, the Canadian Artists 
              Association, the Chinese International Culture and Art Promotions Association, the World 
              Association of Chinese Painting and Calligraphy, and the Vice President and Chief Curator 
              of the Painting and Calligraphy Institute in Vancouver. 
              </p> 

              <h2 id="header">
              Remarks from Chiu Pai:
              </h2> 

              <p id="art-paragraph-other">
              “I use the oxymoron “ Awaken Dream “ to describe my paintings, as I envision the paintings. 
              They are so real. People are intrigued and captivated by the “Awaken Dream” concept. I always 
              wish those dreams can radiate a peaceful, cohesive, and serene atmosphere. The finished images 
              should display a foggy and misty appearance, one that shifts away from detail. The accomplished 
              painting should reflect my hazy emotion.”
              </p> 

              {/* List of Paintings [Computer] */} 

              <div className="the-paintings">
              <img src="./CP1.png" id="painting-ab"></img> 
              <img src="./CP2.jpeg" id="painting-ab"></img> 
              </div>

              <div className="the-words">
              <h5 id="caption-ab-1">Vernal Gardens</h5>
              <h5 id="caption-ab-2">Field of Gold</h5> 
              </div> 

              <div className="the-paintings">
              <img src="./CP3.png" id="painting-ab"></img> 
              <img src="./CP4.jpeg" id="painting-ab"></img> 
              </div>

              <div className="the-words">
              <h5 id="caption-ab-1">Shadow of Autumn</h5>
              <h5 id="caption-ab-2"></h5> 
              </div> 

              <div className="the-paintings">
              <img src="./CP5.jpeg" id="painting-ab"></img> 
              <img src="./CP6.jpeg" id="painting-ab"></img> 
              </div>

              <div className="the-words">
              <h5 id="caption-ab-1"></h5>
              <h5 id="caption-ab-2"></h5> 
              </div> 

              {/* List of Paintings [Phone] */} 

              <img src="./CP1.png" id="image-mobile"></img>
              <h5 id="caption-mobile">Vernal Gardens</h5> 

              <img src="./CP2.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile">Field of Gold</h5> 

              <img src="./CP3.png" id="image-mobile"></img> 
              <h5 id="caption-mobile">Shadow of Autumn</h5> 

              <img src="./CP4.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile"></h5> 

              <img src="./CP5.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile"></h5> 

              <img src="./CP6.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile"></h5> 

          </div> 
          </> 
    );
  }
  
  export default ChiuPai; 