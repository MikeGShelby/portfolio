import React, { Fragment } from 'react';
import projects from '../../data/projects-json';

import ProjectCard from '../Project';

class FilteredProjects extends React.Component
{
    state={
        ToolNames: {
            CSS: false,
            Bootstrap:false,
            Bulma: false,
            JavaScript: false,
            JQuery: false,
            Handlebars:false,
            React: false,
            GraphQL: false,
            MySQL: false,
            MongoDB: false,
            NodeJS: false
        }
    }

    toolSelect = (e) => {
        var {name, checked} = e.target;
        this.setState((e)=>{
            var SelectedTool = e.ToolNames;
            return SelectedTool[name]=checked;
        })
    };

    render()
    {
        //Create a variable that stores an array of currently selected tool filters
        var displayFilteredTools = Object.keys(this.state.ToolNames).filter((x)=> this.state.ToolNames[x]);

        //Create a variable that stores an array of ALL tool filter names and sorts tools by name
        var sortedToolNames = Object.getOwnPropertyNames(this.state.ToolNames).sort();

        // sort all projects in ascending order, based on project name
        var sortedProjects = projects.sort(function(a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
        });

        return(
            <Fragment>
                <div className="tool-filter-container">
                    <h3>Tool Filters</h3>

                    <ul className="tool-filter-list">
                        {sortedToolNames.map(tool => (
                            <label className="tool-select-label" for={tool}>
                                <input className="tool-select-input" type="checkbox" name={tool} id={tool} onChange={this.toolSelect}/>
                                <span className="tool-label-text">{tool}</span>
                            </label>
                        ))}
                    </ul>
                </div>

                <div className="projects-container">
                    {sortedProjects.filter(project => displayFilteredTools.every(tool => project.tools.includes(tool))).map(project => (
                        <ProjectCard project={project}/>
                    ))}
                </div>
            </Fragment>
        );
    }
}

export default FilteredProjects;