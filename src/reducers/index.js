import { LOAD_POSTS_SUCCESS, APPEND_POST, LOAD_COMMENTS_SUCCESS } from '../actions/actionTypes'
import { combineReducers } from 'redux'

const posts = (state, action) => {
  switch (action.type) {
    case LOAD_POSTS_SUCCESS:
      return action.posts
    case APPEND_POST:
      return [action.post, ...state] 
    default:
      return []
  }
}

const comments = (state, action) => {
  switch (action.type) {
    case LOAD_COMMENTS_SUCCESS:
      return {
      post: action.comments[0],
      comments: action.comments[1]
    }
    default:
      return {}
  }
}

export default combineReducers({posts, comments})
