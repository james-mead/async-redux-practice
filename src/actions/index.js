import {fetchPostsApi} from '../api/api'

export const receivePosts = (posts) => {
  return {
    type: 'RECEIVE_POSTS',
    posts: posts.map(post => post.data)
  }
}

export const loadingPost = () => {
  return {
    type: 'LOADING_POSTS'
  }
}

export const finishedLoading = () => {
  return {
    type: 'FINISHED_LOADING'
  }
}

export const showLoadingError = () => {
  return {
    type: 'SHOW_LOADING_ERROR'
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(loadingPost())
    fetchPostsApi(subreddit, (err, res) => {
      if (err) {
        dispatch(showLoadingError())
        return
      }
      dispatch(receivePosts(res))
      dispatch(finishedLoading())
    })
  }
}
