import React from 'react';

import './projects.css';

import ProjectCard from '../Project';
import { render } from '@testing-library/react';

function Projects({projectPage}) {
  const page = projectPage;

  return (
    <section class="project-section home-section">
        <h3 id="projects" class="section-title project-section-title text-center">My Projects</h3>

        <div className="projects-container">
          <ProjectCard projectPage={page}></ProjectCard>
        </div>

        { page === "featured" && <a href="#/projects" className="btn-grad btn-small btn-projects">View More of My Work</a> }
    </section>
  );
}

export default Projects;