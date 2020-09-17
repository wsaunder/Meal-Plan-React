import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAnsWqvqx1T-Zqu4GDpUX1CKotlKJEeWMI",
  authDomain: "mealplan-7e635.firebaseapp.com",
  databaseURL: "https://mealplan-7e635.firebaseio.com",
  projectId: "mealplan-7e635",
  storageBucket: "mealplan-7e635.appspot.com",
  messagingSenderId: "312915269704",
  appId: "1:312915269704:web:9e4442811f4fad31d8e07d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase