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
        <Switch>
          <Navbar />

            <Route path="/home" component={Home} />
            <Route path="/artists" component={Artists} />






        </Switch>
      </div>
    </Router>
  );
} 

const Home = () => (
    <div>
      <h1>Welcome to American Dragon Fine Art</h1>
    </div>
); 



export default App;
