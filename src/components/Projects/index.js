import React from 'react';
import Project from '../Project';

function Projects() {
  return (
    <section class="project-section bg-light">
      <div className="container">
        <h3 id="projects" class="section-title project-section-title text-center text-dark">My Projects</h3>
        <div className="featured-projects">
          <Project></Project>
        </div>
        <a href="/#projects" className="btn-grad btn-small btn-projects">SEE MORE OF MY WORK</a>
      </div>
    </section>
  );
}

export default Projects;