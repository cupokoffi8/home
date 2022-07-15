import React from 'react'

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
            <div style={{backgroundColor: "rgb(28, 46, 106)"}}>
            <br /> 
            <br /> 
            <h1 style={{display: "flex", justifyContent: "center", color: "white"}} className="font-poppins text-white font-semibold text-base mt-6">Join Our Newsletter!</h1>
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
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>

                <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">

                    <label htmlFor="b_email" />
                    <input type="email" name="b_email" tabIndex="-1" value="" placeholder="Email" id="b_email"/>
                </div>
              </form>
              </div>
              <br />
              <br /> 
              <p id="copyright" style={{display: "flex", justifyContent: "center", color: "white"}}> American Dragon International Fine Art © Copyright 2022 </p> 
              <br /> 
              <br /> 
              <br />
              </div>
              </>
        )
    }
}

export default Copyright