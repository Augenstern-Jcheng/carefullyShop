import { all } from 'redux-saga/effects'
import signUpSage from './signup'
import productSaga from './product'
import searchSaga from './search'
import filterSaga from './fliter'
import detailsSaga from './details'

export default function* rootSaga() {
  yield all([signUpSage(), productSaga(), searchSaga(), filterSaga(), detailsSaga()])
}