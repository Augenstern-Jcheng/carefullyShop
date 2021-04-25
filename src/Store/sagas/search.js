import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { getSearch, getSearch_success } from '../actions/search'
import { API } from '../../config'

function* handlesearch (action) {
  const { data } = yield axios.get(`${API}/products/search`, {
    params: action.payload
  })
  yield put(getSearch_success(data))
}

export default function* searchSaga () {
  yield takeEvery(getSearch, handlesearch)
}