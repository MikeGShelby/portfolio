import React from 'react';

import ProjectCard from '../../Project/ProjectCard';
import HeaderDetails from '../../Header/HeaderDetails';


function ProjectsAll() {
  return (
      <React.Fragment>
        <HeaderDetails></HeaderDetails>
        <section class="project-section bg-light">
            <div className="container">
                <h3 id="projects" class="section-title project-section-title text-center text-dark color-font-dark">My Projects</h3>

                <div className="projects-container feature-projects-wide">
                  <ProjectCard></ProjectCard>
                </div>
            </div>
        </section>
    </React.Fragment>
  );
}

export default ProjectsAll;