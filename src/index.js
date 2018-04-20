import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { loadPosts, appendPost } from './actions'
import App from './containers/App'
import configureStore from './store/configureStore'

const store = configureStore()

store.dispatch(loadPosts('askReddit'))

render (
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("root")
)
