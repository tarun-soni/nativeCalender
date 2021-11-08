import axios from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { IPost } from '../../types/postTypes'
import { ResponseGenerator } from '../../types/genericTypes'

import { fetchPostsFailure, fetchPostsSuccess } from '../actions/postActions'
import { postTypes } from '../ActionTypes/postTypes'

const getPosts = async () =>
  await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/todos')

function* fetchPostsSaga() {
  try {
    const response: ResponseGenerator = yield call(getPosts)

    yield put(
      fetchPostsSuccess({
        posts: response.data,
      }),
    )
  } catch (e) {
    yield put(
      fetchPostsFailure({
        // @ts-ignore
        error: e.message,
      }),
    )
  }
}

function* postsSaga() {
  yield all([takeLatest(postTypes.FETCH_POST_REQUEST, fetchPostsSaga)])
}

export default postsSaga
