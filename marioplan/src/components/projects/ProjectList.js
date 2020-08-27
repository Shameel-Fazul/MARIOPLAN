import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {  //destructuring 'props.projects' to {projects}
    return (
        <div className="project-list section">
          { projects && projects.map(project => {
            return (                              // key={project.id} was moved to <Link> because it's the current parent element.
              <Link to={'/project/' + project.id} key={project.id}>  
                <ProjectSummary project={project} />
              </Link>
            )

          })}
        </div>
        // 'projects &&' means if we have data inside projects, then do this "projects.map(project => {}" or else do nothing because there's nothing to output.
    )
}

export default ProjectList