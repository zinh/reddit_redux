export function getPosts(subName){
  const requestURL = `https://www.reddit.com/r/${subName}.json`
  let result = fetch(requestURL)
  .then((resp) => resp.json())
  .then((json) => (json.data.children))
  return result
}
