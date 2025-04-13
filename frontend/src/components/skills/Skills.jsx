import React, { useState } from "react";
import "./Skills.css"; 

import html5 from "../../assets/html5.png";
import css3 from "../../assets/css3.png";
import javascript from "../../assets/javascript.png";
import bootstrap from "../../assets/bootstrap.png";
import reactImg from "../../assets/react.png";
import vite from "../../assets/vite.png";
import tailwind from "../../assets/tailwind-01.png";
import gsap from "../../assets/gsap.png";
import node from "../../assets/node.png";
import mongo from "../../assets/mongo.png";
import vscode from "../../assets/vs-code.png";
import git from "../../assets/git.png";
import github from "../../assets/github.png";
import dr from "../../assets/dr.png";
import figma from "../../assets/figma.png";
import photoshop from "../../assets/photoshop.png";
import illustrator from "../../assets/illustator.png";

const Skills = () => {
  const [showSkillList, setShowSkillList] = useState(true);

  const skills = [
    { title: "HTML5", img: html5 },
    { title: "CSS3", img: css3 },
    { title: "JavaScript", img: javascript },
    { title: "Bootstrap", img: bootstrap },
    { title: "React", img: reactImg },
    { title: "Vite", img: vite },
    { title: "Tailwind", img: tailwind },
    { title: "GSAP", img: gsap },
    { title: "Node.js", img: node },
    { title: "MongoDB", img: mongo },
  ];

  const tools = [
    { title: "VS Code", img: vscode },
    { title: "Git", img: git },
    { title: "GitHub", img: github },
    { title: "Davinci", img: dr },
    { title: "Figma", img: figma },
    { title: "Photoshop", img: photoshop },
    { title: "Illustrator", img: illustrator },
  ];

  return (
    <section className="skills section" id="skills">
      <div className="container flex-center">
        <h1 className="section-title-01">SKILLS</h1>
        <h2 className="section-title-02">MY SKILLS</h2>

        <div className="education">
          <div className="content">
            <div className="skills-description">
              <h3><b>Education</b></h3>

              {/* BTech Card */}
              <div className="btech-card">
                <div className="btech-content">
                  <div className="btech-details">
                    <div className="btech-title-section">
                      <i data-lucide="building-2" className="btech-icon"></i>
                      <div>
                        <h2 className="btech-degree">Bachelor of Technology</h2>
                        <h4 className="btech-specialization">Computer Science & Engineering</h4>
                      </div>
                    </div>
                    <div className="btech-info-list">
                      <div className="info-item">
                        <i data-lucide="map-pin" className="info-icon"></i>
                        <span>Jaypee University Anoopshahr</span>
                      </div>
                      <div className="info-item">
                        <i data-lucide="calendar" className="info-icon"></i>
                        <span>2022 - 2026</span>
                      </div>
                      <div className="info-item">
                        <i data-lucide="star" className="info-icon"></i>
                        <span>CGPA: 8.2/10</span>
                      </div>
                    </div>
                  </div>

                  <div className="btech-courses">
                    <div className="courses-header">
                      <i data-lucide="book-open" className="courses-icon"></i>
                      <h4 className="courses-title">Key Courses</h4>
                    </div>
                    <div className="courses-grid">
                      {[
                        "Data Structures & Algorithms",
                        "Operating Systems",
                        "Database Management",
                        "Computer Networks",
                        "Machine Learning",
                        "Cloud Computing",
                      ].map((course, index) => (
                        <div className="course-item" style={{ animationDelay: `${0.6 + index * 0.1}s` }} key={index}>
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Class 12th and 10th */}
              <div className="school-grid">
                {[
                  {
                    title: "Class XII - CBSE",
                    school: "Jaypee Vidya Mandir , Anoopshahr",
                    year: "2021 - 2022",
                    result: "Percentage: 71%",
                    stream: "Science (PCM with Computer Science)",
                  },
                  {
                    title: "Class X - CBSE",
                    school: "Jaypee Vidya Mandir , Anoopshahr",
                    year: "2019 - 2020",
                    result: "CGPA: 79%",
                  },
                ].map((item, index) => (
                  <div className={`class${index === 0 ? "12" : "10"}-card`} key={index}>
                    <div className="school-header">
                      <i data-lucide="school" className="school-icon"></i>
                      <h4 className="school-title">{item.title}</h4>
                    </div>
                    <div className="school-info-list">
                      <div className="info-item">
                        <i data-lucide="map-pin" className="info-icon"></i>
                        <span>{item.school}</span>
                      </div>
                      <div className="info-item">
                        <i data-lucide="calendar" className="info-icon"></i>
                        <span>{item.year}</span>
                      </div>
                      <div className="info-item">
                        <i data-lucide="star" className="info-icon"></i>
                        <span>{item.result}</span>
                      </div>
                      {item.stream && (
                        <div className="stream-info">
                          <span className="stream-label">Stream:</span> {item.stream}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="skills-description">
            <h3>SKILLS</h3>
          </div>
          <div className="skills-content">
            <h2 className="section-title">What My Programming Skills Included?</h2>
            <p className="section-text">
              I develop simple, intuitive and responsive user interfaces that help users get things done with less effort and time with these technologies.
            </p>
            <div className="skills-toggle">
              <button
                className={`toggle-btn ${showSkillList ? "active" : ""}`}
                onClick={() => setShowSkillList(true)}
              >
                Skills
              </button>
              <button
                className={`toggle-btn ${!showSkillList ? "active" : ""}`}
                onClick={() => setShowSkillList(false)}
              >
                Tools
              </button>
            </div>

            <ul className={`skills-list ${showSkillList ? "visible" : "hidden"}`}>
              {skills.map((skill, index) => (
                <li key={index} data-title={skill.title}>
                  <img src={skill.img} alt={skill.title} />
                </li>
              ))}
            </ul>

            <ul className={`tools-list ${!showSkillList ? "visible" : "hidden"}`}>
              {tools.map((tool, index) => (
                <li key={index} data-title={tool.title}>
                  <img src={tool.img} alt={tool.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
