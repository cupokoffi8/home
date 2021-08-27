import React from 'react'; 
import './Mag-And-Myst.css'; 
import Navbar from '../../Navbar/Navbar'; 
import '../../Button.css'; 

function MagAndMyst() {
  window.scrollTo(0, 0);
    return (
      <>
        <Navbar /> 
          <div className="Mag-And-Myst"> 

          <form method="get" action="/home/#/mag-and-myst-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            <h1 className="exhibition">Magnificent and Mysterious Art Exhibition</h1> 
            <hr /> 

            <img src="./1.jpeg" id="image-thing" /> 

            <br /> 

            <p id="paragraph" >
            On July 24th of 2021, American Dragon International Fine Art Gallery held the opening reception of the 
            "Magnificent and Mysterious” art exhibition. 
            </p> 

            <img src="./2.jpeg" id="image-thing" /> 

            <img src="./3.jpeg" id="image-thing" /> 

            <br /> 

            <p id="paragraph" >
            Senior international curator Lena Liu introduced 87 works of art for the exhibition. The art is from various 
            painters from China, the United States, India, and Canada. Among them, the landscape paintings of the Chinese 
            painter Duan Zhenzhong are the featured works. Mr.Duan's works have repeatedly won positive results in Sotheby's 
            auctions.This exhibition reproduces the oriental ink charm, highlighting the beauty of China's Jiangnan water 
            villages, and the gorgeous and ancient buildings and streetscapes in the West. The buildings in the landscape 
            paintings record the history and culture of different countries, and also demonstrate the beauty of that era. 
            </p> 

            <img src="./6.jpeg" id="image-thing" /> 

            <br /> 

            <p id="paragraph" >
            The opening reception began with guitar and vocal talents performed by American artist Jeff Moore.
            </p> 

            <p id="paragraph" >
            The soothing music, artworks full of "gorgeous and mysterious" colors, fine wines, and rich Chinese food, 
            created a wonderful atmosphere.The guests also expressed great interest in the gallery works. 
            </p> 

            <img src="./4.jpeg" id="image-thing" /> 

            <img src="./5.jpeg" id="image-thing" /> 

            <br /> 

            <p id="paragraph" >
            The exhibition is co-sponsored by Asian American Culture Media Group and American Dragon International 
            Fine Art Gallery. The current exhibition will end on August 23. 
            </p> 

          </div>
        </> 
    );
  }
  
  export default MagAndMyst;