import React from 'react';

function ProjectCardImage({name}) {

  return (
    <>
      <img
          src={require(`../../../assets/images/projects-screenshots/${name}.jpg`)}
          alt={name}
          className="project-img"
      />
    </>
  );
}

export default ProjectCardImage;