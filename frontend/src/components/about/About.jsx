import React from "react";
import "./About.css"; 
import  sha2 from "../../assets/sg4.png";

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container flex-center">
        <h1 className="section-title-01">ABOUT ME</h1>
        <h2 className="section-title-02">THIS IS SHAURYA GUPTA</h2>
        <div className="content flex-center">
          <div className="about-img">
            <img src={sha2} alt="Shaurya Gupta" />
          </div>
          <div className="about-info">
            <div className="description">
              <h3>Passion for Innovation Through Code and Creativity</h3>
              <p>
                As a B.Tech Computer Science and Engineering student, I am
                driven by a deep curiosity to understand how technology shapes
                our world. My academic journey has equipped me with a strong
                foundation in programming, data structures, algorithms, and
                software development, while also encouraging me to think
                critically and solve complex problems. Beyond the classroom, I
                actively engage in personal projects, internships, and coding
                challenges to sharpen my skills and stay updated with the
                latest in tech. I’m passionate about building impactful digital
                solutions, whether it's through web development, software
                engineering, or exploring the potential of AI and machine
                learning. With a balance of technical proficiency and a growth
                mindset, I aim to contribute meaningfully to the tech industry
                and drive innovation that makes a difference.
              </p>
              <a
                href="https://drive.google.com/file/d/1MwI5n1pGVJktETjQMehlvUQJj8t0jF2T/view"
                className="btn"
              
              >
                DOWNLOAD CV 
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
