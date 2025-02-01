import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Amount from "./Amount";
function CashCashBoxAsset({item, provider}) {

    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text value={item.bank_name} id="cashbox_name">Название кассы</InputGroup.Text>
                <Form.Control
                    name='cashbox_name'
                    aria-describedby="cashbox_name"
                />
            </InputGroup>
            <Amount item={item} provider={provider} />
        </>
    );
}

export default CashCashBoxAsset;