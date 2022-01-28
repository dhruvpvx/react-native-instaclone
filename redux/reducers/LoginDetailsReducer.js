import { EMAIL_CHANGED, LOG_OUT, LOGIN_USER, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS, PASSWORD_CHANGED } from "../types"

const INITIAL_STATE = {
  email: "1@1.com",
  password: "okokok",
  error: '',
  user: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload, error: false }
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, error: false }
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false }
    case LOGIN_USER_FAIL:
      return { ...state, error: true, loading: false, password: '' }
    case LOGIN_USER:
      return { ...state, loading: true }
    case LOG_OUT:
      return { ...state, user: null }
    default:
      return state
  }
}