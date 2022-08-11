import React, {useState} from 'react'; 
import emailjs from 'emailjs-com'; 
import "../Home/Home.css"; 
import './Contact-Us.css'; 
import Navbar from '../Navbar/Navbar'; 
import '../Button.css'; 
import Map from '../Map/Map'; 

const Result = () => {
  return (
    <p>Your message has been submitted!</p>
  )
}

function Contact() {
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
    <Navbar />

    <div className="contact-us"> 

    <form method="get" action="#/contact-us-mandarin"> 
      <button id="the-button" type='btn'>普通話</button> 
      </form> 

      <h1 id="contact-head">Contact Us</h1> 

      <br /> 

      <form action="" onSubmit={sendEmail}> 
        <div style={{paddingRight: '20px', paddingLeft: '20px'}} className="formWord">

          <h2 id="fill-out">Please fill out the form below</h2>

          <span id="the-span">Full Name*</span> 
          <br /> 
          <input 
            className="input100" 
            type="text" 
            name="fullName" 
            required 
            /> 

          <span id="the-span">Phone Number*</span> 
          <br /> 
          <input 
            className="input100" 
            type="text" 
            name="phone" 
            required 
            /> 

          <span id="the-span">Email*</span> 
          <br /> 
          <input 
            className="input100" 
            type="text" 
            name="email" 
            required 
            /> 

        </div>

        <div style={{paddingRight: '20px', paddingLeft: '20px'}} className="formWord">
          <span id="the-span">Message*</span> 
          <br /> 
          <textarea 
            name="message"
            required 
            >
            </textarea>
            <br /> 
            <button id="submit">Submit</button> 
        </div>

        <div className="row">{result ? <Result /> : null}</div> 

      </form>
    </div>
    </> 
  );
}

export default Contact;