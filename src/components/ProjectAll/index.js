import React, { useState } from 'react';

function ProjectsAll(selectedProjects) {

    const [projectsFeatured] = useState([
        {
            title: "Diet Delivery",
            name: 'diet-delivery',
            tools: "MySQL / Handlebars",
            description: "A web application for a meal delivery service that specializes in diets for chronic diseases, such as renal disease and diabetes. I contributed to every aspect of this team project, including all front end and back end components.",
            url: "https://diet-delivery.herokuapp.com/",
            github: "https://github.com/MikeGShelby/diet-delivery"
        },
        {
            title: "Tech Blog",
            name: 'tech-blog',
            tools: "MySQL / Handlebars",
            description: "A CMS-style blog site that allows users to create a user account, log into their user account, publish blog posts, and comment on other users' blog posts.",
            url: "https://tech-blog-h.herokuapp.com/",
            github: "https://github.com/MikeGShelby/tech-blog"
        },
        {
            title: "CinaSearch",
            name: 'cinasearch',
            tools: "JavaScript / Bulma",
            description: 'A movie search application that retrieves movie-related data from the OMDb and Youtube APIs. My main contribution to this team project was front-end layout and design using Bulma and CSS.',
            url: "https://mikegshelby.github.io/cinasearch/",
            github: "https://github.com/MikeGShelby/cinasearch"
        }
    ]);

    const [projectsAll] = useState([
        {
            title: "Diet Delivery",
            name: 'diet-delivery',
            tools: "MySQL / Handlebars",
            description: "A web application for a meal delivery service that specializes in diets for chronic diseases, such as renal disease and diabetes. I contributed to every aspect of this team project, including all front end and back end components.",
            url: "https://diet-delivery.herokuapp.com/",
            github: "https://github.com/MikeGShelby/diet-delivery"
        },
        {
            title: "Tech Blog",
            name: 'tech-blog',
            tools: "MySQL / Handlebars",
            description: "A CMS-style blog site that allows users to create a user account, log into their user account, publish blog posts, and comment on other users' blog posts.",
            url: "https://tech-blog-h.herokuapp.com/",
            github: "https://github.com/MikeGShelby/tech-blog"
        },
        {
            title: "CinaSearch",
            name: 'cinasearch',
            tools: "JavaScript / Bulma",
            description: 'A movie search application that retrieves movie-related data from the OMDb and Youtube APIs. My main contribution to this team project was front-end layout and design using Bulma and CSS.',
            url: "https://mikegshelby.github.io/cinasearch/",
            github: "https://github.com/MikeGShelby/cinasearch"
        },
        {
            title: "Fit Club",
            name: 'fit-club',
            tools: "MongoDB / React",
            description: 'A social fitness application that connects fitness enthusiasts and fitness professionals. The application allows users to share fitness goals and related information with other users and with trainers.',
            url: "https://fit-clob.herokuapp.com/",
            github: "https://github.com/maxhealy01/fit-club"
        },
        {
            title: "Taskinator",
            name: 'taskinator',
            tools: "Javascript / CSS",
            description: 'A task management application.',
            url: "https://mikegshelby.github.io/taskinator/",
            github: "https://github.com/MikeGShelby/taskinator"
        },
        {
            title: "Work Day Scheduler",
            name:'work-day-scheduler',
            tools: "Javascript / CSS",
            description: 'A simple calendar application that allows a user to save events for each hour of the day.',
            url: "https://mikegshelby.github.io/work-day-scheduler/",
            github: "https://github.com/MikeGShelby/work-day-scheduler"
        },
        {
            title: "Weather Dashboard",
            name: 'weather-dashboard',
            tools: "Javascript / CSS",
            description: 'A weather dashboard application that features dynamically updated HTML and CSS. Weather data is obtained through the OpenWeather API.',
            url: "https://mikegshelby.github.io/weather-dashboard/",
            github: "https://github.com/MikeGShelby/weather-dashboard"
        },
        {
            title: "Budget Tracker",
            name: 'budget-tracker',
            tools: "MongoDB",
            description: 'A budget tracking application that allows users to add expenses and deposits to their budget. The application utilizes indexedDB to accept budget transactions regardless of internet connectivity.',
            url: "https://budget-tracker-h1.herokuapp.com/",
            github: "https://github.com/MikeGShelby/budget-tracker"
        },
        {
            title: "Placeholder Project 2",
            name: 'placeholder-4',
            tools: "Javascript",
            description: 'placeholder description text.',
            url: "https://mikegshelby.github.io/weather-dashboard/",
            github: ""
        }
    ]);

  return (
    <>
        {projectsAll.map((project, i) => (
                    <div className="project-card round-borders bg-dark-card opaque-card" key={project.name}>
                        <img
                            src={require(`../../assets/images/projects-screenshots/${project.name}.jpg`)}
                            alt={project.name}
                            className="project-card-image round-borders"
                        />

                        <div className="project-card-main-content">
                            <div className="project-card-text">
                                <h4 className="section-title">{project.title}</h4>
                                <h5>{project.tools}</h5>
                                <p>
                                {project.description}
                                </p>
                            </div>
                            <div className="project-links">
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-outine"><i className="fas fa-external-link-alt"></i>      VIEW SITE</a>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-outline"><i className="fab fa-github"></i>      VIEW GITHUB</a>
                            </div>
                        </div>
                    </div>
        ))}
    </>
  );
}

export default ProjectsAll;