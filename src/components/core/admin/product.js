import { Form, PageHeader, Upload, Button, Select, Input, message } from 'antd'
import Layout from '../layout'
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import axios from 'axios'
import {API} from '../../../config'
import { isAuth } from '../login/isAuth'
import GetCategorty from '../../helper/categorty'

function Product() {
  const { file, setFile } = useState
  const categories = GetCategorty()
  const [ form ] = Form.useForm()
  const { data: Auth } = isAuth()

  const props = {
    beforeUpload: (files) => {
      setFile(files)
      // return false
    }
  }

  const onFinish = async (values) => {
    const formDatas = new FormData()
    for (let item in values) {
      formDatas.append(item, values[item])
    }
    formDatas.append('photo', file)
    const data = await axios.post(`${API}/product/create/${Auth.user._id}`, formDatas, {
      headers : {
        Authorization: `Bearer ${Auth.token}`
      }
    })
    if (data.status === 200) {
      form.resetFields()
      message.success('添加成功')
    }
  }

  // form表单
  const showForm = () => (
    <Form form={form} onFinish={onFinish} initialValues={{ category: '-1' }}>
        <Form.Item>
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>上传商品封面</Button>
          </Upload>
        </Form.Item>
        <Form.Item label="商品名称" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="商品描述" name="description">
          <Input />
        </Form.Item>
        <Form.Item label="商品价格" name="price">
          <Input />
        </Form.Item>
        <Form.Item label="商品分类" name="category">
          <Select>
            <Select.Option value="-1">请选择分类</Select.Option>
            {categories.map(({ name, _id }) => (
              <Select.Option key={_id} value={_id}>
                {name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="商品数量" name="quantity">
          <Input />
        </Form.Item>
        <Form.Item label="是否需要运输" name="shipping">
          <Select>
            <Select.Option value="1">是</Select.Option>
            <Select.Option value="0">否</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            添加商品
          </Button>
        </Form.Item>
      </Form>
  )

  return (
    <Layout title="添加商品">
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.go(-1)}
        title="返回"
        subTitle=""
      />
      {showForm()}
    </Layout>
  )
}

export default Product
