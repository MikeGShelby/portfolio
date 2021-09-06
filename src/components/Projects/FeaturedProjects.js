import React, {Fragment} from 'react';

import './projects.css';
import projects from '../../data/projects-json';

import ProjectCard from '../Project';

function FeaturedProjects() {
    // sort all projects in ascending order, based on project name
    var sortedProjects = projects.sort(function(a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
    });

  return (
    <Fragment>
        <div className="projects-container">
            { sortedProjects.filter(project => project.featured).map((project, i) => (
                <ProjectCard project={project}/>
            ))}
        </div>
        <a href="#/projects" className="btn-grad btn-small btn-projects">View More of My Work</a>
    </Fragment>
  );
}

export default FeaturedProjects;