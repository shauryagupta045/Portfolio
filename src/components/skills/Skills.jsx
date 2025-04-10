import React from "react";
const skills = [
  { name: "C", icon: "c.svg" },
  { name: "C++", icon: "c.svg" },

  { name: "HTML", icon: "html5.svg" },
  { name: "CSS", icon: "css3.svg" },
  { name: "JavaScript", icon: "javascript.svg" },
  { name: "ReactJS", icon: "react.svg" },
  { name: "NodeJS", icon: "nodejs.svg" },
  { name: "Express.js", icon: "nodejs.svg" },
  { name: "MongoDB", icon: "mongodb.svg" },
  { name: "Git", icon: "git.svg" },
  
  { name: "Bootstrap", icon: "bootstrap.svg" },
  
  
  { name: "TailwindCSS", icon: "tailwind.svg" },
  { name: "VS Code", icon: "vscode.svg" },
  { name: "Figma", icon: "figma.svg" },
];

const Skills = () => {
    return (
      <section className="skills section" id="skills">
        <div className="container flex-center">
          <h1 className="section-title-01">SKILLS</h1>
          <h2 className="section-title-02">MY SKILLS</h2>
          <div className="content">
            <div className="skills-description">
              <h3>EDUCATION AND SKILLS</h3>
              <p>For more than five years...</p>
            </div>
            <div className="skills-info education-all">
              <div className="education">
                <h4><label>EDUCATION</label></h4>
                <ul className="edu-list">
                  <li className="item"><span className="year">2020-2021</span><p>bdbubuhbdsbbcjbcdbsbncib</p></li>
                  {/* Repeat for other items */}
                </ul>
              </div>
              <div className="education">
              <div className="skills-container">
      <h4><label>SKILLS</label></h4>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <img src={`/icons/${skill.icon}`} alt={skill.name} className="skill-icon" />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
              </div>
            </div>
            <div className="skills-description">
              <h3>WORK AND EXPERIENCE</h3>
            </div>
            <div className="skills-info">
              <div className="experience-card">
                <div className="upper">
                  <h3>GRAPHIC DESIGNER</h3>
                  <h4>Freelancing</h4>
                  <h5>2022-2024</h5>
                </div>
                <div className="hr">
                  <h4><label>Social Media Posts</label></h4>
                  <p>Basically I design and create Social media posts...</p>
                </div>
              </div>
              {/* Add other experience cards */}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Skills;