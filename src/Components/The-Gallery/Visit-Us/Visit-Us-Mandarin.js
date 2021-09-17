import React from 'react'; 
import './Visit-Us.css'; 
import Navbar from '../../Navbar/Navbar'; 
import Card from 'react-bootstrap/Card'; 
import { Link } from 'react-router-dom'; 
import '../../Button.css'; 

function VisitUsMandarin() {
    return (
      <>
        <Navbar /> 
          <div className="Visit-Us"> 

          <form method="get" action="#/about-us"> 
            <button id="the-button" type='btn'>English</button> 
          </form> 

            <h1 className="the-gallery">关于我们</h1> 
            <hr /> 

            <div className="card-row">
            <div data-aos="fade-up" data-aos-duration="900" className="the-gallery-card">
            <Link data-aos="fade-up" data-aos-duration="900" id="link" to={`/the-gallery-mandarin`}>
              <Card className="the-card">
                <Card.Img src="./photo-frame.png" variant="top" id="image-thing-vu"/>
              </Card>
              <Card.Title className="cardTitle">画廊</Card.Title> 
              </Link>
              </div> 
 
              <div data-aos="fade-up" data-aos-duration="1000" className="our-founder-card"> 
              <Link id="link" to={`/our-founder-mandarin`}>
              <Card className="the-card">
                <Card.Img src="./ceo.png" variant="top" id="image-thing-vu-2"/>
              </Card>
              <Card.Title className="cardTitle">我們的創始人</Card.Title> 
              </Link> 
              </div> 
            </div> 
          </div> 
        </> 
    );
  }
  
  export default VisitUsMandarin; 