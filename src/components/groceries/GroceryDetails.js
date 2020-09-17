import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { deleteGrocery } from '../../store/actions/groceryActions'

export class GroceryDetails extends Component {

  handleDelete = () => {
    this.props.deleteGrocery(this.props.id)
  }

  render() {
    const { grocery, auth } = this.props
    if(!auth.uid) return <Redirect to='/signin' />

    if (grocery) {
      return (
        
        <div className="container">
          <div className="grocery-item">
              <span className="">{ grocery.name }</span>
              <button className="delete-button" onClick={() => this.handleDelete(grocery.id)}>X</button>
          </div>
          
          <br/>
        </div>
        )
    } else {
      return (
        <div className="container center">
          <p>Loading Grocery</p>
        </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.grocery.id
  const groceries = state.firestore.data.groceries
  const grocery = groceries ? groceries[id] : null
  return {
    grocery,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  
  
  return {
    deleteGrocery: (grocery) => dispatch(deleteGrocery(grocery))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    'groceries'
  ])
)(GroceryDetails)



