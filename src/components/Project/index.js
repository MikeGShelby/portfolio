import React, { useState } from 'react';

function Project() {

    const [projectsFeatured] = useState([
        {
            title: "Diet Delivery",
            name: 'diet-delivery',
            tools: "MySQL / Express / Handlebars / Node",
            url: "https://diet-delivery.herokuapp.com/",
            github: "https://github.com/MikeGShelby/diet-delivery"
        },
        {
            title: "Tech Blog",
            name: 'tech-blog',
            tools: "MySQL / Express / Handlebars / Node",
            url: "https://tech-blog-h.herokuapp.com/",
            github: "https://github.com/MikeGShelby/tech-blog"
        },
        {
            title: "CinaSearch",
            name: 'cinasearch',
            tools: "Bulma / JavaScript",
            url: "https://mikegshelby.github.io/cinasearch/",
            github: "https://github.com/MikeGShelby/cinasearch"
        },
    ]);

    const [projects] = useState([
        {
            title: "Diet Delivery",
            name: 'diet-delivery',
            tools: "MySQL / Express / Handlebars / Node",
            url: "https://diet-delivery.herokuapp.com/",
            github: "https://github.com/MikeGShelby/diet-delivery"
        },
        {
            title: "Tech Blog",
            name: 'tech-blog',
            tools: "MySQL / Express / Handlebars / Node",
            url: "https://tech-blog-h.herokuapp.com/",
            github: "https://github.com/MikeGShelby/tech-blog"
        },
        {
            title: "CinaSearch",
            name: 'cinasearch',
            tools: "Bulma / JavaScript",
            url: "https://mikegshelby.github.io/cinasearch/",
            github: "https://github.com/MikeGShelby/cinasearch"
        },
        {
            title: "Fit Club",
            name: 'fit-club',
            tools: "React / Javascript",
            url: "https://fit-clob.herokuapp.com/",
            github: "https://github.com/maxhealy01/fit-club"
        },
        {
            title: "Taskinator",
            name: 'taskinator',
            tools: "Javascript",
            url: "https://mikegshelby.github.io/taskinator/",
            github: "https://github.com/MikeGShelby/taskinator"
        },
        {
            title: "Work Day Scheduler",
            name:'work-day-scheduler',
            tools: "Javascript",
            url: "https://mikegshelby.github.io/work-day-scheduler/",
            github: "https://github.com/MikeGShelby/work-day-scheduler"
        },
        {
            title: "Weather Dashboard",
            name: 'weather-dashboard',
            tools: "Javascript",
            url: "https://mikegshelby.github.io/weather-dashboard/",
            github: "https://github.com/MikeGShelby/weather-dashboard"
        },
        {
            title: "Budget Tracker",
            name: 'budget-tracker',
            tools: "MongoDB / Express / Node",
            url: "https://budget-tracker-h1.herokuapp.com/",
            github: "https://github.com/MikeGShelby/budget-tracker"
        },
        {
            title: "Placeholder Project 2",
            name: 'placeholder-4',
            tools: "Javascript",
            url: "https://mikegshelby.github.io/weather-dashboard/",
            github: ""
        }
    ]);

  return (
    <>
        {projectsFeatured.map((project, i) => (

            <div className="project-card" key={project.name}>
                    <img
                        src={require(`../../assets/images/projects-screenshots/${project.name}.jpg`)}
                        alt={project.name}
                        className="project-card-image"
                    />

                <div className="project-title-text">
                    <h4>{project.title}</h4>
                    <h5>{project.tools}</h5>
                    <p>
                       Description
                    </p>
                </div>
                <div className="project-links">
                    <a href={project.url} target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i>      View Site</a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i>      View GitHub</a>
                </div>
            </div>
        ))}
    </>
  );
}

export default Project;



