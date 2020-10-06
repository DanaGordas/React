import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render(){
        return(
            <div className="navbar">
                <h2 className="navbar-title">Recipe App</h2>
                <nav className="navbar-options">
                    <a href="#">New Recipe</a>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact Us</a>
                </nav>
            </div>
        );
    }
}

export default Navbar;