import React, { useReducer } from 'react'
//import customerReducer from './../../reducers/customer'
import { onFetchCustomerData } from './../../actions/customerAction'

const CustomerList = (props) => {
    console.log(props)
    //const [state, dispatch] = useReducer(customerReducer, [])

    const onGetDataHandler = () => {
        fetch("http://www.json-generator.com/api/json/get/bRdBaLRuDC?indent=2")
        .then(response => {
            return response.json()
        })
        .then(result => {
            dispatch(
                onFetchCustomerData(result)
            )
        })
    }

    return (
        <div className="content-wrapper">
            This is customer list page.
            <button onClick={ onGetDataHandler }>Get Customer Data</button>

            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Customer ID</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">City</th>
                    <th scope="col">Zone</th>
                </tr>
                </thead>
                <tbody>
                    {
                        state.map((customer, index) => {
                            return(
                                <tr key={index}>
                                    <td>{customer.CustomerID}</td>
                                    <td>{customer.CustomerName}</td>
                                    <td>{customer.City}</td>
                                    <td>{customer.Zone}</td>
                                </tr>
                            )
                                               
                        })
                    }
                </tbody>
            </table>
            
        </div>
    )
}

export default CustomerList
