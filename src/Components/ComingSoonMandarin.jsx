import React from 'react'; 
import '../Components/Home/Home.css';
import './Button.css'; 

function ComingSoon() {
  const styles = {
    heading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: '#343a40',
      marginTop: '20px',
      textAlign: 'center',
      paddingBottom: '10vh',
    },
  };
  
    return (
      <>
        <div className="ComingSoon">
          <form method="get" action="#/shop">
          <button id="the-button" type='btn'>English</button>
          </form>
          <h1 style={styles.heading}>网上商店即将推出</h1>
        </div>
      </>
    );
  }
  
  export default ComingSoon;