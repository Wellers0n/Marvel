import { createStore, applyMiddleware, combineReducers } from "redux";
import offset from "./../reducers/offsetIncrement";
import createSagaMiddleware from "redux-saga";
import root from "./../saga/index";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    offset,
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(root);

export default store;