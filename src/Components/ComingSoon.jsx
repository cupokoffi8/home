import React from 'react'; 
import '../Components/Home/Home.css'; 
import Navbar from '../Components/Navbar/Navbar';  
import './Button.css'; 

function ComingSoon() {
    return (
      <>
         
          <div className="ComingSoon">
          <form method="get" action="#/coming-soon-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 
            <h1 className="celebrate">Online Shop Coming Soon</h1> 
          </div> 
        </> 
    );
  }
  
  export default ComingSoon; 