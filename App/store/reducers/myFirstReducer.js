import { GET_USERS_FAILED, GET_USERS_SUCCESS } from '../actions'

const inititalState = {
  users: [],
}
const myFirstReducer = (state = inititalState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.users }
    case GET_USERS_FAILED:
      return { ...state, users: [] }
    default:
      return state
  }
}
export { myFirstReducer }
