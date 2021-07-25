import React from 'react';

import ResumeSummaryCard from './ResumeCard';

function Resume() {
const resumeSection = ['skills', 'education', 'experience']

  return (
    <section class="resume-section">
        <h3 class="section-title resume-section-title text-center">My Resume</h3>

        <div className="resume-container">
          {
            resumeSection.map((section, i) => (
              <ResumeSummaryCard resumeSection={section}></ResumeSummaryCard>
            ))
          }
        </div>

        <a href="#/resume" className="btn-grad btn-small btn-projects">View Full Resume</a>
    </section>
  );
}

export default Resume;