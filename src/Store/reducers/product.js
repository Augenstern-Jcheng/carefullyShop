import { handleActions } from "redux-actions";
import { getProduct_success } from '../actions/porduct'

const initialState = {
  sold: [],
  createdAt: []
}

const productReducer = handleActions({
  [getProduct_success]: (state, action) => (
    {
    ...state,
    [action.payload.sortBy]: action.payload.data
  })
},initialState)


export default productReducer