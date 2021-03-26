import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

const useFormValidator = (props) => {

    let history = useHistory();

    const [formState, setFormState] = useState(props);

    const emailPattern = RegExp(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );

    const formValid = function(errors) {

        //console.log("errors", errors)

        let valid = true;
    
        Object.values(errors).forEach(function(value){
            console.log(value)
            value.length > 0 && (valid = false);
        });
    
        return valid;
    }

    const onHandleSubmit = event => {
        event.preventDefault();

        if(formValid(formState.errors)){
            if(formState.email == 'admin@admin.com' && formState.password == "deep@123")
                history.push('/home')
        }
        else {
            alert("Login credentials are not matched");
        }        
    }
    
    const onHandleChange = event => {
        event.preventDefault();

        const {name, value, maxLength, minLength} = event.target;
        let errors = props.errors;

        switch(name){
            case 'email':
                errors.email = !emailPattern.test(value) ? 'Email is invalid!' : '';
                break;
            case 'password':
                errors.password = (value.length < minLength || value.length > maxLength )? `Password should be between ${minLength} and ${maxLength} characters` : '';
                break;
            default:
            break;
        }

        setFormState(
            {
                ...formState,
                errors,
                [name]: value
            }            
        );
    }

    return {
        onHandleChange,
        onHandleSubmit,
        formState
    }
}

export default useFormValidator;