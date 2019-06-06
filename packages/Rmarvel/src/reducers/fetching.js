const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false
}

export default function fetching(state = INITIAL_STATE, action){
    switch (action.type) {
        case "REQUEST_FETCH_LIST":
            return { ...state, loading: true}    
        case "SUCESS_FETCH_LIST":
            return {data: action.payload.data, loading: false, error: false}
        case "FAIL_FETCH_LIST":
            return {data: [], loading: false, error: true}
        default:
            return state
    }
}