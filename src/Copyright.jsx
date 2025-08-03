import React from 'react'
import './Copyright.css'
import Button from './Components/Button';

const URL = process.env.REACT_APP_PUBLIC_MAILCHIMP_URL; 

class Copyright extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        emailValue: '',
        fNameValue: '',
        lNameValue: '',
    };
  }


    render() {
        return (
            <>
            <br />
            <div style={{marginTop: "10px", backgroundColor: "#24262D"}}>
            <br />
            <br />
            <br /> 
            <br /> 
            <h1 style={{fontSize: "x-large", fontWeight: "bold", display: "flex", justifyContent: "center", color: "white", textAlign: "center"}} className="font-poppins text-white font-semibold text-base mt-6">Join Our Newsletter!</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
                <form action={ URL } method="POST" noValidate>
                  <input type="hidden" name="u" value=""/>
                <input type="hidden" name="id" value="7bc586548b"/>
                <label htmlFor='MERGE0'>
                    <input 
                        type="email" 
                        name="EMAIL" 
                        id="MERGE0"
                        placeholder='Email'
                        style={{border: "solid", borderWidth: "2px", borderColor: "white", borderRadius: "5px", padding: "10px"}}
                        value={this.state.emailValue} 
                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} } 
                        autoCapitalize="off" 
                        autoCorrect="off"
                     /> 
                </label>
                <input
                    style={{display: "inline-block", background: "linear-gradient(101.12deg, #ff0000 27.35%, #c21313 99.99%, #ff1c1c 100%, #ff0000 100%)", fontFamily: "Poppins", fontWeight: "bold", color: "white", borderRadius: "5px", padding: "12.5px"}} 
                    btnname="Email me"
                    type="submit" 
                    name="subscribe" 
                    value="Submit"
                    id="mc-embedded-subscribe" 
                    />

                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="">

                    <label htmlFor="b_email" />
                      <input
                        type="email"
                        name="b_email"
                        tabIndex="-1"
                        defaultValue=""
                        placeholder="Email"
                        id="b_email"
                      />
                </div>
              </form>
              </div>
              <br />
              <br /> 
              <p id="copyright"> American Dragon International Fine Art © Copyright {new Date().getFullYear()} </p> 
              <br /> 
              <br /> 
              </div>
              </>
        )
    }
}

export default Copyright