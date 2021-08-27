import React from 'react'; 
import './News-And-Events.css'; 
import Navbar from '../Navbar/Navbar'; 

function News() {
    return (
      <>
        <Navbar /> 
          <div className="News">
            <h1 className="exhibition">News And Events</h1> 
            <hr /> 

            <img id="image-thing-at" src="N1.jpeg" /> 
            <img id="image-thing-at" src="N2.jpeg" /> 
            <img id="image-thing-at" src="N3.jpeg" /> 
            <img id="image-thing-at" src="N4.jpeg" /> 

          </div>
        </> 
    );
  }
  
  export default News;