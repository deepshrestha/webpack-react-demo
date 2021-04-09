import { ADD_CUSTOMER, LIST_CUSTOMER } from './../constant'

const listCustomerHandler = (payloadData) => {
    //console.log(payloadData)
    return payloadData
}

const customerReducer = (state, action) => {
    switch(action.type){
        case ADD_CUSTOMER:
            return addCustomerHandler()
        case LIST_CUSTOMER:
            return listCustomerHandler(action.payload)
        default:
            return state
    }
}

export default customerReducer