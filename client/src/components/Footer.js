import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span>&lt;</span>Harsh Pandit<span>/&gt;</span>
          </Link>
          <p>Building digital experiences with clean code and bold design.</p>
        </div>
        <div className="footer-links">
          <h4>Navigation</h4>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-social">
          <h4>Connect</h4>
          <a href="https://github.com/Harsh-Kumar-Pandit" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/harsh-kumar-pandit" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:harshkumarpandit2004@gmail.com">Email</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Harsh Pandit. Built with MERN Stack.</p>
      </div>
    </footer>
  );
};

export default Footer;
