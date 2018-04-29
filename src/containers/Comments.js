import React from 'react'
import { connect } from 'react-redux'
import { loadComments } from '../actions'
import Comment from '../components/Comment'

class Comments extends React.Component {
  constructor(props){
    super(props)
    let postId = props.match.params.postId
    props.getPostDetail(postId)
  }

  render(){
    let { post, comments } = this.props
    if (comments){
      return (<div>
        <b>{post.data.children[0].data.title}</b>
        <a href={post.data.children[0].data.url}><img src={post.data.children[0].data.thumbnail}></img></a>
        { comments.data.children.map((comment, idx) => <Comment comment={comment} key={idx}/>) }
      </div>)
    } else {
      return (<div>Loading comments</div>)
    }
  }
}

function mapStateToProps(state){
  return {
    post: state.comments.post,
    comments: state.comments.comments
  }
}

function mapDispatchToProps(dispatch){
  return {
    getPostDetail: (postId) => { dispatch(loadComments(postId)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
