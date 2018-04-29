const http = require('axios')

exports.getPosts = (subName) => {
  const endpoint = `https://reddit.com/r/${subName}.json`
  return http.get(endpoint)
    .then(res => 
      ({data:
          res.data.data.children.map((post) => 
            ({title: post.data.title, 
              id: post.data.id}))}))
}
