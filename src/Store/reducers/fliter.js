import { handleActions } from "redux-actions";
import { filter_products_success } from '../actions/filter'

const initialState = {
  size: 0,
  data: []
}

const fliterReducer = handleActions({
  [filter_products_success]: (state, action) => (
    {
      size: action.payload.size, 
      data: action.payload.skip !== 0 ? [...state.data, ...action.payload.data] : action.payload.data
    }
  )
}, initialState)

export default fliterReducer