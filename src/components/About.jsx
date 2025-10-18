import React from 'react';
import './About.css';
import ssImage from '../assets/ss.jpeg'; // ← import image

function About() {
  return (
    <section className="About" id="About">
        <img src={ssImage} alt="Suraj Vishwakarma" />
      <h2 >About Me</h2>
      <p>
        Hi! I'm <span>Suraj Vishwakarma,</span> a <b>Frontend Developer</b> Frontend Developer skilled in React, HTML, CSS, and JavaScript.
      </p>
    </section>
  );
}

export default About;
