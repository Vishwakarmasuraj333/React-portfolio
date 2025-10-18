import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="Footer" id="Footer">
      <div className="Footer-container">
        <h3>Suraj Vishwakarma</h3>
        <p>Frontend Developer | React.js | JavaScript</p>
        
        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="mailto:youremail@example.com">
            <FaEnvelope />
          </a>
        </div>

        <p className="footer-bottom">&copy; {new Date().getFullYear()} Suraj Vishwakarma. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
