function reduce(state = {offset: 0}, action){
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

export default reduce
