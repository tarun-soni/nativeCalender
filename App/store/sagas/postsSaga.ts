import axios, { AxiosResponse } from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { IPost } from '../../types/types'

import { fetchPostsFailure, fetchPostsSuccess } from '../actions/postActions'
import { postTypes } from '../ActionTypes/postTypes'

const getPosts = () =>
  axios.get<IPost[]>('https://jsonplaceholder.typicode.com/todos')

function* fetchPostsSaga() {
  try {
    const response: Promise<AxiosResponse<IPost[], any>> = yield call(getPosts)
    console.log(
      '🚀 ~ file: postsSaga.ts ~ line 14 ~ function*fetchPostsSaga ~ response',
      response,
    )

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
