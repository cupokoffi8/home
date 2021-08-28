import React from 'react'; 
import './Magnificent.css'; 
import Navbar from '../../Navbar/Navbar'; 
import '../../Button.css'; 

function Magnificent() {
  window.scrollTo(0, 0);
    return (
      <>
        <Navbar /> 
          <div className="Magnificent"> 

          <form method="get" action="#/magnificent-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            <h1 className="exhibition">Chinese Murals at the Tokyo Exhibition in Japan
              Reproduction of the Magnificent Murals of 600 Years Ago</h1> 
              <hr /> 

              <h5 id="caption">
              June 26 - July 3, 2016 
            </h5> 

            <img id="image-thing-m" src="M1.jpg" /> 

            <h1 id="big-name">
              Senior Curator: Lena Liu 
            </h1> 

            <h1 id="ndot"> 
              The Collection and Appreciation of Fahai Zen Monastery Frescoes 
            </h1> 

            <h6 id="caption-small">
              Opening at the club of CEO Masayoshi Son, a billionaire from the SoftBank Group in Tokyo, Japan (an investor in Alibaba)  
            </h6> 

            <p id="art-paragraph-other">
            The art exhibition in Japan was a great success. Japanese museums, art academies, and galleries rushed 
            to make an appointment for the next exhibition. The exhibition of Nagasaki, Japan’s Fahai Temple Mural, 
            will be opened in late July. The “ China Cultural Center “ exhibition in Tokyo, “ Exhibition of Beijing 
            Fahai Temple Murals”, was exhibited at the end of the year. 
            </p> 

            <img id="image-thing-m" src="M2.jpg" /> 

            <img id="image-thing-m" src="M3.jpg" /> 

            <br /> 

          </div>
        </>
    );
  }
  
  export default Magnificent;