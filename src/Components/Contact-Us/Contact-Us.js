import React, {useState} from 'react'; 
import emailjs from 'emailjs-com'; 
import './Contact-Us.css'; 

const Result = () => {
  return (
    <p>Your message has been submitted!</p>
  )
}

function Contact() {
  const [result, showResult] = useState(false); 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l4ft49h', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
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
    <div className="contact-us">
      <h1>Contact Us</h1>
      <hr /> 

      <form action="" onSubmit={sendEmail}> 
        <div className="formWord">

          <h2>Say Hello!</h2>

          <span>Full Name</span> 
          <br /> 
          <input 
            className="input100" 
            type="text" 
            name="fullName" 
            required 
            /> 

          <span>Phone Number</span> 
          <br /> 
          <input 
            className="input100" 
            type="text" 
            name="phone" 
            required 
            /> 

          <span>Enter Email</span> 
          <br /> 
          <input 
            className="input100" 
            type="text" 
            name="email" 
            required 
            /> 

        </div>

        <div className="formWord">
          <span>Message</span> 
          <br /> 
          <textarea 
            name="message"
            required 
            >
            </textarea>
            <br /> 
            <button>Submit</button> 
        </div>

        <div className="row">{result ? <Result /> : null}</div> 

      </form>
    </div>
  );
}

export default Contact;