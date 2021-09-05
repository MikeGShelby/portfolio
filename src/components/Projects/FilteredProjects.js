import React, { Fragment } from 'react';
import projects from '../../data/projects-json';

import ProjectCard from '../Project';

class FilteredProjects extends React.Component
{

    state={
        ToolNames: {
            Bootstrap:false,
            Bulma: false,
            JavaScript: false,
            JQuery: false,
            Handlebars:false,
            React: false,
            MySQL: false,
            MongoDB: false,
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

        //Create a variable that stores an array of ALL tool filter names
        var toolTitles = Object.getOwnPropertyNames(this.state.ToolNames).sort();

        return(
            <Fragment>
                <div className="tool-filter-container">
                    <h3>Project Filters</h3>

                    <ul className="tool-filter-list">
                        {toolTitles.map(tool => (
                            <li className="tool-select-item">
                                <input class="tool-select-input" type="checkbox" name={tool} id={tool} onChange={this.toolSelect}/>
                                <label class="tool-select-label" for={tool}>{tool}</label>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="projects-container">
                    {projects.filter(project => displayFilteredTools.every(tool => project.tools.includes(tool))).map(project => (
                    <ProjectCard project={project}/>
                ))}
                </div>
            </Fragment>
        );
    }
}

export default FilteredProjects;