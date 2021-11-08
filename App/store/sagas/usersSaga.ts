import axios from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ResponseGenerator } from '../../types/genericTypes'
import { IUser } from '../../types/userTypes'

import { fetchUsersFailure, fetchUsersSuccess } from '../actions/userActions'
import { userTypes } from '../ActionTypes/userTypes'

const getUsers = () =>
  axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')

function* fetchUsersSaga() {
  try {
    const response: ResponseGenerator = yield call(getUsers)
    console.log(
      '🚀 ~ file: postsSaga.ts ~ line 14 ~ function*fetchPostsSaga ~ response',
      response,
    )

    yield put(
      fetchUsersSuccess({
        users: response.data,
      }),
    )
  } catch (e) {
    yield put(
      fetchUsersFailure({
        // @ts-ignore
        error: e.message,
      }),
    )
  }
}

function* usersSaga() {
  yield all([takeLatest(userTypes.FETCH_USER_REQUEST, fetchUsersSaga)])
}

export default usersSaga
