import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Amount from "./Amount";
import MyInput from "./MyInput";

function CashBankAsset({item, provider}) {

    return (
        <>
            <MyInput defaultValue={item.bank_name} name='bank_name' label={'Название банка'} />
            <MyInput defaultValue={item.current_account} name='current_account' label={'Расчетный счет'} />
            <Amount provider={provider} item={item} />
        </>
    );
}

export default CashBankAsset;