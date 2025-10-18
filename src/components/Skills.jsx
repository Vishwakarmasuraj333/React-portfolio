import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
    { name: "Git & GitHub", level: "70%" },
    { name: "Responsive Design", level: "85%" },
    { name: "Bootstrap", level: "70%" },
    { name: "Tailwind CSS", level: "75%" },
  ];

  return (
    <section className="Skills" id="Skills">
      <h2>My Skills</h2>
      <p className="Skills-subtitle">Technologies I use to build stunning web apps 🚀</p>

      <div className="Skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level">{skill.level}</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
