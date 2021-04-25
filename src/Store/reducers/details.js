import { handleActions } from "redux-actions";
import { getDetails_success } from "../actions/details";

const initialState = {}

const detailsReducer = handleActions({
  [getDetails_success]: (state, action) => ({
    ...action.payload
  })

}, initialState)

export default detailsReducer