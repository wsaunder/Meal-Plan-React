import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import { deleteMeal } from '../../store/actions/mealActions'

export class MealDetails extends Component {

  handleDelete = () => {
    this.props.deleteMeal(this.props)
    this.props.history.push('/')
  }

  render() {
    const { meal, auth } = this.props
    if(!auth.uid) return <Redirect to='/signin' />

    if (meal) {
      return (
        
        <div className="container section">
          <div className="card small z-depth-0">
            <div className="card-content">
              <span className="card-title">{ meal.title }</span>
              <p>{ meal.content}</p>
              <button className="btn z-depth-0 right" onClick={this.handleDelete}>Delete</button>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>{meal.authorFirstName} { meal.authorLastName }</div>
              <div>Posted: {moment(meal.createdAt.toDate()).calendar()}</div>
            </div>
          </div>
        </div>
        )
    } else {
      return (
        <div className="container center">
          <p>Loading Meal</p>
        </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const meals = state.firestore.data.meals
  const meal = meals ? meals[id] : null
  console.log(state)
  return {
    meal,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  
  
  return {
    deleteMeal: (meal) => dispatch(deleteMeal(meal))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    'meals'
  ])
)(MealDetails)



