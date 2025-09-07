import React from "react";
import "./css/Home.css";
import { Typewriter } from "react-simple-typewriter";
class Home extends React.Component {
  render() {
    return (
      <>
        <div className="Main_page">
          <div className="left">
            <h1>Sandesh Chougala</h1>
            <h2>Full Stack Developer</h2>
            <div className="typing">
              <h3>I'm a </h3>
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Web Designer",
                  "Problem Solver",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={90}
                startDelay={1000}
                delaySpeed={1000}
              />
            </div>
            <p>
              Hi, I'm a "Sandesh Chougala" turning ideas into interactive
              experiences.
            </p>
            <p>
              I build fast, responsive websites with clean code and creative
              design.
            </p>
            <p>From concept to deployment, I bring digital visions to life.</p>
            <div className="explore">
              <h3>Explore My Work</h3>
            </div>
            <div className="btns">
              <button className="hk">
                Projects<img src="./assets/icons/redirect.png"></img>
              </button>
              <button className="hk">
                Contact Me<img src="./assets/icons/redirect.png"></img>
              </button>
            </div>
            <div className="socila">
              <a className="github" href="https://github.com/Sandesh-Chougala">
                <img src="./assets/icons/github.svg"></img>
              </a>
              <a
                className="linkdin"
                href="https://www.linkedin.com/in/sandesh-chougala/"
              >
                <img src="./assets/icons/linkdin.svg"></img>
              </a>
              <a
                className="linkdin"
                href="https://www.instagram.com/mr___sandy____________"
              >
                <img src="./assets/icons/instagram.svg"></img>
              </a>
            </div>
          </div>

          <div className="right">
            <div className="coding-image">
              <img src="./assets/my-photo.jpg" className="my-img"></img>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
