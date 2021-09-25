import React from 'react'; 
import './Hours.css'; 

function HoursMandarin() {
    return (
        <div data-aos="fade-up" data-aos-duration="1100" id="hours-div"> 
          <div id="space" />
          <h6 data-aos="fade-up" data-aos-duration="1200" className="title">我们的每周营业时间</h6>
          <div id="space-uh" />
          <h6 data-aos="fade-up" data-aos-duration="1300" className="hoursUH">
              星期一： 仅限预约<br /> 
              周二：  仅限预约<br />
              周三： 仅限预约<br />
              星期四： 中午 - 晚上 7:00<br />
              星期五： 中午 - 晚上 7:00<br /> 
              星期六： 上午 10:00 - 下午 5:00<br />
              星期日：  休息</h6> 
            <div id="space" />
        </div>
    );
  }
  
  export default HoursMandarin;