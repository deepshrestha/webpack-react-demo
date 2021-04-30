import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const CustomerList = ({
  count,
  customers,
  //onGetCustomerDataHandler,
  onDeleteCustomerDataHandler,
}) => {
  const history = useHistory();
  const [formState, setFormState] = useState([]);

  const onEditCustomerDataHandler = (id) => {
    history.push(`/customer/edit/${id}`);
  };

  const saveInlineEdit = () => {
    console.log("test");
  };

  const onEditInlineCustomerDataHandler = (obj) => {
    //console.log(obj.childNodes)
    obj.childNodes.forEach((childNode, index) => {
      let ele = "";
      if (index == 0) return false;
      else if (
        index == 4 &&
        childNode.firstChild.innerHTML === "Inline - Edit"
      ) {
        ele += `<button class="primary btn-info" onClick="${saveInlineEdit}">Save</button>`;
      } else ele += `<input type='text' value="${childNode.innerHTML}" />`;
      //console.log(ele)
      childNode.innerHTML = ele;
    });
  };
  return (
    <div className="content-wrapper">
      <span className="ml-2 h5">{count}</span>
      {/* <button className="primary btn-info float-right mr-5"
        onClick={onGetCustomerDataHandler}
      >
        Refresh Data
      </button> */}
      <>
        {customers && (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Customer ID</th>
                <th scope="col">Customer Name</th>
                <th scope="col">City</th>
                <th scope="col">Zone</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => {
                return (
                  <tr id={`tr_${customer.CustomerID}`} key={index}>
                    <td>{customer.CustomerID}</td>
                    <td>{customer.CustomerName}</td>
                    <td>{customer.City}</td>
                    <td>{customer.Zone}</td>
                    <td>
                      <button
                        className="primary btn-primary"
                        onClick={() =>
                          onEditInlineCustomerDataHandler(
                            document.getElementById("tr_" + customer.CustomerID)
                          )
                        }
                      >
                        Inline - Edit
                      </button>
                      &nbsp;
                      <button
                        className="primary btn-primary"
                        onClick={() =>
                          onEditCustomerDataHandler(customer.CustomerID)
                        }
                      >
                        Edit
                      </button>
                      &nbsp;
                      <button
                        className="primary btn-danger"
                        onClick={(e) =>
                          onDeleteCustomerDataHandler(e, customer.CustomerID)
                        }
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </>
    </div>
  );
};

export default CustomerList;
