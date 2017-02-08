import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./products').default, 
  cart: require('./cart').default,
  // admin: require('./admin').default,
  categories : require('./categories').default
})

export default rootReducer
