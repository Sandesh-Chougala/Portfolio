import React from 'react';
import '../styles/contact.css';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="contact-container">
      <h2>
        CONTACT <span className="highlight">ME</span>
      </h2>
      <p>Email: <a href="mailto:sandeshchougala04@gmail.com">sandeshchougala204@gmail.com</a></p>
      <p>Phone: <a href="tel:+918971628116">+91 63604 28201</a></p>

      <form action="https://formspree.io/f/xnndpypp" method="POST" className="contact-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>

    <div className="social-media">
      <h3>Social <span className="highlight">Media</span></h3>
        <div className="social-icons">
          <a href="https://github.com/Sandesh-Chougala" target="_blank" rel="noopener noreferrer">
              <FaGithub />
          </a>
          <a href="https://www.instagram.com/mr_sandy_201?igsh=M2VyMnJtMXcxczFm" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
          </a>
      </div>
    </div>

  </section>
);

export default Contact;
