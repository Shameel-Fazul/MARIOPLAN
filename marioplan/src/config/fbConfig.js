import firebase from 'firebase/app' // '/app' is used to only import the base features in the firebase library. The full library is a development version.
import 'firebase/firebase-firestore'
import 'firebase/auth'
import 'firebase/firebase-analytics'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDA-ytx0rla6Euo-lhACY2pHhPiVjM7ylI",
    authDomain: "shameel-fazul-marioplan.firebaseapp.com",
    databaseURL: "https://shameel-fazul-marioplan.firebaseio.com",
    projectId: "shameel-fazul-marioplan",
    storageBucket: "shameel-fazul-marioplan.appspot.com",
    messagingSenderId: "1006075077858",
    appId: "1:1006075077858:web:836ecbbc3d7078255a6abb",
    measurementId: "G-40E3MM5KVC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true })
  firebase.analytics();

  export default firebase;
