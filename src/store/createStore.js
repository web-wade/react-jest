import { createStore, combineReducers } from "redux";
import todoReducer from "../containers/TodoList/store/reducer";

const reducer = combineReducers({
    todo: todoReducer
});

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;
