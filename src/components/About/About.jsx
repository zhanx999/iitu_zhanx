
import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container" id='about'>
      <img src="https://tengrinews.kz/userdata/u38/2023-06/resize/12446456e9fd9354e2f61073470bdd95.jpeg" alt="IITU University" className="about-img" />
      
      <div className="about-content">
        <h2>О университете</h2>
        <p>
          Международный университет информационных технологий (IITU) — один из ведущих университетов в Казахстане, 
          специализирующийся на IT и инженерии. Студенты получают практические навыки, работают над проектами и участвуют в стажировках.
        </p>
        <a href="#courses" className="learn-more-btn">Узнать больше</a>
      </div>
    </div>
  );
};

export default About;
