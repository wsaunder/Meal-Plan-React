import authReducer from './authReducer'
import mealReducer from './mealReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import groceryReducer from './groceryReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  meal: mealReducer,
  grocery: groceryReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
})

export default rootReducer