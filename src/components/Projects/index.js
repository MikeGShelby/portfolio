import React from 'react';

import './projects.css';

import FeaturedProjects from './FeaturedProjects';
import FilteredProjects from './FilteredProjects';

function Projects({projectPage}) {
  const page = projectPage;

  return (
    <section class="project-section home-section">
        <h3 id="projects" class="section-title project-section-title text-center">My Projects</h3>

        <div className="projects-container">
          { page === "featured" ?
            <FeaturedProjects></FeaturedProjects>
            :
            <FilteredProjects></FilteredProjects>
          }
        </div>
    </section>
  );
}

export default Projects;