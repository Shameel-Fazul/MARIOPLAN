import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {  //To access props in a functional component, we use props as a parameter.
  const { auth } = props;
  //console.log(auth);

  // Ternary operator
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;

  const LoadedNavBar = auth.isLoaded ? links : <p className="white-text right">Loading Nav...</p>

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">MarioPlan</Link>
        { LoadedNavBar }
      </div>
    </nav>
  )
}

// auth.isLoaded (LINE 14) : If auth.isLoaded (ON CONSOLE) is TRUE, then execute { links } or else "Loading Nav..."

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)
