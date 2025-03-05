import React from 'react';
import piccc from '../assets/piccc.png';

function About() {
  return (
    <section className="about section" id="about">
      <div className="container flex-center">
        <h1 className="section-title-01">ABOUT ME</h1>
        <h2 className="section-title-02">THIS IS SHAURYA GUPTA</h2>
        <div className="content flex-center">
          <div className="about-img">
            <img src={piccc} alt="About Me" loading="lazy" />
          </div>
          <div className="about-info">
            <div className="description">
              <h3>Engineering Creativity: My Dual Path in Software Development and Graphic Design</h3>
              <p>
                I am a third-year B.Tech Engineering student specializing in Computer Science and Engineering...
                {/* Full text from your original HTML */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;