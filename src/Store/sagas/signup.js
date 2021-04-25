import { takeEvery, put } from 'redux-saga/effects'
import { signup, signup_faile, signup_success } from "../actions/signup"
import axios from 'axios'
import { API } from '../../config'

function* handleSignUp (action) {

  try {
      yield console.log(action.payload)
      yield axios.post(`${API}/signup`, action.payload)
      // 请求成功
      yield put(signup_success())
  } catch (error) {
    yield console.log(error)
    // 请求失败
    yield put(signup_faile(error.response.data.error))
  }
}

const signUpSage = function* () {
  yield takeEvery(signup, handleSignUp)
} 

export default signUpSage