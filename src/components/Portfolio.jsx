import React from "react";
import "../styles/Portfolio.css"; // Ensure you have a CSS file for styling

function Portfolio() {
  const projects = [
    {
      title: "Social Media Web App",
      image:
        "https://github.com/raulds-fmtx/Project-2-Group-2/raw/main/public/readMeImages/post.png",
      description:
        "A social media web application built on PostgreSQL and Handlebars.",
      deployedLink: "https://project-2-group-2.onrender.com/",
      githubLink: "https://github.com/raulds-fmtx/Project-2-Group-2",
    },
    {
      title: "Spotify Playlist Generator",
      image:
        "https://github.com/raulds-fmtx/Playlist-Generator/raw/main/assets/images/deployed-site-screenshot.png",
      description:
        "A playlist generating application that uses Spotify API to retrieve song recommendations based on user queries.",
      deployedLink: "https://raulds-fmtx.github.io/Playlist-Generator/",
      githubLink: "https://github.com/raulds-fmtx/Playlist-Generator",
    },
    {
      title: "Employee Payroll Tracker",
      image:
        "https://github.com/raulds-fmtx/Employee-Payroll-Tracker/raw/main/assets/images/deployed-site-screenshot.png",
      description:
        "An Employee Payroll Tracker that logs and displays user entered employee data, including their first name, last name, and salary.",
      deployedLink: "https://raulds-fmtx.github.io/Employee-Payroll-Tracker/",
      githubLink: "https://github.com/raulds-fmtx/Employee-Payroll-Tracker",
    },
    {
      title: "Weather Forecast Dashboard",
      image:
        "https://github.com/raulds-fmtx/Weather-Forecast-Dashboard/blob/main/assets/images/deployed-site-screenshot.png?raw=true",
      description:
        "A weather dashboard application that uses the OpenWeather API to retrieve weather data for cities.",
      deployedLink: "https://raulds-fmtx.github.io/Weather-Forecast-Dashboard/",
      githubLink:
        "https://github.com/raulds-fmtx/Weather-Forecast-Dashboard?tab=readme-ov-file",
    },
  ];

  return (
    <div className="portfolio">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            <br></br>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
