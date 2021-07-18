import React, { useState } from 'react';

function Skills() {
    const [skills] = useState([
      {
          name: "html5",
          url: 'https://www.w3.org/TR/html52/'
      },
      {
        name: "css3",
        url: 'https://www.w3.org/Style/CSS/'
      },
      {
        name: "javascript",
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      },
      {
        name: "bootstrap",
        url: 'https://getbootstrap.com/'
      },
      {
        name: "bulma",
        url: 'https://bulma.io/'
      },
      {
        name: "jquery",
        url: 'https://jquery.com/'
      },
      {
        name: "nodejs",
        url: 'https://nodejs.org/en/about/'
      },
      {
        name: "github",
        url: 'https://github.com/'
      },
      {
        name: "photoshop",
        url: 'https://www.adobe.com/products/photoshop.html'
      }
    ]);

    return (
      <section class="skills-section">
                <div class="section-title-bg">
                    <h3 id="skills" class="section-title">SKILLS</h3>
                </div>

                <div class="skill-icons section-content">

                {skills.map((skill, i) => (

                    <a href={skill.url} class="skill-link" target="_blank" rel="noreferrer">
                        <img src={require(`../../../assets/images/skill-icons/${skill.name}.png`)} alt={skill.name}></img>
                    </a>

                ))}

                </div>
            </section>
    );
  }

  export default Skills;