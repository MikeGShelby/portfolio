import React, {Fragment, useState} from 'react';

import './projects.css';
import projects from '../../data/projects-json';



import ProjectCard from '../Project';

import FeaturedProjects from './FeaturedProjects';
import FilteredProjects from './FilteredProjects';



function Projects({projectPage}) {
  const page = projectPage;

  const [filteredTools, setFilteredTools] = useState([]);

  return (
    <section class="project-section home-section">
        <h3 id="projects" class="section-title project-section-title text-center">My Projects</h3>


        <div className="projects-container">
          { page === "featured" ?
          <FeaturedProjects></FeaturedProjects>

            // projects.filter(project => project.featured).map((project, i) => (
            //       <ProjectCard project={project}/>
            // ))

              :
              <FilteredProjects></FilteredProjects>

              // projects.filter(project => displayTools.every(tool => project.tools.includes(tool))).map(project => (
              //     <ProjectCard project={project}/>

              // projects.filter(project => filteredTools.every(tool => project.tools.includes(tool))).map(project => (
              //     <ProjectCard project={project}/>

          }
      </div>


        {/* { page === "featured" && <a href="#/projects" className="btn-grad btn-small btn-projects">View More of My Work</a> } */}
    </section>
  );
}

export default Projects;