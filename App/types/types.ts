import { postTypes } from '../store/ActionTypes/postTypes'

export interface IPost {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface PostsInitState {
  pending: boolean
  posts: IPost[]
  error: string | null
}

export interface FetchPostsSuccessPayload {
  posts: IPost[]
}

export interface FetchPostsFailurePayload {
  error: string
}

export interface FetchPostsRequest {
  type: typeof postTypes.FETCH_POST_REQUEST
}

export type FetchPostsSuccess = {
  type: typeof postTypes.FETCH_POST_SUCCESS
  payload: FetchPostsSuccessPayload
}

export type FetchPostsFailure = {
  type: typeof postTypes.FETCH_POST_FAILURE
  payload: FetchPostsFailurePayload
}

export type PostsActions =
  | FetchPostsRequest
  | FetchPostsSuccess
  | FetchPostsFailure
