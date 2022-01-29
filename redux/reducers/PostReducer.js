import { IS_UPLOADING } from "../types"

INITIAL_STATE = {
  isUploading: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IS_UPLOADING:
      return {...state, isUploading: true}
    default:
      return state
  }
}