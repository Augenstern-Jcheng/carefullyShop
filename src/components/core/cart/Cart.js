import { Col, Row, Form, Input, Typography, Button, Space, Divider } from 'antd'
import Layout from '../layout'
import { getItem } from '../../helper/cart'
import { useEffect, useState } from 'react'
import CartItem from './CartItem'
import { isAuth } from '../login/isAuth'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { API } from '../../../config'


const { Title } = Typography 

function Cart() {
  const [carts, setCarts] = useState([])
  const [totalPricre, setTotalPricre] = useState(0)
  const [address, setAddress] = useState("")
  console.log(isAuth());

  const handlePay = () => {
    axios.post(`${API}/alipay`, {
      totalAmount: totalPricre,
      subject: "测试订单",
      body: "测试订单描述",
      address: address,
      userId: isAuth().data.user._id,
      products: carts.map(item => ({product: item._id, count: item.count}))
    }).then(res => {
      window.location.href = res.data.result
    })
  }

  useEffect(() => {
    setCarts(getItem())
  }, [])

  useEffect(() => {
    let sum = carts.reduce((currentValue, nextValue) => {
      return currentValue += nextValue.count * nextValue.price
    }, 0).toFixed(2)
    setTotalPricre(sum)
  }, [carts])

  // button
  const showBtn = () => {
    return isAuth() ? <Button type="primary" danger onClick={handlePay}>购买</Button> : <Button type="primary"><Link to="/signin">去登陆</Link></Button>
  }
  // cartTable
  const cartTable = () => (
    <table style={{ width: "100%" }}>
      <thead className="ant-table-thead">
        <tr>
          <th className="ant-table-cell">商品封面</th>
          <th className="ant-table-cell">商品名称</th>
          <th className="ant-table-cell">商品价格</th>
          <th className="ant-table-cell">商品分类</th>
          <th className="ant-table-cell">商品数量</th>
          <th className="ant-table-cell">操作</th>
        </tr>
      </thead>
      <tbody className="ant-table-tbody">
        {
          carts.map(product => (
            <CartItem product={product} key={product._id} setCarts={setCarts} />
          ))
        }
      </tbody>
    </table>
  )
  return (
    <Layout title="购物车" subTitle="一键快捷支付">
      <Row>
        <Col span="18">
          {cartTable()}
        </Col>
        <Col span="4" push="2">
          <Space size="large" direction="vertical">
          <Form>
            <Form.Item label="收货地址">
              <Input
                value={address}
                placeholder="请输入收货地址"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Item>
          </Form>
          <Title level={5}>总价： {totalPricre}</Title>
          {showBtn()}
          </Space>
        </Col>
      </Row>
      <Divider  />
    </Layout>
  )
}

export default Cart
