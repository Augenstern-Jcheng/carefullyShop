import { Route, Switch } from 'react-router-dom'
import Home from './core/home'
import Shop from './core/shop/shop'
import Signin from './core/login/signin'
import Signup from './core/login/signup'
import Userdashboard from './core/user/userdashboard'
import Admindashboard from './core/admin/admindashboard'
import PrivateAdminAuth from './core/login/PrivateAdminAuth'
import PrivateUserAuth from './core/login/PrivateUserAuth'
import Category from './core/admin/category'
import Order from './core/admin/order'
import Product from './core/admin/product'
import ProductDetails from './core/prducts/PrductDetails'
import Cart from './core/cart/Cart'
import UserInfo from './core/user/UserInfo'

function Routes () {

  return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/product/:productId" component={ProductDetails} />
        <PrivateUserAuth path="/user/dashboard" component={Userdashboard} />
        <PrivateUserAuth path="/user/info" component={UserInfo} />
        <PrivateUserAuth path="/cart" component={Cart} />
        <PrivateAdminAuth path="/admin/dashboard" component={Admindashboard} />
        <PrivateAdminAuth path="/create/category" component={Category} />
        <PrivateAdminAuth path="/admin/order" component={Order} />
        <PrivateAdminAuth path="/create/product" component={Product} />
      </Switch>
  )
}


export default Routes