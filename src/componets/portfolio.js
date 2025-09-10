import React from "react";
import "./css/portfolio.css";

class Portfolio extends React.Component {
  state = {};
  render() {
    return (
      <div className="portfolio" id="Portfolio">
        <div className="head">
          <h1>My</h1>
          <h1 style={{ color: "rgba(141, 214, 31, 1)" }}>Portfolio</h1>
        </div>

        <div className="select_menu">
          <button className="project" id="project">
            Projects
          </button>
          <button className="certification" id="certification">
            Certification
          </button>
          <button className="tech-stack" id="tech_stack">
            Tech Stack
          </button>
        </div>

        <div className="awards" id="awards">
          <div className="award">
            <img
              src="./assets/certifications/ai.png"
              alt="GEN AI Certification"
            />
          </div>
          <div className="award">
            <img
              src="./assets/certifications/react.png"
              alt="React Certification"
            />
          </div>
          <div className="award">
            <img src="./assets/certifications/js.png" alt="JS Certification" />
          </div>
          <div className="award">
            <img
              src="./assets/certifications/html.png"
              alt="HTML Certification"
            />
          </div>
          <div className="award">
            <img
              src="./assets/certifications/css.png"
              alt="CSS Certification"
            />
          </div>
          <div className="award">
            <img
              src="./assets/certifications/hacking.jpg"
              alt="EHCR Certification"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
