import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { formReducer } from "./reducers/formReducer";
import thunk from 'redux-thunk';

const allReducers = combineReducers({
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    allReducers, composeEnhancers(applyMiddleware(thunk)));