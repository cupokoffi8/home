import React from 'react'; 
import '../Apelles-Zhou/Apelles-Zhou.css'; 
import '../Aparna-Banerjee/Aparna-Banerjee.css'; 
import Navbar from '../../Navbar/Navbar'; 
import '../../Button.css'; 

function CharlesHaber() { 

  window.scrollTo(0, 0)

    return (
      <>
        <Navbar /> 
          <div className="artist-section"> 

          <form method="get" action="#/charles-haber-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            {/* Artist Name */} 

            <h1 className="artist">Charles Haber</h1>
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            Charles Haber is an American artist of the 20th century.  He was born in New York and served 
            in the United State Air Force.  He worked for many years as a commercial artist in advertising 
            agencies and corporate America.   His work shows the key elements of the New York experience, 
            including various forms of surrealism, abstract expressionism, and figurative works. Haber's 
            later works explored the social issues of the time, drawn in a lively and bold style reflecting 
            the modernist works from the Barnes Collection. For more exciting content, please see his amazing 
            original works in our gallery. 
              </p> 

              {/* List of Paintings [Computer] */} 

              <div className="the-paintings">
              <img src="./COMING-STORM.jpeg" id="painting-ab"></img> 
              <img src="./ENCORE.jpeg" id="painting-ab"></img> 
              </div>

              <div className="the-words">
              <h5 id="caption-ab-1">Coming Storm</h5>
              <h5 id="caption-ab-2">Encore</h5> 
              </div> 

              <div className="the-paintings">
              <img src="./HE-SHOOTS.jpeg" id="painting-ab"></img> 
              <img src="./JUMP-BALL.jpeg" id="painting-ab"></img> 
              </div>

              <div className="the-words">
              <h5 id="caption-ab-1">He Shoots</h5>
              <h5 id="caption-ab-2">Jump Ball</h5> 
              </div> 

              <div className="the-paintings">
              <img src="./KANDINSKY-INSPIRATION.jpeg" id="painting-ab"></img> 
              <img src="./MOTHER-AND-CHILD.jpeg" id="painting-ab"></img> 
              </div>

              <div className="the-words">
              <h5 id="caption-ab-1">Kandinsky Inspiration</h5>
              <h5 id="caption-ab-2">Mother and Child</h5> 
              </div> 

              <div className="the-paintings">
              <img src="./NAKED-LADIES.jpeg" id="painting-ab"></img> 
              <img src="./NATURE.jpeg" id="painting-ab"></img> 
              </div>

              <div className="the-words">
              <h5 id="caption-ab-1">Naked Ladies</h5> 
              <h5 id="caption-ab-2">Nature</h5> 
              </div> 

              <div className="the-paintings">
              <img src="./PLAY-IT-AGAIN.jpeg" id="painting-ab"></img> 
              <img src="./THE-THIRD-EYE.jpeg" id="painting-ab"></img> 
              </div>

              <div className="the-words">
              <h5 id="caption-ab-1">Play it Again</h5> 
              <h5 id="caption-ab-2">The Third Eye</h5> 
              </div> 

              {/* List of Paintings [Phone] */} 

              <img src="./COMING-STORM.jpeg" id="image-mobile"></img>
              <h5 id="caption-mobile">Coming Storm</h5> 

              <img src="./ENCORE.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile">Encore</h5> 

              <img src="./HE-SHOOTS.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile">He Shoots</h5> 

              <img src="./JUMP-BALL.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile">Jump Ball</h5> 

              <img src="./KANDINSKY-INSPIRATION.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile">Kadinsky Inspiration</h5> 

              <img src="./MOTHER-AND-CHILD.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile">Mother and Child</h5> 

              <img src="./NAKED-LADIES.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile">Naked Ladies</h5> 

              <img src="./NATURE.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile">Nature</h5> 

              <img src="./PLAY-IT-AGAIN.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile">Play it Again</h5> 

              <img src="./THE-THIRD-EYE.jpeg" id="image-mobile"></img> 
              <h5 id="caption-mobile">The Third Eye</h5> 

              <img src="./WINTER-LADY.jpeg" id="painting-wide"></img> 
              <h5 id="caption">Winter Lady</h5> 

          </div> 
          </> 
    );
  }
  
  export default CharlesHaber;