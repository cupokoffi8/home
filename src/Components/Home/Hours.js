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
                  <h6 className="schedule">All visits are by Appointment Only from February 1st, 2022 until March 31st, 2022.  
                    We will be accepting appointments 7 days a week between 9 a.m. and 8 p.m. </h6>
                    <hr 
                      width="50%"
                      align="center"
                    /> 
                  <h6 className="schedule">To schedule, call 917-886-1701 or email jc@americandragonfineart.com</h6> 
                </div>
              </div>
            <div id="space" />
        </div>
    );
  }
  
  export default Hours;