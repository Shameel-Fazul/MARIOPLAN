import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'  //Thunk is a middleware

const store = createStore(rootReducer, applyMiddleware(thunk)); //apply middleware to store using the applyMiddleware() function in the redux library.

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')); 

serviceWorker.register();

// <Provider> passes the store into the application, so that the application has access to the store.
// It's the binding layer, that helps bind redux with our react app.