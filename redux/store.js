import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'

import sagas from './sagas'
import reducers from './reducers'

export const reduxStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  // Combined Reducers
  const combinedReducers = combineReducers(reducers)

  // Reducers
  const reducer = (state = {}, action) => {
    if (action.type === HYDRATE) {
      return { ...state, ...action.payload }
    }
    return combinedReducers(state, action)
  }

  // Create global state using reducers, middlewares and redux-dev-tools
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )

  // Run middleware sagas
  store.sagaTask = sagaMiddleware.run(sagas)

  return store
}

export default createWrapper(reduxStore, { debug: false })
