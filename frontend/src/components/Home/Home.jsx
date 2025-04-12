import React, { useEffect, useRef, useState } from "react";
import "./Home.css"; 
import { FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa";
import  sha from "../../assets/sg3.png";

const roles = ["SOFTWARE ENGINEER", "WEB DEVELOPER", "UI/UX DESIGNER"];

const Home = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    const currentText = roles[roleIndex];

    if (isDeleting) {
      setText(currentText.substring(0, charIndex));
      setCharIndex((prev) => prev - 1);
    } else {
      setText(currentText.substring(0, charIndex));
      setCharIndex((prev) => prev + 1);
    }

    if (!isDeleting && charIndex === currentText.length) {
      typingTimeoutRef.current = setTimeout(() => {
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    const speed = isDeleting ? 200 : 100;
    typingTimeoutRef.current = setTimeout(() => {}, speed);

    return () => clearTimeout(typingTimeoutRef.current);
  }, [charIndex, isDeleting, roleIndex]);

  useEffect(() => {
    const interval = setTimeout(() => {
      const currentText = roles[roleIndex];
      if (isDeleting) {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }
    }, isDeleting ? 100 : 200);

    return () => clearTimeout(interval);
  }, [text]);

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
            <h3>{text}</h3>
          </div>

          <div className="blobpic">
            <img src={sha} alt=" photo " />
          </div>
        </div>
        <a href="#about" className="scroll-down">
          SCROLL DOWN <FaArrowDown />
        </a>
      </section>
    </>
  );
};

export default Home;
