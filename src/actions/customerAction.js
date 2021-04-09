import { ADD_CUSTOMER, LIST_CUSTOMER } from './../constant'

export const onFetchCustomerData = (result) => (
    {
        type: LIST_CUSTOMER,
        payload: result
    }
)

/* const onFetchCustomerData = () => {
    return {
        type: LIST_CUSTOMER,
        payload: result
    }
} */
