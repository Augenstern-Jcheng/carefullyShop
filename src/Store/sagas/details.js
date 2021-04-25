import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { getDetails, getDetails_success } from '../actions/details'
import { API } from '../../config'

function* handleDetails (action) {
  const { data } = yield axios.get(`${API}/product/${action.payload}`)
  yield put(getDetails_success(data))
}

export default function* detailsSaga () {
  yield takeEvery(getDetails, handleDetails)
}