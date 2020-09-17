import React from 'react'
import MealSummary from './MealSummary'
import { Link } from 'react-router-dom'

const MealList = ({meals}) => {
  return (
    <div className="section">
      { meals && meals.map(meal => {
        return (
          <Link to={'/meal/' + meal.id} key={meal.id}>
            <MealSummary meal={meal} />
          </Link>
        )
      })}      

    </div>
  )
}

export default MealList