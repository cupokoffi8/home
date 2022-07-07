import React from 'react'; 
import './Hours.css'; 
import './Home.css'; 
import 'aos/dist/aos.css'; 
import '../The-Gallery/Visit-Us/Visit-Us.css'; 

function VisitMandarin() {

    return (
        <div id="visit"> 
          <h1 className="sub">探望我们</h1>   
          <h3 className="paragraph">我们将接 <a id="apt" href="https://www.facebook.com/americandragonart/services/">受预约</a>，每天上午 10:00 至晚上 8:00 不按以下时间表参观我们的画廊。周日至周六。</h3> 
          <div className="the-hours-container"> 
                <h3 className="a-head">即将开放的时间</h3>
                <div className="days">
                  <h2 className="days-header">
                  7 月 8 日星期五：<br />
                  7 月 9 日星期六：<br /> 
                  </h2> 
                </div>
                <div className="the-hours">
                  <h2 className="hours-header"> 
                  下午 4:00 - 晚上 7:00<br />
                  上午 10:00 - 下午 2:00<br /> 
                  </h2>
                </div>
              </div>
        </div>
    );
  }
  
  export default VisitMandarin; 