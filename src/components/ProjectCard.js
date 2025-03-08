import React from 'react';
import { Link } from 'react-router-dom';
// import './ProjectCard.css'; // Optional: Create and customize this file if desired
import  './ProjectCard.css'

const ProjectCard = ({ project }) => {
  return (
      <div className="project-card">
      <i class="fa-brands fa-java fa-3x me-auto"></i>
      <h2>{project.title}</h2>
      
      {project.description && <p>{project.description}</p>}
      <Link to={`/projects/${project.id}`}>
        <button className="btn">View Project</button>
      </Link>
    </div>
  );
};

export default ProjectCard;
