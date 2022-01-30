import { IS_UPLOADED, IS_UPLOADING, POST_UPLOADED, UPLOAD_FAILED } from "../types"

const INITIAL_STATE = {
  isUploading: false,
  isUploaded: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_UPLOADING:
      return {...state, isUploading: true}
    case IS_UPLOADED:
      return {...state, isUploaded: true, isUploading: false}
    case UPLOAD_FAILED:
      return {...INITIAL_STATE, error: action.payload}
    case POST_UPLOADED:
      return INITIAL_STATE 
    default:
      return state
  }
}