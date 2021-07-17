import React from 'react';
import ScriptTag from 'react-script-tag';

import ProjectCard from '../../Project/ProjectCard';

function ProjectsFeatured() {
  return (
    <section class="project-section bg-light">
        <h3 id="projects" class="section-title project-section-title text-center text-dark">My Projects</h3>

        <div className="projects-container">
          <ProjectCard projectPage={'featured'}></ProjectCard>
        </div>

        <a href="#/projects" className="btn-grad btn-small btn-projects">View More of My Work</a>
    </section>
  );
}

export default ProjectsFeatured;