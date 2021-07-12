import React, { useState } from 'react';
import ProjectCardText from '../ProjectCardBody/ProjectCardText';
import ProjectCardLinks from '../ProjectCardBody/ProjectCardLinks';

function ProjectCardBody({title, tools, description, url, github}) {
  return (
    <>
      <div className="project-card-main-content project-card-content-background">
        <ProjectCardText title={title} tools={tools} description={description}></ProjectCardText>
        <ProjectCardLinks url={url} github={github}></ProjectCardLinks>
      </div>
    </>
  )
}

export default ProjectCardBody;