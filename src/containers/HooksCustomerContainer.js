import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onFetchCustomerData } from './../actions/customerAction'
import { apiHandler } from './../api/apiHandler'
import CustomerList from './../components/customer/List'
import CustomerAdd from './../components/customer/Add'

const HooksCustomerContainer = (props) => {

    const [component, setComponent] = useState('')
    const { match } = props

    const data = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        switch(match.path){
            case '/customer/add':                
                setComponent('add')
                break
            case '/customer/list':
                setComponent('list')
                break
        }
    }, [])

    const onGetDataHandler = (id) => {

        if(isNaN(id))
            id = ''
        
        apiHandler(`http://localhost:3000/api/customerdata/${id}`, 'get')
        .then(result => {
            dispatch(
                onFetchCustomerData(result)
            )
        })
        .catch(err => {
            alert(err)
        })
    }

    const onAddCustomerData = (event) => {
        event.preventDefault()
        apiHandler(`http://localhost:3000/api/customerdata`, 'post')
        .then(() => {
            return {
                success: "data has been inserted successfully"
            }
        })
        .catch(err => {
            alert(err)
        })
    }

    /* const onGetDataByIdHandler = (id) => {
        console.log(id)
        apiHandler(`http://localhost:3000/api/customerdata/${id}`)
        .then(result => {
            dispatch(
                onFetchCustomerData(result)
            )
        })
        .catch(err => {
            alert(err)
        })
    } */

    return (
        <>
        {
            (component === 'list') ?
            <CustomerList data={data} onGetDataHandler={onGetDataHandler} />
            :
            <CustomerAdd onAddCustomerData={onAddCustomerData}/>        
        }
        </>
    )
}

export default HooksCustomerContainer