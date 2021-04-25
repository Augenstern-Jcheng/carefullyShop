import { Button, Menu, message } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isAuth } from './login/isAuth'

function Navigation() {
  const data = isAuth()
  const history = useHistory()
  // console.log(data)
  const router = useSelector(state => state.router)
  // console.log(router)
  const showAuth = () => (
    <>
      <Menu.Item key="/signin">
        <Link to="/signin">登录</Link>
      </Menu.Item>
      <Menu.Item key="/signup">
        <Link to="/signup">注册</Link>
      </Menu.Item>
    </>
  )

  const onLogin = () => {
    history.push("/signin")
    window.localStorage.removeItem('user')
    message.success('退出成功')
  }

  const showDashboard = () => {
    const url = data.data.user.role === 0 ? '/user' : '/admin'
    return (
      <>
        <Menu.Item key={`${url}/dashboard`}>
          <Link to={`${url}/dashboard`}>Dashboard</Link>
        </Menu.Item>
        <Menu.Item>
          <Button type="text" onClick={onLogin}>登出</Button>
        </Menu.Item>
      </>
    )
  }
  return (
    <Menu mode="horizontal" selectedKeys={[router.location.pathname]}>
      <Menu.Item key="/">
        <Link to="/">首页</Link>
      </Menu.Item>
      <Menu.Item key="/shop">
        <Link to="/shop">商场</Link>
      </Menu.Item>
      <Menu.Item key="/cart">
        <Link to="/cart">购物车</Link>
      </Menu.Item>
      {data ? showDashboard() : showAuth()}
    </Menu>
  )
}

export default Navigation
