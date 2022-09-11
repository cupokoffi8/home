import React from 'react';
import "../Components/Button.css"; 

const Button = ({ btnName, handleClick }) => (
  <button className="fast" type="button" style={{display: "block", marginLeft: "auto", marginRight: "auto", background: "linear-gradient(101.12deg, #ff0000 27.35%, #c21313 99.99%, #ff1c1c 100%, #ff0000 100%)", fontFamily: "Poppins", fontWeight: "bold", color: "white", borderRadius: "5px", padding: "10px"}} onClick={handleClick}>
    {btnName}
  </button>
);

export default Button;