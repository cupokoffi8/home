import React from 'react'; 
import './Home-Gallery.css'; 
import Navbar from '../../Navbar/Navbar'; 

function HomeGallery() {
    return (
      <>
        <Navbar />
          <div className="Home-Gallery">
            <h1 className="welcome">Home</h1>
          </div>
        </> 
    );
  }
  
  export default HomeGallery;