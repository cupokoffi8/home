import React from 'react'; 
import './Hours.css'; 

function HoursMandarin() {
    return (
        <div data-aos="fade-up" data-aos-duration="1100" id="hours-div"> 
          <div id="space" />
          <h6 data-aos="fade-up" data-aos-duration="1200" className="title">我们的每周营业时间</h6>
          <div data-aos="fade-up" data-aos-duration="1300" className="hours-container">
                <div className="days">
                  <h6 className="schedule">
                  2022 年 2 月 1 日至 2022 年 3 月 31 日期间，所有访问均需预约。
                    我们将在上午 9 点到晚上 8 点之间每周 7 天接受预约。
                  </h6> 
                  <hr 
                      width="50%"
                      align="center"
                    /> 
                  <h6 className="schedule">
                  如需安排，请致电 917-886-1701 或发送电子邮件至 jc@americandragonfineart.com
                  </h6> 
                </div>
              </div> 
            <div id="space" />
        </div>
    );
  }
  
  export default HoursMandarin;