import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import Posts from './Posts'
import Comments from './Comments'

const App = () => {
  return (
    <Router>
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
    </Router>
  )
}

export default App
