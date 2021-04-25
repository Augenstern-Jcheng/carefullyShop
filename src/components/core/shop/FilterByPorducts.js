import { Typography, List, Checkbox } from 'antd'
import GetCategorty from '../../helper/categorty'

const { Title } = Typography

function FilterByporducts(props) {
  const categotios = GetCategorty()
  const onchange = checkedValue => {
    props.setFilter(checkedValue)
  }
  return (
    <>
      <Title level={5}>按分类筛选</Title>
      <Checkbox.Group onChange={onchange}>
        <List
          dataSource={categotios}
          renderItem={ item => (
            <List.Item>
              <Checkbox value={item._id}>{ item.name }</Checkbox>
            </List.Item>
          )}
        />
      </Checkbox.Group>
    </>
  )
}

export default FilterByporducts
