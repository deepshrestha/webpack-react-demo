import React, { useReducer } from 'react'

const CustomerList = ({data, onGetDataHandler}) => {   
    return (
        <div className="content-wrapper">
            This is customer list page.
            <button onClick={ onGetDataHandler }>Get Customer Data</button>
            <>
            {
                data &&
                (
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
                                data.map((customer, index) => {
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
                )
            }
            
            </>
        </div>
    )
}

export default CustomerList
