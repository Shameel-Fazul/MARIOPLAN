import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk'  //Thunk is a middleware,  and allows to return functions inside Action Creators.
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import {  ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase'
import firebase from 'firebase/app'
import fbConfig from './config/fbConfig'


const store = createStore(rootReducer,
    compose ( //Store Enhancers - compose() method combines several store enhancers together.
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), //apply middleware to store using the applyMiddleware() function in the redux library. withExtraArgument() function allows to enhance our thunk by adding extra arguments.
        reduxFirestore(firebase, fbConfig),  // Added fbConfig so "getFirebase" & "getFirestore" knows what firebase project to connect to.
    )   
); 


//firebase information - User Profile Data  
// - We're telling the firebase reducer to sync the user document in the 'users' collection with the profile object.
// - It'll sync the profile that has a matching Firebase Auth & Users Collection UID
// - We can access this data via Redux because firebaseReducer syncs the obtained data to the 'firebase' property in the store's state object.
// - Go to console, and go to the firebase object and open the profile object to view the profile results.
const rrfConfig = {
    userProfile: 'users', // 'users' - so the firebase reducer knows the collection where to get the user profile from.
    useFirestoreForProfile: true // We're telling the firebase reducer(rootReducer.js) to use our firestore database 
                                 // and to sync it to the the profile object in the firebase object (ON CONSOLE)
}

//firebase information
const rffProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
    presence: 'presence',
    sessions: 'sessions'
}
//firebase information - This will load our application once Firebase has successfully loaded.
function AuthIsLoaded({ children }) {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div className="center red-text">...Loading Application....</div>;
    return children
}



ReactDOM.render(<Provider store={store}><ReactReduxFirebaseProvider {...rffProps}><AuthIsLoaded><App /></AuthIsLoaded></ReactReduxFirebaseProvider></Provider>, document.getElementById('root')); 

serviceWorker.unregister();

// <Provider> passes the store into the application, so that the application has access to the store.
// It's the binding layer, that helps bind redux with our react app.

// <AuthIsLoaded> - This will load our application once Firebase has successfully loaded.