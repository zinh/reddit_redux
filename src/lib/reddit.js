const http = require('axios')

exports.getPosts = (subName) => {
  const endpoint = `https://reddit.com/r/${subName}.json`
  return http.get(endpoint)
    .then(res => res.data.data.children.map(post => 
      ({ data: {title: post.data.title, id: post.data.id }})))
}
