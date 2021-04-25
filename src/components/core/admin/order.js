import axios from 'axios'
import Layout from '../layout'
import { API } from '../../../config'
import { isAuth } from '../login/isAuth'
import { useEffect, useState } from 'react'
import { Divider, Select, Typography } from 'antd'
import dateFormat from 'dateformat'

const { Title } = Typography

function Order() {
  const [orders, setOrders] = useState([])
  const { data : admin } = isAuth()
  const loadOrders = async () => {
    const { data } = await axios.get(`${API}/order/list/${admin.user._id}`, {
      headers: {
        Authorization: `Bearer ${admin.token}`
      }
    })
    setOrders(data)

  }
  console.log(orders,11111111);
  useEffect(() => {
    loadOrders()
  }, [])

  const handleStatus = (orderId) => (status) => {
    axios.put(`${API}/order/status/${admin.user._id}`, {orderId, status}, {
      headers: {
        Authorization: `Bearer ${admin.token}`
      }}).then(() => loadOrders())
  }

  const showStatus = status => {
    switch (status) {
      case "Unpaid":
        return "未付款"
      case "Paid":
        return "已付款"
      case "Shipped":
        return "运输中"
      case "Completed":
        return "已完成"
      case "Cancelled":
        return "已取消"
      default: 
        return ""
    }
  }

  return (
    <Layout title="订单列表">
      {
        orders.map(order => (
          <div key={order._id}>
            <Title level={5}>订单ID: {order._id}</Title>
            <table style={{ width: "100%" }}>
            <thead className="ant-table-thead">
              <tr>
                <th className="ant-table-cell">订单状态</th>
                <th className="ant-table-cell">订单号</th>
                <th className="ant-table-cell">总价</th>
                <th className="ant-table-cell">创建时间</th>
                <th className="ant-table-cell">邮寄地址</th>
                <th className="ant-table-cell">客户姓名</th>
              </tr>
            </thead>
            <tbody className="ant-table-tbody">
              <tr className="ant-table-row">
                <td className="ant-table-cell">
                  {showStatus(order.status)}
                  <Select
                    defaultValue={order.status}
                    onChange={handleStatus(order._id)}
                  >
                    <Select.Option value="Unpaid">未付款</Select.Option>
                    <Select.Option value="Paid">已付款</Select.Option>
                    <Select.Option value="Shipped">运输中</Select.Option>
                    <Select.Option value="Completed">已完成</Select.Option>
                    <Select.Option value="Cancelled">已取消</Select.Option>
                  </Select>
                </td>
                <td className="ant-table-cell">{order.trade_no}</td>
                <td className="ant-table-cell">{order.amount}</td>
                <td className="ant-table-cell">
                  {dateFormat(order.createdAt, "yyyy-mm-dd")}
                </td>
                <td className="ant-table-cell">{order.address}</td>
                {/* <td className="ant-table-cell">{order.user.name}</td> */}
              </tr>
            </tbody>
          </table>
          <table style={{ width: "100%" }}>
            <thead className="ant-table-thead">
              <tr>
                <th className="ant-table-cell">商品名称</th>
                <th className="ant-table-cell">商品价格</th>
                <th className="ant-table-cell">商品数量</th>
                <th className="ant-table-cell">商品ID</th>
              </tr>
            </thead>
            <tbody className="ant-table-tbody">
              {order.products.map(product => (
                <tr className="ant-table-row">
                  <td className="ant-table-cell">{product.product.name}</td>
                  <td className="ant-table-cell">{product.product.price}</td>
                  <td className="ant-table-cell">{product.count}</td>
                  <td className="ant-table-cell">{product.product._id}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Divider />
          </div>
        ))
      }
    </Layout>
  )
}

export default Order
