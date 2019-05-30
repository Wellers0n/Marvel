import {takeEvery, put, all, select, call} from 'redux-saga/effects'
import axios from 'axios'
import md5 from 'js-md5'

function* fetchApi(){
    const PUBLIC_KEY = '33a6c5428a583acce6b0b321d4fe8405'
    const PRIVATE_KEY = 'e053914ab24d6c89bfc90feacf1a68aff8851ca9'
    const timestamp = new Date()
    const hash = md5.create()
    hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)
    const offset = yield select(state => state.offset.offset)
    console.log(offset)
    //fetch
    const response = yield fetch(`https://gateway.marvel.com/v1/public/characters?offset=${offset}&ts=${timestamp}&orderBy=name&limit=${30}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
    const jsonResponse = yield response.json()
    return jsonResponse

}

function* asyncAdd(){
    try {
        // yield put({type: "BOTTOM_END"})
        const response = yield call(fetchApi)
        // console.log(response)
        const data = yield select(state => state.fetching.data)
        yield put({type: "SUCESS_FETCH_LIST", payload: {data: [...data, ...response.data.results ]}})
    } catch (err) {
        console.log(err)
        yield put({type: "FAIL_FETCH_LIST"})
    }
}

function* root(){
    yield all([ takeEvery('REQUEST_FETCH_LIST', asyncAdd) ])
}

export default root