import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import SkillBar from '../components/SkillBar';
import Loader from '../components/Loader';
import { useProjects, useSkills } from '../hooks/usePortfolio';

const ROLES = ['Full Stack Developer', 'Backend Engineer', 'System Architect', 'MERN Specialist'];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  const { projects, loading: projLoading } = useProjects({ featured: true });
  const { skills, loading: skillLoading } = useSkills();

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const speed = deleting ? 60 : 120;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setRoleIndex((r) => (r + 1) % ROLES.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const topSkills = skills?.slice(0, 6) || [];

  return (
    <div className="page home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-glow" />
        </div>
        <div className="hero-content">
          <div className="hero-badge">Available for work 🟢</div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Harsh Kumar Pandit</span>
          </h1>
          <h2 className="hero-subtitle">
            I'm a{' '}
            <span className="typewriter">
              {displayText}
              <span className="cursor">|</span>
            </span>
          </h2>
          <p className="hero-description">
            Technical Software Engineer building high-availability web applications with MERN stack. 
            Expert in API design, payment integrations, and system optimization for 100% reliability.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get In Touch
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat"><span className="stat-num">2+</span><span className="stat-label">Major Projects</span></div>
            <div className="stat"><span className="stat-num">5+</span><span className="stat-label">Tech Stack</span></div>
            <div className="stat"><span className="stat-num">100%</span><span className="stat-label">Reliability</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-block">
            <div className="code-header">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="code-title">portfolio.js</span>
            </div>
            <pre className="code-content">
{`const developer = {
  name: "Harsh Kumar Pandit",
  stack: ["MongoDB", "Express",
          "React", "Node.js"],
  expertise: ["API Design", "Auth"],
  reliability: "99.9%",
  available: true
};

developer.build("amazing things");`}
            </pre>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section featured-section">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">A selection of my best work</p>
        </div>
        {projLoading ? (
          <Loader />
: projects?.length > 0 ? (
  <div className="projects-grid">
            {projects.map((project, i) => (
              <ProjectCard key={project._id} project={project} index={i} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No featured projects yet. Add some from the admin panel!</p>
          </div>
        )}
        <div className="section-cta">
          <Link to="/projects" className="btn btn-outline">View All Projects →</Link>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="section skills-preview-section">
        <div className="section-header">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">Top Skills</h2>
          <p className="section-subtitle">Technologies I work with daily</p>
        </div>
        {skillLoading ? (
          <Loader />
        ) : (
          <div className="skills-preview-grid">
            {topSkills.map((skill, i) => (
              <SkillBar key={skill._id} skill={skill} delay={i * 150} />
            ))}
          </div>
        )}
        <div className="section-cta">
          <Link to="/skills" className="btn btn-outline">View All Skills →</Link>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-content">
          <h2>Let's build something <span className="highlight">amazing</span> together</h2>
          <p>Open to full-time roles, freelance projects, and collaborations.</p>
          <Link to="/contact" className="btn btn-primary">Start a Conversation</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
