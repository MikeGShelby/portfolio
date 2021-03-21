import React from 'react';
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
        <div class="project-card project">
            <div className="image-section face front">
                <img src={image} className="project-card-image" alt="project card"></img>
            </div>

            <div className="face back">
                <div className="project-title">
                    <h4>Title</h4>
                    <h5>Tools</h5>

                    <h4>
                        <a href="https://diet-delivery.herokuapp.com/" target="_blank" rel="noreferrer">Application</a>
                    </h4>
                    <h4>
                        <a href="https://diet-delivery.herokuapp.com/" target="_blank" rel="noreferrer">GitHub</a>
                    </h4>
                </div>
            </div>
        </div>
  );
}

export default Project;



