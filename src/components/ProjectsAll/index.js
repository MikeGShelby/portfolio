import React from 'react';
import Project from '../Project';
import HeaderDetails from '../HeaderDetails';

function ProjectsAll() {
  return (
      <React.Fragment>
        <HeaderDetails></HeaderDetails>
        <section class="project-section project-section-details bg-light section-details-padding-top">
            <div className="container">
                <h3 id="projects" class="section-title project-section-title text-center text-dark color-font-dark">My Projects</h3>
                <div className="featured-projects feature-projects-wide">
                <Project></Project>
                </div>
            </div>
        </section>
    </React.Fragment>
  );
}

export default ProjectsAll;