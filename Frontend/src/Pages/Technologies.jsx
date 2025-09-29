import React from 'react';
import '../style/Technologies.css';
import { VscVscode } from "react-icons/vsc";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
// Corrected the icon name from SiVisualstudio to SiVisualstudiocode
import { SiRedux, SiMongodb, SiMysql, SiExpress, SiPostman } from 'react-icons/si';

const techData = {
  "Frontend": [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript (ES6+)", icon: <FaJsSquare /> },
    { name: "React", icon: <FaReact /> },
    { name: "Redux", icon: <SiRedux /> },
  ],
  "Backend": [
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
  ],
  "Databases": [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
  ],
  "Tools & Other": [
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    // Used the corrected icon name here
    { name: "VS Code", icon: <VscVscode /> },
    { name: "Postman", icon: <SiPostman /> },
  ],
};

function Technologies() {
  return (
    <div className="tech-container">
      <h1 className="page-title">Technologies I Know</h1>
      <div className="tech-sections">
        {Object.entries(techData).map(([category, skills]) => (
          <div className="tech-category" key={category}>
            <h2>{category}</h2>
            <div className="skills-list">
              {skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  {/* I've added a custom color via className for better styling */}
                  <div className={`skill-icon ${skill.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {skill.icon}
                  </div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
