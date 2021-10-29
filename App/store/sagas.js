import { matches } from 'lodash'
import { takeEvery, call, put } from 'redux-saga/effects'
import { GET_USERS_FAILED, GET_USERS_FETCH, GET_USERS_SUCCESS } from './actions'

async function usersFetch() {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/usersss')

    const data = await result.json()

    if (matches(data, {})) {
      return {
        success: false,
        data: 'NOT FOUND',
        error: true,
      }
    }

    return {
      success: true,
      data: result,
      error: false,
    }
  } catch (error) {
    return { success: false, data: error, error: true }
  }
}

function* workGetUsersFetch() {
  const fetchedUsers = yield call(usersFetch)

  let users = []

  if (fetchedUsers.success) {
    users = fetchedUsers.data
    yield put({ type: GET_USERS_SUCCESS, users })
  } else {
    yield put({ type: GET_USERS_FAILED, users })
  }
}

function* mySaga() {
  yield takeEvery(GET_USERS_FETCH, workGetUsersFetch)
}

export default mySaga
