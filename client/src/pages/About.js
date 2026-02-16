import React from 'react';
import { Link } from 'react-router-dom';

const TIMELINE = [
  { year: '2025-26', title: 'Lead Full Stack Developer', company: 'Aurex', desc: 'Architected high-availability e-commerce platform with 2,500+ concurrent users. Integrated Stripe & Razorpay with 99.9% transaction reliability, optimized MongoDB for 38% faster queries, and built real-time admin dashboard.' },
  { year: '2025', title: 'Backend Engineer', company: 'Course Management System', desc: 'Built scalable Express backend handling 1,200+ concurrent student enrollments. Implemented JWT-based auth, Zod validation, and designed NoSQL schemas for 5,000+ data points with zero redundancy.' },
  { year: '2027', title: 'B.Tech in Computer Science Engineering', company: 'Gyan Ganga Institute of Technology and Sciences', desc: 'Jablpur, India. CGPA: 6.91/10. Expected graduation May 2027. Relevant coursework: Advanced Data Structures, Operating System Internals, Database Systems.' },
];

const About = () => {
  return (
    <div className="page about-page">
      <div className="page-header">
        <span className="section-tag">About Me</span>
        <h1 className="page-title">The Person Behind the Code</h1>
      </div>

      <div className="about-grid">
        <div className="about-image-section">
          <div className="about-avatar">
            <div className="avatar-placeholder">HKP</div>
            <div className="avatar-ring" />
            <div className="avatar-ring ring-2" />
          </div>
          <div className="about-contact-card">
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Jamshedpur, Jharkhand, India</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <a href="mailto:harshkumarpandit2004@gmail.com">harshkumarpandit2004@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💼</span>
              <a href="https://linkedin.com/in/harsh-kumar-pandit" target="_blank" rel="noreferrer">LinkedIn Profile</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🐙</span>
              <a href="https://github.com/Harsh-Kumar-Pandit" target="_blank" rel="noreferrer">GitHub Profile</a>
            </div>
          </div>
        </div>

        <div className="about-text-section">
          <h2>Technical Software Engineer & Full Stack Developer</h2>
          <p>
            I'm a Technical Software Engineer with specialized expertise in building high-availability 
            web applications. I have a proven track record in architecting RESTful APIs, implementing secure 
            JWT authentication, and integrating enterprise payment solutions including Stripe and Razorpay.
          </p>
          <p>
            Focused on Backend Engineering and System Design with deep understanding of Data Structures 
            and Algorithms to optimize large-scale software systems for 100% reliability. I specialize in 
            building scalable MERN stack applications with a strong foundation in system architecture and 
            performance optimization.
          </p>
          <div className="about-values">
            {['System Design', 'Performance', 'Clean Code', 'Scalability'].map((v) => (
              <span key={v} className="value-tag">{v}</span>
            ))}
          </div>
          <div className="about-actions">
            <Link to="/contact" className="btn btn-primary">Let's Work Together</Link>
            <a href="/resume.pdf" className="btn btn-outline" target="_blank" rel="noreferrer">
              Download Resume ↗
            </a>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="timeline-section">
        <h2 className="section-title">Experience & Education</h2>
        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <span className="timeline-company">{item.company}</span>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Languages</h3>
            <ul className="skill-list">
              <li>JavaScript ES6</li>
              <li>Java 8</li>
              <li>Python 3</li>
              <li>SQL</li>
              <li>HTML5 & CSS3</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Backend</h3>
            <ul className="skill-list">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST API Design</li>
              <li>JWT Authentication</li>
              <li>Middleware Architecture</li>
              <li>Stripe & Razorpay Integration</li>
              <li>Zod Data Validation</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Frontend</h3>
            <ul className="skill-list">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Redux</li>
              <li>Context API</li>
              <li>React Router</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Database</h3>
            <ul className="skill-list">
              <li>MongoDB</li>
              <li>Mongoose ODM</li>
              <li>MySQL</li>
              <li>Database Design</li>
              <li>MongoDB Indexing & Aggregation</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Cloud & DevOps</h3>
            <ul className="skill-list">
              <li>Git & GitHub</li>
              <li>Cloudinary CDN</li>
              <li>Vercel Deployment</li>
              <li>Performance Optimization</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Developer Tools</h3>
            <ul className="skill-list">
              <li>Postman</li>
              <li>NPM & Package Management</li>
              <li>Chrome DevTools</li>
              <li>Bash Scripting</li>
              <li>VS Code</li>
            </ul>
          </div>

          <div className="skill-category">
            <h3>Core Engineering</h3>
            <ul className="skill-list">
              <li>Data Structures & Algorithms</li>
              <li>Operating Systems</li>
              <li>System Design & Architecture</li>
              <li>Database Management Systems</li>
            </ul>
          </div>
        </div>
        
        <div className="section-cta" style={{ marginTop: '2rem' }}>
          <Link to="/skills" className="btn btn-outline">View Detailed Skills with Levels →</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
