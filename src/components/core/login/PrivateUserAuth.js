import { isAuth } from './isAuth'
import { Redirect, Route } from "react-router"

function PrivateUserAuth({component: Component, ...res}) {
  const { data }  = isAuth() || {}
  return (
    <Route
      {...res}
      render = {props => {
        // console.log(props)
        if (data && data.user)   return <Component {...props} />
        return <Redirect to="/signin" />
      }}
    >
      
    </Route>
  )
}

export default PrivateUserAuth
