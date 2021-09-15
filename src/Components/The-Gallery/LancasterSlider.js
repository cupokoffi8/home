import React, { useState, useEffect } from 'react';
import { SliderData } from './SliderItems'; 
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'; 

const preloadImage = url => (document.createElement('img').src = url)
const preloadOne = () => preloadImage('./TGNew2.jpeg')
const preloadTwo = () => preloadImage('./LG.png') 
const preloadThree = () => preloadImage('./LG2.jpeg') 
const preloadFour = () => preloadImage('./LG3.jpeg') 
const preloadFive = () => preloadImage('./LG4.jpeg') 
const preloadSix = () => preloadImage('./LG5.png') 

const ImageSlider = ({ slides }) => { 

  const [showImages, setShowImages] = React.useState(false) 

  setTimeout(function(){ 
    setShowImages(true)
    preloadImage('./TGNew2.jpeg')
    preloadImage('./LG.png') 
    preloadImage('./LG2.jpeg') 
    preloadImage('./LG3.jpeg') 
    preloadImage('./LG4.jpeg') 
    preloadImage('./LG5.png') 
    ; }, 500);

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
