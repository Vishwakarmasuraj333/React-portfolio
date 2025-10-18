import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="Contact" id="Contact">
      <h2>Contact Me</h2>
      <p className="contact-subtitle">Let’s work together — I’d love to hear from you!</p>

      <div className="Contact-container">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="5" placeholder="Write your message..." required></textarea>
          </div>

          <button type="submit" className="btn">Send Message</button>
        </form>

        <div className="Contact-info">
          <h3>Get in Touch</h3>
          <p>Email: <a href="mailto:youremail@gmail.com">itxsurajofficial@gmail.com</a></p>
          <p>Phone: +91 9370944696</p>
          <p>Location: Mumbai, India</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
