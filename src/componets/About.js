import React from "react";
import "./css/About.css";
class About extends React.Component {
  state = {};
  render() {
    return (
      <div className="about" id="about">
        <div className="left-side">
          <img src="./assets/icons/about.gif" alt="About" />
        </div>
        <div className="right-side">
          <div className="content">
            <h1 style={{ color: "rgba(141, 214, 31, 1)" }}>About</h1>
            <h1>Me</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
