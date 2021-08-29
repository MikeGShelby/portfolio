import React from 'react';

import './projects.css';
import projects from '../../data/projects-json';

import ProjectCard from '../Project';

function Projects({projectPage}) {
  const page = projectPage;

  return (
    <section class="project-section home-section">
        <h3 id="projects" class="section-title project-section-title text-center">My Projects</h3>

        <div className="projects-container">
          { page === "featured" ? projects.filter(project => project.featured).map((project, i) => (
                  <ProjectCard project={project}/>
              ))
              :
              projects.map((project, i) => (
                  <ProjectCard project={project}/>
              ))
            }
        </div>

        { page === "featured" && <a href="#/projects" className="btn-grad btn-small btn-projects">View More of My Work</a> }
    </section>
  );
}

export default Projects;