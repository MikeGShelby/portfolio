import React from 'react';

function ProjectCardFront({title}) {
  return (
    <>
        <div className="project-card-text">
            <h4 className="section-title">{title}</h4>
            <h5>Tools</h5>
        </div>
    </>
  );
}

export default ProjectCardFront;