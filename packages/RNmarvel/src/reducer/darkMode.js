const INITIAL_STATE = {
    darkmode: false
}

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case "DARKMODE_ON":
            return {
                ...state,
                darkmode: true
            }
        case "DARKMODE_ OFF":
            return {
                ...state,
                darkmode: false
            }
        default:
            return {
                ...state
            }
    }
}