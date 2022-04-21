import React from 'react'; 
import './Hours.css'; 
import './Home.css'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 
import Card from 'react-bootstrap/Card'; 
import { Link } from 'react-router-dom'; 
import artist from './Images/artist.png'; 
import visit from './Images/home.png'; 
import temp1 from './Images/temp1.png'; 
import temp2 from './Images/temp2.png'; 
import '../The-Gallery/Visit-Us/Visit-Us.css'; 

function Hours() {

  Aos.init({}); 

    return (
        <div id="hours-div"> 
          <div id="space" /> 
          <div className="card-row">
            <div data-aos="fade-up" data-aos-duration="900" className="the-good-card">
              <Card className="the-card">
                <Card.Img src={visit} variant="top" id="image-thing-home"/>
              </Card> 
              </div> 
 
              <div data-aos="fade-up" data-aos-duration="1000" className="our-favorite-card"> 
              <Card className="the-card">
                <Card.Img src={temp1} variant="top" id="image-thing-home-2"/>
              </Card>  
              </div> 
            </div> 
            <div className="card-row">
            <div data-aos="fade-up" data-aos-duration="900" className="the-good-card-pc">
              <Card className="the-card">
                <Card.Img src={temp2} variant="top" id="image-thing-home-2"/>
              </Card> 
              </div> 
 
              <div data-aos="fade-up" data-aos-duration="1000" className="our-favorite-card"> 
              <Card className="the-card">
                <Card.Img src={artist} variant="top" id="image-thing-home"/>
              </Card>  

              <div data-aos="fade-up" data-aos-duration="900" className="the-good-card-mobile">
              <Card className="the-card">
                <Card.Img src={temp2} variant="top" id="image-thing-home-2"/>
              </Card> 
              </div> 
              </div> 
            </div> 
        </div>
    );
  }
  
  export default Hours;