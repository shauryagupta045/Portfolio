import React, { useEffect, useState } from "react";
import "./Home.css";
import { FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa";
import sha from "../../assets/sg3.png";

const roles = ["SOFTWARE ENGINEER", "WEB DEVELOPER", "UI/UX DESIGNER"];

const Home = () => {

  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

  
    if (!isDeleting && charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 100); 
      return () => clearTimeout(timeout);
    }
 
    else if (!isDeleting && charIndex === currentRole.length) {
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000); 
      return () => clearTimeout(timeout);
    }

    else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, 50); 
      return () => clearTimeout(timeout);
    }
    
    else if (isDeleting && charIndex === 0) {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 500); 
      return () => clearTimeout(timeout);
    }
  }, [charIndex, isDeleting, roleIndex]);


  const currentRole = roles[roleIndex];
  const displayText = currentRole.substring(0, charIndex);

  return (
    <>
      <div className="experience">
        <div className="container experience-section">
          <div className="experience-items">
            {[...Array(18)].map((_, index) => (
              <div key={index} className={`blob blob${index + 1}`}></div>
            ))}
          </div>
        </div>
      </div>

      <section className="home flex-center" id="home">
        <div className="home-container">
          <div className="media-icons">
            <a href="https://www.linkedin.com/in/shaurya-guptaa/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/shauryagupta045">
              <FaGithub />
            </a>
          </div>

          <div className="info">
            <h2>
              <span>HII, I'M</span>
              <br />
              <span>SHAURYA GUPTA</span>
            </h2>
            <h3>{displayText}</h3>
           
          </div>


          <div className="blobpic">
            <img src={sha} alt="photo" />
          </div>
        </div>
        <a href="#about" className="scroll-down"> SCROLL DOWN <span className="arrow-icon"><FaArrowDown /></span></a>
      </section>
    </>
  );
};

export default Home;