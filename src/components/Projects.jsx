import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio site to showcase my skills, projects, and contact details.",
    techStack: ["React.Js", "CSS"],
    github: "https://github.com/Sandesh-Chougala/Portfolio",
    demo: "#",
    image: "https://wiztoonz.com/wp-content/uploads/2022/04/Blog-Post-Portfolio-1170x658.jpg",
  },
  {
    title: "Endless Runner",
    description: " a simple runner game. that's have leaderboard features.",
    techStack: ["HTML ", "CSS","JavaScript"],
    github: "https://github.com/Sandesh-Chougala/Portfolio",
    demo: "https://endlessgamesandy456.netlify.app/",
    image: "https://wiztoonz.com/wp-content/uploads/2022/04/Blog-Post-Portfolio-1170x658.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>My <span className="highlight">Projects</span></h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p className="tech-stack">{project.techStack.join(', ')}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
