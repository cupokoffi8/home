import React from 'react'; 
import './App.css';
import Navbar from './Components/Navbar/Navbar'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

// Import Components 

import Artists from './Components/Artists/Artists/Artists'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/artists" component={Artists} />
      </div>
    </Router>
  );
}

export default App;
