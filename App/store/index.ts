import createSagaMiddleware from '@redux-saga/core'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import postReducer from './reducers/postReducer'
import userReducer from './reducers/userReducer'
import rootSaga from './sagas/rootSaga'
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger)),
)
sagaMiddleware.run(rootSaga)

export { store }

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default rootReducer
