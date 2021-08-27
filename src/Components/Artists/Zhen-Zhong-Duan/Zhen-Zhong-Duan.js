import React from 'react'; 
import './Zhen-Zhong-Duan.css'; 
import Navbar from '../../Navbar/Navbar'; 
import '../../Button.css'; 

function ZhenZhongDuan() { 

  window.scrollTo(0, 0)

    return (
      <>
        <Navbar />
          <div className="artist-section"> 

          <form method="get" action="/home/#/zhen-zhong-duan-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            {/* Artist Name */} 

            <h1 className="artist">Zhen-Zhong Duan</h1> 
            <hr /> 

            {/* Artist Summary */}

            <p id="art-paragraph">
            Zhen-Zhong Duan was born in Anhui, China in 1944.  In 1969, he graduated from the Central Academy 
            of Arts and Design, where he majored in Decorative Arts and Architecture.  From 1969 until 1973 
            he worked as an Art Designer for the Song and Dance Ensemble Central Troup. He then took a position 
            at the Beijing Film Studio, where he became their Senior Art Designer.  His set designs have appeared 
            in over 20 major film and television productions, and he has received many special honors and awards 
            for his contributions to the Chinese Moving Picture Industry. 
              </p> 

              <p id="art-paragraph-other">
              In 1989 he was awarded the “Golden Rooster”, which is equivalent to the American Academy Award, for 
              his set design for the movie “Waiting for Daybreak”.  Mr. Duan also collaborated with Ann Hu, a world 
              renowned director, on the internationally acclaimed film “Dream and Memory”. 
              </p> 

              <p id="art-paragraph-other">
              Mr. Duan is an accomplished watercolor and oil landscape painter.  His work has been exhibited internationally, 
              in Beijing, Hong Kong, Europe, and the United States.  He is member of the Oil Painters of America, and his oil 
              paintings have been displayed and sold by Sotheby’s. 
              </p> 

              {/* List of Paintings */} 

              <img src="./ZZD1.jpeg" id="painting-zzd"></img>
              {/* <h5 id="caption">Beauty 1</h5>  */}

              <img src="./ZZD2.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD3.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD4.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD5.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD6.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD7.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD8.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD9.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD10.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD11.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD12.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD13.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD14.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */}

              <img src="./ZZD15.jpeg" id="painting-zzd"></img> 
              {/* <h5 id="caption">Beauty 2</h5>  */} 

          </div>
          </>
    );
  }
  
  export default ZhenZhongDuan;