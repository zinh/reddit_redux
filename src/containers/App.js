import React from 'react'
import { connect } from 'react-redux'
import Post from '../components/Post'
let App = ({ posts }) => {
  if (posts){
    return (<ul> { posts.map((post, idx) => (<Post post={post} key={idx}/>)) } </ul>)
  } else {
    return (<div>No post</div>)
  }
}

function mapStateToProps(state){
  return { posts: state.posts }
}

App = connect(mapStateToProps)(App)
export default App
