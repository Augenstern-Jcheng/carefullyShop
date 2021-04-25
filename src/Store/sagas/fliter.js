import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { filter_products, filter_products_success } from '../actions/filter'
import { API } from '../../config'

function* handleFilter (action) {
  const {data} = yield axios.post(`${API}/products/filter`, {
    order: "desc",
    limit: 4,
    skip: action.payload.skip,
    filters: action.payload.fliters
  })
  yield put(filter_products_success({skip: action.payload.skip, ...data}))
}

export default function* filterSaga() {
  yield takeEvery(filter_products, handleFilter)
}