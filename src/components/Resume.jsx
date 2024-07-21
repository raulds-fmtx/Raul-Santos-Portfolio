import React from "react";
import "../styles/Resume.css";
import resumeFile from "../assets/resume.pdf";

function Resume() {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <div className="resume-section">
        <h3>Education</h3>
        <div className="resume-entry">
          <h4>Texas A&M University (College Station, TX)</h4>
          <p>Bachelor of Science in Aerospace Engineering, Expected May 2025</p>
          <ul>
            <li>
              <strong>GPA:</strong> 4.0
            </li>
            <li>
              <strong>Relevant coursework:</strong> Fundamntal of Aerospace
              Autonomy, Active Controls for Aerospace Vehicles, Aerospace
              Vehicle Dynamics, Data Structures & Algorithms
            </li>
          </ul>
          <h4>SMU Continuing & Professional Education (Dallas, TX)</h4>
          <p>Full Stack Development Bootcamp</p>
          <ul>
            <li>
              <strong>GPA:</strong> 4.0
            </li>
          </ul>
        </div>
      </div>
      <div className="resume-section">
        <h3>Experience</h3>
        <div className="resume-entry">
          <h4>Albers Aerospace (McKinney, TX)</h4>
          <p>Systems Engineering Intern, May 2024 - July 2024</p>
          <ul>
            <li>
              Designed, integrated, and tested a multirotor, hybrid-electric
              SUAS for an internal research project
            </li>
            <li>
              Modeled the SUAS using SysML in Cameo Systems Modeler, adhering to
              MBSE best practices
            </li>
            <li>
              Used an MQTT broker to interface Cameo w/ Arduino, enabling
              hardware-in-the-loop (HiL) testing of our system
            </li>
            <li>
              Conducted a HiL demonstration for an Albers Aerospace partner,
              highlighting its potential for a proposed project
            </li>
          </ul>
        </div>
        <div className="resume-entry">
          <h4>Society of Sonic Flight Engineers (College Station, TX)</h4>
          <p>
            Co-Founder, Aerodynamics Lead, Outreach Officer, Jan. 2023 - Present
          </p>
          <ul>
            <li>
              Co-founded SSFE, a student design team that dedicated to
              iteratively increasing the speed of fixed-wing SUAS
            </li>
            <li>
              Collaborated with a team to design, integrate, and test an
              electric propeller-powered fixed-wing SUAS
            </li>
            <li>
              Led the aerodynamics team in design, analysis, and simulation of
              stability and control characteristics of the SUAS
            </li>
            <li>
              Served as Secretary, responsible for logging meeting minutes,
              creating presentations, and tracking attendance
            </li>
            <li>
              Acted as Outreach Lead, recruiting and interviewing new members
              and securing donors
            </li>
          </ul>
        </div>
      </div>
      <div className="resume-section">
        <h3>Skills & Interests</h3>
        <p>
          <strong>Skills:</strong> SolidWorks, MATLAB, Cameo Systems Modeler,
          MQTT, Pandas, NumPy, Matplotlib, Microsoft Office, Technical Writing
        </p>
        <p>
          <strong>Interests:</strong> UAS, Aerospace Autonomy, IoT, HiL
          Simulation, Stability & Controls, Data Science, AI, Web Dev, MBSE
        </p>
        <p>
          <strong>Languages:</strong> C++, Python, JavaScript, Java, SysML, SQL,
          NoSQL, CSS, HTML, MATLAB, C#
        </p>
      </div>
      <div className="resume-section">
        <h3>
          <a href={resumeFile} download="resume.pdf">
            Download My Resume
          </a>
        </h3>
      </div>
    </div>
  );
}

export default Resume;
