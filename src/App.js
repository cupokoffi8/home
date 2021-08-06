import React from 'react'; 
import './App.css';
import Navbar from './Components/Navbar/Navbar'; 
import { HashRouter, Switch, Route } from 'react-router-dom'; 

// Import Components 

import Home from './Components/Home/Home';
import Artists from './Components/Artists/Artists/Artists'; 

function App() {
  return (
    <HashRouter>
      <Navbar />
        <Switch>

            <Route exact path="/" component={Home} />
            <Route path="/artists/" component={Artists} />

        </Switch>
    </HashRouter>
  );
} 



export default App;
