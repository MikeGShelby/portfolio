import React, { useState } from 'react';
import '../../../project-cards.css';
import Image from "../../../assets/images/projects-screenshots/cinasearch.jpg";

import ProjectCardImage from '../../Project/ProjectCard/ProjectCardImage';
import ProjectCardBody from '../../Project/ProjectCard/ProjectCardBody';
import ProjectCardLinks from '../../Project/ProjectCard/ProjectCardBody/ProjectCardLinks';
import ProjectCardTools from '../../Project/ProjectCard/ProjectCardBody/ProjectCardText/ProjectCardTools';


function ProjectCardTest({projectPage}) {
    const page = projectPage;
    const [projects] = useState([
        {
            title: "Diet Delivery",
            name: 'diet-delivery',
            tools: ["MySQL","Handlebars"],
            description: "A web application for a meal delivery service that specializes in diets for chronic diseases, such as renal disease and diabetes. I contributed to every aspect of this team project, including all front end and back end components.",
            url: "https://diet-delivery.herokuapp.com/",
            github: "https://github.com/MikeGShelby/diet-delivery",
            featured: true
        },
        {
            title: "Tech Blog",
            name: 'tech-blog',
            tools: ["MySQL","Handlebars"],
            description: "A CMS-style blog site that allows users to create a user account, log into their user account, publish blog posts, and comment on other users' blog posts.",
            url: "https://tech-blog-h.herokuapp.com/",
            github: "https://github.com/MikeGShelby/tech-blog",
            featured: true
        },
        {
            title: "CinaSearch",
            name: 'cinasearch',
            tools: ["JavaScript","Bulma"],
            description: 'A movie search application that retrieves movie-related data from the OMDb and Youtube APIs. My main contribution to this team project was front-end layout and design using Bulma and CSS.',
            url: "https://mikegshelby.github.io/cinasearch/",
            github: "https://github.com/MikeGShelby/cinasearch",
            featured: true
        },
        {
            title: "Fit Club",
            name: 'fit-club',
            tools: ["MongoDB","React"],
            description: 'A social fitness application that connects fitness enthusiasts and fitness professionals. The application allows users to share fitness goals and related information with other users and with trainers.',
            url: "https://fit-clob.herokuapp.com/",
            github: "https://github.com/maxhealy01/fit-club",
            featured: false
        },
        {
            title: "Weather Dashboard",
            name: 'weather-dashboard',
            tools: ["JavaScript","CSS"],
            description: 'A weather dashboard application that features dynamically updated HTML and CSS. Weather data is obtained through the OpenWeather API.',
            url: "https://mikegshelby.github.io/weather-dashboard/",
            github: "https://github.com/MikeGShelby/weather-dashboard",
            featured: false
        },
        {
            title: "Password Generator",
            name: 'password-generator',
            tools: ["JavaScript"],
            description: 'A password generator application that generates a secure, random password after prompting the user to select from multiple password character criteria. Criteria include password length between 8 and 128 characters, lowercase characters, uppercase characters, numbers, and symbols.',
            url: "https://mikegshelby.github.io/password-generator/",
            github: "https://github.com/MikeGShelby/password-generator",
            featured: false
        }
    ]);

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

