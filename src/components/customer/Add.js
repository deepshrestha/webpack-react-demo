import React from 'react'

const CustomerAdd = ({onAddCustomerData}) => {
    return (
        <div className="content-wrapper">
            <form className="row g-3 p-3" onSubmit={onAddCustomerData}>
                <div className="col-md-6">
                <label htmlFor="inputCustomerid" className="form-label">Customer ID</label>
                <input type="text" className="form-control" id="inputCustomerid"/>
                </div>
                <div className="col-6">
                <label htmlFor="inputCustomername" className="form-label">Customer Name</label>
                <input type="text" className="form-control" id="inputCustomername"/>
                </div>
                <div className="col-6">
                <label htmlFor="inputZone" className="form-label">Zone</label>
                <input type="text" className="form-control" id="inputZone"/>
                </div>
                <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="col-12 p-2">
                <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default CustomerAdd
