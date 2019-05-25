import {createStore, applyMiddleware, combineReducers} from 'redux'
import offset from './../reducer/index.js'
import fetching from './../reducer/fetching'
import createSagaMiddleware from 'redux-saga'
import root from './../saga/index'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(combineReducers({
    offset,
    fetching,
}), applyMiddleware(sagaMiddleware))

sagaMiddleware.run(root) 

export default store
