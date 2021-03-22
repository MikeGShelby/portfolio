import React, {useState} from 'react';
// import image from '../../assets/images/projects/diet-delivery-screenshot-small.jpg';
// import image from '../../assets/images/projects/cinasearch-screenshot.jpg';
import image from '../../assets/images/projects/tech-blog-screenshot.jpg';

function Project() {

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
        <div className="project-card project">
                <img
                    src={image}
                    className="project-card-image face front"
                    alt="project card"
                />
            <div className="face back">
                <div className="project-info">
                    <div className="project-title-text">
                        <h4>Title</h4>
                        <h5>Tools</h5>
                    </div>

                    <div className="project-links">
                            <a href="https://diet-delivery.herokuapp.com/" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i>      View Site</a>
                            <a href="https://github.com/MikeGShelby" target="_blank" rel="noreferrer"><i className="fab fa-github"></i>      View GitHub</a>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default Project;



