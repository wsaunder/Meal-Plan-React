import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { addGrocery } from '../../store/actions/groceryActions'
import { Redirect } from 'react-router-dom'

export class AddGrocery extends Component {
  state = {
    name : '',
    message: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addGrocery(this.state)
    this.setState(
      { message: this.state.name  + " added to Grocery List"})  
  }
  render() {
    const {auth} = this.props
    if(!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container"> 
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add Item</h5>
          <div className="input-field">
            <label htmlFor="name" className="">Item</label>
            <input type="text" id="name" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Add</button>
          </div>
          <div>{this.state.message}</div>
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
const mapDispatchToProps = dispatch => {
  return {
    addGrocery: (item) => dispatch(addGrocery(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGrocery) 