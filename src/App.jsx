import React from 'react';
import Skills from './components/skills/Skills';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';




function App() {
  return (
    <>
    
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    
    </>
  );
}

export default App;