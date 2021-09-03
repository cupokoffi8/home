import React from 'react'; 
import '../Zen-Frescos/Zen-Frescos.css'
import Navbar from '../../Navbar/Navbar'; 
import '../../Button.css'; 

function JillSlaymaker() {

  window.scrollTo(0, 0)

    return (
      <>
        <Navbar />
          <div className="artist-section"> 

          <form method="get" action="#/jill-slaymaker-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            {/* Artist Name */} 

            <h1 className="artist">Jill Slaymaker</h1> 
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            Jill is currently residing in New York City, and received an MFA in Painting from Texas A&M.
            Her work has been exhibited nationally and internationally, including MOMA in New York CIty.
            Jill's artworks are in the collections of the Whitney Museum of American Art in NYC, MOMA,
            and the Caroline Kennedy Ambassador Residence in Tokyo, Japan. 
            </p> 

              <img src="./JS2.jpg" id="painting-zf"></img>
              <h5 id="caption">Not Quite What I Was Expecting</h5>
              <h5 id="caption">29.5" x 26"</h5> 
              <h5 id="caption">Acrylic</h5> 
              <h5 id="caption">$1,200</h5>

              <img src="./JS3.jpg" id="painting-zf"></img>
              <h5 id="caption">Toscana Spiritos</h5> 
              <h5 id="caption">26" x 34"</h5> 
              <h5 id="caption">Oil and Acrylic on Paper</h5>
              <h5 id="caption">$1,800</h5> 

              <img src="./JS4.jpg" id="painting-zf"></img>
              <h5 id="caption">When I'm Through with This World, I'll Remember You</h5>
              <h5 id="caption">13.5" x 10.5"</h5>
              <h5 id="caption">Ink, Color Pencil, White Charcoal on Paper</h5> 
              <h5 id="caption">$500</h5> 

              <img src="./JS5.jpg" id="painting-zf"></img>
              <h5 id="caption">My Greedy Eyes Still Wandered</h5>
              <h5 id="caption">10" x 7"</h5>
              <h5 id="caption">Oil on Paper</h5> 
              <h5 id="caption">$500</h5> 

              <img src="./JS6.jpg" id="painting-zf"></img>
              <h5 id="caption">Untitled</h5>
              <h5 id="caption">26" x 34"</h5>
              <h5 id="caption">Blue, Oil, Acrylic, Watercolor, White Charcoal on Paper</h5> 
              <h5 id="caption">$1,600</h5> 

              <img src="./JS7.jpg" id="painting-zf"></img>
              <h5 id="caption">Enter the New World</h5>
              <h5 id="caption">12" x 9"</h5>
              <h5 id="caption">Acrylic, Ink on Paper</h5> 
              <h5 id="caption">$500</h5> 

              <img src="./JS8.jpg" id="painting-zf"></img>
              <h5 id="caption">Adventures of an Orange</h5>
              <h5 id="caption">34" x 26"</h5>
              <h5 id="caption">Gouache on Paper</h5> 
              <h5 id="caption">$1,600</h5> 

              <img src="./JS1.jpg" id="painting-zf"></img>
              <h5 id="caption">Size Reference</h5> 

            </div>
        </> 
    );
  }
  
  export default JillSlaymaker;