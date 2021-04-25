import { Form, Input, Button, message } from 'antd';
import Layout from '../layout'
import axios from 'axios'
import { API } from '../../../config'
import { useHistory } from "react-router-dom"

function Signin() {
  const history = useHistory()
  const handleOnsubmit = async (values) => {
    const data =  await axios.post(`${API}/signin`, values)
    if (data.status === 200) {
      message.success('登录成功')
      localStorage.setItem('user', JSON.stringify(data))
      const url = data.data.user.role === 0 ? '/user/dashboard' : '/admin/dashboard'
      history.push(url)
    }
  }

  return (
    <Layout title="登录" subTitle="welcome Boy">
      <Form onFinish={handleOnsubmit}>
        <Form.Item label="邮箱" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="密码" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}

export default Signin
