import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { addMeal } from '../../store/actions/mealActions'
import { Redirect } from 'react-router-dom'

export class AddMeal extends Component {
  state = {
    title : '',
    content : ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addMeal(this.state)
    this.props.history.push('/')
    
  }
  render() {
    const {auth} = this.props
    if(!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container"> 
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Add Meal</h5>
          <div className="input-field">
            <label htmlFor="title" className="">Meal</label>
            <input type="text" id="title" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="content" className="">Recipe</label>
            <textarea id="content"  className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Add</button>
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
const mapDispatchToProps = dispatch => {
  return {
    addMeal: (meal) => dispatch(addMeal(meal))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMeal) 