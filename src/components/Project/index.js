import React, { useState } from 'react';

function Project() {

    const [projects] = useState([
        {
            title: "Diet Delivery",
            name: 'diet-delivery',
            tools: "MySQL / Express / Handlebars / Node",
            url: "https://diet-delivery.herokuapp.com/",
            github: ""
        },
        {
            title: "Tech Blog",
            name: 'tech-blog',
            tools: "MySQL / Express / Handlebars / Node",
            url: "https://tech-blog-h.herokuapp.com/",
            github: ""
        },
        {
            title: "CinaSearch",
            name: 'cinasearch',
            tools: "Bulma / JavaScript",
            url: "https://mikegshelby.github.io/cinasearch/",
            github: ""
        },
        {
            title: "Password Generator",
            name: 'password-generator',
            tools: "Javascript",
            url: "https://mikegshelby.github.io/password-generator/",
            github: ""
        },
        {
            title: "Taskinator",
            name: 'taskinator',
            tools: "Javascript",
            url: "https://mikegshelby.github.io/taskinator/",
            github: ""
        },
        {
            title: "Work Day Scheduler",
            name:'work-day-scheduler',
            tools: "Javascript",
            url: "https://mikegshelby.github.io/work-day-scheduler/",
            github: ""
        },
        {
            title: "Weather Dashboard",
            name: 'weather-dashboard',
            tools: "Javascript",
            url: "https://mikegshelby.github.io/weather-dashboard/",
            github: ""
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
        {projects.map((project, i) => (

            <div className="project-card project" key={project.name}>
                    <img
                        src={require(`../../assets/images/projects-screenshots/${project.name}.jpg`)}
                        alt={project.name}
                        className="project-card-image face front"
                    />

                <div className="face back">
                    <div className="project-info">
                        <div className="project-title-text">
                            <h4>{project.title}</h4>
                            <h5>{project.tools}</h5>
                        </div>

                        <div className="project-links">
                                <a href={project.url} target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i>      View Site</a>
                                <a href={project.github} target="_blank" rel="noreferrer"><i className="fab fa-github"></i>      View GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </>
  );
}

export default Project;



