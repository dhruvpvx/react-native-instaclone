import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER, LOGIN_USER_FAIL } from "../types"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const emailChanged = (text) => {
  return { type: EMAIL_CHANGED, payload: text }
}
export const passwordChanged = (text) => {
  return { type: PASSWORD_CHANGED, payload: text }
}

export const loginUser = (email, password) => {
  return dispatch => {
    dispatch({ type: LOGIN_USER })
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
      }).catch(() => dispatch({ type: LOGIN_USER_FAIL }))
  }
}