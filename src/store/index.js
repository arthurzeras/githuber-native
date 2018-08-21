import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './ducks'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [
  sagaMiddleware
]
const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore
const store = createAppropriateStore(reducers, applyMiddleware(...middlewares))
sagaMiddleware.run(sagas)

export default store
