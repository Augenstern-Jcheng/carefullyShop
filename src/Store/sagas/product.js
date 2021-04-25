import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { API } from '../../config'
import { getProduct, getProduct_success } from '../actions/porduct'

function* handleProcudt(action) {
  const { data } = yield axios.get(`${API}/products`,{ params: action.payload})
  yield put(getProduct_success({
    sortBy: action.payload.sortBy,
    data
  }))
}

export default function* productSaga () {
  yield takeEvery(getProduct, handleProcudt)
}