import {fetchPostsApi, fetchDefinitionApi} from '../api/api'

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

export const receiveDefinitions = (definitions) => {
  return {
    type: 'RECEIVE_DEFINITIONS',
    definitions: definitions.map(definition => definition.definition)
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

export function fetchDefinition (term) {
  return (dispatch) => {
    fetchDefinitionApi(term, (err, res) => {
      if (err) {
        console.error(err)
        return
      }
      dispatch(receiveDefinitions(res))
    })
  }
}
