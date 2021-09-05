import React, {Fragment, useState} from 'react';

import './projects.css';
import projects from '../../data/projects-json';

import ProjectCard from '../Project';


function FeaturedProjects() {

  const [filteredTools, setFilteredTools] = useState([]);

  return (
        <div className="projects-container">
            { projects.filter(project => project.featured).map((project, i) => (
                <ProjectCard project={project}/>
            ))}
            <a href="#/projects" className="btn-grad btn-small btn-projects">View More of My Work</a>
        </div>
  );
}

export default FeaturedProjects;