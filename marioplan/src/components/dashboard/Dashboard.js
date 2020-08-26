import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux' // Remember that the 'react-redux' library is what glues redux to react.
import { firestoreConnect } from 'react-redux-firebase' // firestoreConnect is used to tell what firestore collection to connect to.
import { compose } from 'redux' // compose() method combines several functions together.

class Dashboard extends Component {
    render(){
        //console.log(this.props)
        const { projects } = this.props; //destructuring
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => { //once connected to redux using connect(), access the store's state and map it to the props of this component.
    console.log(state);
    return { // return object represents the different properties we want to add to the props.
        projects: state.firestore.ordered.projects
        //projects: state.project.projects 
    }
    
}

export default compose(        // compose() method combines several higher order components together.
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(Dashboard)

//connect() is a function that returns the high-order component when invoked.
//when returned, it then wraps (Dashboard).

//firestoreConnect() is a function that connects to a specified collection in the firestore database.
// firestoreConnect() takes an array as an Argument, and this array is gonna contain a series of objects. Right now, we just need one object.
// { collection: 'projects' } - which collection to connect to in the firestore database.

// When this component is active, it's going to connect to the 'projects' collection and injuice the 'firestoreReducer'(on rootReducer.js)
// to sync the 'firestore'(on rootReducer.js) store state with the projects collection.


//added 'mapStateToProps' as an argument to connect('') so redux knows what data to grab and then apply that data to the component's props object.


// DEBUGGING - FIXES
// export default compose(
//     firestoreConnect(() => ['projects']),
//     connect(mapStateToProps)
//     )(Dashboard)