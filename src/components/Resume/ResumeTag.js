import React from 'react';

import '../../assets/css/resume-cards.css';

import skills from '../../data/resume/skills';
import education from '../../data/resume/education';
import experience from '../../data/resume/experience';


function ResumeTag({resumeSection}) {
    const section = resumeSection;

    return (
        <>
            {(() => {
                    switch (section) {
                    case "skills":   return skills.filter(skill => skill.featured).map((skill, i) => (
                        <div className={`resume-tag ${resumeSection}-tag`}>
                            <img src={require(`../../assets/images/skill-icons/${skill.name}.png`)} alt={skill.name}></img>
                            <h3>{skill.title}</h3>
                        </div>
                        ));

                    case "education":   return education.filter(education => education.featured).map((education, i) => (
                        <div className={`resume-tag ${resumeSection}-tag`}>
                            <img src={require(`../../assets/images/education-icons/${education.name}.png`)} alt={education.name}></img>
                            <div>
                                <h3>{education.title}</h3>
                                <h4>{education.degree}</h4>
                            </div>
                        </div>
                        ));

                    case "experience":   return experience.filter(experience => experience.featured).map((experience, i) => (
                        <div className={`resume-tag ${resumeSection}-tag`}>
                            <img src={require(`../../assets/images/experience-icons/${experience.name}.png`)} alt={experience.name}></img>
                            <div>
                                <h3>{experience.title}</h3>
                                <h4>{experience.position}</h4>
                            </div>
                        </div>
                        ));
                    default:      return "";
                    }
                })()}

            {/* { section === "skills" ? skills.filter(skill => skill.featured).map((skill, i) => (
            <>
                <img src={require(`../../assets/images/skill-icons/${skill.name}.png`)} alt={skill.name}></img>
                <h2>{skill.name}</h2>
            </>
            ))
            :
            section === "education" ? education.filter(education => education.featured).map((education, i) => (
            <>
                <img src={require(`../../assets/images/education-icons/${education.name}.png`)} alt={education.name}></img>
                <h2>{education.name}</h2>
                <h3>{education.degree}</h3>
            </>
            ))
            :
            section === "experience" ? experience.filter(experience => experience.featured).map((experience, i) => (
            <>
                <img src={require(`../../assets/images/experience-icons/${experience.name}.png`)} alt={experience.name}></img>
                <h2>{experience.name}</h2>
                <h3>{education.degree}</h3>
            </>
            ))} */}
        </>
    );
}

export default ResumeTag;