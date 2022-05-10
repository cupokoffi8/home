import React from 'react'; 
import './Hours.css'; 
import './Home.css'; 
import 'aos/dist/aos.css'; 
import '../The-Gallery/Visit-Us/Visit-Us.css'; 

function VisitMandarin() {

    return (
        <div id="visit"> 
          <h1 className="sub">探望我们</h1> 
          <h3 className="paragraph">我们将接受预约，每天上午 10:00 至晚上 8:00 不按以下时间表参观我们的画廊。周日至周六。</h3> 
          <div className="the-hours-container"> 
                <h3 className="a-head">2022 年 5 月开放时间</h3>
                <div className="days">
                  <h2 className="days-header">
                  5 月 14 日星期六：<br />
                  5 月 21 日星期六：<br />
                  5月22日星期日：
                  </h2> 
                </div>
                <div className="the-hours">
                  <h2 className="hours-header">
                  上午 10:00 - 下午 5:00<br />
                  上午 10:00 - 下午 5:00<br />
                  中午 - 下午 4:00
                  </h2>
                </div>
              </div>
        </div>
    );
  }
  
  export default VisitMandarin; 