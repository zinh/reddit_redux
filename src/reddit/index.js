export function getPosts(subName){
  const requestURL = `https://www.reddit.com/r/${subName}.json`
  return requestAPI(requestURL).then((json) => (json.data)).then(json => json.children)
}

export function getComments(postId){
  const requestURL = `https://www.reddit.com/comments/${postId}.json`
  return requestAPI(requestURL)
}

function requestAPI(endpoint){
  let result = fetch(endpoint)
  .then((resp) => resp.json())
  return result
}
