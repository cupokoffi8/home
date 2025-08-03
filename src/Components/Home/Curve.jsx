import React from 'react'; 
import './Hours.css'; 
import './Home.css'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 
import Card from 'react-bootstrap/Card'; 
import { Link } from 'react-router-dom'; 
import stuff from './Images/shop.png'; 
import '../The-Gallery/Visit-Us/Visit-Us.css'; 
import Stuff from './Stuff';

export default function Curve() {

    return (
      <>
        <div id="curve-div">

        <div data-aos="fade-up" data-aos-duration="1000" className="card-row-here">
            <div className="the-good-card-pc">
              <Card className="the-card-good">
                <Stuff />
                <Card.Img src={stuff} variant="top" id="img-stuff"/>
              </Card> 

              
              </div> 

              {/* -------------------------------------------------------------------------------- */}
              <div className="our-favorite-card"> 
              <Card className="the-card-good">
                <Card.Img src={stuff} variant="top" id="image-thing-home-stuff"/>
              </Card> 

              <div className="the-good-card-mobile">
              <Card className="the-card-good">
                <Stuff /> 
              </Card> 
              </div> 
              </div>  
            </div> 
        </div>
        <div style={{ position: "relative", transform: "translateY(-3px)" }}>
          <div className="custom-shape-divider-top-1680282774">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
          </div> 
        </div>
    </>
    )
}