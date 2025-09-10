import React from "react";
import "./css/portfolio.css";

function Portfolio() {
  function project() {
    const project = document.getElementById("project");
    const projects = document.getElementById("projects");
    const certification = document.getElementById("certification");
    const techStack = document.getElementById("tech_stack");
    const awards = document.getElementById("awards");
    project.style.backgroundColor = "rgba(141, 214, 31, 1)";
    certification.style.backgroundColor = "transparent";
    techStack.style.backgroundColor = "transparent";
    awards.style.display = "none";
    projects.style.display = "block";
  }

  function certification() {
    const certification = document.getElementById("certification");
    const project = document.getElementById("project");
    const projects = document.getElementById("projects");
    const techStack = document.getElementById("tech_stack");
    const awards = document.getElementById("awards");
    project.style.backgroundColor = "transparent";
    awards.style.display = "flex";
    projects.style.display = "none";
    certification.style.backgroundColor = "rgba(141, 214, 31, 1)";
    techStack.style.backgroundColor = "transparent";
  }

  function techStack() {
    const techStack = document.getElementById("tech_stack");
    const awards = document.getElementById("awards");
    const projects = document.getElementById("projects");
    const project = document.getElementById("project");
    const certification = document.getElementById("certification");
    project.style.backgroundColor = "transparent";
    awards.style.display = "none";
    projects.style.display = "none";
    certification.style.backgroundColor = "transparent";
    techStack.style.backgroundColor = "rgba(141, 214, 31, 1)";
  }
  return (
    <div className="portfolio" id="Portfolio">
      <div className="head">
        <h1>My</h1>
        <h1 style={{ color: "rgba(141, 214, 31, 1)" }}>Portfolio</h1>
      </div>

      <div className="select_menu">
        <button className="project" id="project" onClick={project}>
          Projects
        </button>
        <button
          className="certification"
          id="certification"
          onClick={certification}
        >
          Certification
        </button>
        <button className="tech-stack" id="tech_stack" onClick={techStack}>
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
          <img src="./assets/certifications/css.png" alt="CSS Certification" />
        </div>
        <div className="award">
          <img
            src="./assets/certifications/hacking.png"
            alt="EHCR Certification"
          />
        </div>
      </div>
      <div className="projects" id="projects">
        <div className="project1">
          <h1>Portfolio</h1>
          <p>
            It's a web site, That's Provide My information like (My Projects,
            Certification,Skills etc.,) and also provide My Contact details.
          </p>
          <div className="btn">
            <a href="#" alt="github-link">
              <img src="./assets/icons/github.svg" alt="github img"></img>Github
            </a>
            <a href="#" alt="demo-link" className="redirect">
              <img src="./assets/icons/redirect.png" alt="github img"></img>
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
