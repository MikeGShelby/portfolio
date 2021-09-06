import React from 'react';

function ProjectTools({tools}) {
    tools.sort()

    return (
        <div className="project-tools">
            {tools.map((tool, i) => (
                <div className="project-tool-tag">
                    {tool}
                </div>
            ))}
        </div>
    );
}

export default ProjectTools;