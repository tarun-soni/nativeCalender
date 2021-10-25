import { takeEvery, call, put } from 'redux-saga/effects'
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from './actions'

async function usersFetch() {
  return fetch('https://jsonplaceholder.typicode.com/users').then(res =>
    res.json(),
  )
}

function* workGetUsersFetch() {
  const users = yield call(usersFetch)
  yield put({ type: GET_USERS_SUCCESS, users })
}

function* mySaga() {
  yield takeEvery(GET_USERS_FETCH, workGetUsersFetch)
}

export default mySaga
