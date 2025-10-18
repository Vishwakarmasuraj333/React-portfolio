import React from "react";
import "./Banner.css";
import bannerImg from "../assets/s.jpeg"; // your image

function Banner() {
  return (
    <section className="Banner" id="Banner">
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">Twitter</a>
      </div>

      <div className="Banner-container">
        <div className="Banner-content">
          <h1>Hello, I'm <span>Suraj Vishwakarma</span></h1>
          <p>
            Frontend Developer | React.js | JavaScript | HTML & CSS <br />
            I create modern and responsive web apps with great UX/UI.
          </p>
          <div className="btn-group">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-outline">Resume</a>
          </div>
        </div>

        <div className="Banner-image">
          <img src={bannerImg} alt="Suraj Vishwakarma" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
