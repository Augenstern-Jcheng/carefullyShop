import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import test from './test'
import siginReducers from './signup'
import productReducer from './product'
import searchReducer from './search'
import fliterReducer from './fliter'
import detailsReducer from './details'

const createRootReducers = history => combineReducers({
  test,
  signup: siginReducers,
  product: productReducer,
  search: searchReducer,
  filter: fliterReducer,
  details: detailsReducer,
  router: connectRouter(history)
}) 

export default createRootReducers