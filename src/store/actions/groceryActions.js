// eslint-disable-next-line
import { getFirebase } from "react-redux-firebase";

export const addGrocery = (grocery) => {
  return (dispatch, getState, { getFirebase }) => {
    // make async call to database
    const firestore = getFirebase().firestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('groceries').add({
      ...grocery,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then( () => {
      dispatch({ type: 'Add_GROCERY', grocery })
    }).catch( (err) => {
      dispatch({ type: 'ADD_GROCERY_ERROR', err})
    })
    
  }
}

export const deleteGrocery = (grocery) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    firestore.collection('groceries').doc(grocery).delete()
    .then( () => {
      dispatch({ type: 'DELETE_GROCERY', grocery})
    }).catch( (err) => {
      dispatch({ type: 'DELETE_GROCERY_ERROR', err})
    })
  }
}