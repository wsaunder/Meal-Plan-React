import React from 'react'
import GroceryDetails from './GroceryDetails'


const GroceryList = ({groceries}) => {
  return (
    <div className="section">
      { groceries && groceries.map(grocery => {
        return (
          <ul key={grocery.id}>
            <GroceryDetails grocery={grocery} id={grocery.id}/>
          </ul>
        )
      })}      

    </div>
  )
}

export default GroceryList