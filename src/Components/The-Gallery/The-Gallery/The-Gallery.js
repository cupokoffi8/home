import React, { useEffect } from 'react'; 
import './The-Gallery.css'; 
import Navbar from '../../Navbar/Navbar'; 
import ImageSlider from '../LancasterSlider'; 
import '../../Button.css'; 
import { SliderData } from '../SliderItems';

function TheGallery() { 
  window.scrollTo(0, 0); 
  function preloader() {
    if (document.images) {
      var img1 = new Image();
      var img2 = new Image();
      var img3 = new Image(); 
      var img4 = new Image(); 
      var img5 = new Image(); 
      var img6 = new Image(); 
  
      img1.src = "./TGNew2.jpeg";
      img2.src = "./LG.png";
      img3.src = "./LG2.jpeg"; 
      img4.src = "./LG3.jpeg"; 
      img5.src = "./LG4.jpeg"; 
      img6.src = "./LG5.png"; 
    }
  }
  function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
      window.onload = func;
    } else {
      window.onload = function() {
        if (oldonload) {
          oldonload();
        }
        func();
      }
    }
  }
  addLoadEvent(preloader);
    return (
      <>
        <Navbar /> 
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

            <img id="image-thing-at" src="TG2.png" /> 
            <h5 id="caption">
              New York City, New York  
            </h5>

            <img id="image-thing-at" src="TG3.png" /> 
            <h5 id="caption">
              New York City, New York  
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