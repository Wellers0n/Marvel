import {takeEvery, put, all, select} from 'redux-saga/effects'

function* fetchApi(){
    // const state = yield select(state => state)
    // console.log(state)
    yield put({type: 'BOTTOM_END'})

}

function* root(){
    yield all([ takeEvery('FETCHING', fetchApi) ])
}

export default root