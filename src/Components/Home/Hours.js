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
          <div id="space-uh" />
            <h6 data-aos="fade-up" data-aos-duration="1100" className="hours">
              Monday: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; By Appointment Only<br /> 
              Tuesday: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; By Appointment Only<br />
              Wednesday: &nbsp;&nbsp; By Appointment Only<br />
              Thursday:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Noon - 7:00 p.m.<br />
              Friday: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Noon - 7:00 p.m.<br /> 
              Saturday: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10:00 a.m. - 5:00 p.m.<br />
              Sunday: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Closed</h6> 
            <div id="space" />
        </div>
    );
  }
  
  export default Hours;