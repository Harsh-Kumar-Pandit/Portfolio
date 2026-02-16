import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Loader from '../components/Loader';
import { useProjects } from '../hooks/usePortfolio';

const CATEGORIES = ['all', 'fullstack', 'frontend', 'backend', 'mobile', 'other'];

const Projects = () => {
  const { projects, loading } = useProjects();
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="page projects-page">
      <div className="page-header">
        <span className="section-tag">My Work</span>
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">
          {projects.length} projects built with passion and precision
        </p>
      </div>

      <div className="filter-bar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <Loader fullPage />
      ) : filtered.length > 0 ? (
        <div className="projects-grid animate-in">
          {filtered.map((project, i) => (
            <ProjectCard key={project._id} project={project} index={i} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">📭</div>
          <h3>No projects in this category yet</h3>
          <p>Check back soon or browse all projects.</p>
        </div>
      )}
    </div>
  );
};

export default Projects;
