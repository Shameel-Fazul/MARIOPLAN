import { firebaseReducer } from 'react-redux-firebase' //premade reducer, and this was made to syncing our firebase data with our state in the background. Since we defined "fbConfig" in index.js, the reducer knows what firebase project to connect to.
import { firestoreReducer } from 'redux-firestore' //premade reducer, and this was made to syncing our firestore data with our state in the background. Since we defined "reduxFirestore(fbConfig)" in index.js, the reducer knows what firebase project to connect to.
import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'  // combineReducers is a function that combines multiple reducers into a single rootReducer.

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firebase: firebaseReducer,  // Now firebaseReducer will automatically sync the "firebase" property in the state object with firebase information, like firebase authentication to check if the user is authenticated or not.
    firestore: firestoreReducer // Now firestoreReducer will automatically sync the "firestore" property in the state object to the data in the database.
                                //We use firestoreConnect() in Components(like in Dashboard.js) to injuice the firestoreReducer to what to look for, and then sync it to the 'firestore' store state.
});  // combines and adds it to the store's state.

export default rootReducer

