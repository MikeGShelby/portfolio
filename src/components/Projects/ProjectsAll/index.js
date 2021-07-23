import React from 'react';

import ProjectCard from '../../Project/ProjectCard';
import HeaderDetails from '../../Header/HeaderDetails';
import Contact from '../../Contact';


function ProjectsAll() {
  return (
      <React.Fragment>
        <HeaderDetails></HeaderDetails>
        <section class="project-section bg-light">
                <h3 id="projects" class="section-title project-section-title text-center text-dark color-font-dark">My Projects</h3>

                <div className="projects-container">
                  <ProjectCard></ProjectCard>
                </div>
        </section>
    <Contact></Contact>
    </React.Fragment>
  );
}

export default ProjectsAll;