import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { apiHandler } from "./../api/apiHandler";
import CustomerAdd from "../components/customer/CustomerAdd";

const AddCustomerContainer = () => {
  const history = useHistory();
  const [formState, setFormState] = useState([]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const formData = {
      ...formState,
      [name]: value,
    };

    setFormState(formData);
  };

  const onAddCustomerDataHandler = (event) => {
    event.preventDefault();
    apiHandler("http://localhost:3000/api/customerdata", "post", formState)
      .then((result) => {
        history.push("/customer/list")
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <CustomerAdd
      onAddCustomerDataHandler={onAddCustomerDataHandler}
      onChangeHandler={onChangeHandler}
    />
  );
};

export default AddCustomerContainer;
