const initialState = {
  posts: [],
  loading: false,
  loadingError: false
}

function subreddits (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_POSTS':
      return {...state, posts: [...action.posts]}
    case 'LOADING_POSTS':
      return {...state, loading: true}
    case 'FINISHED_LOADING':
      return {...state, loading: false}
    case 'SHOW_LOADING_ERROR':
      return {...state, loading: false, loadingError: true}

    default:
      return state
  }
}

export default subreddits
