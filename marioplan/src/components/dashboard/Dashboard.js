import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux' // Remember that the 'react-redux' library is what glues redux to react.

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
    return { // return object represents the different properties we want to add to the props.
        projects: state.project.projects
    }
    
}

export default connect(mapStateToProps)(Dashboard)

//connect() is a function that returns the high-order component when invoked.
//when returned, it then wraps (Dashboard).

//added 'mapStateToProps' as an argument to connect('') so redux knows what data to grab and then apply that data to the component's props object.