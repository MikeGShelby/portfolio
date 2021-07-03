import React, { useState } from 'react';

function ProjectCardText({title, tools, description}) {
  return (
            <div className="project-card-text">
                <h4 className="section-title">{title}</h4>
                <h5>{tools}</h5>
                <p>
                {description}
                </p>
            </div>
  )
}

export default ProjectCardText;