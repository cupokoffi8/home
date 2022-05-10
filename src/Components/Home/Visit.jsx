import React from 'react'; 
import './Hours.css'; 
import './Home.css'; 
import 'aos/dist/aos.css'; 
import '../The-Gallery/Visit-Us/Visit-Us.css'; 

function Visit() {

    return (
        <div id="visit"> 
          <h1 className="sub">Visit Us</h1> 
          <h3 className="head">Our gallery will be open the following dates in May:</h3> 
          <div className="the-hours-container"> 
                <div className="days">
                  <h6 className="days-header">
                  Saturday, May 14th: <br /> 
                  Saturday, May 21st: <br />
                  Sunday, May 22nd: 
                  </h6> 
                </div>
                <div className="the-hours">
                  <h6 className="hours-header">
                  10:00 a.m. - 5:00 p.m.<br /> 
                  10:00 a.m. - 5:00 p.m.<br /> 
                  Noon - 4:00 p.m. 
                  </h6>
                </div>
              </div>
          <p className="paragraph">
              We will accept appointments to visit our gallery every day that is not on 
              the above schedule, from 10:00 a.m. until 8:00 p.m. Sunday through Saturday. 
            </p> 
        </div>
    );
  }
  
  export default Visit;