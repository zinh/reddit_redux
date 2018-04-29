import React from 'react'
import { Route, Link } from 'react-router-dom'
import Posts from './Posts'
import Comments from './Comments'

const App = () => {
  return (
    <div>
      <Link to="/">Home</Link><br/>
      <Link to="/r/askReddit">ASKREDDIT</Link><br/>
      <Link to="/r/funny">FUNNY</Link><br/>
      <Link to="/r/pics">PICS</Link><br/>
      <Link to="/r/gifs">GIFS</Link>
      <Route exact path="/" component={Posts} />
      <Route path="/r/:subName" component={Posts} />
      <Route path="/post/:postId" component={Comments} />
    </div>
  )
}

export default App
