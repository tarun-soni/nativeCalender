import { User } from '../../types'
import { GET_USERS_FAILED, GET_USERS_SUCCESS } from '../actions'

const inititalState = {
  users: [],
}

type UserAction = {
  type: string
  payload: User
}

const myFirstReducer = (state = inititalState, action: UserAction) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload }
    case GET_USERS_FAILED:
      return { ...state, users: [] }
    default:
      return state
  }
}
export { myFirstReducer }
