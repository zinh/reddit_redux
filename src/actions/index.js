import { getPosts } from '../reddit'
import { LOAD_POSTS_SUCCESS } from './actionTypes'

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

export function appendPost(post){
  return {type: APPEND_POST, post: post}
}
