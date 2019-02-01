import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { DEV } from './constants'

export default ({children}) => {
  const middlewares = [thunk]
  
  if (DEV) {
    const { logger } = require('redux-logger')
    middlewares.push(logger)
  }
  
  const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose
  
  const enhancers = composeEnhancers(applyMiddleware(...middlewares))
  const store = createStore(reducers, enhancers)

  return <Provider store={store}>{children}</Provider>
}


