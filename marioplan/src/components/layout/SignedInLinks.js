import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => { //To access props in a functional component, we use props as a parameter.
  return (
    <ul className="right">
      <li><NavLink to='/create'>New Project</NavLink></li>
      <li><a onClick={ props.signOut }>Log Out</a></li>
      <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{ props.profile.initials }</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)

// "connect(parameter 1, parameter 2)" requires two parameters, but since we don't need "mapStateToProps" 
// in this component, we put "null" as the first parameter.

