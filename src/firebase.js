
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "clone-5a7dd.firebaseapp.com",
  databaseURL: process.env.REACT_APP_DATABASE,
  projectId: "clone-5a7dd",
  storageBucket: "clone-5a7dd.appspot.com",
  messagingSenderId: process.env.REACT_APP_APP_MESSAGE,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};


//  initialize app by passing the config 

const firebaseApp = firebase.initializeApp(firebaseConfig);

//  initialize database

const db = firebaseApp.firestore();

//  for authentication

const auth = firebase.auth();


export {db, auth};