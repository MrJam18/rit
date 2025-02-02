import React from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function MyInput(props) {
    const name = props.name;
    const label = props.label;
    if(props.children) {
        return (
            <div className={'my-input-group'}>
                {props.children}
                <div className={'text-danger input__validation-error d-none'}></div>
            </div>
        )
    }
    return (
        <div className={'my-input-group'}>
            <InputGroup size="sm">
                <InputGroup.Text   id={name}>{label}</InputGroup.Text>
                <Form.Control
                    className={'form__input' + props.className}
                    {...props}
                    aria-describedby={name}
                />
            </InputGroup>
            <div className={'text-danger input__validation-error ml-1 d-none'}></div>
        </div>
    );
}

export default MyInput;