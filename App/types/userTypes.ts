import { userTypes } from '../store/ActionTypes/userTypes'

export interface IUser {
  id: number
  name: string
  username: string
  website?: string
  phone?: string
  email?: string
}

export interface UserInitState {
  pending: boolean
  users: IUser[]
  error: string | null
}

export interface FetchUsersRequest {
  type: typeof userTypes.FETCH_USER_REQUEST
}
export interface FetchUsersFailurePayload {
  error: string
}
export interface FetchUsersSuccessPayload {
  users: IUser[]
}

export type FetchUsersSuccess = {
  type: typeof userTypes.FETCH_USER_SUCCESS
  payload: FetchUsersSuccessPayload
}
export type FetchUsersFailure = {
  type: typeof userTypes.FETCH_USER_FAILURE
  payload: FetchUsersFailurePayload
}
export type UserActions =
  | FetchUsersRequest
  | FetchUsersSuccess
  | FetchUsersFailure
