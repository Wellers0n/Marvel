import {takeEvery, put} from 'redux-saga/effects'

function* fetchApi(){
    yield put({type: 'BOTTOM_END'})
}

function* root(){
    yield [
        takeEvery('FETCHING', fetchApi)
    ]
}

export default root