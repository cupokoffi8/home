import React from 'react'; 
import './Hours.css'; 

function HoursMandarin() {
    return (
        <div data-aos="fade-up" data-aos-duration="1100" id="hours-div"> 
          <div id="space" />
          <h6 data-aos="fade-up" data-aos-duration="1200" className="title">我们的每周营业时间</h6>
          <div data-aos="fade-up" data-aos-duration="1300" className="hours-container">
                <div className="days">
                  <h6 className="days-header">
                  星期一：<br /> 
                  周二：<br />
                  周三：<br />
                  星期四：<br />
                  星期五：<br /> 
                  星期六：<br />
                  星期日：
                  </h6> 
                </div>
                <div className="the-hours">
                  <h6 className="hours-header">
                  仅限预约<br /> 
                  仅限预约<br />
                  仅限预约<br /> 
                  中午 - 晚上 7:00<br /> 
                  中午 - 晚上 7:00<br /> 
                  上午 10:00 - 下午 5:00<br /> 
                  休息 
                  </h6>
                </div>
              </div> 
            <div id="space" />
        </div>
    );
  }
  
  export default HoursMandarin;