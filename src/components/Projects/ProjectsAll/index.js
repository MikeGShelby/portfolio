import React from 'react';

import ProjectCard from '../../Project';

function ProjectsAll() {
  return (
      <React.Fragment>
        <section class="project-section bg-light">
                <h3 id="projects" class="section-title page-title project-section-title text-center text-dark color-font-dark">My Projects</h3>

                <div className="projects-container">
                  <ProjectCard></ProjectCard>
                </div>
        </section>
    </React.Fragment>
  );
}

export default ProjectsAll;