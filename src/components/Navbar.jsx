import { useState, useEffect } from 'react';

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={sticky ? 'sticky' : ''}>
      <div className="nav-bar">
        <a href="#" className="logo">SHAURYA.</a>
        <div className="navigation">
          <div className="nav-item">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#skills">SKILLS</a>
            <a href="#projects">PROJECTS</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;