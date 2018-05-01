import { getPosts, getComments } from '../reddit'
import { LOAD_POSTS_SUCCESS, LOAD_COMMENTS_SUCCESS } from './actionTypes'

export const LOAD_POSTS = "LOAD_POSTS"
export const CHANGE_SUB = "CHANGE_SUB"

export function loadPosts(subName){
  return function(dispatch){
    getPosts(subName).then(posts => {
      dispatch(loadPostsSuccess(posts))
    })
  }
}

export function loadPostsSuccess(posts){
  return {type: LOAD_POSTS_SUCCESS, posts: posts}
}

export function loadComments(postId){
  return function(dispatch){
    getComments(postId).then(comments => {
      dispatch(loadCommentsSuccess(comments))
    })
  }
}

export function loadCommentsSuccess(comments){
  return {type: LOAD_COMMENTS_SUCCESS, comments: comments}
}
