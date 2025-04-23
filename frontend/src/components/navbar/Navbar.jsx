import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
  
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
     
      document.body.style.paddingRight = '15px'; 
    } else {
     
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {

      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="/" className="nav-logo">
          SHAURYA.
        </a>

        <div className="nav-menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <div className="mobile-nav-header">
            <span className="mobile-logo">SHAURYA.</span>
            <button className="close-button" onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>HOME</a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>SKILLS</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>PROJECTS</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;