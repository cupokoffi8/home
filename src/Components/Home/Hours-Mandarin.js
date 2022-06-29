import React from 'react'; 
import './Hours.css'; 
import './Home.css'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 
import Card from 'react-bootstrap/Card'; 
import { Link } from 'react-router-dom'; 
import artist from './Images/artist.png'; 
import visit from './Images/home.png'; 
import temp1 from './Images/temp4-aw.jpg'; 
import temp2 from './Images/temp4.png'; 
import '../The-Gallery/Visit-Us/Visit-Us.css'; 
import VisitMandarin from './Visit-Mandarin';
import ExploreMandarin from './ExploreMandarin';

function HoursMandarin() {

  Aos.init({}); 

    return (
      <div id="hours-div"> 
      <div id="space" /> 

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

        <div className="sep"/>

        <div data-aos="fade-up" data-aos-duration="1000" className="card-row-here">
        <div className="the-good-card-pc">
          <Card className="the-card-good">
            <ExploreMandarin />
            <Card.Img src={artist} variant="top" id="artist"/>
          </Card> 

          
          </div> 

          {/* -------------------------------------------------------------------------------- */}
          <div className="our-favorite-card"> 
          <Card className="the-card-good">
            <Card.Img src={artist} variant="top" id="image-thing-home"/>
          </Card> 

          <div className="the-good-card-mobile">
          <Card className="the-card-good">
            <ExploreMandarin /> 
          </Card> 
          </div> 
          </div>  
        </div> 
    </div>
    );
  }
  
  export default HoursMandarin;