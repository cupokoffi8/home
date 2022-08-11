import React from 'react'; 
import './Hours.css'; 
import './Home.css'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 
import Card from 'react-bootstrap/Card'; 
import visit from '../Artists/Zhengui-Lan/Images/13W.jpg'; 
import '../The-Gallery/Visit-Us/Visit-Us.css'; 
import VisitMandarin from './Visit-Mandarin'; 

function HoursMandarin() {

  Aos.init({}); 

    return (
      <div id="hours-div"> 
      <div id="space" /> 
      <br /> 
      <div data-aos="fade-down" data-aos-duration="1000" className="card-row-here">
        <div className="the-good-card-pc">
          <Card className="the-card-good">
            <Card.Img src={visit} variant="top" id="house"/>
            <VisitMandarin />
          </Card> 
          </div> 

          <div className="our-favorite-card"> 
          <Card className="the-card-good">
            <Card.Img src={visit} variant="top" id="image-thing-home"/>
          </Card> 

          <div className="the-good-card-mobile">
                <Card className="the-card-good">
                  <VisitMandarin /> 
                </Card> 
              </div> 
            </div>  
        </div> 
    </div>
    );
  }
  
  export default HoursMandarin;