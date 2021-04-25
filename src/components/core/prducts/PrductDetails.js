import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { getDetails } from '../../../Store/actions/details';
import Layout from '../layout'
import ProductItem from '../productItem'

function ProductDetails() {
  const { productId } = useParams()
  const product = useSelector(state => state.details)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDetails(productId))
  }, [])
  return (
    <Layout title="商品详情" subTitle={product.name}>
      <Row>
        <Col span="18">
          {
            product._id ?  
              <ProductItem 
                product={product} 
                imgStyle={{ width: "50%", margin: "0 auto" }}
                showView={false}/> 
              : 
              <></>
          }
        </Col>
        <Col span="6"></Col>
      </Row>
    </Layout>
  )
}

export default ProductDetails
