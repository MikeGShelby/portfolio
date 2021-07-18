import React from 'react';
import ProjectCard from '../Project/ProjectCard';

function Resume() {
  return (
        <section className="section-content contact-section bg-medium">

            <div className="container">
                <h3 id="contact" class="section-title contact-section-title text-center text-light">Resume and Skills</h3>
                <ProjectCard></ProjectCard>
            </div>
        </section>
  );
}

export default Resume;