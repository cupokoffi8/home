import React from 'react'; 
import './Hours.css'; 
import './Home.css'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 
import Card from 'react-bootstrap/Card'; 
import visit from './Images/home.png'; 
import '../The-Gallery/Visit-Us/Visit-Us.css'; 
import Visit from './Visit'; 

function Hours() {

  Aos.init({}); 

    return (
      
        <div id="hours-div"> 
        <div id="space" /> 
          <div data-aos="fade-down" data-aos-duration="1000" className="card-row-here">
            <div className="the-good-card-pc">
              <Card className="the-card-good">
                <Card.Img src={visit} variant="top" id="house"/>
                <Visit />
              </Card> 
              </div> 

              <div className="our-favorite-card"> 
              <Card className="the-card-good">
                <Card.Img src={visit} variant="top" id="image-thing-home"/>
              </Card> 

              <div className="the-good-card-mobile">
                  <Card className="the-card-good">
                    <Visit /> 
                  </Card> 
                </div> 
              </div>  
          </div> 
        </div>
             
    );
  }
  
  export default Hours;