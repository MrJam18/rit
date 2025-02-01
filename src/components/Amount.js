import React from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Currency from "./Currency";

function Amount({item, provider, label = 'Сумма актива'}) {
    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text value={item.amount} id="amount">{label}</InputGroup.Text>
                <Form.Control
                    type='number'
                    name='amount'
                    aria-describedby="amount"
                />
            </InputGroup>
            <Currency provider={provider} currencyId={item.currency_id} />
        </>
    );
}

export default Amount;