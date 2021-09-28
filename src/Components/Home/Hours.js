import React from 'react'; 
import './Hours.css'; 
import './Home.css'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 

function Hours() {

  Aos.init({}); 

    return (
        <div data-aos="fade-up" data-aos-duration="900" id="hours-div"> 
          <div id="space" />
          <h6 data-aos="fade-up" data-aos-duration="1000" className="title">Our Weekly Hours</h6> 
              <div data-aos="fade-up" data-aos-duration="1300" className="hours-container"> 
                <div className="days">
                  <h6 className="days-header">
                  Monday: <br /> 
                  Tuesday: <br />
                  Wednesday: <br />
                  Thursday:  <br />
                  Friday: <br /> 
                  Saturday: <br />
                  Sunday:
                  </h6> 
                </div>
                <div className="the-hours">
                  <h6 className="hours-header">
                  By Appointment Only<br />
                  By Appointment Only<br />
                  By Appointment Only<br /> 
                  Noon - 7:00 p.m.<br />
                  Noon - 7:00 p.m.<br /> 
                  10:00 a.m. - 5:00 p.m.<br /> 
                  Closed 
                  </h6>
                </div>
              </div>
            <div id="space" />
        </div>
    );
  }
  
  export default Hours;