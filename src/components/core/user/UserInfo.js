import { Button, Divider, Empty } from "antd"
import Title from "antd/lib/typography/Title"
import { Link } from "react-router-dom"
import Layout from '../layout'
import img from '../../../assets/images/xx.jpg'


const UserInfo = () => {
  return (
    <Layout title="用户信息修改"  subTitle="我没做，不想做，我会做，但就是不想做，哎，就不做，哎，就是玩">
       <Empty
          style={{display: 'flex', flexWrap: "wrap", justifyContent:"center"}}
          image={img}
          imageStyle={{
            height: 500,
            width: 500
          }}
          description=""
        >
        </Empty>
        <div style={{display: 'flex', flexWrap: "wrap", justifyContent:"center"}}>
            <Title level={1}>
              哎，我就不做，哎，就是玩
            </Title>
            <Divider />
            <Button type="primary"><Link to="/">去首页</Link></Button>
        </div>
    </Layout>
  )
}

export default UserInfo
