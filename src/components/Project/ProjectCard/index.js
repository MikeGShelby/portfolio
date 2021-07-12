import React, { useState } from 'react';
import ProjectCardImage from '../../Project/ProjectCard/ProjectCardImage';
import ProjectCardBody from '../../Project/ProjectCard/ProjectCardBody';


function ProjectCard({projectPage}) {

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

    const [projectsB] = useState([
        {
            title: "Taskinator",
            name: 'taskinator',
            tools: "Javascript / CSS",
            description: 'A Kanban style task management application that allows the user to drag and drop tasks.',
            url: "https://mikegshelby.github.io/taskinator/",
            github: "https://github.com/MikeGShelby/taskinator",
            featured: false
        },
        {
            title: "Work Day Scheduler",
            name:'work-day-scheduler',
            tools: "Javascript / CSS",
            description: 'A simple calendar application that allows a user to save events for each hour of the day.',
            url: "https://mikegshelby.github.io/work-day-scheduler/",
            github: "https://github.com/MikeGShelby/work-day-scheduler",
            featured: false
        },

        {
            title: "Budget Tracker",
            name: 'budget-tracker',
            tools: "MongoDB",
            description: 'A budget tracking application that allows users to add expenses and deposits to their budget. The application utilizes indexedDB to accept budget transactions regardless of internet connectivity.',
            url: "https://budget-tracker-h1.herokuapp.com/",
            github: "https://github.com/MikeGShelby/budget-tracker",
            featured: false
        }
    ]);

    //If ProjectCard component displays on Home page component, then render only featured projects. Otherwise, render all projects
    return (
    <>
        { page === "featured" ? projects.filter(project => project.featured).map((project, i) => (
            <div className="project-card round-borders bg-dark-card opaque-card" key={project.name}>
                <ProjectCardImage name={project.name}></ProjectCardImage>
                <ProjectCardBody title={project.title} tools={project.tools} description={project.description} url={project.url} github={project.github}></ProjectCardBody>
            </div>
        ))
        :
        projects.map((project, i) => (
            <div className="project-card round-borders bg-dark-card opaque-card" key={project.name}>
                <ProjectCardImage name={project.name}></ProjectCardImage>
                <ProjectCardBody title={project.title} tools={project.tools} description={project.description} url={project.url} github={project.github}></ProjectCardBody>
            </div>
        ))
        }
    </>
    );
}

export default ProjectCard;
