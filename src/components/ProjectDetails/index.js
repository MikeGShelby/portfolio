import React from 'react';
import ProjectB from '../ProjectB';
import Nav from '../Nav';
import HeaderDetails from '../HeaderDetails';

function ProjectDetails() {
  return (
      <React.Fragment>
        <HeaderDetails></HeaderDetails>
        <section class="project-section bg-light">
            <div className="container">
                <h3 id="projects" class="section-title project-section-title text-center text-dark">My Projects</h3>
                <div className="featured-projects feature-projects-wide">
                <ProjectB></ProjectB>
                </div>
            </div>
        </section>
    </React.Fragment>
  );
}

export default ProjectDetails;