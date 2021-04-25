import { Col, Descriptions, Divider, Menu, Row, Typography } from 'antd'
import { Link } from 'react-router-dom'
import Layout from '../layout'
import {
  ShoppingTwoTone,
  SettingTwoTone
} from '@ant-design/icons';
import { isAuth } from '../login/isAuth';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API } from '../../../config'

const { Title } = Typography
function Userdashboard() {

  const { data: {token ,user} } = isAuth()
  const [payHistory, setPayHistory] = useState([])
  console.log(payHistory.length)

  const getUserPay = async () => {
    const { data } = await axios.get(`${API}/orders/by/user/${user._id}`,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    setPayHistory(data)
  }

  useEffect(() => {
    getUserPay()
  }, [])

  // 用户导航
  const useDis = () => (
    <>
      <Title level={5}>用户导航</Title>
      <Menu>
        <Menu.Item>
        <ShoppingTwoTone />
          <Link to="/cart">购物车</Link>
        </Menu.Item>
        <Menu.Item>
        <SettingTwoTone />
          <Link to="/user/info">资料更新</Link>
        </Menu.Item>
      </Menu>
    </>
  )
  // 用户信息展示
  const userInfo = () => (
    <>
      <Descriptions title={`用户ID：${user._id}`} bordered>
        <Descriptions.Item label="昵称">{user.name}</Descriptions.Item>
        <Descriptions.Item label="邮箱">{user.email}</Descriptions.Item>
        <Descriptions.Item label="角色">普通用户</Descriptions.Item>
      </Descriptions>
    </>
  )
  // 购买历史
  const showPayHistory = () => (
    <>
      <Title level={5}>购买历史</Title>
      <Row>
        {
          payHistory.length === 0 ? <>没有购买记录：你真的好拮据哦！！！光看不买</> : 
           ( 
             <>
                {
                  payHistory.map(item => (
                    <>
                    {
                      item.products.map(pro => (
                        <>
                          <Col span="18">名称：{pro.product.name}</Col>
                          <Col span="6">价格：{pro.product.price}</Col>
                        </>
                      ))
                    }
                    </>
                  ))
                }
             </>
           )
        }
      </Row>
    </>
  )
  return (
    <Layout title="user"  subTitle="用户详情页面">
      <Row>
        <Col span={4}>
          {useDis()}
        </Col>
        <Col span={20}>
          {userInfo()}
          <Divider />
          {showPayHistory()}
        </Col>
      </Row>
    </Layout>
  )
}

export default Userdashboard
