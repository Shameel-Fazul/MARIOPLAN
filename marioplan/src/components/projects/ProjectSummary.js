import React from 'react'
import moment from 'moment' // It's a package that helps to better format timestamps. 
                            // Documentation : https://momentjs.com/

const ProjectSummary  = ({project}) => { //destructuring 'props.project' to {project}
console.log(project);
    return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
            <span className="card-title">{project.title}</span>
            <p>Posted by { project.authorFirstName } { project.authorLastName }</p>
            <p className="grey-text">{ moment(project.createdAt.toDate()).calendar() }</p>
        </div>
      </div>
    )
}

export default ProjectSummary