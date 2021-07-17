import React, { useState } from 'react';
import '../../../assets/css/project-cards.css';
import projects from '../../../data/projects-json';

import ProjectCardImage from './ProjectCardImage';
import ProjectCardBody from '../../Project/ProjectCard/ProjectCardBody';

function ProjectCard({projectPage}) {
    const page = projectPage;

    return (
        <>
        { page === "featured" ? projects.filter(project => project.featured).map((project, i) => (
            <div className="project-card">
                <ProjectCardImage name={project.name}></ProjectCardImage>
                <ProjectCardBody title={project.title} tools={project.tools} description={project.description} url={project.url} github={project.github}></ProjectCardBody>
            </div>
        ))
        :
        projects.map((project, i) => (
            <div className="project-card">
                <ProjectCardImage name={project.name}></ProjectCardImage>
                <ProjectCardBody title={project.title} tools={project.tools} description={project.description} url={project.url} github={project.github}></ProjectCardBody>
            </div>
        ))
        }
    </>
    );
}

export default ProjectCard;

