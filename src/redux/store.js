import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux"; 
import { todoReducer } from "./reducers/todoReducer";
import thunk from 'redux-thunk';


const reducers = combineReducers({
    todos: todoReducer
})


const middlware = [thunk];
const store = createStore(reducers, {} , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;