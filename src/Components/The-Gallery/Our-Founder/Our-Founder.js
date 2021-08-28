import React from 'react'; 
import '../../Exhibitions/Art-Therapy/Art-Therapy.css'; 
import Navbar from '../../Navbar/Navbar'; 
import '../../Button.css'; 

function OurFounder() {
    return (
      <>
        <Navbar /> 
          <div className="Our-Founder"> 

          <form method="get" action="/home/#/our-founder-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            <h1 className="exhibition">American Dragon Fine Art and AACMG</h1> 
            <hr /> 

            <h5 id="caption">
              Our Founder 
            </h5> 

            <p id="art-paragraph-other">
            Lena Liu is from Beijing, China, but is currently sharing her time in New York City, Philadelphia, 
            Los Angeles, Maryland, and Lancaster, Pennsylvania. She has engaged in cultural and artistic work 
            for more than twenty years. Her client base includes many famous artists from around the world, 
            including such countries as China, Japan, Korea, Russia, India, the United States, and Canada. The 
            clients rely on her expertise in the areas of exhibitions, media promotion of their artwork, and art 
            auctions. 
            </p>

            <p id="art-paragraph-other">
            The management of art shows with museums, art galleries, Art Universities, and private collectors are 
            just a few of the areas of expertise associated with Lena’s background. She maintains the ability to 
            show the artists creative talents all over China, including Beijing and many other cities within China. 
            In addition, New York City, Philadelphia, and Los Angeles are cities in which she can offer the ability 
            to exhibit the artist’s creative talents. 
            </p>

            <p id="art-paragraph-other">
            The exhibitions are tailor made for each artist. The artist’s art standards, choice of gallery location, 
            and media presentation are just a few of the areas associated with the sales plan that is presented to 
            each artist. Lena’s resources around the world give the artist the ability to establish many new connections 
            within the international art community. 
            </p> 

            <img id="image-thing-at" src="Uh.png" /> 

          </div>
        </>
    );
  }
  
  export default OurFounder; 