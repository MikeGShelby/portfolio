import React, { useState } from 'react';
import '../../../project-cards.css';
import projects from '../../../data/projects-json';

import ProjectCardImage from '../../Project/ProjectCard/ProjectCardImage';
import ProjectCardBody from '../../Project/ProjectCard/ProjectCardBody';
import ProjectCardLinks from '../../Project/ProjectCard/ProjectCardBody/ProjectCardLinks';
import ProjectCardTools from '../../Project/ProjectCard/ProjectCardBody/ProjectCardText/ProjectCardTools';


function ProjectCardTest({projectPage}) {
    const page = projectPage;

    return (
        <>
        { page === "featured" ? projects.filter(project => project.featured).map((project, i) => (
            <div className="hero">
                <ProjectCardImage name={project.name}></ProjectCardImage>

                <div className="hero-description-bk">
                    <div className="hero-description">
                        <h4 className="section-title">{project.title}</h4>
                        <ProjectCardTools tools={project.tools}></ProjectCardTools>
                        <p>{project.description}</p>
                    </div>
                    <ProjectCardLinks url={project.url} github={project.github}></ProjectCardLinks>
                </div>
            </div>
        ))
        :
        projects.map((project, i) => (
            <div className="hero">
                <ProjectCardImage name={project.name}></ProjectCardImage>

                <div className="hero-description-bk">
                    <div className="hero-description">
                        <h4 className="section-title">{project.title}</h4>
                        <ProjectCardTools tools={project.tools}></ProjectCardTools>
                        <p>{project.description}</p>
                    </div>
                    <ProjectCardLinks url={project.url} github={project.github}></ProjectCardLinks>
                </div>
            </div>
        ))
        }
    </>
    );
}

export default ProjectCardTest;

