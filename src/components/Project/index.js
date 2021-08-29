import React, { useState } from 'react';

// import '../../assets/css/index.css';

import './project-cards.css';

import ProjectCardImage from './ProjectCardImage';
import ProjectCardBody from './ProjectCardBody';

function ProjectCard({project}) {
    const {id, name, title, tools, description, url, github} = project;

    return (
        <div className="project-card" key={id}>
            <ProjectCardImage name={name}></ProjectCardImage>
            <ProjectCardBody title={title} tools={tools} description={description} url={url} github={github}></ProjectCardBody>
        </div>
    );
}

export default ProjectCard;

