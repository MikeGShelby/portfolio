import React from 'react';

function ProjectCardImage({name}) {

  return (
    <>
            <img
                src={require(`../../../../assets/images/projects-screenshots/${name}.jpg`)}
                alt={name}
                className="project-card-image round-borders"
            />
    </>
  );
}

export default ProjectCardImage;