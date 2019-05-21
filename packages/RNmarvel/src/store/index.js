import {createStore} from 'redux'

const limited = (state = {offset: 0} , action) => {
    switch (action.type) {
        case "BOTTOM_END":
            return {
                ...state,
                offset: state.offset + 30
            }
                
        default:
            return state
    }
}

const store = createStore(limited)

export default store