import {
  FetchUsersFailure,
  FetchUsersFailurePayload,
  FetchUsersRequest,
  FetchUsersSuccess,
  FetchUsersSuccessPayload,
} from '../../types/userTypes'
import { userTypes } from '../ActionTypes/userTypes'

export const fetchUserRequest = (): FetchUsersRequest => ({
  type: userTypes.FETCH_USER_REQUEST,
})

export const fetchUsersSuccess = (
  payload: FetchUsersSuccessPayload,
): FetchUsersSuccess => ({
  type: userTypes.FETCH_USER_SUCCESS,
  payload,
})

export const fetchUsersFailure = (
  payload: FetchUsersFailurePayload,
): FetchUsersFailure => ({
  type: userTypes.FETCH_USER_FAILURE,
  payload,
})
