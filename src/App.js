import React from 'react'; 
import './App.css';
import Navbar from './Components/Navbar/Navbar'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

// Import Components 

import Home from './Components/Home/Home';
import Artists from './Components/Artists/Artists/Artists'; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Switch>

            <Route path="/home" component={Home} />
            <Route path="/artists/" component={Artists} />

        </Switch>
    </BrowserRouter>
  );
} 



export default App;
