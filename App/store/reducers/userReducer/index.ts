import { UserInitState } from '../../../types/userTypes'
import { UserActions } from '../../../types/userTypes'
import { userTypes } from '../../ActionTypes/userTypes'
const initialState: UserInitState = {
  pending: false,
  users: [],
  error: null,
}

export default (state = initialState, action: UserActions) => {
  switch (action.type) {
    case userTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        pending: true,
      }
    case userTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        users: action.payload.users,
        error: null,
      }
    case userTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        users: [],
        error: action.payload.error,
      }
    default:
      return state
  }
}
