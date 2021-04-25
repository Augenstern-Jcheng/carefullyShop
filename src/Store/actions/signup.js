import { createAction } from 'redux-actions'

// 注册
export const signup = createAction('signup')
// 注册成功
export const signup_success = createAction('signup_success')
// 注册失败
export const signup_faile = createAction('signup_faile')
// 重置注册
export const signup_reset = createAction('signup_reset')
