import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({post}) => (
  <li><Link to={`/post/${post.id}`}>{post.title}</Link></li>
)

export default Post
