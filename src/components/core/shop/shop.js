import { Col, Row, Space, Button, Empty, Divider } from 'antd'
import React, { useEffect, useState } from 'react'
import Layout from '../layout'
import FilterByporducts from './FilterByPorducts'
import FilterByPrice from './FilterByPrice'
import ProductItem from '../productItem'
import { useDispatch, useSelector } from 'react-redux'
import { filter_products } from '../../../Store/actions/filter'

function Shop() {
  const [ fliters, setFilters ] = useState({category: [], price: [] })
  const [ skip, setSkip ] = useState(0)
  const dispatch = useDispatch()
  const { size, data: product } = useSelector(state => state.filter)

  useEffect(() => {
    dispatch(filter_products({ fliters, skip }))
  }, [fliters, skip])

  // 每次重新筛选 重置skip
  useEffect(() => {
    setSkip(0)
  }, [fliters])

  // 加载更多
  const loadMore = () => {
    setSkip(skip + 4)
  }
  return (
      <Layout title="商场" subTitle="你想要的，我全都有！！！">
        <Row>
          <Col span="4">
            <Space direction="vertical" size="middle">
              <FilterByporducts setFilter={ filter => {
                setFilters({
                  ...fliters,
                  category: filter,
                })
              }} />
              <FilterByPrice setFilter={ filter => {
                setFilters({
                  ...fliters,
                  price: filter,
                })
              }} />
            </Space>
          </Col>
          <Col span="20">
            <Space direction="vertical" size="large">
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="space-around">
                {
                  product.map( product => (
                    <Col span={6} key={product._id}>
                      <ProductItem product={product}/>
                    </Col>
                  ))
                }
              </Row>
              <Row justify="center">
                {
                  size < 4 ? <Empty /> : <Button type="primary" onClick={loadMore}>加载更多</Button>
                }
              <Divider />
              </Row>
            </Space>
          </Col>
        </Row>
      </Layout>
  )
}

export default Shop
