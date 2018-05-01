import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { loadPosts, appendPost } from './actions'
import AppRoute from './containers/AppRoute'
import configureStore from './store/configureStore'

const store = configureStore()

hydrate (
  <Provider store={store}>
    <AppRoute />
  </Provider>,
  document.getElementById("root")
)
