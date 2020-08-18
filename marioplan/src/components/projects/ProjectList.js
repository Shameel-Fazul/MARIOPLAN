import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProjectList = ({projects}) => {  //destructuring 'props.projects' to {projects}
    return (
        <div className="project-list section">
          { projects && projects.map(project => {
            return (
              <ProjectSummary project={project} key={project.id} />
            )

          })}
        </div>
        // 'projects &&' means if we have data inside projects, then do this "projects.map(project => {}" or else do nothing because there's nothing to output.
    )
}

export default ProjectList