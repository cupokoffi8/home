import React, { useState, useEffect } from 'react';
import { SliderData } from './SliderItems'; 
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'; 

const ImageSlider = ({ slides }) => { 

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

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <IoIosArrowBack className='left-arrow' onClick={prevSlide} />
      <IoIosArrowForward className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' /> 
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
