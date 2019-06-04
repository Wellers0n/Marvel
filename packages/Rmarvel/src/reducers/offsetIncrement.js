function reduce(state = {offset: 0}, action){
    switch (action.type) {
          case "OFFSET_INCREMENT":
              return {
                  ...state,
                  offset: state.offset + 30
              }
  
          default:
              return state
    }
  }
  
  export default reduce