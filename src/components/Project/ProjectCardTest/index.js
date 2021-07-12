import React from 'react';
import '../../../project-cards.css';
import Image from "../../../assets/images/projects-screenshots/cinasearch.jpg";

import ProjectCardImage from '../../Project/ProjectCard/ProjectCardImage';
import ProjectCardBody from '../../Project/ProjectCard/ProjectCardBody';
import ProjectCardLinks from '../../Project/ProjectCard/ProjectCardBody/ProjectCardLinks';


function ProjectCardTest({projectPage}) {
    return (
        <>
       <div className="hero">
            <img className="hero-profile-img" src={Image} alt="" />

            <div className="hero-description-bk">
                <div className="hero-description">
                    <h4 className="section-title">CinaSearch</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <ProjectCardLinks></ProjectCardLinks>
            </div>
        </div>

        <div className="hero">
            <img className="hero-profile-img" src={Image} alt="" />

            <div className="hero-description-bk">
                <div className="hero-description">
                    <h4 className="section-title">CinaSearch</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <ProjectCardLinks></ProjectCardLinks>
            </div>
        </div>

        <div className="hero">
            <img className="hero-profile-img" src={Image} alt="" />

            <div className="hero-description-bk">
                <div className="hero-description">
                    <h4 className="section-title">CinaSearch</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <ProjectCardLinks></ProjectCardLinks>
            </div>
        </div>
    </>
    );
}

export default ProjectCardTest;

