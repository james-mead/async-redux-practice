const initialState = {
  definitions: []
}

function urbandictionary (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_DEFINITIONS':
      return {...state, definitions: [...action.definitions]}
    default:
      return state
  }
}

export default urbandictionary
