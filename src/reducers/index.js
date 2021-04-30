import { combineReducers } from 'redux'
import customerReducer from './customer'
import productReducer from './product'

const rootReducer = combineReducers(
    {
        customer: customerReducer,
        product: productReducer
    }
)

export default rootReducer
