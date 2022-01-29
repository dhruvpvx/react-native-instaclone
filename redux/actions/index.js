import { EMAIL_CHANGED, USERNAME_UPDATED, LOG_OUT, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER, LOGIN_USER_FAIL } from "../types"
import { FacebookAuthProvider, getAuth, onAuthStateChanged, signInWithCredential, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { child, getDatabase, push, ref as databaseRef, set, update } from 'firebase/database'
import { initializeAsync, logInWithReadPermissionsAsync } from 'expo-facebook'
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
import { Alert } from "react-native";


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
    await set(databaseRef(db, `users/${userId}/user_profile_details`), { username: text })
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

export const createNewPost = (image, caption = 'No Caption') => {
  return async dispatch => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', image, true);
      xhr.send(null);
    });

    var file = new File(
      [blob],
      `${new Date().toISOString()}`,
      {
        lastModified: new Date().toISOString()
      })
    const storage = getStorage()
    const auth = getAuth();
    const userId = auth.currentUser.uid
    const createStorageRef = storageRef(storage, `/users/${userId}/posts/${file.name}`)
    const metadata = {
      contentType: 'image/jpeg',
    };
    uploadBytes(createStorageRef, file, metadata)
      .then(({ metadata }) => {
        getDownloadURL(storageRef(storage, `/users/${userId}/posts/${file.name}`))
          .then(async url => {
            const db = getDatabase();
            await set(push(databaseRef(db, `users/${userId}/posts`)),
              {
                post_image: url,
                post_caption: caption,
                post_created: metadata.timeCreated,
                post_likes_count: 0,
                post_comments_count: 0,
              })
              .then(() => console.log('Post Added In Realtime Database'))
              .catch((error) => console.log('Not Success1'))
          })
          .catch((error) => console.log(error))
      })
      .catch((error) => console.log('Not Success3'))
  }

}