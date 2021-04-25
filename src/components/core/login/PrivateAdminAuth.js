import { isAuth } from './isAuth'
import { Redirect, Route } from "react-router"

function PrivateAdminAuth({component: Component, ...res}) {
  const { data }  = isAuth() || { }
  // console.log(data)
  return (
    <Route
      {...res}
      render = {props => {
        // console.log(props)
        if (data && data.user && data.user.role === 1)   return <Component {...props} />
        return <Redirect to="/signin" />
      }}
    >
      
    </Route>
  )
}

export default PrivateAdminAuth
