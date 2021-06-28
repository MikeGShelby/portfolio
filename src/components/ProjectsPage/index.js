import React from 'react';
import ProjectAll from '../ProjectAll';
import HeaderDetails from '../HeaderDetails';

function ProjectsPage() {
  return (
      <React.Fragment>
        <HeaderDetails></HeaderDetails>
        <section class="project-section project-section-details bg-light section-details-padding-top">
            <div className="container">
                <h3 id="projects" class="section-title project-section-title text-center text-dark color-font-dark">My Projects</h3>
                <div className="featured-projects feature-projects-wide">
                <ProjectAll></ProjectAll>
                </div>
            </div>
        </section>
    </React.Fragment>
  );
}

export default ProjectsPage;