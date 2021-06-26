import React from 'react';
import ProjectB from '../ProjectB';
import Nav from '../Nav';

function ProjectDetails() {
  return (
      <React.Fragment>
        <Nav></Nav>
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