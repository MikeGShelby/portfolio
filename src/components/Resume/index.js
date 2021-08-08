import React from 'react';

// import '../../assets/css/index.css';

import './resume-cards.css';
import './ResumeDetails';

import ResumeCard from './ResumeCard';

function Resume() {
const resumeSection = ['skills', 'education', 'experience']

  return (
    <section class="resume-section">
        <h3 class="section-title resume-section-title text-center">My Resume</h3>

        <div className="resume-container">
          {
            resumeSection.map((section, i) => (
              <ResumeCard resumeSection={section} resumePage={"summary"}></ResumeCard>
            ))
          }
        </div>

        <a href="#/resume" className="btn-grad btn-small btn-projects">View Full Resume</a>
    </section>
  );
}

export default Resume;