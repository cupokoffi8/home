import React, { useEffect } from 'react'; 
import './The-Gallery.css'; 
import Navbar from '../../Navbar/Navbar'; 
import ImageSlider from '../LancasterSlider'; 
import '../../Button.css'; 
import { SliderData } from '../SliderItems';

function TheGallery() { 
  window.scrollTo(0, 0); 
    return (
      <>
          
          <div className="The-Gallery"> 

          <form method="get" action="#/the-gallery-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            <h1 className="the-gallery">The Gallery</h1> 
            <hr /> 

            <ImageSlider id="awesome" slides={SliderData} /> 
            <h5 id="caption">
              Lancaster, Pennsylvania 
            </h5> 

            <img id="image-thing-at" src="TG4.png" /> 
            <h5 id="caption">
              Hangzhou, China 
            </h5>

            <img id="image-thing-at" src="TG5.png" /> 
            <h5 id="caption">
              Beijing, China 
            </h5>

            <img id="image-thing-at" src="TG6.png" /> 
            <h5 id="caption">
              Japan 
            </h5>

            <img id="image-thing-at" src="TG7.jpeg" /> 
            <h5 id="caption">
              The Wall Street Art Space, New York, NY 
            </h5>

            <img id="image-thing-at" src="TG8.jpeg" /> 
            <h5 id="caption">
              The Wall Street Art Space, New York, NY 
            </h5> 

            <br /> 

            <p id="art-paragraph-other">
            American Dragon International Fine Art is a leading source for showcasing some of the most talented artists 
            from around the world. We help establish close cooperation opportunities between artists and some of the best 
            art galleries and auction venues globally, such as Sotheby's, Christie's, Basel Art Fair, and private collector 
            museums. Our professional knowledge will help showcase the artistic talent in both private and public venues 
            through exhibitions, seminars, agencies and auctions. The artist's high quality pieces are launched using the 
            resources we offer through our global partnership network. American Dragon adopts an open, inclusive and diverse 
            attitude that draws talented and creative artists from all walks of life. Please contact us to find out more 
            about our services. 
            </p>

          </div>
        </> 
    );
  }
  
  export default TheGallery;