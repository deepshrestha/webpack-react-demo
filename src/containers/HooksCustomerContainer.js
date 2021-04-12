import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onFetchCustomerData } from './../actions/customerAction'
import { customerAPI } from './../api/customerAPI'
import CustomerList from './../components/customer/List'

const HooksCustomerContainer = () => {
    const data = useSelector(state => state)
    const dispatch = useDispatch()

    const onGetDataHandler = () => {
        customerAPI("http://localhost:3000/api/customerdata")
        .then(result => {
            dispatch(
                onFetchCustomerData(result)
            )
        })
        .catch(err => {
            alert(err)
        })
    }

    return (
       <CustomerList data={data} onGetDataHandler={onGetDataHandler} />
    )
}

export default HooksCustomerContainer