import React from "react";
import Project from "./Project";
import "../styles/Portfolio.css";

function Portfolio() {
  const projects = [
    // Array of project data
  ];

  return (
    <section>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </section>
  );
}

export default Portfolio;