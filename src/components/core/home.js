import { Col, Divider, Row, Typography } from 'antd'
import React, { useEffect } from 'react'
import Layout from './layout'
import ProductItem from './productItem'
import Seach from './Seach'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../Store/actions/porduct'

function Home() {
  const dispatch = useDispatch()
  const products = useSelector(state => state.product)

  useEffect( () => {
    dispatch(getProduct({sortBy: 'sold', order: 'desc', limit: '4'}))
    dispatch(getProduct({sortBy: 'createdAt', order: 'desc', limit: '4'}))
  }, [dispatch])
  // 展示页
  const showProducts = () => {
    return (
    <>
      <Typography.Title style={{ marginTop: 10 }} level={5}>
          最新上架
        </Typography.Title>
        <Row gutter={[16, 16]}>
          {
            products.createdAt.map(product => (
              <Col span="6" key={product._id}>
              <ProductItem product={product} />
            </Col>
            ))
          }
        </Row>
        <Typography.Title style={{ marginTop: 10 }} level={5}>
          最受欢迎
        </Typography.Title>
        <Row gutter={[16, 16]}>
          {
            products.sold.map( product => (
              <Col span="6" key={product._id}>
                <ProductItem product={product} />
              </Col>
            ))
          }
      </Row>
    </>
    )
  }
  return (
    <Layout title="首页" subTitle="看一看，逛一逛喽，看一看，逛一逛喽">
      <Seach />
      <Divider />
      {showProducts()}
    </Layout>
  )
}

export default Home
