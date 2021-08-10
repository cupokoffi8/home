import React from "react";
import "./Home.css"; 
import Map from "../Map/Map";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
      <>
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

        <hr /> 
          <div id="hours">
            <h3>Our Weekly Hours</h3> 
            <p>Monday:  By Appointment Only</p>
            <p>Tuesday:  By Appointment Only</p>
            <p>Wednesday:  By Appointment Only</p>
            <p>Thursday:  By Appointment Only</p>
            <p>Friday:  By Appointment Only</p>
            <p>Saturday:  By Appointment Only</p>
            <p>Sunday:  By Appointment Only</p>
          </div>
        <hr />
      </>
    );
  }