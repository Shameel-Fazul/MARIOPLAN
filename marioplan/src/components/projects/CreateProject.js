import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom' // Redirect the user to another component.

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
           [e.target.id]: e.target.value
        })
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.createProject(this.state) //invoking the createProject() function in props and sending the state as an argument.
        this.props.history.push('/') // Route Properties to redirect user to dashbaord.
    }

    render() {
        const { auth } = this.props; //destructuring

        if (!auth.uid) return <Redirect to='/signin' /> // If "auth.uid" doesn't exist, then we redirect the user to the signin component.
        // if "auth.uid" does exist, then we carry on with this return :
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create new project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>     
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)

//Remember connect(1, 2) should have two parameters : "mapStateToProps" and "mapDispatchToProps" 
// but since we don't need "mapStateToProps" in this component, we pass "null" as the first parameter.
