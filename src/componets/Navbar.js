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
            <img src="./assets/icons/menu-btn.png"></img>
          </button>
          <div className={`hide-links ${this.state.menuOpen ? "show" : ""}`}>
            <a id="home">Home</a>
            <a id="About">About</a>
            <a id="portfolio">Portfolio</a>
            <a id="contact">Contact</a>
          </div>
        </div>
        <div className="nav-head">
          <a>Mr.Sandesh</a>
        </div>
        <div className="nav-links">
          <a id="home">Home</a>
          <a id="About">About</a>
          <a id="portfolio">Portfolio</a>
          <a id="contact">Contact</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
