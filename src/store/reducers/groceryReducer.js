const initState = {
  groceries: []
    
}
const groceryReducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_GROCERY':
      console.log('created grocery', action.grocery);
      return state;
    case 'ADD_GROCERY_ERROR':
      console.log('create grocery error', action.err)
      return state;
    case 'Delete_GROCERY':
      console.log('create grocery error', action.groceryId)
      return state;
    case 'Delete_GROCERY_ERROR':
      console.log('create grocery error', action.err)
      return state;
    default:
      return state;
  }
}

export default groceryReducer