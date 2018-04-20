import { LOAD_POSTS_SUCCESS, APPEND_POST } from '../actions/actionTypes'
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

export default combineReducers({posts})
