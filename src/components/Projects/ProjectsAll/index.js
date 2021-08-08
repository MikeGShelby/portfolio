import React from 'react';

import ProjectCard from '../../Project';
import HeaderDetails from '../../Header/HeaderDetails';
import Footer from '../../Footer';


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
    <Footer></Footer>
    </React.Fragment>
  );
}

export default ProjectsAll;