import React from 'react';
import Project from '../Project';

function Projects() {
  return (
    <section class="project-section bg-light">
        <h3 id="projects" class="section-title project-section-title text-center text-dark">Projects</h3>
        <div className="featured-projects">
          <Project></Project>
        </div>
    </section>
  );
}

export default Projects;