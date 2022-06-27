import React from 'react'; 
import './Mag-And-Myst.css'; 
import Navbar from '../../Navbar/Navbar'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 
import '../../Button.css'; 

function MagAndMyst() { 

  Aos.init({}); 
  window.scrollTo(0, 0);
    return (
      <>
        <Navbar /> 
          <div className="Mag-And-Myst"> 

          <form method="get" action="#/mag-and-myst-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            <h1 className="exhibition">Magnificent and Mysterious Art Exhibition</h1> 
            <hr /> 

            <div className="the-paintings">
              <img data-aos="fade-right" data-aos-duration="1000" src="./1.jpeg" id="painting-cp" /> 
              <img data-aos="fade-left" data-aos-duration="1000" src="./2.jpeg" id="painting-cp" /> 
              </div> 

              <img data-aos="fade-right" data-aos-duration="1000" src="./1.jpeg" id="image-mobile-cp" /> 
              <img data-aos="fade-left" data-aos-duration="1000" src="./2.jpeg" id="image-mobile-cp" /> 

            <br /> 
            <br /> 
            <br /> 

            <p 
            style={{
              fontSize: "26px", 
              textAlign: "center", 
              maxWidth: "80vw", 
              fontWeight: "bold", 
              display: "block", 
              marginLeft: "auto", 
              marginRight: "auto", 
              fontFamily: "'Roboto', Helvetica, Arial, sans-serif", 
              padding: "10px", 
              borderStyle: "solid", 
              borderWidth: "5px", 
              borderRadius: "10px" 
              }}>
            On July 24th of 2021, American Dragon International Fine Art Gallery held the opening reception of the 
            "Magnificent and Mysterious” art exhibition. 
            </p> 

            <div className="the-paintings">
              <img data-aos="fade-right" data-aos-duration="1000" src="./3.jpeg" id="painting-cp" /> 
              <img data-aos="fade-left" data-aos-duration="1000" src="./6.jpeg" id="painting-cp" /> 
              </div> 

              <img data-aos="fade-right" data-aos-duration="1000" src="./3.jpeg" id="image-mobile-cp" /> 
              <img data-aos="fade-left" data-aos-duration="1000" src="./6.jpeg" id="image-mobile-cp" /> 

            <br /> 
            <br /> 

            <p id="paragraph" >
            Senior international curator Lena Liu introduced 87 works of art for the exhibition. The art is from various 
            painters from China, the United States, India, and Canada. Among them, the landscape paintings of the Chinese 
            painter Duan Zhenzhong are the featured works. Mr.Duan's works have repeatedly won positive results in Sotheby's 
            auctions.This exhibition reproduces the oriental ink charm, highlighting the beauty of China's Jiangnan water 
            villages, and the gorgeous and ancient buildings and streetscapes in the West. The buildings in the landscape 
            paintings record the history and culture of different countries, and also demonstrate the beauty of that era. 
            </p> 

            <br /> 

            <p id="paragraph" >
            The opening reception began with guitar and vocal talents performed by American artist Jeff Moore. A combination 
            of soothing music, artworks full of "gorgeous and mysterious" colors, fine wines, and rich Chinese food, 
            created a wonderful atmosphere. The guests also expressed great interest in the gallery works. 
            </p> 

            <div className="the-paintings">
              <img data-aos="fade-right" data-aos-duration="1000" src="./4.jpeg" id="painting-cp" /> 
              <img data-aos="fade-left" data-aos-duration="1000" src="./5.jpeg" id="painting-cp" /> 
              </div> 

              <img data-aos="fade-right" data-aos-duration="1000" src="./4.jpeg" id="image-mobile-cp" /> 
              <img data-aos="fade-left" data-aos-duration="1000" src="./5.jpeg" id="image-mobile-cp" /> 

            <br /> 
            <br /> 

            <p id="paragraph" >
            The exhibition was co-sponsored by Asian American Culture Media Group and American Dragon International 
            Fine Art Gallery. 
            </p> 

          </div>
        </> 
    );
  }
  
  export default MagAndMyst;