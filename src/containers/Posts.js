import React from 'react'
import { connect } from 'react-redux'
import { loadPosts } from '../actions'
import Post from '../components/Post'
class Posts extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentSub: props.match.params.subName
    }
  }

  componentDidMount(){
    this.reloadPosts(this.state.currentSub)
  }

  componentWillReceiveProps(newProps){
    if (this.state.currentSub != newProps.match.params.subName){
      this.reloadPosts(newProps.match.params.subName)
      this.setState({ currentSub: newProps.match.params.subName })
    }
  }

  reloadPosts(subName) {
    if (subName){
      this.props.loadPosts(subName)
    } else {
      this.props.loadPosts('popular')
    }
  }

  render(){
    let { posts } = this.props
    return (
      <ul>
        { posts.map((post, idx) => (<Post post={post.data} key={idx}/>)) }
      </ul>
    )
  }
}

function mapStateToProps(state){
  return { posts: state.posts }
}

function mapDispatchToProps(dispatch){
  return { loadPosts: (subName) => dispatch(loadPosts(subName))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
