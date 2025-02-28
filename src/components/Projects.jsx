import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <hr className="divider" />
      <h2 className="section-title">PROJECTS</h2>

      <div className="project-card">
        <h3 className="project-title">CALCULATOR</h3>
        <p className="project-description">
          The primary objective of this project is to develop a simple,
          interactive, and functional web-based calculator that allows users to
          perform basic arithmetic operations, such as addition, subtraction,
          multiplication, and division. It provides an intuitive user interface
          with support for basic functionalities like clearing the display,
          deleting the last character, and displaying results.
        </p>
        <p className="tech-stack"><strong>Tech Stack:</strong> HTML, CSS</p>
        <div className="project-links">
          <a href="https://pratik-calcy.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          |
          <a href="https://github.com/Pratik1742/calculator.git" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>

      <div className="project-card">
        <h3 className="project-title">REACT BASED WEB APP</h3>
        <p className="project-description">
          Developed a dynamic React web application featuring a counter component,
          a user data form, and rich text editors. Implemented state management using
          React hooks and RTK for efficient data handling. Integrated smooth animations
          with React Spring and implemented React Router for seamless navigation.
        </p>
        <p className="tech-stack"><strong>Tech Stack:</strong> JavaScript, HTML, React.js, Css</p>
        <div className="project-links">
          <a href="https://pratik-react-app.netlify.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
          |
          <a href="https://github.com/Pratik1742/WebApp.git" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
