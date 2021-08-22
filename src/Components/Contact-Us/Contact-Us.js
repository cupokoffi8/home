import React from 'react';
import './Contact-Us.css';

function Contact() {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <hr /> 

      <form action="" onSubmit="">
        <div className="formWord">

          <h2>Say Hello!</h2>

          <span>Full Name</span> 
          <br /> 
          <input 
            className="input100" 
            type="text" 
            name="fullname" 
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

      </form>
    </div>
  );
}

export default Contact;