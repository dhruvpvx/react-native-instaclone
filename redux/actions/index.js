import { EMAIL_CHANGED, USERNAME_UPDATED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER, LOGIN_USER_FAIL } from "../types"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from 'firebase/database'
import { Alert } from "react-native";

export const emailChanged = (text) => {
  return { type: EMAIL_CHANGED, payload: text }
}
export const passwordChanged = (text) => {
  return { type: PASSWORD_CHANGED, payload: text }
}

// export const fbLogin = () => {
//   return async dispatch => {
//     try {
//       await Facebook.initializeAsync({
//         appId: '243384021303127',
//       });
//       const { type, token } =
//         await Facebook.logInWithReadPermissionsAsync({
//           permissions: ['public_profile'],
//         });
//       if (type === 'success') {
//         const credentials = FacebookAuthProvider.credential(token)
//         await signInWithCredential(credentials).catch(error => {
//           console.log(error);
//         });
//       } else {
//         // type === 'cancel'
//       }
//     } catch ({ message }) {
//       alert(`Facebook Login Error: ${message}`);
//     }
//   }
// }

export const addUsername = (text, callback) => {
  return dispatch => {
    const db = getDatabase();
    const auth = getAuth();
    const userId = auth.currentUser.uid
    set(ref(db, `users/${userId}/user_profile_details`), { username: text })
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