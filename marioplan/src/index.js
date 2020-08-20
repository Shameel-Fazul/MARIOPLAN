import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'  //Thunk is a middleware,  and allows to return functions inside Action Creators.
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore'
import {  ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import 'firebase/firestore';

//firebase information
const rrfConfig = { 
    userProfile: 'projects',
    useFirestoreForProfile: true
}


const store = createStore(rootReducer,
    compose ( //Store Enhancers - compose() method combines several store enhancers together.
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), //apply middleware to store using the applyMiddleware() function in the redux library. withExtraArgument() function allows to enhance our thunk by adding extra arguments.
        reduxFirestore(fbConfig),  // Added fbConfig so "getFirebase" & "getFirestore" knows what firebase project to connect to.
    )   
); 


//firebase information
const rffProps = {
    fbConfig,
    useFirestoreForProfile: true,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')); 

serviceWorker.register();

// <Provider> passes the store into the application, so that the application has access to the store.
// It's the binding layer, that helps bind redux with our react app.