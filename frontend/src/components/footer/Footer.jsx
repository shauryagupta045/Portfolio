import React from "react";
import "./Footer.css"



const Footer = () => {
    return (
      <footer>
        <div className="footer-container">
          <div className="bubbles">
            {/* Add bubble divs as in original HTML */}
            <div className="bubble" style={{ '--position': '3%', '--size': '3rem', '--time': '2.5s', '--delay': '1s' }}></div>
            {/* Repeat for all bubbles */}
          </div>
          <div className="about group">
            <h2>SHAURYA.</h2>
            <p>Software Developer</p>
            <a href="#about">About Me</a>
          </div>
          <div className="hr"></div>
          <div className="info group">
            <h3>More</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#skills">Skills</a></li>
            </ul>
          </div>
          <div className="hr"></div>
          <div className="follow group">
            <h3>Follow</h3>
            <ul>
              <li><a href=""><i className="fab fa-linkedin"></i></a></li>
              <li><a href=""><i className="fab fa-github"></i></a></li>
              <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
              <li><a href=""><i className="fab fa-instagram"></i></a></li>
              <li><a href=""><i className="fab fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright group">
          <p>© 2024 by Shaurya Gupta. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;