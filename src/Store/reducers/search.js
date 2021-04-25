import { handleActions } from 'redux-actions'
import { getSearch_success } from '../actions/search'

const initialState = {
  searchDatas: []
}

const searchReducer = handleActions({
  [getSearch_success]: (state, action) => ({
    searchDatas: action.payload
  })

},initialState)

export default searchReducer