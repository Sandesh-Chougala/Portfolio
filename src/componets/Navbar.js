import React from "react";
import "./css/Navbar.css";

class Navbar extends React.Component {
  state = { menuOpen: false };

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    return (
      <div className="nav-bar">
        <div className="menu">
          <button id="show" onClick={this.toggleMenu}>
            <img src="./assets/icons/menu-btn.png" alt="Menu"></img>
          </button>
          <div className={`hide-links ${this.state.menuOpen ? "show" : ""}`}>
            <a id="home" href="#home">
              Home
            </a>
            <a id="About" href="#About">
              About
            </a>
            <a id="portfolio" href="#portfolio">
              Portfolio
            </a>
            <a id="contact" href="#contact">
              Contact
            </a>
          </div>
        </div>
        <div className="nav-head">
          <a href="#home">Mr.Sandesh</a>
        </div>
        <div className="nav-links">
          <a id="home" href="#home">
            Home
          </a>
          <a id="About" href="#About">
            About
          </a>
          <a id="portfolio" href="#portfolio">
            Portfolio
          </a>
          <a id="contact" href="#contact">
            Contact
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
