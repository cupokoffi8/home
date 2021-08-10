import React from "react";
import "./Home.css"; 
import Map from "../Map/Map";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
      <>
      <div id="top">
        <h1 className="magAndMyst">"Magnificent And Mysterious"</h1>
        <h1 clessName="currentExhibition" id="please">Art Exhibition</h1>
        <h1 className='welcome' id="uh">Welcome To</h1>
        <h1 className='american'>American Dragon International Fine Art Gallery</h1>

        <div id="info">
          <a id="addy" href="https://www.google.com/maps/place/American+Dragon+International+Fine+Art+Gallery/@40.0483338,-76.3059007,15z/data=!4m5!3m4!1s0x0:0x4c549ed6537c2a4!8m2!3d40.0483496!4d-76.3057639">
            614 N. Duke Street, Suite One, Lancaster, PA 17602
            </a>

            <a id="addy">
                   917-886-1701      
            </a>

            <a id="addy"> 
              info@americandragonfineart.com
            </a>
          </div>
        </div>

        <div id="blue-up"/>
        
          <div id="blue">
            <h3 className="title">Our Weekly Hours</h3> 
            <p className="hours">Monday:  By Appointment Only</p>
            <p className="hours">Tuesday:  By Appointment Only</p>
            <p className="hours">Wednesday:  By Appointment Only</p>
            <p className="hours">Thursday:  Noon - 8:00 p.m.</p>
            <p className="hours">Friday:  Noon - 8:00 p.m.</p>
            <p className="hours">Saturday:  10:00 a.m. - 5:00 p.m.</p>
            <p className="hoursUH">Sunday:  Closed</p>
          </div>

        <div id="blue-down"/>

        <div>
          {/* Add image here */} 
        </div>
        
      </>
    );
  }