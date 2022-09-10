import React from 'react'; 
import './Exhibitions.css'; 
import Navbar from '../Navbar/Navbar'; 
import '../Button.css'; 

function Exhibitions() { 

    window.scrollTo(0, 0); 

    return (
      <>
          
          <div className="Aritists"> 

          <form method="get" action="#/exhibitions-mandarin"> 
            <button id="the-button" type='btn'>普通話</button> 
          </form> 

            <h1 className="exhibition">Exhibitions</h1> 
            <hr /> 

            {/* href began with: /home/#/ because of gh-pages, but was changed because of domain name change */}

            <div className="card-row-artists"> 
            <a id="link" href="#/works-at-hefei"> 
            <h5 id="caption-card-l">China</h5> 
            </a>
            <a id="link" href="#/art-basel"> 
            <h5 id="caption-card-m">Miami</h5> 
            </a>
            <a id="link" href="#/new-york"> 
            <h5 id="caption-card-r">New York</h5> 
            </a>
            </div>

            <div className="card-row-artists">
            <a id="link" href="#/pennsylvania"> 
            <h5 id="caption-card-l">Pennsylvania</h5> 
            </a> 
            <a id="link" href="#/san-diego">
            <h5 id="caption-card-m">San Diego</h5> 
            </a>
            <a id="link" href="#/oil-painting-exhibition"> 
            <h5 id="caption-card-r">South Korea</h5> 
            </a>
            </div>

            <div className="card-row-artists">
            <a id="link" href="#/magnificent"> 
            <h5 id="caption-card-m">Tokyo</h5> 
            </a> 
            </div> 

            {/* Mobile */} 
 
            <a id="link" href="#/works-at-hefei"> 
            <h5 id="caption-card">China</h5> 
            </a> 

            <a id="link" href="#/art-basel">
            <h5 id="caption-card">Miami</h5> 
            </a> 

            <a id="link" href="#/new-york">
            <h5 id="caption-card">New York</h5> 
            </a> 

            <a id="link" href="#/pennsylvania"> 
            <h5 id="caption-card">Pennsylvania</h5> 
            </a> 

            <a id="link" href="#/san-diego"> 
            <h5 id="caption-card">San Diego</h5> 
            </a> 

            <a id="link" href="#/oil-painting-exhibition">
            <h5 id="caption-card">South Korea</h5> 
            </a> 

            <a id="link" href="#/magnificent"> 
            <h5 id="caption-card">Tokyo</h5> 
            </a> 

          </div>
        </> 
    );
  }
  
  export default Exhibitions; 