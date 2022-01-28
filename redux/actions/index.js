import { EMAIL_CHANGED, USERNAME_UPDATED, LOG_OUT, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER, LOGIN_USER_FAIL } from "../types"
import { FacebookAuthProvider, getAuth, onAuthStateChanged, signInWithCredential, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getDatabase, ref, set } from 'firebase/database'
import { initializeAsync, logInWithReadPermissionsAsync } from 'expo-facebook'

export const emailChanged = (text) => {
  return { type: EMAIL_CHANGED, payload: text }
}
export const passwordChanged = (text) => {
  return { type: PASSWORD_CHANGED, payload: text }
}

export const logOut = () => {
  const auth = getAuth();
  return dispatch => signOut(auth).then(() => dispatch({ type: LOG_OUT }))
}

export const fbLogin = () => {

  return async dispatch => {
    const auth = getAuth();
    // Listen for authentication state to change.
    onAuthStateChanged(auth, user => {
      if (user != null) {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
      }

      // Do other things
    });
    await initializeAsync({ appId: '243384021303127' });

    const { type, token } = await logInWithReadPermissionsAsync({
      permissions: ['public_profile'],
    });

    if (type === 'success') {
      const credential = FacebookAuthProvider.credential(token);

      signInWithCredential(auth, credential)
        .catch(error => dispatch({ type: LOGIN_USER_FAIL }));
    }
  }
}

export const addUsername = (text, callback) => {
  return async dispatch => {
    const db = getDatabase();
    const auth = getAuth();
    const userId = auth.currentUser.uid
    await set(ref(db, `users/${userId}/user_profile_details`), { username: text })
      .then(() => {
        dispatch({ type: USERNAME_UPDATED })
        callback()
      })
  }
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