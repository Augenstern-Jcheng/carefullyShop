import { Button, Image, Input } from "antd"
import { useState } from "react"
import { API } from "../../../config"
import { updateItem, removeItem } from '../../helper/cart'

function CartItem({product, setCarts}) {
  const [count, setCount] = useState(product.count)
  // console.log(product);
  const handleChange = (event) => {
    // console.log(event.target.value);
    const count = parseInt(event.target.value)
    setCount(count)
    setCarts(updateItem(product._id, count))
  }
  return (
      <tr className="ant-table-row">
      <td className="ant-table-cell">
        <Image width={120} src={`${API}/product/photo/${product._id}`} />
      </td>
      <td className="ant-table-cell">{product.name}</td>
      <td className="ant-table-cell">{product.price}</td>
      <td className="ant-table-cell">{product.category.name}</td>
      <td className="ant-table-cell">
        <Input type="number" value={count} onChange={handleChange} />
      </td>
      <td className="ant-table-cell">
        <Button
          onClick={() => {setCarts(removeItem(product._id))}}
          danger
          type="primary"
        >
          删除
        </Button>
      </td>
    </tr>
  )
}

export default CartItem
