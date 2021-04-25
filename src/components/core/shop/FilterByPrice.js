import { Typography, List, Radio } from 'antd'
import prices from '../../helper/prices'

const { Title } = Typography
function FilterByPrice(props) {

  const onChange = event => {
    props.setFilter(event.target.value)
  }
  return (
    <>
      <Title level={5}>按价格筛选</Title>
      <Radio.Group onChange={onChange}>
        <List 
          dataSource={prices}
          renderItem={ item => (
            <List.Item>
              <Radio value={item.array}>{item.name}</Radio>
            </List.Item>
          ) }
        />
      </Radio.Group>
    </>
  )
}

export default FilterByPrice
