import React from 'react'; 
import './Hours.css'; 

function Hours() {
    return (
        <div id="hours">
          <h3 className="title">Our Weekly Hours</h3> 
          <div id="space" />
            <p className="hours">Monday:  By Appointment Only</p>
            <p className="hours">Tuesday:  By Appointment Only</p>
            <p className="hours">Wednesday:  By Appointment Only</p>
            <p className="hours">Thursday:  Noon - 8:00 p.m.</p>
            <p className="hours">Friday:  Noon - 8:00 p.m.</p>
            <p className="hours">Saturday:  10:00 a.m. - 5:00 p.m.</p>
            <p className="hoursUH">Sunday:  Closed</p>
            <div id="space" />
        </div>
    );
  }
  
  export default Hours;