import React, { useState } from 'react';
import ProjectCardTools from './ProjectCardTools';

function ProjectCardText({title, tools, description}) {
  return (
            <div className="project-card-text">
                <h4 className="section-title">{title}</h4>
                <ProjectCardTools tools={tools}></ProjectCardTools>
                <p>
                {description}
                </p>
            </div>
  )
}

export default ProjectCardText;