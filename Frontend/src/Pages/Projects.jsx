import React from 'react'
import '../style/Projects.css'
const projectsData = [
  {
    title: "Task Manager App",
    description: "A full-stack application to manage daily tasks, built with the MERN stack and featuring user authentication.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "#", // Add your project link
    image: "/path/to/your/image.png" // Add path from public folder
  },
  {
    title: "E-commerce Website",
    description: "A responsive e-commerce platform with product listings, a shopping cart, and a checkout process.",
    tech: ["React", "Redux", "Firebase"],
    link: "#",
    image: "/path/to/your/image.png"
  },
];
function Projects() {
  return (
     <div className="projects-container">
      <h1 className="page-title">My Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            {/* <img src={project.image} alt={project.title} className="project-image" /> */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

