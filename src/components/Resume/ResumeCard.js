import React from 'react';
import '../../assets/css/resume-cards.css';

import ResumeTag from './ResumeTag';

function ResumeCard({resumeSection, resumePage}) {
    const section = resumeSection;
    const page = resumePage;

    return (
        <div className={`resume-card-${page}`}>
            <h2 className="resume-card-title">{section}</h2>
            <div className={`resume-tags-${page} ${section}-tags-${page}`}>
                <ResumeTag resumeSection={section} resumePage={page}></ResumeTag>
            </div>
        </div>
    );
}

export default ResumeCard;