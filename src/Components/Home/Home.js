import React from "react";
import "./Home.css"; 
import Map from "../Map/Map";

export default function Home() {
    return (
      <>
        <h1 className="magAndMyst">"Magnificent And Mysterious"</h1>
        <h1 clessName="currentExhibition">Art Exhibition</h1>
        <h1 className='welcome' id="uh">Welcome To</h1>
        <h1 className='american'>American Dragon International Fine Art Gallery</h1>
        <Map /> 
      </>
    );
  }