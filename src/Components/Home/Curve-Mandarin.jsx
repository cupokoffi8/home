import React from 'react'; 
import './Hours.css'; 
import './Home.css'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 
import Card from 'react-bootstrap/Card'; 
import { Link } from 'react-router-dom'; 
import stuff from './Images/Tchotchke.jpg'; 
import '../The-Gallery/Visit-Us/Visit-Us.css'; 
import StuffMandarin from './Stuff-Mandarin';

export default function CurveMandarin() {

    return (
      <div id="curve-div">
      <div id="space" />
      <div data-aos="fade-up" data-aos-duration="1000" className="card-row-here">
          <div className="the-good-card-pc">
            <Card className="the-card-good">
              <StuffMandarin />
              <Card.Img style={{marginLeft: "50px"}} src={stuff} variant="top" id="img-stuff"/>
            </Card> 

            
            </div> 

            {/* -------------------------------------------------------------------------------- */}
            <div className="our-favorite-card"> 
            <Card className="the-card-good">
              <Card.Img src={stuff} variant="top" id="image-thing-home-stuff"/>
            </Card> 

            <div className="the-good-card-mobile">
            <Card className="the-card-good">
              <StuffMandarin /> 
            </Card> 
            </div> 
            </div>  
          </div> 
  </div>
    )
}