import React from "react";
import "../styles/Project.css";

function Project({ project }) {
  return (
    <div>
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <a href={project.deployedLink}>Deployed Application</a>
      <a href={project.githubLink}>GitHub Repository</a>
    </div>
  );
}

export default Project;