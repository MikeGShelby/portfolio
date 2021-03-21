import React from 'react';
import Project from '../Project';

function Projects() {

    const projectImages = [
        {
            title: "Diet Delivery",
            tools: "HTML/CSS/Javascript/Node/Express/Handlebars",
            image: "../../assets/images/projects/diet-delivery-screenshot-small.jpg",
            github: "",
            app: "https://diet-delivery.herokuapp.com/"
        },
        {
            title: "Tech Blog",
            tools: "HTML/CSS/Javascript/Node/Express/Handlebars",
            image: "../../assets/images/projects/tech-blog-screenshot.jpg",
            github: "",
            app: "https://tech-blog-h.herokuapp.com/"
        },
        {
            title: "CinaSearch",
            tools: "HTML/CSS/JavaScript",
            image: "../../assets/images/projects/cinasearch-screenshot.jpg",
            github: "",
            app: "https://mikegshelby.github.io/cinasearch/"
        },
        {
            title: "Password Generator",
            tools: "HTML/CSS/JavaScript",
            image: "../../assets/images/projects/password-generator-screenshot.jpg",
            github: "",
            app: "https://mikegshelby.github.io/password-generator/"
        },
        {
            title: "Taskinator",
            tools: "HTML/CSS/JavaScript",
            image: "../../assets/images/projectst/taskinator-screenshot.jpg",
            github: "",
            app: "https://mikegshelby.github.io/taskinator/"
        },
        {
            title: "Work Day Scheduler",
            tools: "HTML/CSS/JavaScript",
            image: "../../assets/images/projects/???-screenshot.jpg",
            github: "",
            app: "https://mikegshelby.github.io/work-day-scheduler/"
        },
        {
            title: "Weather Dashboard",
            tools: "HTML/CSS/JavaScript",
            image: "../../assets/images/projects/weather-dashboard-screenshot.jpg",
            github: "",
            app: "https://mikegshelby.github.io/weather-dashboard/"
        }
    ];

  return (
    <section class="project-section">
        <div  class="section-title-bg">
            <h3 id="projects" class="section-title">PROJECTS</h3>
        </div>

        <div class="project-grid project-content section-content">
            <Project></Project>
            <Project></Project>
            <Project></Project>
            <Project></Project>
        </div>
    </section>
  );
}

export default Projects;