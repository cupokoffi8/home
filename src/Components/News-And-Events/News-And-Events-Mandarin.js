import React from 'react'; 
import './News-And-Events.css'; 
import NavbarMandarin from '../Navbar-Mandarin/Navbar-Mandarin'; 
import '../Button.css'; 

function NewsMandarin() {
    return (
      <>
        <NavbarMandarin /> 
          <div className="News"> 

          <form method="get" action="#/news-and-events"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            <h1 className="exhibition">新闻和活动</h1> 
            <hr /> 

            <img id="image-thing-at" src="N1.jpeg" /> 
            <img id="image-thing-at" src="N2.jpeg" /> 
            <img id="image-thing-at" src="N3.jpeg" /> 
            <img id="image-thing-at" src="N4.jpeg" /> 

          </div>
        </> 
    );
  }
  
  export default NewsMandarin; 