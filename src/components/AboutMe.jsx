import React from "react";
import "../styles/AboutMe.css";
import profilePic from "../assets/profile-pic.jpg"; // Ensure this path is correct based on your project structure
import js from "../../public/javascript-original.svg"


function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-header">
        <img
          className="about-me"
          src={profilePic}
          width="128"
          height="128"
          alt="Developer"
        />
        <h1 className="about-me">About Me</h1>
      </div>
      <p className="about-me">
        Dedicated Aerospace Engineering student with a strong background in
        systems engineering and unmanned aerial systems (UAS). Experienced in
        designing, integrating, and testing advanced aerospace systems, with a
        proven ability to lead multidisciplinary teams. Proficient in modeling
        and simulation using SysML and MATLAB, and skilled in coding languages
        including C++, Python, Java, and JavaScript. Demonstrates excellent
        leadership, communication, and outreach capabilities through roles as
        a co-founder and team lead. Passionate about contributing to
        innovative aerospace projects.
      </p>
    </section>
  );
}

export default AboutMe;
