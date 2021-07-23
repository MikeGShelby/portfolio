import React from 'react';

import ResumeSummaryCard from './ResumeSummaryCard';

function Resume() {
  return (
    <section class="project-section bg-light">
        <h3 id="projects" class="section-title project-section-title text-center text-dark">My Resume</h3>

        <div className="projects-container">
          <ResumeSummaryCard resumeSection={'skills'}></ResumeSummaryCard>
          <ResumeSummaryCard resumeSection={'education'}></ResumeSummaryCard>
          <ResumeSummaryCard resumeSection={'experience'}></ResumeSummaryCard>
        </div>

        <a href="#/resume" className="btn-grad btn-small btn-projects">View Full Resume</a>
    </section>
  );
}

export default Resume;