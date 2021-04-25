import { Button, Card, Col, message, Row, Typography } from "antd"
import dateformat from "dateformat"
import { Link } from "react-router-dom"
import { API } from '../../config'
import { addItem } from '../helper/cart'
import { push } from 'connected-react-router'
import { useDispatch } from "react-redux"

const { Paragraph } = Typography
function ProductItem({product, imgStyle, showView = true, showCart = true}) {
  const { name, description, price, sold, category, createdAt, _id } = product
  const dispatch = useDispatch()

  // 加入购物车
  const handleCart = () => {
    addItem(product, () => {
      // dispatch(push("/cart"))
      message.success("添加购物车成功，请前往购物车查看")
    })
  }

  // button
  const showButton = () => {
    const button = []
    if(showView) {button.push(<Button type="link"><Link to={`/product/${_id}`}>查看详情</Link></Button>)}
    if(showCart) {button.push(<Button type="link" onClick={handleCart}>加入购物车</Button>)}
    return button
  }
  return (
    <Card
    hoverable
    style={imgStyle ? {} : { width: 240 }}
    cover={<img alt="example" style={imgStyle ? imgStyle : {}} src={`${API}/product/photo/${_id}`} />}
    actions={showButton()}
  >
    <Paragraph ellipsis={{ row: 2 }} strong={true} >{name}</Paragraph>
    <Paragraph ellipsis={ showView ? { row: 2 } : false}>{description}</Paragraph>
    <Row>
      <Col span="12">
        价格:{price}
      </Col>
      <Col span="12">
        销量:{sold}
      </Col>
    </Row>
    <Row>
      <Col span="12">
      所属分类:{category.name}
      </Col>
      <Col span="12">
      上架时间:{dateformat(createdAt,'yyyy-mm-dd')}
      </Col>
    </Row>
  </Card>
  )
}

export default ProductItem
