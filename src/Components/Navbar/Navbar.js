import React, {Component} from 'react'; 
import "./Navbar.css"

class Navbar extends Component {

    state = { 
        clicked: false 
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
        <nav className="NavbarItems">
            <div class="collapse navbar-collapse" id="ftco-nav">
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <img src="./logo.png" width="144" height="144" alt="Logo" className={this.state.clicked ? 'alt-logo-none' : 'alt-logo'} style={{ marginTop: "20px"}} href="/"></img>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>

            {/* The Gallery */}
	        <div class="dropdown">
				<button class="dropbtn">The Gallery</button>
				<div class="dropdown-content">
				  <a href="">Link 1</a>
				  <a href="">Link 2</a>
				  <a href="">Link 3</a>
				</div>
			  </div>

			{/* Exhibitions */}
	        <div class="dropdown">
				<button class="dropbtn">Exhibitions</button>
				<div class="dropdown-content">
				  <a href="">Link 1</a>
				  <a href="">Link 2</a>
				  <a href="">Link 3</a>
				</div>
			  </div>

			{/* Artists */}
	        <div class="dropdown">
				<button class="dropbtn">Artists</button>
				<div class="dropdown-content">
				  <a href="">Our Artists</a>
				  <a href="">Aparna Banerjee</a>
				  <a href="">Link 3</a>
				</div>
			  </div>

			{/* Logo */}
			<img src="./logo.png" width="144" height="144" alt="Logo" className='logo' style={{ marginTop: "20px"}} href="/"></img>

			{/* News and Events */}
	        <button class="dropbtn2"><a href="">News and Events</a></button>

			{/* Art Service */}
	        <button class="dropbtn2"><a href="">Art Service</a></button>

			{/* Contact Us */}
	        <button class="dropbtn2"><a href="">Contact Us</a></button>
                </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar; 