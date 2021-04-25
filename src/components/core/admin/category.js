import { Button, Form, Input, PageHeader, Divider, message } from 'antd'
import Layout from '../layout'
import axios from 'axios'
import {API} from '../../../config'
import { isAuth } from '../login/isAuth'
function Category() {

  const [form] = Form.useForm()
  const onFinish = async values => {
    const { data } = isAuth()
    const datas = await axios.post(`${API}/category/create/${data.user._id}`, values, {
      headers: {
        Authorization: `Bearer ${data.token}`
      }
    })
    if (datas.status === 200) {
      message.success('添加成功')
      form.resetFields()
    }
  }

  return (
    <Layout title="添加分类">
        <PageHeader
        className="site-page-header"
        onBack={() => window.history.go(-1)}
        title="返回"
        subTitle=""
      />
      <Divider />
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="name" label="商品分类名称">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">创建</Button>
        </Form.Item>
      </Form>
    </Layout>
  )
}

export default Category
