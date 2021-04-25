import { Button, Col, Divider, Form, Input, Row, Select } from "antd"
import { useDispatch, useSelector } from "react-redux"
import GetCategorty from '../helper/categorty'
import ProductItem from './productItem'
import { getSearch } from '../../Store/actions/search'

function Seach() {
  const prducts = useSelector(state => state.search.searchDatas)
  const [form] = Form.useForm()
  const categories = GetCategorty()
  const dispatch = useDispatch()

  const onFinish = (values) => {
    if (!values.search) values.search = " "
    dispatch(getSearch(values))
    form.resetFields()
  }

  return (
    <>
      <Form form={form} initialValues={{category: 'All'}} layout="inline" onFinish={onFinish}>
      <Input.Group compact>
        <Form.Item name="category">
          <Select>
            <Select.Option value="All">请选择分类</Select.Option>
            {
              categories.map(item => (
                <Select.Option value={item._id} key={item._id}>{item.name}</Select.Option>
              ))
            }
          </Select>
        </Form.Item>
        <Form.Item name="search">
          <Input placeholder="输入查询名称"/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">搜索</Button>
        </Form.Item>
        </Input.Group>
      </Form>
      <Divider />
      <Row gutter={[16, 16]}>
        {
          prducts.map(product => {
            return (
              <Col span="6" key={product._id}>
              <ProductItem product={product} />
            </Col>
            )
          })
        }
      </Row>
    </>
  )
}

export default Seach
