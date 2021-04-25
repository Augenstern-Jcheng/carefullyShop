import { Form, Input, Button, Result, Spin } from 'antd';
import Layout from '../layout'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signup, signup_reset } from '../../../Store/actions/signup'
import { Link } from 'react-router-dom';

function Signin() {
  const { form } = Form.useForm()
  const {isFinish, isSend, isSuccess, message} = useSelector(state => state.signup)
  const dispatch = useDispatch()
  // 提交注册
  const handleOnsubmit = (values) => {
    // 发送signup指令，请求注册
    // console.log('发送了')
    dispatch(signup(values))
    form.resetFields()
  }

  // 是否正在请求
  const isSendLoading = () => {
    if (isSend) return <Spin />
  }
  // 如果注册成功跳转登录页
  const finshSuccess = () => {
    if(isFinish && isSuccess) {

     return (
        <Result 
        status="success" 
        title='注册成功' 
        extra={[
          <Button type="primary">
            <Link to="/signin">去登录</Link>
          </Button>,
        ]}
        />
     )
    } 
  }
    
  // 注册失败，
  const showError = () => {
    if (isFinish && !isSuccess) {
      return <Result status="warning" title="注册失败" subTitle={message} />
    }
  }
  // 卸载阶段重置注册页
  useEffect (() => {
    return () => {
      dispatch(signup_reset())
    }
  }, [dispatch]) 

  // from表单布局
  const fromLayout = () => (
    <>
      <Form form={form} onFinish={handleOnsubmit}>
        <Form.Item label="用户名" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="邮箱" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="密码" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={isSend}>
            注册
          </Button>
        </Form.Item>
      </Form>
    </>
  )
  return (
    <Layout title="注册" subTitle="Come Baby">
      {isSendLoading()}
      {finshSuccess()}
      {showError()}
      {fromLayout()}
    </Layout>
  )
}

export default Signin
