import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

export default function configureStore(preload){
  const preloadedState = window.__PRELOADED_STATE__
  delete window.__PRELOADED_STATE__
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
}
