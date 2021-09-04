import React from 'react'; 
import './Hours.css'; 

function HoursMandarin() {
    return (
        <div data-aos="fade-up" data-aos-duration="900" id="hours-div"> 
          <div id="space" />
          <h3 data-aos="fade-up" data-aos-duration="1000" className="title">我们的每周营业时间</h3>
          <div id="space-uh" />
            <p data-aos="fade-up" data-aos-duration="1100" className="hours">星期一：仅限预约</p>
            <p data-aos="fade-up" data-aos-duration="1100" className="hours">周二：仅限预约</p>
            <p data-aos="fade-up" data-aos-duration="1100" className="hours">周三：仅限预约</p>
            <p data-aos="fade-up" data-aos-duration="1100" className="hours">星期四：中午 - 晚上 8:00</p> 
            <p data-aos="fade-up" data-aos-duration="1100" className="hours">星期五：中午 - 晚上 8:00</p> 
            <p data-aos="fade-up" data-aos-duration="1100" className="hours">星期六：上午 10:00 - 下午 5:00</p> 
            <p data-aos="fade-up" data-aos-duration="1100" className="hoursUH">星期日：休息</p> 
            <div id="space" />
        </div>
    );
  }
  
  export default HoursMandarin;