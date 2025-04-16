import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={sticky ? 'sticky' : ''}>
      <div className="nav-bar">
        <a href="#" className="logo">SHAURYA.</a>
        <div className={`navigation ${menuOpen ? 'active' : ''}`}>
          <div className="nav-item">
            <a href="#home" onClick={toggleMenu}>HOME</a>
            <a href="#about" onClick={toggleMenu}>ABOUT</a>
            <a href="#skills" onClick={toggleMenu}>SKILLS</a>
            <a href="#projects" onClick={toggleMenu}>PROJECTS</a>
            <a href="#contact" onClick={toggleMenu}>CONTACT</a>
          </div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
