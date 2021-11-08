import { all, fork } from 'redux-saga/effects'
import postsSaga from './postsSaga'
import usersSaga from './usersSaga'

function* rootSaga() {
  // yield all([fork(postsSaga)])
  yield all([postsSaga(), usersSaga()])
}

export default rootSaga
