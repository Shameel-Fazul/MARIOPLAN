import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'  // combineReducers is a function that combines multiple reducers into a single rootReducer.

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer
});  // combines and adds it to the store's state.

export default rootReducer

