import { USERNAME_UPDATED } from "../types"

INITIAL_STATE = [

]

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERNAME_UPDATED:
      return state
    default:
      return state
  }
}