import React from 'react';

import skills from '../../data/resume/skills';
import education from '../../data/resume/education';
import experience from '../../data/resume/experience';


function ResumeTag({resumeSection}) {
    const section = resumeSection;

    return (
        <>
            <div className="resume-summary-card">
                { section === "skills" ? skills.filter(skill => skill.featured).map((skill, i) => (
                    <div className="resume-tag">
                        <img src={require(`../../assets/images/skill-icons/${skill.name}.png`)} alt={skill.name}></img>
                        <h2>{skill.name}</h2>
                    </div>
                ))
                :
                section === "education" ? education.filter(education => education.featured).map((education, i) => (
                    <div className="resume-tag">
                        <img src={require(`../../assets/images/education-icons/${education.name}.png`)} alt={education.name}></img>
                        <h2>{education.name}</h2>
                        <h3>{education.degree}</h3>
                    </div>
                ))
                :
                    <h2>Experience name</h2>
                }
            </div>
        </>
    );
}

export default ResumeTag;