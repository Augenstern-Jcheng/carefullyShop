import { Menu, Typography, Descriptions, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import Layout from '../layout'
import {
  ShoppingCartOutlined,
  UserOutlined,
  OrderedListOutlined
} from "@ant-design/icons"
import { isAuth } from '../login/isAuth'
  const { Title } = Typography;
  const { data } = isAuth() || {}
  // console.log(data)
  // console.log(user)
  const MenuNav = () => (
  <>
    <Title level={5}>管理员链接</Title>
    <Menu>
      <Menu.Item>
        <ShoppingCartOutlined />
        <Link to="/create/category">添加分类</Link>
      </Menu.Item>
      <Menu.Item>
        <UserOutlined />
        <Link to="/create/product">添加商品</Link>
      </Menu.Item>
      <Menu.Item>
        <OrderedListOutlined />
        <Link to="/admin/order">订单分类</Link>
      </Menu.Item>
    </Menu>
  </>
  )
  const AdminDes = () => (
    <Descriptions title="管理员信息" bordered>
      <Descriptions.Item label="昵称">{ data.user.name }</Descriptions.Item>
      <Descriptions.Item label="邮箱">{ data.user.email }</Descriptions.Item>
      <Descriptions.Item label="角色">管理员</Descriptions.Item>
    </Descriptions>
  )
  
function Admindashboard() {
  
  return (
    <Layout title="管理员" subTitle="管理员权限">
      <Row>
        <Col span={4}>{MenuNav()}</Col>
        <Col span={20}>{AdminDes()}</Col>
      </Row>
    </Layout>
  )
}

export default Admindashboard
