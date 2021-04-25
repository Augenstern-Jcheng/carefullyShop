import { createStore, applyMiddleware } from 'redux'
import createRootReducers from './reducers'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import rootSaga from './sagas/rootSaga'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

export const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(createRootReducers(history), composeWithDevTools(
  applyMiddleware(routerMiddleware(history),sagaMiddleware)
  )
)


sagaMiddleware.run(rootSaga)
console.log(store);
export default store