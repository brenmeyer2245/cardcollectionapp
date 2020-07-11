import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import baseReducer from './baseReducer'
const reducer = combineReducers({
  baseReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
)
const store = createStore(reducer, middleware)

export default store
