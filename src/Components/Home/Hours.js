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
          <h3 data-aos="fade-up" data-aos-duration="1000" className="title">Our Weekly Hours</h3>
          <div id="space-uh" />
            <p data-aos="fade-up" data-aos-duration="1100" className="hours">Monday:  By Appointment Only</p>
            <p data-aos="fade-up" data-aos-duration="1100" className="hours">Tuesday:  By Appointment Only</p>
            <p data-aos="fade-up" data-aos-duration="1100" className="hours">Wednesday:  By Appointment Only</p>
            <p data-aos="fade-up" data-aos-duration="1100" className="hours">Thursday:  Noon - 8:00 p.m.</p>
            <p data-aos="fade-up" data-aos-duration="1100" className="hours">Friday:  Noon - 8:00 p.m.</p>
            <p data-aos="fade-up" data-aos-duration="1100" className="hours">Saturday:  10:00 a.m. - 5:00 p.m.</p>
            <p data-aos="fade-up" data-aos-duration="1100" className="hoursUH">Sunday:  Closed</p> 
            <div id="space" />
        </div>
    );
  }
  
  export default Hours;