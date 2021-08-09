import React from "react";
import "./Home.css"; 
import Map from "../Map/Map";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

export default function Home() {
    return (
      <>
        <h1 className="magAndMyst">"Magnificent And Mysterious"</h1>
        <h1 clessName="currentExhibition" id="please">Art Exhibition</h1>
        <h1 className='welcome' id="uh">Welcome To</h1>
        <h1 className='american'>American Dragon International Fine Art Gallery</h1>

        <div id="info"> 
            <FontAwesomeIcon icon={faCoffee} />
          <div id="theDiv">
          <a id="addy" href="https://www.google.com/maps/place/American+Dragon+International+Fine+Art+Gallery/@40.0483338,-76.3059007,15z/data=!4m5!3m4!1s0x0:0x4c549ed6537c2a4!8m2!3d40.0483496!4d-76.3057639">
            614 N. Duke Street, Suite One, Lancaster, PA 17602
            </a>
            </div>
            <div id="theDiv">
              <FontAwesomeIcon icon={faCoffee} />
            <a id="addy">
                   917-886-1701      
            </a>
            </div>
            <div id="theDiv">
              <FontAwesomeIcon icon={faCoffee} />
            <a id="addy"> 
              info@americandragonfineart.com
            </a>
            </div>
          </div>


        <Map /> 
      </>
    );
  }