import React, {useState} from 'react'; 
import emailjs from 'emailjs-com'; 
import Map from '../Map/Map'; 
import './Contact-Us.css'; 
import NavbarMandarin from '../Navbar-Mandarin/Navbar-Mandarin'; 
import '../Button.css'; 

const Result = () => {
  return (
    <p>您的留言已提交！</p> 
  )
}

function ContactMandarin() {

    window.scrollTo(0, 0); 

  const [result, showResult] = useState(false); 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l4ft49h', 'template_580rk2i', e.target, 'user_u13q1bA8evDk66AScfDu2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); 
      e.target.reset(); 
      showResult(true); 
  }; 

  // Hide result 
  setTimeout(() => {
    showResult(false); 
  }, 5000); 

  return (
    <>
    <NavbarMandarin /> 

    <div className="contact-us"> 

    <form method="get" action="#/contact-us"> 
      <button id="the-button" type='btn'>English</button> 
      </form> 

      <h1 id="contact-head">联系我们</h1> 
      
      {/* ======================================================= */}
      <div style={{background: '#BDBDBD'}}>
        <hr /> 
          <br /> 
            <div id="border-div">
              <br /> 

              <Map /> 
              <a id="addy-click" href="https://www.google.com/maps/place/American+Dragon+International+Fine+Art+Gallery/@40.0483338,-76.3059007,15z/data=!4m5!3m4!1s0x0:0x4c549ed6537c2a4!8m2!3d40.0483496!4d-76.3057639">
              614 N. Duke Street, Suite One, Lancaster, PA 17602
              </a>

              <br /> 
            </div>

              <br /> 
              <br /> 

              <hr /> 
        </div>

        <br /> 
        <br /> 
        {/* ======================================================= */} 

      <br /> 

      <form action="" onSubmit={sendEmail}> 
        <div style={{paddingRight: '20px', paddingLeft: '20px'}} className="formWord">

          <h2 id="fill-out">请填写下面的表格</h2> 

          <span id="the-span">全名*</span> 
          <br /> 
          <input 
            className="input100" 
            type="text" 
            name="fullName" 
            required 
            /> 

          <span id="the-span">电话号码*</span> 
          <br /> 
          <input 
            className="input100" 
            type="text" 
            name="phone" 
            required 
            /> 

          <span id="the-span">电子邮件*</span> 
          <br /> 
          <input 
            className="input100" 
            type="text" 
            name="email" 
            required 
            /> 

        </div>

        <div style={{paddingRight: '20px', paddingLeft: '20px'}} className="formWord">
          <span id="the-span">一个消息*</span> 
          <br /> 
          <textarea 
            name="message"
            required 
            >
            </textarea>
            <br /> 
            <button id="submit">提交</button> 
        </div>

        <div className="row">{result ? <Result /> : null}</div> 

      </form>
    </div>
    </> 
  );
}

export default ContactMandarin; 