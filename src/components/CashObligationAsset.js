import React from 'react';
import Amount from "./Amount";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function CashObligationAsset({item, provider}) {
    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text value={item.basis_name} id="basis_name">Основание обязательства</InputGroup.Text>
                <Form.Control
                    type='text'
                    name='basis_name'
                    aria-describedby="basis_name"
                />
            </InputGroup>
            <Amount item={item} provider={provider} />
        </>
    );
}

export default CashObligationAsset;