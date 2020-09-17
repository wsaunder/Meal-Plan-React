import React, { Component } from 'react'
import MealList from '../meals/MealList'
import GroceryList from '../groceries/GroceryList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
  render(){
    const { meals, groceries, auth } = this.props
    if(!auth.uid) return <Redirect to='/signin' />
    return(
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m5 ">
            <h4>Groceries</h4>
            <GroceryList groceries={groceries} />
          </div>
          <div className="col s12 m6 offset-m1">
            <h4> Meals </h4>
            <MealList meals={meals} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)  => {
  return {
    meals: state.firestore.ordered.meals,
    groceries: state.firestore.ordered.groceries,
    auth: state.firebase.auth,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'meals', orderBy: ['createdAt', 'desc']},
    {collection: 'groceries', orderBy: ['createdAt', 'desc']},
  ])
  )(Dashboard)