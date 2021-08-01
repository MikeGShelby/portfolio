import React from 'react';
import { HashLink } from 'react-router-hash-link';

import '../../../assets/css/resume-details.css';
import Resume from '../../../assets/documents/resume.pdf';

import ResumeCard from '../../Resume/ResumeCard';
import HeaderDetails from '../../Header/HeaderDetails';
import Contact from '../../Contact';


function ResumeDetails() {
    const resumeSection = ['skills', 'education', 'experience']

  return (
      <React.Fragment>
        <HeaderDetails></HeaderDetails>
        <section class="resume-section">
            <h3 class="section-title resume-section-title text-center">My Resume</h3>

            <div className="resume-details-container">
            <div className="resume-card-cta">
                <h2 className="resume-card-title">Resume PDF</h2>

                <a href={Resume} target="_blank" rel="noopener noreferrer" className="btn-grad btn-cta">
                 Open Resume PDF
                </a>
            </div>
            {
                resumeSection.map((section, i) => (
                    <ResumeCard resumeSection={section} resumePage={"details"}></ResumeCard>
                ))
            }
            </div>
        </section>
    <Contact></Contact>
    </React.Fragment>
  );
}

export default ResumeDetails;