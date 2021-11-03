import createSagaMiddleware from '@redux-saga/core'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { myFirstReducer } from './reducers/myFirstReducer'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({ myFirstReducer })

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)
sagaMiddleware.run(mySaga)

export { store }
