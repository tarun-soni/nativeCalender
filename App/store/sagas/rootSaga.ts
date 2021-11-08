import { all } from 'redux-saga/effects'
import postsSaga from './postsSaga'
import usersSaga from './usersSaga'

function* rootSaga() {
  yield all([postsSaga(), usersSaga()])
}

export default rootSaga
