import React from "react";
import "./Home.css"; 
import Map from "../Map/Map";

export default function Home() {
    return (
      <>
        <h1 className="magAndMyst">"Magnificent And Mysterious"</h1>
        <h1 clessName="currentExhibition" id="please">Art Exhibition</h1>
        <h1 className='welcome' id="uh">Welcome To</h1>
        <h1 className='american'>American Dragon International Fine Art Gallery</h1>

        <div className="reachOut">
          <link id="addy">614 N Duke Street, Lancaster, PA 17602</link>
          <p id="number">| 917-886-1701 |</p> 
          <link id="addy" href="info@americandragonfineart.com">info@americandragonfineart.com</link>
        </div>



        <Map /> 
      </>
    );
  }