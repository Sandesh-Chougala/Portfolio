import React from 'react';
import '../styles/Hero.css';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="hero-wrapper">
      <div className="hero-image">
          <img
            src="https://cdn.pixabay.com/photo/2024/05/02/09/16/web-development-8734249_640.png"
            alt="Developer Illustration"
          />
        </div>

        <div className="hero-text">
          <h1>
            Hi, I'm <span className="highlight">Sandesh Chougala</span>
          </h1>
          <h2>
            I'm a{' '}
            <span className="typing">
              <Typewriter
                words={['Full Stack Developer', 'Web Designer', 'Problem Solver']}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p>
            I enjoy building modern, responsive, and high-performance websites using tools like
            React, Node.js, and CSS.
          </p>
          <a
            className="btn"
            href="https://drive.google.com/file/d/1hRlhvb6oxc07bOxmiAiIesAJPlTaiQnw/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Download Resume
          </a>
        </div>


      </div>
    </section>
  );
};

export default Hero;
