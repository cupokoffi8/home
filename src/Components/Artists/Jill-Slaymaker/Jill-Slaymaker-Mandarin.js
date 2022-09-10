import React from 'react'; 
import '../Zen-Frescos/Zen-Frescos.css'
import NavbarMandarin from '../../Navbar-Mandarin/Navbar-Mandarin'; 
import '../../Button.css'; 

function JillSlaymakerMandarin() {

  window.scrollTo(0, 0)

    return (
      <>
          
          <div className="artist-section"> 

          <form method="get" action="#/jill-slaymaker"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            {/* Artist Name */} 

            <h1 className="artist">吉尔·斯莱梅克</h1> 
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            Jill 目前居住在纽约市，并获得了德克萨斯 A&M 的绘画硕士学位。
            她的作品曾在国内外展出，包括纽约市的现代艺术博物馆。
            吉尔的作品被纽约惠特尼美国艺术博物馆、现代艺术博物馆、
            以及位于日本东京的卡罗琳肯尼迪大使官邸。
            </p> 

            <img src="./JS8.jpg" id="painting-zf"></img>
              <h5 id="caption">Toscana Spiritos</h5> 
              <h5 id="caption">26" x 34" [Framed]</h5> 
              <h5 id="caption">Oil and Acrylic on Paper</h5>
              <h5 id="caption">$1,800</h5> 

              <img src="./JS4.jpg" id="painting-zf"></img>
              <h5 id="caption">When I'm Through with This World, I'll Remember You</h5>
              <h5 id="caption">10" x 13" [Framed]</h5>
              <h5 id="caption">Ink, Gouache, Color Pencil, White Charcoal on Paper</h5> 
              <h5 id="caption">$500</h5> 

              <img src="./JS5.jpg" id="painting-zf"></img>
              <h5 id="caption">My Greedy Eyes Still Wandered</h5>
              <h5 id="caption">10" x 13" [Framed]</h5>
              <h5 id="caption">Oil, India Ink on Paper</h5> 
              <h5 id="caption">$500</h5> 

              <img src="./JS6.jpg" id="painting-zf"></img>
              <h5 id="caption">Blue</h5>
              <h5 id="caption">34" x 26" [Framed]</h5>
              <h5 id="caption">Gouache, Oil, Acrylic, Watercolor, White Charcoal on Paper</h5> 
              <h5 id="caption">$1,600</h5> 

              <img src="./JS7.jpg" id="painting-zf"></img>
              <h5 id="caption">Enter the New World</h5>
              <h5 id="caption">10" x 13" [Framed]</h5>
              <h5 id="caption">Gouache, Acrylic, Ink, Color Pencil on Paper</h5> 
              <h5 id="caption">$500</h5> 

              <img src="./JS3.jpg" id="painting-zf"></img>
              <h5 id="caption">Adventures of an Orange</h5> 
              <h5 id="caption">34" x 26" [Framed]</h5>
              <h5 id="caption">Gouache on Paper</h5> 
              <h5 id="caption">$1,600</h5> 

            </div>
        </> 
    );
  }
  
  export default JillSlaymakerMandarin; 