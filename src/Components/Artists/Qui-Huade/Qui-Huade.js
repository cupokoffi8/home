import React from 'react'; 
import './Qui-Huade.css'; 
import Navbar from '../../Navbar/Navbar'; 
import '../../Button.css'; 

function QuiHuade() {

  window.scrollTo(0, 0)

    return (
      <>
        <Navbar />
          <div className="artist-section"> 

          <form method="get" action="/home/#/qui-huade-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            {/* Artist Name */} 

            <h1 className="artist">Qui Huade</h1> 
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            Qui Huade exhibited his artistic talents at the age of six. 
            While studying for a double master’s and Doctoral Degree in 
            New York, he took painting classes at the Art Students League 
            in New York City.  He studied oil painting at the Art Students League. 
              </p> 

              <p id="art-paragraph-other">
              Inspired by the works of Paul Klee and Wassily Kandinsky, Qui 
              delved into the relationship between music and fine art.  This 
              journey has led him to synthesize fine art with music to create 
              an innovative system to create paintings recognizing rhythm and 
              melodies.  By combining the visual and the aural, he provides 
              a novel way to dynamically engage one’s senses in enjoying works 
              of paintings and melodies. 
              </p> 

              <p id="art-paragraph-other">
              During Qui Huade’s art exhibition at the Museo MiiT, Modern 
              Art Museum in Turin, Italy, the Italian Violinist Matteo Marra, 
              discussing the music melody contained in each of Qui Huade’s 
              paintings, with Mr. Vito Pittore, also a famous artist in Italy, 
              stated that Qui’s painting has opened an entirely new avenue of 
              viewing music through color.
              </p> 

              <p id="art-paragraph-other">
              Qui Huade has invited us into a world where we can now visualize 
              a colorful piece of music while listening to a painting.  It is 
              a world that enriches our perceptions and enlightens our souls. 
              His award- winning works have been shown at many exhibitions 
              throughout Asia, Europe, and the United States.
              </p> 

              <p id="art-paragraph-other">
              Currently, his work is on display at the Museo MiiT,  Museum 
              of Modern Art in Turin, Italy, and at the Saphira and Ventura 
              Gallery in New York City.  Upcoming exhibitions include the 
              Carrousel du Louvre in Paris, a solo show at the Saphira and 
              Ventura Gallery, and participation in an independent project 
              at the Miami Art Basel.
              </p> 

              <p id="art-paragraph-bottom">
              Qui Huade’s paintings and sculptures are in private collections throughout the world
              </p>

              <p id="art-paragraph-bottom-mobile">
              Qui Huade’s paintings and sculptures are in private collections throughout the world
              </p> 

              {/* List of Paintings */} 

              <img src="./H1.jpeg" id="painting"></img> 

              <img src="./H1!.jpeg" id="painting"></img> 

              <img src="./H2.png" id="painting"></img> 

              <img src="./H2!.png" id="painting"></img> 

              <img src="./H3.jpeg" id="painting"></img> 

              <img src="./H3!.jpeg" id="painting"></img> 

              <img src="./H4.jpeg" id="painting"></img> 

          </div> 
          </> 
    );
  }
  
  export default QuiHuade;