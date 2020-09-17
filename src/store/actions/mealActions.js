// eslint-disable-next-line
import { getFirebase } from "react-redux-firebase";

export const addMeal = (meal) => {
  return (dispatch, getState, { getFirebase }) => {
    // make async call to database
    const firestore = getFirebase().firestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('meals').add({
      ...meal,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then( () => {
      dispatch({ type: 'CREATE_MEAL', meal })
    }).catch( (err) => {
      dispatch({ type: 'CREATE_MEAL_ERROR', err})
    })
    
  }
}

export const deleteMeal = (meal) => {
  console.log(meal.match.params.id)
  const id = meal.match.params.id
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore.collection('meals').doc(id).delete()
    .then( () => {
      dispatch({ type: 'DELETE_MEAL', meal})
    }).catch( (err) => {
      dispatch({ type: 'DELETE_MEAL_ERROR', err})
    })
  }
}