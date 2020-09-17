import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'


const SignedInLinks = (props) => {
  
  return (
    <ul className="right">
      <li className="left"><NavLink to='/'>Meal Plan</NavLink></li>
      <li><NavLink to='/newmeal'>New Meal</NavLink></li>
      <li><NavLink to='/addGrocery'>Add Grocery</NavLink></li>
      <li>
        {/* eslint-disable-next-line*/}
        <a onClick={props.signOut}>Log Out</a>
      </li>
      <li><NavLink to='/' className="btn btn-floating pink lighten-1">
          {props.profile.initials}
        </NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)