import React from 'react';

import '../../assets/css/resume-cards.css';

import skills from '../../data/resume/skills';
import education from '../../data/resume/education';
import experience from '../../data/resume/experience';


function ResumeTag({resumeSection, resumePage}) {
    const section = resumeSection;
    const page = resumePage;

    return (
        <>
            {(() => {
                    switch (section) {
                    case "skills":   return skills.filter(skill => skill.featured).map((skill, i) => (
                        <div className={`resume-tag-${page} ${section}-tag-${page}`}>
                            <img src={require(`../../assets/images/skill-icons/${skill.name}.png`)} alt={skill.name}></img>
                            <h3>{skill.title}</h3>
                        </div>
                        ));

                    case "education":   return education.filter(education => education.featured).map((education, i) => (
                        <div className={`resume-tag-${page} ${section}-tag-${page}`}>
                            <img src={require(`../../assets/images/education-icons/${education.name}.png`)} alt={education.name}></img>
                            <div>
                                <h3>{education.degree}</h3>
                                <h4>{education.title}{page ==="details" && `; ${education.location}`}</h4>
                            </div>
                        </div>
                        ));

                    case "experience":   return experience.filter(experience => experience.featured).map((experience, i) => (
                        <div className={`resume-tag-${page} ${section}-tag-${page}`}>
                            <img src={require(`../../assets/images/experience-icons/${experience.name}.png`)} alt={experience.name}></img>
                            <div>
                                <h3>{experience.position}</h3>
                                <h4>{experience.title}{page ==="details" && `; ${experience.location}`}</h4>
                                {page ==="details" &&
                                    <>
                                        <p className="experience-tag-responsibilities">{experience.responsiblities}</p>
                                        {experience.accomplishments.map((accomplishment, i) => (
                                                <ul key={i} className="experience-tag-accomplishments">
                                                    <li>{accomplishment}</li>
                                                </ul>
                                        ))}
                                    </>
                                }
                            </div>
                        </div>
                        ));
                    default:      return "";
                    }
                })()}
        </>
    );
}

export default ResumeTag;