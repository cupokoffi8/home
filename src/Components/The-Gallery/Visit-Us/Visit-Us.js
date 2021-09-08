import React from 'react'; 
import './Visit-Us.css'; 
import Navbar from '../../Navbar/Navbar'; 
import Card from 'react-bootstrap/Card'; 
import { Link } from 'react-router-dom'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 
import '../../Button.css'; 

function VisitUs() {
  Aos.init({}); 
    return (
      <>
        <Navbar /> 
          <div className="Visit-Us"> 

          <form method="get" action="#/about-us-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            <h1 className="the-gallery">About Us</h1> 
            <hr /> 

            <Link id="link" to={`/the-gallery`}>
              <Card data-aos="fade-up" data-aos-duration="900" className="the-card">
                <Card.Img src="./photo-frame.png" variant="top" id="image-thing-vu"/>
              </Card>
              <Card.Title data-aos="fade-up" data-aos-duration="900" className="cardTitle">The Gallery</Card.Title> 
              </Link>

              <Link id="link" to={`/our-founder`}>
              <Card data-aos="fade-up" data-aos-duration="1000" className="the-card">
                <Card.Img src="./ceo.png" variant="top" id="image-thing-vu-2"/>
              </Card>
              <Card.Title data-aos="fade-up" data-aos-duration="1000" className="cardTitle">Our Founder</Card.Title> 
              </Link>

          </div>
        </> 
    );
  }
  
  export default VisitUs;