import React, { Component } from "react";
import "./css/portfolio.css";

class Portfolio extends Component {
  state = {
    activeSection: "projects", // default section
  };

  showSection = (section) => {
    this.setState({ activeSection: section });
  };

  render() {
    const { activeSection } = this.state;

    return (
      <div className="portfolio">
        <div className="head">
          <h1>My</h1>
          <h1 style={{ color: "rgba(141, 214, 31, 1)" }}>Portfolio</h1>
        </div>

        <div className="select_menu">
          <button
            className={`menu-btn ${
              activeSection === "projects" ? "active" : ""
            }`}
            onClick={() => this.showSection("projects")}
          >
            Projects
          </button>
          <button
            className={`menu-btn ${
              activeSection === "certification" ? "active" : ""
            }`}
            onClick={() => this.showSection("certification")}
          >
            Certification
          </button>
          <button
            className={`menu-btn ${
              activeSection === "techStack" ? "active" : ""
            }`}
            onClick={() => this.showSection("techStack")}
          >
            Tech Stack
          </button>
        </div>

        {activeSection === "projects" && (
          <div className="projects">
            <h2>Projects</h2>
            <p>
              Showcase your React apps, academic pages, or anything inspiring.
            </p>
          </div>
        )}

        {activeSection === "certification" && (
          <div className="certification">
            <h2>Certifications</h2>
            <div className="awards">
              {["ai", "react", "js", "html", "css", "hacking"].map((cert) => (
                <div className="award" key={cert}>
                  <img
                    src={`./assets/certifications/${cert}.png`}
                    alt={`${cert.toUpperCase()} Certification`}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "techStack" && (
          <div className="tech-stack">
            <h2>Tech Stack</h2>
            <p>React, JavaScript, HTML, CSS, Python — and growing!</p>
          </div>
        )}
      </div>
    );
  }
}

export default Portfolio;
