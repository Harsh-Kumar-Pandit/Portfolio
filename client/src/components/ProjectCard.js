import React from 'react';

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="project-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="project-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-placeholder">
            <span>{project.title[0]}</span>
          </div>
        )}
        <div className="project-overlay">
          <div className="project-links">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link live">
                Live ↗
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="project-link github">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span className="project-category">{project.category}</span>
          {project.featured && <span className="project-featured">★ Featured</span>}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tech">
          {project.tech?.map((t) => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
