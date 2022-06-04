import React from 'react'; 
import './Hours.css'; 
import './Home.css'; 
import 'aos/dist/aos.css'; 
import '../The-Gallery/Visit-Us/Visit-Us.css'; 

function Visit() {

    return (
        <div id="visit"> 
          <h1 className="sub">Visit Us</h1> 
          <h3 className="paragraph">We will accept <a id="apt" href="https://www.facebook.com/americandragonart/services/">appointments</a> to visit our gallery every day that is not on 
              the schedule below, from 10:00 a.m. until 8:00 p.m. Sunday through Saturday. </h3> 
          <div className="the-hours-container"> 
                <h3 className="a-head">Upcoming Open Hours</h3>
                <div className="days">
                  <h2 className="days-header">
                  Saturday, June 4th: <br />
                  </h2> 
                </div>
                <div className="the-hours">
                  <h2 className="hours-header">
                  Noon - 4:00 p.m.<br /> 
                  </h2>
                </div>
              </div>
        </div>
    );
  }
  
  export default Visit;