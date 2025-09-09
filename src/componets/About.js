import React from "react";
import "./css/About.css";
class About extends React.Component {
  state = {};
  render() {
    return (
      <div className="about" id="about">
        <div className="left-side">
          <img src=".\assets\icons\about.gif" alt="About" />
        </div>
        <div className="right-side">
          <div className="content">
            <h1 style={{ color: "rgba(141, 214, 31, 1)" }}>About</h1>
            <h1>Me</h1>
          </div>
          <div className="content-2">
            <p>
              Hi! I'm Sandesh, a passionate Full Stack Developer from Belagavi,
              Karnataka, India. I specialize in building modern, powerful, and
              responsive websites using: HTML • CSS • JavaScript • React •
              Next.js • Python • Java Whether it's crafting sleek user
              interfaces or integrating robust backend logic, I love turning
              ideas into interactive, user-friendly experiences. My goal is to
              create digital spaces that are not only technically sound but also
              inspiring and welcoming—especially for students and academic
              communities.
            </p>
          </div>
          <div className="social">
            <a
              className="hk"
              href="https://drive.google.com/file/d/1hRlhvb6oxc07bOxmiAiIesAJPlTaiQnw/view?usp=drive_link"
              alt="resume link"
            >
              Resume
              <img src="./assets/icons/redirect.png" alt="Redirect"></img>
            </a>
            <a className="hk" alt="contact_page">
              Contact Me
              <img src="./assets/icons/redirect.png" alt="Redirect"></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
