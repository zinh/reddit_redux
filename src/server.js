import express from 'express'
import { Provider } from 'react-redux'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { createStore } from 'redux'

import { loadPostsSuccess, loadCommentsSuccess } from './actions'
import reddit from './lib/reddit'
import App from './containers/App'
import rootReducer from './reducers'

const app = express()
const port = 3000

const store = createStore(rootReducer)

app.use(express.static('dist'))

function renderFullPage(html, preloadedState){
  return `
<html>
  <head>
    <title>Reddit loader</title>
  </head>
  <body>
    <div id="root">
    ${html}
    </div>
    <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
    <script src="/client.js"> </script>
  </body>
</html>
  `
}

function getPosts(subName, request, response) {
  reddit.getPosts(subName).then(
    posts => {
      store.dispatch(loadPostsSuccess(posts))
      const html = renderToString(
        <Provider store={store}>
          <StaticRouter location={request.url}>
            <App/>
          </StaticRouter>
        </Provider>
      )
      response.send(renderFullPage(html, store.getState()))
    }
  )
}

app.get('/', (req, res) => {
  getPosts('popular', req, res)
})

app.get('/r/:subName', (req, res) => {
  getPosts(req.params.subName, req, res)
})

app.get('/post/:postId', (req, res) => {
  reddit.getComments(req.params.postId).then(comments => {
    store.dispatch(loadCommentsSuccess(comments))
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <App/>
        </StaticRouter>
      </Provider>
    )
    res.send(renderFullPage(html, store.getState()))
  })
})

app.listen(port, () => { console.log(`Listening at http://localhost:${port}`) })
