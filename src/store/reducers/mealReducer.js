const initState = {
  meals: []
    
}
const mealReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_MEAL':
      console.log('created meal', action.meal);
      return state;
    case 'CREATE_MEAL_ERROR':
      console.log('create meal error', action.err)
      return state;
    case 'Delete_MEAL':
      console.log('create meal error', action.mealId)
      return state;
    case 'Delete_MEAL_ERROR':
      console.log('create meal error', action.err)
      return state;
    default:
      return state;
  }
}

export default mealReducer