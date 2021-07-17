import React, { useState } from 'react';

import ProjectCardLinks from '../ProjectCardBody/ProjectCardLinks';
import ProjectCardTools from '../ProjectCardBody/ProjectCardTools';

function ProjectCardBody({title, tools, description, url, github}) {
    return (
        <div className="project-card-body">
            <div className="project-card-content">

                <div className="project-card-details">
                    <h4 className="project-card-title">{title}</h4>
                    <ProjectCardTools tools={tools}></ProjectCardTools>
                    <p>{description}</p>
                </div>

                <ProjectCardLinks url={url} github={github}></ProjectCardLinks>
            </div>
        </div>
    );
}

export default ProjectCardBody;