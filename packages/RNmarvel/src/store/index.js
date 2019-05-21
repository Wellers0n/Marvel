import {createStore} from 'redux'

const limited = (state = {limit: 20} , action) => {
    switch (action.type) {
        case "BOTTOM_END":
            return {
                ...state,
                limit: (state.limit === 100 ) ? state.limit : state.limit + 20
            }
                
        default:
            return state
    }
}

const store = createStore(limited)

export default store