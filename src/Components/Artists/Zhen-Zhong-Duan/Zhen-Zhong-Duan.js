import React from 'react'; 
import './Zhen-Zhong-Duan.css'; 

function ZhenZhongDuan() {
    return (
          <div className="artist-section"> 

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

              <img src="./beauty_1.jpeg" id="painting"></img>
              <h5 id="caption">Beauty 1</h5> 

              <img src="./beauty_2.jpeg" id="painting"></img> 
              <h5 id="caption">Beauty 2</h5> 

          </div>
    );
  }
  
  export default ZhenZhongDuan;