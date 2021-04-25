import { handleActions }  from 'redux-actions'
import { signup, signup_success, signup_faile, signup_reset } from '../actions//signup'
const initialState = {
  // 是否发送
  isSend: false,
  // 是否完成
  isFinish: false,
  // 是否成功
  isSuccess: false,
  // 失败消息
  message: ''
}


const siginReducers = handleActions(
  {
    // 发送注册请求
    [signup]: (state, action) => ({
      isSend: true,
      isFinish: false,
      isSuccess: false,
      message: ''
    }),
    // 注册成功
    [signup_success]: (state, action) => ({
      isSend: false,
      isFinish: true,
      isSuccess: true,
      message: ''
    }),
    // 注册失败
    [signup_faile]: (state, action) => ({
      isSend: false,
      isFinish: true,
      isSuccess: false,
      message: action.payload
    }),
    // 重置
    [signup_reset]: (state, action) => ({
      isSend: false,
      isFinish: false,
      isSuccess: false,
      message: ''
    }),
  }
  ,initialState)


export default siginReducers