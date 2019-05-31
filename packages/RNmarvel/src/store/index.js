import { createStore, applyMiddleware, combineReducers } from "redux";
import offset from "./../reducer/offsetIncrement";
import fetching from "./../reducer/fetching";
import darkMode from "./../reducer/darkMode";
import createSagaMiddleware from "redux-saga";
import root from "./../saga/index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    offset,
    fetching,
    darkMode
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(root);

export default store;
