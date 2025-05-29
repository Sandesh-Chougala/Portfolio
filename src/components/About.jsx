import React from 'react';
import {
  SiPython,
  SiMysql,
  SiGit,
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiPostman,
} from 'react-icons/si';
import { FaJava} from 'react-icons/fa';
import '../styles/about.css';


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* About Text */}
        <div className="about-text">
          <h2>
            ABOUT <span className="highlight">ME</span>
          </h2>
          <h3 className='hlo'>I introduce My Self</h3>
          <p>
            I'm Sandesh Chougala, I'm currently studying Full Stack Development. I have HTML, CSS, JavaScript,
            React, Node.js, and Python knowledge and skills. I focus on building modern, responsive, and scalable web
            applications with great user experiences.
          </p>
        </div>

        {/* Project Stats */}
        <div className="about-stats">
          <div className="stat-card">
            <h4>3</h4>
            <span>Main Projects</span>
          </div>
          <div className="stat-card">
            <h4>2</h4>
            <span>Hosted Projects</span>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="technical-skills">
          <h3>Technical <span className="highlight">Skills</span></h3>
          <div className="skills-logos">
            <SiPython title="Python" />
            <FaJava title="Java" />
            <SiMysql title="SQL" />
            <SiGit title="Git" />
            <SiNextdotjs title="Next.js" />
            <SiReact title="React" />
            <SiMongodb title="MongoDB" />
            <SiPostman title="Postman" />
          </div>
        </div>

        {/* Education Section */}
        <div className="education-section">
          <h3>Education <span className="highlight">Background</span></h3>
          <div className="education-list">

            <div className="education-item">
              <h4>Higher Secondary Education</h4>
              <p><strong>School:</strong> MKHS Soundatti Karnataka</p>
              <p><strong>Score:</strong> 77%</p>
            </div>

            <div className="education-item">
              <h4>Diploma in Computer Science and Engineering(1-Year)</h4>
              <p><strong>College:</strong>GPT Mudhol karnataka</p>
              <p><strong>CGPA (Sem 1–2):</strong> 7.86 / 10</p>
            </div>

            <div className="education-item">
              <h4>Diploma in Computer Science and Engineering(2-Year)</h4>
              <p><strong>College:</strong>GPT Mudhol karnataka</p>
              <p><strong>CGPA (Sem 3–4):</strong> 8.96 / 10</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
