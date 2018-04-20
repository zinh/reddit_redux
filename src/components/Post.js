import React from 'react'

const Post = ({post}) => (
  <li><a href={post.data.url}>{post.data.title}</a></li>
)

export default Post
