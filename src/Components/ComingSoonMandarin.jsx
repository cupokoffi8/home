import React from 'react'; 
import '../Components/Home/Home.css'; 
import Navbar from '../Components/Navbar-Mandarin/Navbar-Mandarin'; 
import './Button.css'; 

function ComingSoonMandarin() {
    return (
      <>
         
          <div className="ComingSoon">
          <form method="get" action="#/coming-soon"> 
            <button id="the-button" type='btn'>English</button> 
          </form>  
            <h1 className="celebrate">网上商店即将推出</h1>
          </div> 
        </> 
    );
  }
  
  export default ComingSoonMandarin;