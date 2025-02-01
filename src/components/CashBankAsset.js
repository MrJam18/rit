import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Amount from "./Amount";

function CashBankAsset({item, provider}) {

    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Text value={item.bank_name} id="bank_name">Название банка</InputGroup.Text>
                <Form.Control
                    name='bank_name'
                    aria-describedby="bank_name"
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text value={item.current_account} id="current_account">Расчетный счет</InputGroup.Text>
                <Form.Control
                    name='current_account'
                    aria-describedby="current_account"
                />
            </InputGroup>
            <Amount provider={provider} item={item} />
        </>
    );
}

export default CashBankAsset;