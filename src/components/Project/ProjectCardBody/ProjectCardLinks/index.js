import React from 'react';

function ProjectCardLinks({url, github}) {
  return (
    <div className="project-links">
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn-outine"><i className="fas fa-external-link-alt"></i>VIEW SITE</a>
        <a href={github} target="_blank" rel="noopener noreferrer" className="btn-outline"><i className="fab fa-github"></i>      VIEW GITHUB</a>
    </div>
  )
}

export default ProjectCardLinks;