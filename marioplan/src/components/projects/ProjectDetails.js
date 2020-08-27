import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = (props) => {
    const { project } = props;  // Destructuring - taking the "project" property off props (props.project)
    // const id = props.match.params.id
    // console.log(props);
    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{ project.title }</span>
                        <p>{ project.content }</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by the { project.authorFirstName } { project.authorLastName }</div>
                        <div>2nd September, 2am</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
    
}

const mapStateToProps = (state, ownProps) => {  //ownProps is the props of this component before the additional props are added using this function.
    //console.log(state)
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null  //Ternary operators - if we have "projects" in the collection then we need "projects[id]" or else "null" ("[id]" is "const id", and the id is "8kTe2rnlac9ZLVSgjaWs" because it's the property name of the projects object.)
    return {
        project: project
    }   
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails)

