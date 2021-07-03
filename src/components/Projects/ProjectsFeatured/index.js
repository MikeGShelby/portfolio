import React from 'react';
import ScriptTag from 'react-script-tag';

import ProjectFeatured from '../../Project/ProjectFeatured';
import ProjectCard from '../../Project/ProjectCard';

function ProjectsFeatured() {
  function clickButton() {
    return "test"
 }

 const click = clickButton()
 console.log(click)


  return (
    <section class="project-section bg-light">

        <h3 id="projects" class="section-title project-section-title text-center text-dark">My Projects</h3>
        <div className="featured-projects">
          {/* <ProjectFeatured></ProjectFeatured> */}
          <ProjectCard projectPage={'featured'}></ProjectCard>

        </div>
        <a href="#/projects" className="btn-grad btn-small btn-projects">SEE MORE OF MY WORK</a>
    </section>
  );
}

export default ProjectsFeatured;