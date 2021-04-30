import React from "react";

const CustomerAdd = ({ count, onAddCustomerDataHandler, onChangeHandler }) => {
  return (
    <div className="content-wrapper">
      <>{count && <div>{count}</div>}</>
      <form className="row g-3 p-3" onSubmit={onAddCustomerDataHandler}>
        <div className="col-md-6">
          <label htmlFor="inputCustomerid" className="form-label">
            Customer ID
          </label>
          <input
            type="text"
            name="CustomerID"
            className="form-control"
            id="inputCustomerid"
            onChange={onChangeHandler}
          />
        </div>
        <div className="col-6">
          <label htmlFor="inputCustomername" className="form-label">
            Customer Name
          </label>
          <input
            type="text"
            name="CustomerName"
            className="form-control"
            id="inputCustomername"
            onChange={onChangeHandler}
          />
        </div>
        <div className="col-6">
          <label htmlFor="inputZone" className="form-label">
            Zone
          </label>
          <input
            type="text"
            name="Zone"
            className="form-control"
            id="inputZone"
            onChange={onChangeHandler}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input
            type="text"
            name="City"
            className="form-control"
            id="inputCity"
            onChange={onChangeHandler}
          />
        </div>
        <div className="col-12 p-2">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerAdd;
