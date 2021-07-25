import React from 'react';

import '../../assets/css/resume-cards.css';

import ResumeTag from './ResumeTag';

import skills from '../../data/resume/skills';
import education from '../../data/resume/education';
import experience from '../../data/resume/experience';


function ResumeCard({resumeSection}) {
    const section = resumeSection;

    return (
        <div className="resume-card">
            <h2 className="resume-card-title">{section}</h2>
            <div className={`resume-tags ${resumeSection}-tags`}>
                <ResumeTag resumeSection={section}></ResumeTag>
            </div>
        </div>
    );
}

export default ResumeCard;