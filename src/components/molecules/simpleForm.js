
import React from 'react';
import InputComponent from "../atoms/input";

const SimpleForm = () => {
    return (
        <React.Fragment>
            <InputComponent label="first name" name="first name" />
            <InputComponent label="last name" name="last name" />
        </React.Fragment>
    )
}

export default (SimpleForm);