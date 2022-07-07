import {legacy_createStore as createStore, applyMiddleware, compose} from "redux"
import { combineReducers } from "redux"; 
import { todoReducer } from "./reducers/todoReducer";
import thunk from 'redux-thunk';


const reducers = combineReducers({
    todos: todoReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))


export default store;