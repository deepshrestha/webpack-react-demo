import { useEffect, useState } from 'react'

export const useFormValidator = props => {

    const [formState, setFormState] = useState(props)

    const emailPattern = RegExp(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    )

    const formValid = errors => {
        let valid = true;
    
        Object.values(errors).forEach( value => {
            value.length > 0 && (valid = false); // short circuit condition
        });
    
        return valid;
    }

    const onHandleSubmit = (event) => {
        event.preventDefault()

        const { errors } = formState

        if(formValid(errors)){
            return true
        }
        else{
            return false
        }
    }

    const onHandleChange = (event) => {
        event.preventDefault();
        const {name, value, minLength} = event.target;
        const { errors } = formState

        switch(name){
            case 'email':
                errors.email = !emailPattern.test(value) ? 'Email is invalid!' : ''
                break;
            case 'password':
                errors.password = value.length < minLength ? `Password should be atleast ${minLength} characters` : ''
                break;
            default:
                break;
        }

        setFormState(
            {
                ...formState,
                [name]: value
            }
        )

    }

    return{
        onHandleSubmit,
        onHandleChange,
        formState
    }
}
