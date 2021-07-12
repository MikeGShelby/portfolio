import React, { useState } from 'react';


function ProjectTools({tools}) {

    // const [tools] = useState([ "MySQL", "Handlebars", "Bulma"])

    return (
    <>
    <div className="project-tools">
        {tools.map((tool, i) => (
            <div className="project-tool-tag">
                {tool}
            </div>
        ))}
    </div>
    </>
    );
}

export default ProjectTools;