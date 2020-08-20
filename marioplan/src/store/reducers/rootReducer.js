import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'  // combineReducers is a function that combines multiple reducers into a single rootReducer.

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});  // combines and adds it to the store's state.

export default rootReducer

