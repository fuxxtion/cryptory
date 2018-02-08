import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import reducer from './ducks'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware();

export const initStore = () => {
  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    )
  )
  sagaMiddleware.run(sagas)

  return store
}