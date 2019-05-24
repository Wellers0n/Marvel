import {createStore, applyMiddleware, combineReducers} from 'redux'
import reducer from './../reducer/index.js'
import createSagaMiddleware from 'redux-saga'
import root from './../saga/index'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(combineReducers({
    reducer,
}), applyMiddleware(sagaMiddleware))

sagaMiddleware.run(root) 

export default store
