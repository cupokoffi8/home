import React from 'react'; 
import './San-Diego.css'; 
import Navbar from '../../Navbar/Navbar'; 
import '../../Button.css'; 

function SanDiego() {
  window.scrollTo(0, 0);
    return (
      <>
        <Navbar /> 
          <div className="SanDiego"> 

          <form method="get" action="#/san-diego-mandarin">
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            <h1 className="exhibition">San Diego Contemporary Art Exhibition - 2019</h1> 
            <hr /> 

            <p id="art-paragraph-other">
            On the afternoon of October 10, 2019, the "San Diego Contemporary Art Exhibition" opened 
            in the beautiful coastal city of  San Diego, at the San Diego Convention Center.  
            Exhibitors at the Contemporary Art Fair include top galleries, art publishers and well-known 
            studio artists. 
            </p> 

            <p id="art-paragraph-other">
            Ms. Lena Liu,  Chairman of the Asian American Culture Media Group Inc, said:  “The music 
            and paintings of Chinese artist Qiu Zihao embodies the views of the audience”.  His artistic 
            creation pursues the combination of painting and music. Inspired by the works of Paul Klee 
            and Vasily Kandinsky, Qiu Zihao has explored the relationship between music and art. In the 
            course of his research, he has merged art and music with each other to create a new artistic 
            system that can identify and express the rhythm and melody of music through painting works. 
            Using this system, he has created many beautiful pictures, each of which contains a piece of 
            music. Through this combination of sight and hearing, he provides a new way for people to get 
            a more vivid perception and experience, while enjoying paintings and music melody at the same 
            time. 
            </p> 

            <img src="./SD1.jpeg" id="image-thing-sd" /> 

            <img src="./SD2.jpeg" id="image-thing-sd" /> 

            <img src="./SD3.jpeg" id="image-thing-sd" /> 

            <img src="./SD4.jpeg" id="image-thing-sd" /> 
          </div>
        </> 
    );
  }
  
  export default SanDiego; 